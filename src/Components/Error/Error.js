import React from 'react';
import './Error.css';
import error from '../../assets/error-message.png';

const Error = () => {
  return (
    <section className='error'>
      <img src={ error } data-cy='error-image' alt="Error message" />
    </section>
  );
};

export default Error;