import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="mt-4 grow flex items-center justify-center">
        <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="John Doe" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Have an account? <Link to={'/login'}className="underline">Login</Link>
                </div>
            </form>
        </div>
    </div>
    );
};