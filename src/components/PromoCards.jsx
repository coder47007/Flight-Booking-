/**
 * PromoCards - Professional affiliate promo cards with travel images
 * Links directly to booking providers with beautiful imagery
 */

import { PROVIDERS, AFFILIATE_IDS } from '../data/affiliateLinks';

// Beautiful travel images for promo cards
const PROMO_IMAGES = {
    aviasales: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    skyscanner: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800',
    kiwi: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800',
    booking: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
};

const PROMO_DATA = [
    {
        id: 'aviasales',
        name: 'Aviasales',
        title: 'Find Cheap Flights Worldwide',
        description: 'Compare prices from 500+ airlines and book directly',
        image: PROMO_IMAGES.aviasales,
        cta: 'Search Flights',
        getUrl: () => `https://www.aviasales.com/?marker=${AFFILIATE_IDS.travelpayouts}`,
        color: '#ff6b35'
    },
    {
        id: 'skyscanner',
        name: 'Skyscanner',
        title: 'Best Flight Deals & Price Alerts',
        description: 'Get notified when prices drop for your dream destination',
        image: PROMO_IMAGES.skyscanner,
        cta: 'Compare Prices',
        getUrl: () => `https://www.skyscanner.com/?associateid=${AFFILIATE_IDS.skyscanner}`,
        color: '#0770e3'
    },
    {
        id: 'kiwi',
        name: 'Kiwi.com',
        title: 'Flexible Multi-City Routes',
        description: 'Mix airlines and find unique itineraries others miss',
        image: PROMO_IMAGES.kiwi,
        cta: 'Explore Routes',
        getUrl: () => `https://www.kiwi.com/en/?affilid=${AFFILIATE_IDS.kiwi}`,
        color: '#00a991'
    },
    {
        id: 'booking',
        name: 'Booking.com',
        title: 'Hotels & Flights Bundle',
        description: 'Save more when you book flights and hotels together',
        image: PROMO_IMAGES.booking,
        cta: 'Book Now',
        getUrl: () => `https://www.booking.com/?aid=${AFFILIATE_IDS.bookingFlights}`,
        color: '#003580'
    }
];

/**
 * PromoCards - Full-width promo cards with images
 */
function PromoCards({ variant = 'grid', showAll = true, limit = 4 }) {
    const promos = showAll ? PROMO_DATA : PROMO_DATA.slice(0, limit);

    return (
        <div className={`promo-cards promo-cards--${variant}`}>
            <h3 className="promo-cards-title">✈️ Book Your Next Adventure</h3>
            <div className="promo-cards-grid">
                {promos.map((promo) => (
                    <a
                        key={promo.id}
                        href={promo.getUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="promo-card"
                        style={{ '--promo-color': promo.color }}
                    >
                        <div className="promo-card-image">
                            <img src={promo.image} alt={promo.title} loading="lazy" />
                            <div className="promo-card-overlay">
                                <span className="promo-card-badge">{promo.name}</span>
                            </div>
                        </div>
                        <div className="promo-card-content">
                            <h4>{promo.title}</h4>
                            <p>{promo.description}</p>
                            <span className="promo-card-cta">{promo.cta} →</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

/**
 * PromoCardSingle - Single large promo card for blog posts
 */
export function PromoCardSingle({ provider = 'aviasales' }) {
    const promo = PROMO_DATA.find(p => p.id === provider) || PROMO_DATA[0];

    return (
        <a
            href={promo.getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-card-single"
            style={{ '--promo-color': promo.color }}
        >
            <div className="promo-card-single-image">
                <img src={promo.image} alt={promo.title} loading="lazy" />
            </div>
            <div className="promo-card-single-content">
                <span className="promo-card-badge">{promo.name}</span>
                <h4>{promo.title}</h4>
                <p>{promo.description}</p>
                <span className="promo-card-cta">{promo.cta} →</span>
            </div>
        </a>
    );
}

/**
 * PromoStrip - Horizontal strip with all providers
 */
export function PromoStrip() {
    return (
        <div className="promo-strip">
            <span className="promo-strip-label">Book with trusted partners:</span>
            <div className="promo-strip-links">
                {PROMO_DATA.map((promo) => (
                    <a
                        key={promo.id}
                        href={promo.getUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="promo-strip-link"
                        style={{ '--promo-color': promo.color }}
                    >
                        {promo.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default PromoCards;
