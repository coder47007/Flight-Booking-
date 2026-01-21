import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import PromoCards from '../components/PromoCards';

// Category color mapping for visual variety
const categoryColors = {
    'Travel Hacks': { bg: 'rgba(99, 102, 241, 0.9)', text: '#fff' },
    'Destination Guides': { bg: 'rgba(16, 185, 129, 0.9)', text: '#fff' },
    'Cheap Flights': { bg: 'rgba(245, 158, 11, 0.9)', text: '#fff' },
    'Travel Tips': { bg: 'rgba(239, 68, 68, 0.9)', text: '#fff' },
    'Airline News': { bg: 'rgba(59, 130, 246, 0.9)', text: '#fff' },
    'Airport Guides': { bg: 'rgba(139, 92, 246, 0.9)', text: '#fff' },
    'default': { bg: 'rgba(107, 114, 128, 0.9)', text: '#fff' }
};

function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        return activeCategory === 'All'
            ? blogPosts
            : blogPosts.filter(post => post.category === activeCategory);
    }, [activeCategory]);

    // Get featured post (first one) and remaining posts
    const featuredPost = filteredPosts[0];
    const remainingPosts = filteredPosts.slice(1);

    const getCategoryColor = (category) => {
        return categoryColors[category] || categoryColors['default'];
    };

    return (
        <div className="blog-page-modern">
            {/* Immersive Hero Section */}
            <section className="blog-hero-modern">
                <div className="blog-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
                        alt="Travel Adventure"
                        loading="eager"
                    />
                    <div className="blog-hero-overlay"></div>
                </div>
                <div className="blog-hero-content">
                    <span className="blog-hero-label">✈️ Your Travel Journey Starts Here</span>
                    <h1>Travel Blog</h1>
                    <p>Expert tips, destination guides, and flight deals to help you travel smarter</p>
                    <div className="blog-hero-scroll-indicator">
                        <span>Scroll to explore</span>
                        <div className="scroll-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blog-container-modern">
                {/* Category Filter Pills */}
                <div className="category-filter-modern">
                    <div className="category-filter-inner">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category === 'All' && '🌍 '}
                                {category === 'Travel Hacks' && '💡 '}
                                {category === 'Destination Guides' && '🗺️ '}
                                {category === 'Cheap Flights' && '✈️ '}
                                {category === 'Travel Tips' && '📌 '}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post - Magazine Style */}
                {featuredPost && (
                    <Link to={`/blog/${featuredPost.slug}`} className="featured-post-card">
                        <div className="featured-post-image">
                            <img src={featuredPost.image} alt={featuredPost.title} loading="eager" />
                            <div className="featured-post-overlay"></div>
                        </div>
                        <div className="featured-post-content">
                            <span
                                className="featured-category-badge"
                                style={{ backgroundColor: getCategoryColor(featuredPost.category).bg }}
                            >
                                {featuredPost.category}
                            </span>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="featured-post-meta">
                                <div className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <div className="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <span className="read-more-btn">
                                    Read Article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Magazine Grid Layout */}
                <div className="blog-grid-magazine">
                    {remainingPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className={`blog-card-magazine ${index < 2 ? 'large' : ''}`}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <div className="card-image-wrapper">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                    <div className="card-image-overlay"></div>
                                    <span
                                        className="card-category-badge"
                                        style={{ backgroundColor: getCategoryColor(post.category).bg }}
                                    >
                                        {post.category}
                                    </span>
                                </div>
                                <div className="card-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="card-meta">
                                        <span className="card-date">{post.date}</span>
                                        <span className="card-dot">•</span>
                                        <span className="card-read-time">{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup Card */}
                <div className="newsletter-card-blog">
                    <div className="newsletter-content">
                        <div className="newsletter-icon">📬</div>
                        <h3>Get Flight Deals in Your Inbox</h3>
                        <p>Join 50,000+ travelers who receive exclusive deals and travel tips weekly.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Professional Promo Cards */}
                <PromoCards />

                {/* Travel News & Hacks Section with Modern Cards */}
                <section className="travel-news-section-modern">
                    <div className="section-header">
                        <h2>
                            <span className="section-icon">📰</span>
                            Latest Travel News & Hacks
                        </h2>
                        <p>Stay updated with the latest tips to save money on your travels</p>
                    </div>
                    <div className="blog-grid-magazine compact">
                        {blogPosts.filter(post =>
                            ['Travel Tips', 'Cheap Flights', 'Travel Hacks', 'Airline News'].includes(post.category) ||
                            post.title.toLowerCase().includes('hack') ||
                            post.title.toLowerCase().includes('deal') ||
                            post.title.toLowerCase().includes('tip')
                        ).slice(0, 6).map(post => (
                            <article key={post.id} className="blog-card-magazine">
                                <Link to={`/blog/${post.slug}`}>
                                    <div className="card-image-wrapper">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <div className="card-image-overlay"></div>
                                        <span
                                            className="card-category-badge"
                                            style={{ backgroundColor: getCategoryColor(post.category).bg }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="card-content">
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className="card-meta">
                                            <span className="card-date">{post.date}</span>
                                            <span className="card-dot">•</span>
                                            <span className="card-read-time">{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SEO Text with Modern Styling */}
                <section className="seo-content-modern">
                    <div className="seo-content-inner">
                        <h2>Your Guide to Cheap Flights & Travel Deals</h2>
                        <p>
                            Welcome to the SkyStay Travel Blog - your trusted source for finding cheap flights,
                            travel tips, and destination guides. Whether you're looking for the best time to book
                            international flights, searching for budget airlines, or planning your next adventure
                            to Dubai, London, or Paris, we've got you covered.
                        </p>
                        <p>
                            Our team of travel experts shares insider knowledge on how to save money on airfare,
                            find last-minute flight deals, and make the most of your travels. Start exploring our
                            articles and discover how to travel more for less.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Blog;
