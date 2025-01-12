import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-green-500 text-white p-4">
  <div className="container mx-auto flex justify-between">
    <Link to="/" className="text-xl font-bold hover:underline ">Smart Agriculture App</Link>
    <div className="space-x-4">
      <Link to="/signup" className="hover:underline">
        Signin
      </Link>
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
      <Link to="/payment" className="hover:underline">
        Subscribe
      </Link>
    </div>
  </div>
</nav>
);

export default Navbar;
