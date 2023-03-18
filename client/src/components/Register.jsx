import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onUserRegister(e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration successful.');
        }catch(err) {
            alert('Registration failed.');
        }

    }

    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={onUserRegister}>
                    <input type="text" 
                            placeholder="John Doe" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" 
                            placeholder="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                    />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Have an account? <Link to={'/login'} className="underline">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};