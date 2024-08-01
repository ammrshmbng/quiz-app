// src/components/Register.js
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, email, password, avatar: 'https://via.placeholder.com/30' };
        localStorage.setItem(email, JSON.stringify(user));
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 mb-4 border border-gray-300 rounded w-72"
                required
            />
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
                Register
            </button>
        </form>
    );
};

export default Register;
