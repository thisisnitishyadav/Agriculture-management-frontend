import React, { useState } from 'react';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ name, email, password });
      setAuth({ isAuthenticated: true, userId: response.userId });
      setMessage('Signup successful! Redirecting...');
      navigate('/dashboard');
    } catch (error) {
      setMessage('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email-id'
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Create password'
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Signup
        </button>
      </form>
      <div className='my-4'>
        Already have an account? <span className='text-blue-500 cursor-pointer underline'>
          <Link to='/login'>Login</Link>
        </span>
      </div>
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default Signup;
