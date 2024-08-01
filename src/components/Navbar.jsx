// src/components/Navbar.js
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="flex items-center justify-between p-4 text-white bg-gray-800">
            <div>
                <Link to="/" className="mr-4 text-white">Home</Link>
                <Link to="/quiz" className="mr-4 text-white">Quiz</Link>
            </div>
            {user ? (
                <div className="flex items-center space-x-4">
                    <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    <span>{user.name}</span>
                    <button onClick={logout} className="p-2 bg-blue-500 rounded hover:bg-blue-700">Logout</button>
                </div>
            ) : (
                <div className="space-x-4">
                    <Link to="/login" className="text-white">Login</Link>
                    <Link to="/register" className="text-white">Register</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
