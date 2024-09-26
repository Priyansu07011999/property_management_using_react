import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import checkoutimg from '../assets/checkoutimg.avif'

const Checkout = () => {
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(location.state?.totalAmount || 0); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '', 
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Completed');
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
    setTotalAmount(0);
  };

  return (
    <>
    <div style={{
            backgroundImage: `url(${checkoutimg})`,
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <Typography variant="h4" sx={{
              position: 'absolute',
              top: '25%',
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: { xs: '32px', sm: '36px', md: '48px' },
            }}
          >
            Checkout
          </Typography>
          <Typography variant='h5' sx={{position :'absolute', top: '65%', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '18px', sm: '24px', md: '36px' },}}>
            Total Amount: ₹{totalAmount.toLocaleString()}
          </Typography>
    </div>
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-black text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-white">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-white">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-white">Phone:</label>
          <input
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-white">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold mt-4">Payment Information</h3>
        <div>
          <label className="block text-sm font-medium text-white">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">Expiry Date:</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-white">CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Complete Purchase
        </button>
      </form>
    </div>
    </>
  );
};

export default Checkout;
