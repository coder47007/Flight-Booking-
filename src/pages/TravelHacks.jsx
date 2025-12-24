import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { travelRequirements } from '../data/travelRequirements';

const TravelHacks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Filter posts for relevant categories
    const hacksPosts = blogPosts.filter(post =>
        ['Travel Tips', 'Cheap Flights', 'Travel Hacks', 'Airline News'].includes(post.category) ||
        post.title.toLowerCase().includes('hack') ||
        post.title.toLowerCase().includes('deal') ||
        post.title.toLowerCase().includes('tip')
    );

    // Filter countries based on search
    const filteredCountries = travelRequirements.filter(req =>
        req.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="travel-hacks-page">
            <div className="hacks-hero">
                <div className="container">
                    <h1>Daily Travel Hacks & News 💡</h1>
                    <p>The latest flight deals, viral tips, and essential travel requirements.</p>
                </div>
            </div>

            <div className="container requirements-section">
                <div className="section-header">
                    <h2>Check Entry Requirements 🛂</h2>
                    <p>Know before you go. Search visa, passport, and safety rules for your destination.</p>
                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search destination (e.g., Japan, France)..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedCountry(null); // Reset selection on new search
                        }}
                    />
                    {searchTerm && (
                        <div className="search-results-dropdown">
                            {filteredCountries.map(country => (
                                <div
                                    key={country.id}
                                    className="search-result-item"
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setSearchTerm(''); // Clear search on selection
                                    }}
                                >
                                    <span className="result-flag">{country.flag}</span>
                                    <span>{country.country}</span>
                                </div>
                            ))}
                            {filteredCountries.length === 0 && (
                                <div className="no-results">No destinations found.</div>
                            )}
                        </div>
                    )}
                </div>

                {selectedCountry && (
                    <div className="country-details-card animate-fade-in">
                        <div className="details-header">
                            <h3>{selectedCountry.flag} {selectedCountry.country} Requirements</h3>
                            <button onClick={() => setSelectedCountry(null)} className="close-btn">×</button>
                        </div>
                        <div className="details-grid">
                            <div className="detail-item">
                                <h4>🛂 Visa Rule</h4>
                                <p>{selectedCountry.visa}</p>
                            </div>
                            <div className="detail-item">
                                <h4>📘 Passport Validity</h4>
                                <p>{selectedCountry.passport}</p>
                            </div>
                            <div className="detail-item">
                                <h4>⚠️ Safety Level</h4>
                                <p>{selectedCountry.safety}</p>
                            </div>
                            <div className="detail-item">
                                <h4>💰 Currency</h4>
                                <p>{selectedCountry.currency}</p>
                            </div>
                            <div className="detail-item">
                                <h4>🔌 Power</h4>
                                <p>{selectedCountry.voltage}</p>
                            </div>
                            <div className="detail-item full-width">
                                <h4>🔗 Trusted Sources</h4>
                                <div className="sources-list">
                                    {selectedCountry.sources.map((source, idx) => (
                                        <span key={idx} className="source-tag">{source}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="container trusted-sources-section">
                <h3>🥇 Trusted Government Sources</h3>
                <div className="sources-grid">
                    <a href="https://travel.gc.ca/" target="_blank" rel="noopener noreferrer" className="source-card">
                        <span className="source-icon">🇨🇦</span>
                        <div className="source-info">
                            <h4>Gov of Canada</h4>
                            <p>Official Travel Advice</p>
                        </div>
                    </a>
                    <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer" className="source-card">
                        <span className="source-icon">🇺🇸</span>
                        <div className="source-info">
                            <h4>US State Dept</h4>
                            <p>Travel Advisories</p>
                        </div>
                    </a>
                    <a href="https://www.gov.uk/foreign-travel-advice" target="_blank" rel="noopener noreferrer" className="source-card">
                        <span className="source-icon">🇬🇧</span>
                        <div className="source-info">
                            <h4>UK FCDO</h4>
                            <p>Foreign Travel Advice</p>
                        </div>
                    </a>
                    <a href="https://www.iatatravelcentre.com/" target="_blank" rel="noopener noreferrer" className="source-card">
                        <span className="source-icon">✈️</span>
                        <div className="source-info">
                            <h4>IATA Travel Centre</h4>
                            <p>Passport & Visa Rules</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="container hacks-content">
                <h2>Latest Travel News & Tips 📰</h2>
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
                    background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
                    color: white;
                    padding: 60px 0;
                    margin-bottom: 40px;
                    text-align: center;
                }
                .requirements-section {
                    background: #f8f9fa;
                    padding: 30px;
                    border-radius: 15px;
                    margin-bottom: 40px;
                    border: 1px solid #e1e4e8;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 25px;
                }
                .search-box {
                    max-width: 600px;
                    margin: 0 auto 30px;
                    position: relative;
                }
                .search-box input {
                    width: 100%;
                    padding: 15px 20px;
                    border-radius: 30px;
                    border: 2px solid #dfe6e9;
                    font-size: 1.1rem;
                    outline: none;
                    transition: border-color 0.3s;
                }
                .search-box input:focus {
                    border-color: #0984e3;
                }
                .search-results-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    margin-top: 10px;
                    z-index: 100;
                    max-height: 300px;
                    overflow-y: auto;
                }
                .search-result-item {
                    padding: 12px 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: background 0.2s;
                    border-bottom: 1px solid #f1f1f1;
                }
                .search-result-item:hover {
                    background: #f8f9fa;
                }
                .country-details-card {
                    background: white;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border-top: 4px solid #0984e3;
                }
                .details-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                }
                .close-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #636e72;
                }
                .details-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }
                .detail-item h4 {
                    font-size: 0.9rem;
                    color: #636e72;
                    margin-bottom: 5px;
                }
                .detail-item p {
                    font-weight: 500;
                    color: #2d3436;
                }
                .full-width {
                    grid-column: 1 / -1;
                }
                .source-tag {
                    display: inline-block;
                    background: #e1f5fe;
                    color: #0277bd;
                    padding: 5px 10px;
                    border-radius: 15px;
                    font-size: 0.85rem;
                    margin-right: 10px;
                    margin-bottom: 5px;
                }
                .trusted-sources-section {
                    margin-bottom: 50px;
                }
                .sources-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }
                .source-card {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background: white;
                    padding: 20px;
                    border-radius: 12px;
                    text-decoration: none;
                    color: inherit;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    transition: transform 0.2s;
                    border: 1px solid #eee;
                }
                .source-card:hover {
                    transform: translateY(-3px);
                    border-color: #0984e3;
                }
                .source-icon {
                    font-size: 2rem;
                }
                .source-info h4 {
                    margin: 0;
                    color: #2d3436;
                }
                .source-info p {
                    margin: 5px 0 0;
                    font-size: 0.9rem;
                    color: #636e72;
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
                    background: #0984e3;
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
                    color: #0984e3;
                    text-decoration: none;
                    font-weight: 600;
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default TravelHacks;
