// src/components/NotFound.js
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-4xl text-gray-800">404 - Page Not Found</h1>
            <p className="mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="p-2 mt-8 text-white bg-blue-500 rounded hover:bg-blue-700">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
