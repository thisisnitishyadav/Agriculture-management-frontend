import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

const Navbar = () => {
  const { auth } = useAuth(); 
  return (
    <nav className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        {/* App Logo */}
        <Link to="/" className="text-xl font-bold hover:underline">
          Smart Agriculture App
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          {auth.isAuthenticated ? (
            <>
              <span className="hover:underline cursor-default">
                Hi, {auth.name}
              </span>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/payment" className="hover:underline">
                Subscribe
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/payment" className="hover:underline">
                Subscribe
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
