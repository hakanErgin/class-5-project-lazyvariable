import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';

// require('dotenv').config()

const CreateComponent = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = () => {
    axios
      .post(
        `${process.env.HEROKU_URI}/personal/add`,
        {
          city,
          country,
          phone,
        },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
        },
      )
      .then(e => {
        console.log(e);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleCityChange = e => {
    setCity(e.target.value);
  };
  const handleCountryChange = p => {
    setCountry(p.target.value);
  };

  const handlePhoneChange = p => {
    setPhone(p.target.value);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm();
        }}
      >
        <Input placeholder="input city" onChange={handleCityChange} value={city} />
        <Input placeholder="input country" onChange={handleCountryChange} value={country} />
        <Input placeholder="input phone" onChange={handlePhoneChange} value={phone} />

        <Button htmlType={'submit'}>Submit</Button>
      </form>
    </div>
  );
};
export default CreateComponent;
