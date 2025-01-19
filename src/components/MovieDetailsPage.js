import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieSearch from './MovieSearch';
import './LandingPage.css';

const LandingPage = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleGetStarted = () => {
    setShowSearch(true);
  };

  return (
    <div className="landing-page">
      <Header />
      <main className="landing-main">
        {!showSearch ? (
          <section className="intro">
            <h1>Welcome to Movie Watchlist</h1>
            <p>Track and manage your favorite movies effortlessly</p>
            <button onClick={handleGetStarted} className="landing-button">Get Started</button>
          </section>
        ) : (
          <MovieSearch />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
