import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';


function MainPortfolio() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`portfolio-site ${isLoaded ? 'fade-visible' : 'fade-hidden'}`}>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">♱</span> markelxvv
        </div>
        <div className="nav-links">
          <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>
            HOME
          </button>
          <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>
            ABOUT
          </button>
          <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
            CONTACT
          </button>
          <button onClick={() => navigate('/portfolio')}>PORTFOLIO</button>
        </div>
      </nav>

      <div className="main-content">
        <div className="visual-block">
          <div className="social-links">
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" title="TikTok">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M448,209.91a210.06,210.06,0,0,1-122-37.9V344.18c0,98.26-81.74,177.82-179.9,177.82C46.8,522,0,442.23,0,344.18c0-85.34,61.64-156.45,142.12-171.8V267c-38.3,10.63-66.12,45.83-66.12,87.6,0,51.85,42.52,93.93,95,93.93s95-42.08,95-93.93V0h86a111.41,111.41,0,0,0,67,58,112.59,112.59,0,0,0,49,8v142.33Z"></path>
              </svg>
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" title="Telegram">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 64.3c19.5-6.9 36.5 4.7 28.5 34.3z"></path>
              </svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5.7 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-.7zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2.3z"></path>
              </svg>
            </a>
          </div>
          
          <div className="avatar-blob">
            <img src="./yamori.png" className="avatar-img" alt="Avatar" />
          </div>
        </div>

        <div className="text-window">
          <div className={`text-slider ${activeTab}`}>
            
            <div className="slide-content hero-text">
              <h1 className="main-title">
                CREATIVE <br />
                <span className="light-text">DEVELOPER</span>
              </h1>
              <p className="subtitle">SENSIBLE TO FULLSTACK</p>
            </div>

            <div className="slide-content about-text">
              <h2 className="about-title">
                HI) I'M A <br />
                <span className="about-light-text">FULLSTACK</span> <br />
                DEVELOPER.
              </h2>
              <div className="about-grid">
                <div className="grid-row">
                  <span className="grid-label">PROFICIENT IN:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">[REACT]</span>
                    <span className="tech-tag">[RESPONSIVE WEB DESIGN]</span>
                  </div>
                </div>
                <div className="grid-row">
                  <span className="grid-label">BACKEND:</span>
                  <div className="tech-tags">
                    <span className="tech-tag">[PYTHON]</span>
                    <span className="tech-tag">[DJANGO]</span>
                    <span className="tech-tag">[FLASK]</span>
                  </div>
                </div>
                <p className="grid-footer-text">
                  WELL-VERSED IN BUILDING CRUD APPS AND ADMIN DASHBOARDS.
                </p>
              </div>
            </div>

            <div className="slide-content contact-text">
              <h2 className="contact-title">
                START A <br />
                <span className="about-light-text">PROJECT.</span>
              </h2>
              <form 
                className="rock-form" 
                action="https://formspree.io/f/mvggzlek" 
                method="POST"
              >
                <div className="form-group">
                  <input type="text" name="name" required placeholder="YOUR NAME" />
                </div>
                <div className="form-group">
                  <input type="email" name="_replyto" required placeholder="YOUR EMAIL" />
                </div>
                <div className="form-group">
                  <textarea name="message" required placeholder="TELL ME ABOUT PROJECT"></textarea>
                </div>
                
                <input type="hidden" name="_subject" value="New Portfolio Message!" />

                <button type="submit" className="form-submit-btn">
                  SEND EMAIL <span>→</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>

      <div className="hero-footer">
        <div className="counter-section">
          <span className="number">
            {activeTab === 'hero' && '01'}
            {activeTab === 'about' && '02'}
            {activeTab === 'contact' && '03'}
          </span>
          <div className="line"></div>
        </div>
        <div className="scroll-down">
        &copy; {new Date().getFullYear()} MARKELXVV. ALL RIGHTS RESERVED.
        </div>
      </div>

    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`portfolio-site not-found-page ${isLoaded ? 'fade-visible' : 'fade-hidden'}`}>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">❖</span> markelxvv
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

function App() {
  return (
        <HashRouter>
          <Routes>
            {/* Теперь при переходе на сайт будет открываться главная */}
            <Route path="/" element={<Home />} />
            
            {/* Ошибка 404 выскочит только если юзер введет бред в урл */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
  );
}

export default App;