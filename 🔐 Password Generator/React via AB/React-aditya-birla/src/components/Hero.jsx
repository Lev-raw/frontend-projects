import React, { useRef, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video is properly muted and starts playing automatically
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented or pending interaction:', err);
      });
    }
  }, []);

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/Videos/stock-footage-slow-motion-portrait-of-three-expressive-young-indian-dancers-performing-folk-dance-choreography-in.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" />

      <button
        className="arrow-left"
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      <div className="hero-content">
        <h1>
          A Stage For Every Story
        </h1>

        <p>
          Where India's performing arts meet contemporary creation.
        </p>

        <a href="#about" className="btn-book">
          Know more
        </a>
      </div>

      <button
        className="arrow-right"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  );
}

export default Hero;