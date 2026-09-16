const rooms = ['ADITYA BIRLA AUDITORIUM', 'MINI THEATRE', 'STUDIO ROOM', 'REHEARSAL STUDIO', 'AUDIO RECORDING STUDIO'];
function SpaceDirectory() { return <section className="space-directory"><div className="directory-grid">{rooms.map((room, index) => <a className={`directory-card ${index === 0 ? 'directory-card-active' : ''}`} href="#spaces" key={room}><span className="directory-icon">✦</span><strong>{room}</strong><span className="directory-link">Book Now</span></a>)}</div></section>; }
export default SpaceDirectory;
