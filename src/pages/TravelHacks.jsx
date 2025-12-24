import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const TravelHacks = () => {
    // Filter posts for relevant categories
    const hacksPosts = blogPosts.filter(post =>
        ['Travel Tips', 'Cheap Flights', 'Travel Hacks', 'Airline News'].includes(post.category) ||
        post.title.toLowerCase().includes('hack') ||
        post.title.toLowerCase().includes('deal') ||
        post.title.toLowerCase().includes('tip')
    );

    return (
        <div className="travel-hacks-page">
            <div className="hacks-hero">
                <div className="container">
                    <h1>Daily Travel Hacks & News 💡</h1>
                    <p>The latest flight deals, airline announcements, and money-saving tips.</p>
                </div>
            </div>

            <div className="container hacks-content">
                <div className="hacks-grid">
                    {hacksPosts.map(post => (
                        <article key={post.id} className="hack-card">
                            <div className="hack-image">
                                <img src={post.image} alt={post.title} />
                                <span className="hack-category">{post.category}</span>
                            </div>
                            <div className="hack-details">
                                <span className="hack-date">{post.date}</span>
                                <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                                <p>{post.excerpt}</p>
                                <Link to={`/blog/${post.slug}`} className="read-more">Read details →</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .hacks-hero {
                    background: linear-gradient(135deg, #FF4757 0%, #FF6B81 100%);
                    color: white;
                    padding: 80px 0;
                    margin-bottom: 40px;
                    text-align: center;
                }
                .hacks-hero h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .hacks-hero p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                }
                .hacks-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 30px;
                    padding-bottom: 60px;
                }
                .hack-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                }
                .hack-card:hover {
                    transform: translateY(-5px);
                }
                .hack-image {
                    height: 200px;
                    position: relative;
                }
                .hack-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .hack-category {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #FF4757;
                    color: white;
                    padding: 5px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .hack-details {
                    padding: 20px;
                }
                .hack-date {
                    color: #888;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 10px;
                }
                .hack-details h2 {
                    font-size: 1.3rem;
                    margin-bottom: 10px;
                    line-height: 1.4;
                }
                .hack-details h2 a {
                    color: #2d3436;
                    text-decoration: none;
                }
                .hack-details p {
                    color: #636e72;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }
                .read-more {
                    color: #FF4757;
                    text-decoration: none;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
};

export default TravelHacks;
