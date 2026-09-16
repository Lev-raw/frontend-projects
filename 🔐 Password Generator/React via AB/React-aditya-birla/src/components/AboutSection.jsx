import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-poster" id="about">
      <div className="rajashree-section">
        <div className="rajashree-image">
          <div className="image-pink-bg" />
          <img src="/images/rajeshree.jpeg" alt="Smt. Rajashree Birla" />
        </div>
        <div className="rajashree-content">
          <div className="quote-mark">“</div>
          <p>At the heart of the Centre&apos;s journey is Smt. Rajashree Birla, Chairperson of the Aditya Birla Centre for Community Initiatives and Rural Development. Her leadership bridges philanthropy and culture, guided by a belief that service is not obligation but expression.</p>
          <p>Inspired by the Gandhian principle of trusteeship, she views art as a public trust, something to be protected, shared, and passed forward. Her commitment continues the vision of her late husband, Shri Aditya Vikram Birla, whose deep love for performing arts inspired generations of artists.</p>
          <p>Under her stewardship, INTABCAPA grows as a living heritage, a place where the roots of tradition and the bloom of innovation perform in perfect synchrony.</p>
          <div className="rajashree-name">
            <h2>Smt. Rajashree Birla</h2>
            <span>Founder &amp; Chairperson</span>
          </div>
        </div>
      </div>
      <div className="saga-section">
        <h2 className="saga-title">INTABCAPA SAGA</h2>
        <p className="saga-text">INTABCAPA (INT Aditya Birla Centre for Performing Arts) is a living cultural space where India&apos;s rich artistic heritage meets contemporary expression.</p>
        <p className="saga-text saga-text-second">Built on a legacy of patronage, the Centre brings together performance, learning, and community to create meaningful encounters with the arts.</p>
        <a className="saga-button" href="#legacy">KNOW MORE</a>
      </div>
    </section>
  );
}

export default AboutSection;
