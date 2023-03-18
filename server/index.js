const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');

const bcryptKey = bcrypt.genSaltSync(10);
const jwtSecret = 'hkdajadhjdaghdjgaf641727';

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

// server side JSON parser
app.use(express.json());

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const createdUser = await User.create({
            name, 
            email,
            password: bcrypt.hashSync(password, bcryptKey),
        });
    
        res.json(createdUser);
    }catch(err) {
        res.status(422).json(err);
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const foundUser = await User.findOne({email});
    if(foundUser) {
        const passMatch = bcrypt.compareSync(password, foundUser.password);
        if(passMatch) {
            jwt.sign({email: foundUser.email, id: foundUser._id}, jwtSecret, {}, (err, token) => {
                if(err) {
                    throw err;
                }
                res.cookie('token', token).json('valid password');
            });
        }else {
            res.status(422).json('wrong password');
        }
    }else {
        res.json('not found');
    }
})

app.listen(4000);