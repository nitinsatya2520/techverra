import React from 'react';
import './Loader.css';
import loaderVideo from '../assets/logo loading.mp4'
const Loader = () => (
  <div className="video-loader-container">
    <video autoPlay muted playsInline className="video-loader" onEnded={() => null}>
      <source src={loaderVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Loader;
