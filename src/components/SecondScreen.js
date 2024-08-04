import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SecondScreen = () => {
  const products = useSelector(state => state.products.products);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, products })
    });
    if (response.ok) {
      alert('הזמנה אושרה בהצלחה!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>שם פרטי:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>שם משפחה:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>כתובת מלאה:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>מייל:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <h3>סיכום הזמנה:</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
      <button type="submit">אשר הזמנה</button>
    </form>
  );
};

export default SecondScreen;
