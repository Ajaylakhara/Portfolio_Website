import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
