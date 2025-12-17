import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { travelGallery } from '../data/gallery';
import { useTrendingDestinations, formatLastUpdated } from '../hooks/useTrendingDestinations';
import FlightPriceComparison from '../components/FlightPriceComparison';
import HotelDealsSection from '../components/HotelDealsSection';
import PromoCards from '../components/PromoCards';

function Home() {
    const [searchType, setSearchType] = useState('flights');
    const [isSearching, setIsSearching] = useState(false);
    const [showComparison, setShowComparison] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        checkIn: '',
        checkOut: '',
        passengers: 1,
        rooms: 1
    });

    // Real-time trending destinations - auto-refreshes every 5 minutes
    const { trending, lastUpdated, refresh } = useTrendingDestinations(8, 5);

    const AFFILIATE_MARKER = '690795';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchType === 'flights' && (!formData.from || !formData.to)) {
            alert('Please enter both origin and destination');
            return;
        }
        if (searchType === 'hotels' && !formData.to) {
            alert('Please enter a destination');
            return;
        }
        if (!formData.checkIn) {
            alert('Please select a departure/check-in date');
            return;
        }

        setIsSearching(true);

        const formatDate = (dateStr) => {
            if (!dateStr) return '';
            const [year, month, day] = dateStr.split('-');
            return `${day}${month}`;
        };

        let searchUrl;
        if (searchType === 'flights') {
            const origin = formData.from?.toUpperCase() || '';
            const dest = formData.to?.toUpperCase() || '';
            const depDate = formatDate(formData.checkIn);

            if (origin.length === 3 && dest.length === 3) {
                searchUrl = `https://www.aviasales.com/search/${origin}${depDate}${dest}${formData.passengers}?marker=${AFFILIATE_MARKER}`;
            } else {
                const params = new URLSearchParams({
                    marker: AFFILIATE_MARKER,
                    origin_name: formData.from,
                    destination_name: formData.to,
                    depart_date: formData.checkIn,
                    adults: formData.passengers
                });
                searchUrl = `https://www.aviasales.com/?${params.toString()}`;
            }
        } else {
            const params = new URLSearchParams({
                marker: AFFILIATE_MARKER,
                destination: formData.to,
                checkIn: formData.checkIn,
                checkOut: formData.checkOut,
                rooms: formData.rooms
            });
            searchUrl = `https://search.hotellook.com/?${params.toString()}`;
        }

        window.open(searchUrl, '_blank', 'noopener,noreferrer');

        // Show comparison for flights
        if (searchType === 'flights') {
            setShowComparison(true);
        }

        setTimeout(() => setIsSearching(false), 1000);
    };

    const today = new Date().toISOString().split('T')[0];
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Floating Clouds - Pure CSS Animation */}
                <div className="floating-clouds">
                    <span className="cloud">☁️</span>
                    <span className="cloud">☁️</span>
                    <span className="cloud">☁️</span>
                    <span className="cloud">☁️</span>
                </div>

                {/* Flying Plane - Pure CSS Animation */}
                <div className="flying-plane-css">✈️</div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Find Your Perfect <span className="gradient-text">{searchType === 'flights' ? 'Flight' : 'Hotel'}</span>
                    </h1>
                    <p className="hero-subtitle">
                        Compare prices from 500+ airlines and 2M+ hotels. Book with confidence and save.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="search-bar animate-slideDown">
                    <div className="search-toggle">
                        <button
                            type="button"
                            className={`toggle-btn ${searchType === 'flights' ? 'active' : ''}`}
                            onClick={() => setSearchType('flights')}
                        >
                            ✈️ Flights
                        </button>
                        <button
                            type="button"
                            className={`toggle-btn ${searchType === 'hotels' ? 'active' : ''}`}
                            onClick={() => setSearchType('hotels')}
                        >
                            🏨 Hotels
                        </button>
                    </div>

                    <form onSubmit={handleSearch}>
                        <div className="search-inputs">
                            {searchType === 'flights' ? (
                                <>
                                    <div className="search-input-group">
                                        <label htmlFor="from">From (City or Airport)</label>
                                        <input
                                            type="text"
                                            id="from"
                                            name="from"
                                            placeholder="e.g. NYC or New York"
                                            value={formData.from}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="search-input-group">
                                        <label htmlFor="to">To (City or Airport)</label>
                                        <input
                                            type="text"
                                            id="to"
                                            name="to"
                                            placeholder="e.g. DXB or Dubai"
                                            value={formData.to}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="search-input-group" style={{ gridColumn: 'span 2' }}>
                                    <label htmlFor="to">Destination</label>
                                    <input
                                        type="text"
                                        id="to"
                                        name="to"
                                        placeholder="City name (e.g. Dubai, Paris)"
                                        value={formData.to}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}

                            <div className="search-input-group">
                                <label htmlFor="checkIn">{searchType === 'flights' ? 'Departure' : 'Check In'}</label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    name="checkIn"
                                    min={today}
                                    value={formData.checkIn}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="search-input-group">
                                <label htmlFor="checkOut">{searchType === 'flights' ? 'Return' : 'Check Out'}</label>
                                <input
                                    type="date"
                                    id="checkOut"
                                    name="checkOut"
                                    min={formData.checkIn || today}
                                    value={formData.checkOut}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="search-input-group">
                                <label htmlFor="passengers">{searchType === 'flights' ? 'Passengers' : 'Rooms'}</label>
                                <input
                                    type="number"
                                    id="passengers"
                                    name={searchType === 'flights' ? 'passengers' : 'rooms'}
                                    min="1"
                                    max="9"
                                    value={searchType === 'flights' ? formData.passengers : formData.rooms}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="search-actions">
                            <button type="submit" className="search-btn" disabled={isSearching}>
                                {isSearching ? '🔄 Searching...' : `🔍 Search ${searchType === 'flights' ? 'Flights' : 'Hotels'}`}
                            </button>
                        </div>
                    </form>

                    {/* Flight Price Comparison - Shows after search */}
                    {searchType === 'flights' && (
                        <FlightPriceComparison
                            from={formData.from}
                            to={formData.to}
                            departDate={formData.checkIn}
                            returnDate={formData.checkOut}
                            passengers={formData.passengers}
                            isVisible={showComparison}
                        />
                    )}

                    {/* Hotel Deals - Shows after flight search (hotels earn 3-5x more) */}
                    {showComparison && searchType === 'flights' && formData.to && (
                        <HotelDealsSection
                            destination={formData.to}
                            checkIn={formData.checkIn}
                            checkOut={formData.checkOut}
                        />
                    )}
                </div>

                {/* Features */}
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">✈️</div>
                        <h3>500+ Airlines</h3>
                        <p>Compare prices from major airlines worldwide</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🏨</div>
                        <h3>2M+ Hotels</h3>
                        <p>Find the perfect stay at the best price</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Best Prices</h3>
                        <p>We compare to find you the lowest fares</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure Booking</h3>
                        <p>Book directly with trusted providers</p>
                    </div>
                </div>

                {/* Professional Promo Cards with Travel Images */}
                <PromoCards />

                {/* Scroll Indicator */}
                <div className="scroll-indicator" onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}>
                    Scroll to explore
                </div>
            </section>

            {/* Trending Destinations - Auto-refreshes every 5 minutes */}
            <section className="home-section">
                <div className="section-header">
                    <h2>🔥 Trending Destinations</h2>
                    <div className="trending-meta">
                        <span className="last-updated">Updated {formatLastUpdated(lastUpdated)}</span>
                        <button className="refresh-btn" onClick={refresh} title="Refresh trending">🔄</button>
                    </div>
                    <Link to="/destinations" className="view-all">View All →</Link>
                </div>
                <div className="destinations-grid home-destinations">
                    {trending.map((dest, index) => (
                        <div
                            key={dest.id}
                            className="destination-card clickable trending"
                            onClick={() => window.open(dest.url, '_blank', 'noopener,noreferrer')}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {index < 3 && <span className="trending-badge">🔥 Hot</span>}
                            <span className="dest-emoji">{dest.emoji}</span>
                            <span className="dest-city">{dest.city}</span>
                            <span className="dest-country">{dest.country}</span>
                            <span className="dest-price">{dest.avgFlightPrice}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="home-section">
                <div className="section-header">
                    <h2>Travel Tips & Guides</h2>
                    <Link to="/blog" className="view-all">View All →</Link>
                </div>
                <div className="blog-preview-grid">
                    {recentPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="blog-preview-card">
                            <img src={post.image} alt={post.title} loading="lazy" />
                            <div className="blog-preview-content">
                                <span className="blog-category-small">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt.slice(0, 100)}...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Luxury Hotels Showcase */}
            <section className="home-section">
                <div className="section-header">
                    <h2>🏨 Luxury Hotels Worldwide</h2>
                    <Link to="/gallery" className="view-all">View Gallery →</Link>
                </div>
                <div className="showcase-grid">
                    {travelGallery.luxuryHotels.slice(0, 10).map((hotel, index) => (
                        <div
                            key={hotel.id}
                            className="showcase-card clickable"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => window.open(hotel.url, '_blank', 'noopener,noreferrer')}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={hotel.image} alt={hotel.title} loading="lazy" />
                            <div className="showcase-overlay">
                                <h3>{hotel.title}</h3>
                                <p>{hotel.location}</p>
                                <span className="showcase-tag">{hotel.category}</span>
                                <span className="click-hint">Click to search hotels →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dream Destinations Gallery */}
            <section className="home-section">
                <div className="section-header">
                    <h2>🌍 Dream Destinations</h2>
                    <Link to="/gallery" className="view-all">Explore All →</Link>
                </div>
                <div className="showcase-grid large">
                    {travelGallery.destinations.slice(0, 6).map((dest, index) => (
                        <div
                            key={dest.id}
                            className="showcase-card clickable"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => window.open(dest.url, '_blank', 'noopener,noreferrer')}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={dest.image} alt={dest.title} loading="lazy" />
                            <div className="showcase-overlay">
                                <h3>{dest.title}</h3>
                                <p>{dest.location}</p>
                                <span className="showcase-tag">{dest.category}</span>
                                <span className="click-hint">Click to search flights →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Luxury Cars */}
            <section className="home-section">
                <div className="section-header">
                    <h2>🚗 Luxury Car Rentals</h2>
                    <Link to="/gallery" className="view-all">View All →</Link>
                </div>
                <div className="cars-grid">
                    {travelGallery.luxuryCars.slice(0, 10).map((car, index) => (
                        <div
                            key={car.id}
                            className="car-card clickable"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => window.open(car.url, '_blank', 'noopener,noreferrer')}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={car.image} alt={car.title} loading="lazy" />
                            <div className="car-info">
                                <h3>{car.title}</h3>
                                <span>{car.type}</span>
                                <span className="click-hint">Click to rent →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experiences */}
            <section className="home-section experiences-section">
                <div className="container">
                    <div className="section-header">
                        <h2>✨ Unforgettable Experiences</h2>
                        <Link to="/gallery" className="view-all">View All →</Link>
                    </div>
                    <div className="experiences-grid">
                        {travelGallery.experiences.slice(0, 8).map((exp, index) => (
                            <div
                                key={exp.id}
                                className="experience-card clickable"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => window.open(exp.url, '_blank', 'noopener,noreferrer')}
                                role="button"
                                tabIndex={0}
                            >
                                <img src={exp.image} alt={exp.title} loading="lazy" />
                                <div className="experience-content">
                                    <h3>{exp.title}</h3>
                                    <p>{exp.description}</p>
                                    <span className="click-hint">Click to explore →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Search</h3>
                        <p>Enter your destination, dates, and travelers</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Compare</h3>
                        <p>See real-time prices from top providers</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Book</h3>
                        <p>Book directly with the airline or hotel</p>
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            <section className="seo-content container">
                <h2>Find Cheap Flights & Hotels with SkyStay</h2>
                <p>
                    Welcome to SkyStay - your ultimate destination for finding cheap flights and hotels.
                    We compare prices from over 500 airlines and 2 million hotels worldwide to bring you
                    the best travel deals. Whether you're looking for last-minute flights to Dubai,
                    budget-friendly hotels in Paris, or planning your dream vacation to Tokyo, we've got
                    you covered.
                </p>
                <p>
                    Our powerful search engine scans multiple booking sites in real-time, ensuring you
                    always get the lowest prices available. Plus, with our expert travel blog and
                    destination guides, you'll have all the information you need to plan the perfect trip.
                </p>
            </section>
        </div>
    );
}

export default Home;
