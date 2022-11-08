import React from 'react';
import './Error.css';
import error from '../../assets/error-message.png';

const Error = () => {
  return (
    <section className='error'>
      <img src={ error } alt="Error message" />
    </section>
  );
};

export default Error;