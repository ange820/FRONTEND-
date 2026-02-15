import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Welcome my website ange😍charm😍</h1>
        <p>Discover amazing features and connect with our community</p>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Simple and intuitive interface for everyone</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Your data is protected with top security</p>
        </div>
        <div className="feature">
          <h3>Fast</h3>
          <p>Lightning-fast performance guaranteed</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
