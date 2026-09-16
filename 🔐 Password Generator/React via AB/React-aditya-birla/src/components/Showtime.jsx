const shows = [
  { title: 'Romeo & Juliet', image: '/images/juliet.png', text: 'When Romeo of the Montagues locks eyes with Juliet of the Capulets, it is love at first sight .. and war at first breath.' },
  { title: 'Zen Katha', image: '/images/Zen.png', text: 'A fascinating story of Bodhidharma, a Prince from the ancient kingdom of Kanchi, who was the true founder of Zen and the Martial Arts.' },
];

function Showtime() {
  return (
    <section className="showtime" id="showtime">
      <h2 className="showtime-heading">Showtime</h2>
      <div className="showtime-cards">{shows.map((show) => <article className="showtime-card" key={show.title}><img className="showtime-image" src={show.image} alt={show.title} /><h3>{show.title}</h3><p>{show.text}</p><div className="showtime-buttons"><a className="more-info" href="#showtime">MORE INFO</a><a className="showtime-book" href="#contact">BOOK NOW</a></div></article>)}</div>
      <div className="showtime-view"><button className="showtime-arrow" type="button" aria-label="Previous">‹</button><a className="view-all" href="#showtime">VIEW ALL</a><button className="showtime-arrow" type="button" aria-label="Next">›</button></div>
    </section>
  );
}

export default Showtime;
