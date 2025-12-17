import { useParams, Link } from 'react-router-dom';
import { seoPages, getSeoPageBySlug, getAffiliateLinksForDeal } from '../data/seoPages';
import FlightPriceComparison from '../components/FlightPriceComparison';
import HotelDealsSection from '../components/HotelDealsSection';

/**
 * DealsPage - SEO-optimized flight deals page
 * These pages rank on Google for keywords like "cheap flights toronto to dubai"
 */
function DealsPage() {
    const { slug } = useParams();
    const page = getSeoPageBySlug(slug);

    // If no specific page, show deals directory
    if (!page && !slug) {
        return <DealsDirectory />;
    }

    // Page not found
    if (!page) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Deal Not Found</h1>
                <p>Sorry, we couldn't find that deal page.</p>
                <Link to="/deals" className="btn btn-primary">View All Deals</Link>
            </div>
        );
    }

    const affiliateLinks = getAffiliateLinksForDeal(page);

    return (
        <div className="deals-page">
            {/* SEO Meta - Would be handled by react-helmet in production */}

            {/* Hero */}
            <header
                className="deals-hero"
                style={{ backgroundImage: `url(${page.heroImage})` }}
            >
                <div className="deals-hero-overlay">
                    <div className="container">
                        <nav className="deals-breadcrumb">
                            <Link to="/">Home</Link> / <Link to="/deals">Deals</Link> / {page.title}
                        </nav>
                        <h1>{page.h1}</h1>
                        {page.origin && page.destination && (
                            <div className="deals-route-info">
                                <span className="route-badge">
                                    ✈️ {page.origin.code} → {page.destination.code}
                                </span>
                                <span className="price-badge">
                                    From {page.avgPrice}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="deals-layout">
                    {/* Main Content */}
                    <main className="deals-main">
                        {/* Intro */}
                        <section className="deals-section">
                            <p className="deals-intro">{page.content.intro}</p>
                        </section>

                        {/* Flight Comparison - Main CTA */}
                        {page.origin && page.destination && (
                            <FlightPriceComparison
                                from={page.origin.code}
                                to={page.destination.code}
                                isVisible={true}
                            />
                        )}

                        {/* Quick Facts */}
                        {page.flightTime && (
                            <section className="deals-section">
                                <h2>Quick Facts</h2>
                                <div className="deals-facts">
                                    <div className="fact-item">
                                        <span className="fact-icon">⏱️</span>
                                        <span className="fact-label">Flight Time</span>
                                        <span className="fact-value">{page.flightTime}</span>
                                    </div>
                                    <div className="fact-item">
                                        <span className="fact-icon">💰</span>
                                        <span className="fact-label">Average Price</span>
                                        <span className="fact-value">{page.avgPrice}</span>
                                    </div>
                                    <div className="fact-item">
                                        <span className="fact-icon">📅</span>
                                        <span className="fact-label">Best Months</span>
                                        <span className="fact-value">{page.bestMonths?.join(', ')}</span>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Tips */}
                        {page.content.tips && (
                            <section className="deals-section">
                                <h2>💡 Money-Saving Tips</h2>
                                <ul className="deals-tips">
                                    {page.content.tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Best Time */}
                        {page.content.bestTime && (
                            <section className="deals-section">
                                <h2>🗓️ Best Time to Book</h2>
                                <p>{page.content.bestTime}</p>
                            </section>
                        )}

                        {/* Airlines */}
                        {page.airlines && !page.airlines[0]?.rating && (
                            <section className="deals-section">
                                <h2>✈️ Airlines on This Route</h2>
                                <div className="deals-airlines">
                                    {page.airlines.map((airline, index) => (
                                        <span key={index} className="airline-badge">{airline}</span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Visa Info */}
                        {page.content.visa && (
                            <section className="deals-section">
                                <h2>🛂 Visa Requirements</h2>
                                <p>{page.content.visa}</p>
                            </section>
                        )}

                        {/* Hotel Cross-sell */}
                        {page.destination && (
                            <HotelDealsSection destination={page.destination.city} />
                        )}
                    </main>

                    {/* Sidebar */}
                    <aside className="deals-sidebar">
                        <div className="sidebar-widget sticky">
                            <h3>🔍 Search This Route</h3>
                            {affiliateLinks && (
                                <a
                                    href={affiliateLinks.flights}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginBottom: '1rem' }}
                                >
                                    Search Flights →
                                </a>
                            )}

                            <h4>Related Deals</h4>
                            <ul className="related-deals">
                                {seoPages.flightDeals
                                    .filter(d => d.id !== page.id)
                                    .slice(0, 3)
                                    .map(deal => (
                                        <li key={deal.id}>
                                            <Link to={`/deals/${deal.slug}`}>
                                                {deal.origin.code} → {deal.destination.code}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                            <h4>Travel Guides</h4>
                            <ul className="related-deals">
                                {seoPages.guides.slice(0, 2).map(guide => (
                                    <li key={guide.id}>
                                        <Link to={`/deals/${guide.slug}`}>
                                            {guide.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

/**
 * DealsDirectory - Lists all available deal pages
 */
function DealsDirectory() {
    return (
        <div className="deals-directory">
            <div className="container">
                <h1>✈️ Flight Deals & Travel Guides</h1>
                <p className="deals-directory-intro">
                    Find the cheapest flights and expert travel tips to save money on your next trip.
                </p>

                <section className="deals-directory-section">
                    <h2>🔥 Popular Flight Routes</h2>
                    <div className="deals-grid">
                        {seoPages.flightDeals.map(deal => (
                            <Link
                                key={deal.id}
                                to={`/deals/${deal.slug}`}
                                className="deal-card"
                            >
                                <img src={deal.heroImage} alt={deal.title} loading="lazy" />
                                <div className="deal-card-content">
                                    <span className="deal-route">
                                        {deal.origin.code} → {deal.destination.code}
                                    </span>
                                    <h3>{deal.title}</h3>
                                    <span className="deal-price">{deal.avgPrice}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="deals-directory-section">
                    <h2>📚 Travel Guides</h2>
                    <div className="guides-grid">
                        {seoPages.guides.map(guide => (
                            <Link
                                key={guide.id}
                                to={`/deals/${guide.slug}`}
                                className="guide-card"
                            >
                                <img src={guide.heroImage} alt={guide.title} loading="lazy" />
                                <div className="guide-card-content">
                                    <h3>{guide.title}</h3>
                                    <p>{guide.content.intro.slice(0, 120)}...</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DealsPage;
