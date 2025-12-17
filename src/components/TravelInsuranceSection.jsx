import { getInsuranceOptions } from '../data/affiliateLinks';

/**
 * TravelInsuranceSection - Shows travel insurance options from multiple providers
 * High commission + low competition = Great ROI
 */
function TravelInsuranceSection({ destination, showHeading = true, compact = false }) {
    const providers = getInsuranceOptions(destination);

    return (
        <div className={`insurance-section ${compact ? 'compact' : ''}`}>
            {showHeading && (
                <div className="insurance-header">
                    <h3>🛡️ Travel Insurance</h3>
                    <p>Protect your trip with coverage from trusted providers</p>
                </div>
            )}

            <div className="insurance-grid">
                {providers.map((provider, index) => (
                    <a
                        key={provider.id}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insurance-card"
                        style={{
                            '--provider-color': provider.color,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="insurance-card-header">
                            <span className="insurance-logo">{provider.logo}</span>
                            <div className="insurance-info">
                                <span className="insurance-name">{provider.name}</span>
                                <span className="insurance-tagline">{provider.tagline}</span>
                            </div>
                        </div>
                        {provider.price && (
                            <span className="insurance-price">{provider.price}</span>
                        )}
                        <span className="insurance-cta">
                            Get Quote →
                        </span>
                    </a>
                ))}
            </div>

            <div className="insurance-disclaimer">
                ✅ <strong>Why travel insurance?</strong> Medical emergencies abroad can cost $100,000+.
                Insurance typically costs less than 5% of your trip value.
            </div>
        </div>
    );
}

export default TravelInsuranceSection;
