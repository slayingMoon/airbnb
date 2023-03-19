import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../auth/UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    const onHandleLogin = async (e) => {
        e.preventDefault();

        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            setUser(data);
            // alert('Login successful');
            setRedirect(true);
        }catch(err) {
            alert('Login failed.');
        }

    };

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={onHandleLogin}>
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
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account? <Link to={'/register'}className="underline">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};