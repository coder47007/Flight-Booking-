import { useState } from 'react';
import { destinations } from '../data/destinations';

function Destinations() {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Europe', 'Asia', 'North America', 'South America', 'Africa', 'Oceania', 'Middle East'];

    const filteredDestinations = activeTab === 'All'
        ? destinations
        : destinations.filter(dest => dest.continent === activeTab);

    const handleItemClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="gallery-page">
            {/* Hero */}
            <section className="gallery-hero">
                <div className="container">
                    <h1>Explore the World</h1>
                    <p>Discover 50+ top destinations and find the cheapest flights for your next adventure.</p>
                </div>
            </section>

            <div className="container">
                {/* Tabs */}
                <div className="gallery-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Destinations Grid */}
                <div className="destinations-grid">
                    {filteredDestinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            className="destinations-item"
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => handleItemClick(dest.url)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleItemClick(dest.url)}
                        >
                            <img
                                src={dest.image}
                                alt={`Flights to ${dest.city}`}
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a1042759?auto=format&fit=crop&w=800&q=80';
                                    console.error('Image failed to load:', dest.city, dest.image);
                                }}
                            />
                            <div className="gallery-item-overlay">
                                <h3>{dest.city}</h3>
                                <p>{dest.country}</p>
                                <span className="gallery-category">{dest.code}</span>
                                <span className="click-hint">From {dest.avgFlightPrice} →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SEO Content */}
                <section className="seo-content">
                    <h2>Cheap Flights to {activeTab === 'All' ? 'Everywhere' : activeTab}</h2>
                    <p>
                        Compare flight prices to {activeTab === 'All' ? 'top destinations around the world' : `popular cities in ${activeTab}`}.
                        SkyStay connects you with over 500 airlines to find the lowest fares to {filteredDestinations.slice(0, 3).map(d => d.city).join(', ')} and more.
                        Click any destination to instantly see flight deals.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Destinations;
