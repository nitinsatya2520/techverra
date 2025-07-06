import React from 'react';
import loaderVideo from '../assets/logo loading.mp4'
const Loader = () => (
 <div className="flex justify-center items-center h-screen bg-black">
  <video
    autoPlay
    muted
    playsInline
    className="w-full max-w-md rounded-lg shadow-lg"
    onEnded={() => null}
  >
    <source src={loaderVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

);

export default Loader;
