import React from "react";
import './Loading.css';
import loadingGhosts from '../../assets/DEDLoading.mp4';

const Loading = () => {
  return (
    <section>
      <video autoPlay muted loop preload='auto' className='loading-ghost'>
        <source src={ loadingGhosts } type='video/mp4' />
      </video>
    </section>
  );
};

export default Loading;