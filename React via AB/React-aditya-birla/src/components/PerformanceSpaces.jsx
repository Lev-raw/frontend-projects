import { useState } from 'react';

const spaces = {
  stage: { image: '/images/performance-theatre.jpg', items: [['Aditya Birla Theatre', 'A world-class proscenium theatre crafted for drama, dance, and productions. Its design balances acoustics, sightlines, and comfort, giving both artist and audience an immersive experience.'], ['Mini Theatre', 'An intimate performance space for recitals, readings, and smaller showcases.']] },
  studio: { image: '/images/performance-studio.jpg', items: [['Rehearsal Studio', 'A professional practice space for ensembles, actors, and choreographers. These studios are designed for preparation and experimentation.'], ['Studios', 'A professional practice space for ensembles, actors, and choreographers.'], ['Audio Recording Studios', 'State-of-the-art studios equipped for high-quality sound production, dubbing, and post-production.']] },
};

function PerformanceSpaces() {
  const [active, setActive] = useState('stage');
  const current = spaces[active];
  return <section className="performance-spaces" id="spaces"><div className="performance-header"><h2>Performance Spaces</h2><div className="performance-tabs">{Object.keys(spaces).map((key) => <button className={active === key ? 'active' : ''} key={key} type="button" onClick={() => setActive(key)}>{key[0].toUpperCase() + key.slice(1)}</button>)}</div></div><div className="space-content"><div className="space-text">{current.items.map(([title, text], index) => <div className="space-item" key={title}><h3 className={index === 0 ? 'active' : ''}>{title}</h3><p>{text}</p>{index < current.items.length - 1 && <div className="space-divider" />}</div>)}</div><div className="space-image"><img src={current.image} alt={current.items[0][0]} /></div></div></section>;
}

export default PerformanceSpaces;
