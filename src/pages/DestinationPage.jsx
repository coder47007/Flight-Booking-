import { useParams, Link } from 'react-router-dom';
import { getDestinationById, destinations } from '../data/destinations';

function DestinationPage() {
    const { id } = useParams();
    const destination = getDestinationById(id);

    if (!destination) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Destination Not Found</h1>
                <Link to="/destinations" className="btn btn-primary">View All Destinations</Link>
            </div>
        );
    }

    const AFFILIATE_MARKER = '690795';
    const searchUrl = `https://www.aviasales.com/search/NYC1501${destination.code}1?marker=${AFFILIATE_MARKER}`;

    return (
        <div className="destination-detail-page">
            {/* Hero */}
            <header
                className="dest-detail-hero"
                style={{ backgroundImage: `url(${destination.heroImage})` }}
            >
                <div className="hero-overlay">
                    <div className="container">
                        <span className="dest-emoji-hero">{destination.emoji}</span>
                        <h1>Flights to {destination.city}</h1>
                        <p>{destination.country}</p>
                        <a
                            href={searchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-accent btn-lg"
                        >
                            🔍 Search Flights to {destination.city}
                        </a>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="dest-layout">
                    {/* Main Content */}
                    <div className="dest-main">
                        {/* Quick Facts */}
                        <section className="dest-section">
                            <h2>Quick Facts</h2>
                            <div className="quick-facts">
                                <div className="fact">
                                    <span className="fact-icon">✈️</span>
                                    <span className="fact-label">Airport Code</span>
                                    <span className="fact-value">{destination.code}</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-icon">⏱️</span>
                                    <span className="fact-label">Flight Time</span>
                                    <span className="fact-value">{destination.flightTime}</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-icon">📅</span>
                                    <span className="fact-label">Best Time</span>
                                    <span className="fact-value">{destination.bestTime}</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-icon">💰</span>
                                    <span className="fact-label">Avg. Price</span>
                                    <span className="fact-value">{destination.avgFlightPrice}</span>
                                </div>
                            </div>
                        </section>

                        {/* About */}
                        <section className="dest-section">
                            <h2>About {destination.city}</h2>
                            <p className="dest-description">{destination.description}</p>
                        </section>

                        {/* Highlights */}
                        <section className="dest-section">
                            <h2>Top Things to Do in {destination.city}</h2>
                            <ul className="highlights-list">
                                {destination.highlights.map((highlight, index) => (
                                    <li key={index}>
                                        <span className="highlight-number">{index + 1}</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Travel Tips */}
                        <section className="dest-section">
                            <h2>Travel Tips for {destination.city}</h2>
                            <ul className="tips-list">
                                {destination.tips.map((tip, index) => (
                                    <li key={index}>💡 {tip}</li>
                                ))}
                            </ul>
                        </section>

                        {/* CTA */}
                        <section className="dest-cta">
                            <h2>Ready to Visit {destination.city}?</h2>
                            <p>Compare prices from 500+ airlines and find the cheapest flights.</p>
                            <a
                                href={searchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Search Flights to {destination.city} →
                            </a>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="dest-sidebar">
                        <div className="sidebar-widget">
                            <h3>🔍 Quick Search</h3>
                            <a
                                href={searchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-accent"
                                style={{ width: '100%' }}
                            >
                                Find Flights to {destination.city}
                            </a>
                        </div>

                        <div className="sidebar-widget">
                            <h3>🌍 Nearby Destinations</h3>
                            <ul className="nearby-list">
                                {destination.nearbyDestinations.map(nearby => {
                                    const nearbyDest = destinations.find(d => d.city === nearby);
                                    return (
                                        <li key={nearby}>
                                            {nearbyDest ? (
                                                <Link to={`/destinations/${nearbyDest.id}`}>
                                                    {nearbyDest.emoji} {nearby}
                                                </Link>
                                            ) : (
                                                <span>{nearby}</span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                            <h3>📚 Travel Guides</h3>
                            <ul className="guide-links">
                                <li><Link to="/blog">Read Our Travel Blog</Link></li>
                                <li><Link to="/blog/best-time-to-book-international-flights">When to Book Flights</Link></li>
                                <li><Link to="/blog/top-10-budget-airlines-for-cheap-travel">Budget Airlines Guide</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default DestinationPage;
