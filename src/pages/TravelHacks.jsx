import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { travelRequirements } from '../data/travelRequirements';

// Helper to get weather icon
const getWeatherIcon = (code) => {
    if (code === 0) return '☀️'; // Clear
    if (code >= 1 && code <= 3) return '⛅'; // Cloudy
    if (code >= 45 && code <= 48) return '🌫️'; // Fog
    if (code >= 51 && code <= 67) return '🌧️'; // Rain
    if (code >= 71 && code <= 77) return '❄️'; // Snow
    if (code >= 80 && code <= 82) return '🌦️'; // Showers
    if (code >= 95) return '⛈️'; // Thunderstorm
    return '🌡️';
};

const WeatherWidget = ({ lat, long, city }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
                );
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Weather fetch failed", error);
            } finally {
                setLoading(false);
            }
        };

        if (lat && long) {
            fetchWeather();
        }
    }, [lat, long]);

    if (loading) return <div className="weather-loading">Loading 7-Day Forecast... 🌥️</div>;
    if (!weather || !weather.daily) return null;

    return (
        <div className="weather-widget">
            <h4>7-Day Forecast for {city} 🌤️</h4>
            <div className="forecast-row">
                {weather.daily.time.map((date, index) => {
                    const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
                    const code = weather.daily.weathercode[index];
                    const max = Math.round(weather.daily.temperature_2m_max[index]);
                    const min = Math.round(weather.daily.temperature_2m_min[index]);

                    return (
                        <div key={index} className="forecast-day">
                            <span className="day-name">{dayName}</span>
                            <span className="weather-icon">{getWeatherIcon(code)}</span>
                            <span className="temp-high">{max}°</span>
                            <span className="temp-low">{min}°</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TravelHacks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Filter countries based on search logic (Name OR Keywords)
    const filteredCountries = travelRequirements.filter(req => {
        const term = searchTerm.toLowerCase();
        return req.country.toLowerCase().includes(term) ||
            (req.keywords && req.keywords.some(k => k.toLowerCase().includes(term)));
    });

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
                        placeholder="Search destination (e.g., Dubai, Paris, Japan)..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedCountry(null);
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
                                        setSearchTerm('');
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

                        <WeatherWidget lat={selectedCountry.lat} long={selectedCountry.long} city={selectedCountry.capital} />
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
                .weather-widget {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }
                .weather-widget h4 {
                    font-size: 1.2rem;
                    text-align: center;
                    margin-bottom: 20px;
                    color: #2d3436;
                }
                .weather-loading {
                    text-align: center;
                    padding: 20px;
                    color: #636e72;
                    font-style: italic;
                }
                .forecast-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    overflow-x: auto;
                    padding-bottom: 10px;
                }
                .forecast-day {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #f1f3f5;
                    padding: 10px;
                    border-radius: 10px;
                    min-width: 60px;
                    transition: transform 0.2s;
                }
                .forecast-day:hover {
                    transform: translateY(-3px);
                    background: #e3f2fd;
                }
                .day-name {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #636e72;
                    margin-bottom: 5px;
                }
                .weather-icon {
                    font-size: 1.5rem;
                    margin-bottom: 5px;
                }
                .temp-high {
                    font-weight: 700;
                    color: #2d3436;
                    font-size: 0.95rem;
                }
                .temp-low {
                    font-size: 0.8rem;
                    color: #b2bec3;
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
