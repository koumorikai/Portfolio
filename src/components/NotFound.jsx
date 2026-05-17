import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="portfolio-site not-found-page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">♱</span> markelxvv
        </div>
        <div className="nav-links">
          <button onClick={() => navigate('/')}>GO HOME</button>
        </div>
      </nav>

      <div className="main-content center-content">
        <div className="error-window">
          <div className="error-text-block">
            <h1 className="error-code">404 ERROR</h1>
            <h2 className="error-title">
              PAGE NOT <br />
              <span className="about-light-text">FOUND.</span>
            </h2>
            <p className="error-subtitle">THE REQUESTED URL DOES NOT EXIST ON THIS SERVER</p>
            <button className="form-submit-btn error-btn" onClick={() => navigate('/')}>
              RETURN TO SAFETY <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <div className="counter-section">
          <span className="number">404</span>
          <div className="line"></div>
        </div>
        <div className="scroll-down">
          LOST IN SPACE <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;