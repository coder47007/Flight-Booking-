import { getFlightComparisonUrls } from '../data/affiliateLinks';

/**
 * FlightPriceComparison - Shows flight prices from multiple providers
 * Displays side-by-side comparison cards to increase conversion
 */
function FlightPriceComparison({ from, to, departDate, returnDate, passengers = 1, isVisible = true }) {
    if (!isVisible || !from || !to) return null;

    const providers = getFlightComparisonUrls(from, to, departDate, returnDate, passengers);

    return (
        <div className="flight-comparison">
            <div className="comparison-header">
                <h3>🔍 Compare Prices from Top Providers</h3>
                <p>Click any provider to see their best prices for your route</p>
            </div>

            <div className="comparison-grid">
                {providers.map((provider, index) => (
                    <a
                        key={provider.id}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="comparison-card"
                        style={{
                            '--provider-color': provider.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="provider-logo">{provider.logo}</div>
                        <div className="provider-info">
                            <span className="provider-name">{provider.name}</span>
                            <span className="provider-tagline">{provider.tagline}</span>
                        </div>
                        <div className="provider-cta">
                            <span className="check-price">Check Price →</span>
                        </div>
                    </a>
                ))}
            </div>

            <p className="comparison-note">
                💡 <strong>Pro tip:</strong> Compare prices across all providers - the cheapest option varies by route and date!
            </p>
        </div>
    );
}

export default FlightPriceComparison;
