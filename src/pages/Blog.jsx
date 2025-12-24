import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import PromoCards from '../components/PromoCards';

function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <h1>Travel Blog</h1>
                    <p>Expert tips, destination guides, and flight deals to help you travel smarter</p>
                </div>
            </section>

            <div className="container">
                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="blog-grid">
                    {filteredPosts.map(post => (
                        <article key={post.id} className="blog-card">
                            <Link to={`/blog/${post.slug}`}>
                                <div className="blog-card-image">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-card-content">
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-meta">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Professional Promo Cards */}
                <PromoCards />

                {/* Travel News & Hacks Section */}
                <section className="travel-news-section">
                    <h2>Latest Travel News & Hacks 📰</h2>
                    <div className="blog-grid">
                        {blogPosts.filter(post =>
                            ['Travel Tips', 'Cheap Flights', 'Travel Hacks', 'Airline News'].includes(post.category) ||
                            post.title.toLowerCase().includes('hack') ||
                            post.title.toLowerCase().includes('deal') ||
                            post.title.toLowerCase().includes('tip')
                        ).slice(0, 6).map(post => (
                            <article key={post.id} className="blog-card">
                                <Link to={`/blog/${post.slug}`}>
                                    <div className="blog-card-image">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <span className="blog-category">{post.category}</span>
                                    </div>
                                    <div className="blog-card-content">
                                        <h2>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <div className="blog-meta">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SEO Text */}
                <section className="seo-content">
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
                </section>
            </div>
        </div>
    );
}

export default Blog;
