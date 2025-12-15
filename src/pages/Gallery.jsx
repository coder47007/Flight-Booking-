import { useState } from 'react';
import { Link } from 'react-router-dom';
import { travelGallery } from '../data/gallery';

function Gallery() {
    const [activeTab, setActiveTab] = useState('destinations');

    const tabs = [
        { id: 'destinations', label: '🌍 Dream Destinations', data: travelGallery.destinations },
        { id: 'hotels', label: '🏨 Luxury Hotels', data: travelGallery.luxuryHotels },
        { id: 'experiences', label: '✨ Experiences', data: travelGallery.experiences },
        { id: 'cars', label: '🚗 Luxury Cars', data: travelGallery.luxuryCars }
    ];

    const currentTab = tabs.find(t => t.id === activeTab);

    const handleItemClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="gallery-page">
            {/* Hero */}
            <section className="gallery-hero">
                <div className="container">
                    <h1>Travel Inspiration Gallery</h1>
                    <p>Click any image to search for deals - flights, hotels, and luxury car rentals</p>
                </div>
            </section>

            <div className="container">
                {/* Tabs */}
                <div className="gallery-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`gallery-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {currentTab?.data.map((item, index) => (
                        <div
                            key={item.id}
                            className="gallery-item clickable"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => handleItemClick(item.url)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleItemClick(item.url)}
                        >
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.location || item.description || item.type}</p>
                                {item.category && <span className="gallery-category">{item.category}</span>}
                                <span className="click-hint">Click to search deals →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <section className="gallery-cta">
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Search flights and hotels to these amazing destinations</p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        Search Flights & Hotels →
                    </Link>
                </section>

                {/* SEO Content */}
                <section className="seo-content">
                    <h2>Find Inspiration for Your Next Trip</h2>
                    <p>
                        Explore our curated collection of stunning travel destinations, world-class luxury hotels,
                        and once-in-a-lifetime experiences. Click on any image to instantly search for the best
                        deals on flights, hotels, or luxury car rentals. From the crystal-clear waters of Bora Bora
                        to the majestic Northern Lights of Iceland, your dream vacation is just a click away.
                    </p>
                    <p>
                        Looking for luxury accommodation? Browse our selection of premium hotels, from the iconic
                        Burj Al Arab in Dubai to overwater bungalows in the Maldives. Click to compare prices from
                        hundreds of booking sites and find the best deals.
                    </p>
                    <h3>Popular Travel Categories</h3>
                    <ul>
                        <li><strong>Beach Destinations</strong> - Tropical islands, coastal resorts, and pristine beaches</li>
                        <li><strong>Adventure Travel</strong> - Safaris, mountain expeditions, and extreme sports</li>
                        <li><strong>Luxury Escapes</strong> - Five-star hotels, private villas, and exclusive experiences</li>
                        <li><strong>Exotic Car Rentals</strong> - Drive Lamborghinis, Ferraris, and more on vacation</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Gallery;
