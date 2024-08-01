// src/components/Login.js
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.password === password) {
            login(storedUser);
            navigate('/');
        } else {
            navigate('/register');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mb-4 border border-gray-300 rounded w-72"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 mb-4 border border-gray-300 rounded w-72"
                required
            />
            <button type="submit" className="w-32 p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
                Login
            </button>
        </form>
    );
};

export default Login;
