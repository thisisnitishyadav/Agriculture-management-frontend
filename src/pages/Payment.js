import React, { useState } from 'react';
import { processPayment } from '../api/payment';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    try {
      const response = await processPayment({ amount, currency });
      setMessage('Payment successful! Transaction ID: ' + response.transactionId);
    } catch (error) {
      setMessage('Payment failed: ' + error.message);
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center my-8">
      <h2 className="text-4xl font-bold mb-4">Subscribe now and become premium member</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block mb-2 p-2 border rounded"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="block mb-4 p-2 border rounded"
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-xl text-white px-4 py-2 rounded"
      >
        Continue with Premium
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Payment;
