import React from 'react';
import './Preloader.css'; // Перенесем стили сюда для порядка

const Preloader = ({ isVisible, counterValue }) => {
  if (!isVisible) return null;

  return (
    <div id="preloader">
      <div class="preloader-content">
        <div class="preloader-logo">markelxvv</div>
        <div class="loader-bar-wrapper">
          <div class="loader-bar"></div>
        </div>
        {counterValue !== null && (
          <div class="preloader-counter">{counterValue}</div>
        )}
      </div>
    </div>
  );
};

export default Preloader;