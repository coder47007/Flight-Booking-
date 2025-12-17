import { getCarRentalUrls } from '../data/affiliateLinks';

/**
 * CarRentalComparison - Shows car rental options from multiple providers
 * Displayed on destination pages and after flight searches
 */
function CarRentalComparison({ location, pickupDate, dropoffDate, showHeading = true }) {
    if (!location) return null;

    const providers = getCarRentalUrls(location, pickupDate, dropoffDate);

    return (
        <div className="car-rental-section">
            {showHeading && (
                <div className="car-rental-header">
                    <h3>🚗 Need a Car in {location}?</h3>
                    <p>Compare prices from top car rental companies</p>
                </div>
            )}

            <div className="car-rental-grid">
                {providers.map((provider, index) => (
                    <a
                        key={provider.id}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="car-rental-card"
                        style={{
                            '--provider-color': provider.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <span className="car-rental-logo">{provider.logo}</span>
                        <div className="car-rental-info">
                            <span className="car-rental-name">{provider.name}</span>
                            <span className="car-rental-tagline">{provider.tagline}</span>
                        </div>
                        <span className="car-rental-cta">
                            Compare Prices →
                        </span>
                    </a>
                ))}
            </div>

            <p className="car-rental-tip">
                🚙 People booking flights are ready to spend! Car rentals can add significant value to your trip.
            </p>
        </div>
    );
}

export default CarRentalComparison;
