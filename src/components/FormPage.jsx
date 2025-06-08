import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const countries = ['India', 'USA', 'Canada','Australia','Germany','Japan'];
  const cities = {
    India: ['Delhi', 'Mumbai', 'Jaipur'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane'],
    Germany: ['Berlin', 'Munich', 'Frankfurt'],
    Japan: ['Tokyo', 'Osaka', 'Kyoto']

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    for (let key in formData) {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/result', { state: formData });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex max-w-5xl w-full rounded-3xl shadow-lg overflow-hidden">

        <div className="w-1/3 bg-gradient-to-br from-rose-500 to-rose-400 p-8 text-white relative flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <p className="text-sm opacity-90 text-center">To the zone of happiness.</p>

          <div className="absolute top-6 left-6 w-10 h-10 bg-white opacity-20 rounded-full blur-sm"></div>
          <div className="absolute top-28 left-20 w-24 h-24 bg-white opacity-20 rounded-full blur-sm"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white opacity-20 rounded-full blur-sm"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-2/3 bg-white p-10 space-y-5"
        >
          <h3 className="text-2xl font-semibold mb-4">Hello! Please tell us a little bit about yourself.</h3>

          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              Show Password
            </label>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="+91"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <div className="flex space-x-4">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none"
            >
              <option value="">Select City</option>
              {(cities[formData.country] || []).map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            value={formData.pan}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}

          <input
            type="text"
            name="aadhar"
            placeholder="Aadhar Number"
            value={formData.aadhar}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar}</p>}


          <div className="flex justify-between mt-6">
            <button
              type="button"onClick={() => navigate('/')}
            >
              
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-medium hover:opacity-90"
            >
              SUBMIT
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormPage;
