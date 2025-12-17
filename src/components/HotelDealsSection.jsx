import { getHotelComparisonUrls } from '../data/affiliateLinks';

/**
 * HotelDealsSection - Shows hotel deals from multiple providers
 * Hotels typically pay 3-5x more commission than flights
 */
function HotelDealsSection({ destination, checkIn, checkOut, rooms = 1, showHeading = true }) {
    if (!destination) return null;

    const providers = getHotelComparisonUrls(destination, checkIn, checkOut, rooms);

    return (
        <div className="hotel-deals-section">
            {showHeading && (
                <div className="hotel-deals-header">
                    <h3>🏨 Hotels near {destination}</h3>
                    <p>Save up to 30% by comparing prices across top booking sites</p>
                </div>
            )}

            <div className="hotel-deals-grid">
                {providers.map((provider, index) => (
                    <a
                        key={provider.id}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-deal-card"
                        style={{
                            '--provider-color': provider.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="hotel-deal-header">
                            <span className="hotel-deal-logo">{provider.logo}</span>
                            <span className="hotel-deal-name">{provider.name}</span>
                        </div>
                        <p className="hotel-deal-tagline">{provider.tagline}</p>
                        <span className="hotel-deal-cta">
                            Search Hotels →
                        </span>
                    </a>
                ))}
            </div>

            <div className="hotel-deals-tip">
                💡 <strong>Pro tip:</strong> Hotels earn 3-5x more commission than flights.
                Compare prices across all providers for the best deals!
            </div>
        </div>
    );
}

export default HotelDealsSection;
