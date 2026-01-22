import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { travelRequirements } from '../data/travelRequirements';
import { travelDestinations } from '../data/travelDestinations';


// Helper to get weather icon
const getWeatherIcon = (code) => {
    if (code === 0) return '☀️';
    if (code >= 1 && code <= 3) return '⛅';
    if (code >= 45 && code <= 48) return '🌫️';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 80 && code <= 82) return '🌦️';
    if (code >= 95) return '⛈️';
    return '🌡️';
};

// Helper to determine visa status badge
const getVisaStatus = (visaText) => {
    const lower = visaText.toLowerCase();
    if (lower.includes('visa-free') || lower.includes('no visa')) return { type: 'success', label: 'Visa-Free' };
    if (lower.includes('on arrival') || lower.includes('e-visa')) return { type: 'warning', label: 'Available on Arrival' };
    return { type: 'danger', label: 'Visa Required' };
};

// Helper to determine safety status badge
const getSafetyStatus = (safetyText) => {
    const lower = safetyText.toLowerCase();
    if (lower.includes('normal') || lower.includes('level 1')) return { type: 'success', label: 'Safe to Travel' };
    if (lower.includes('caution') || lower.includes('level 2')) return { type: 'warning', label: 'Exercise Caution' };
    if (lower.includes('reconsider') || lower.includes('level 3')) return { type: 'danger', label: 'Reconsider Travel' };
    if (lower.includes('avoid') || lower.includes('level 4')) return { type: 'critical', label: 'Do Not Travel' };
    return { type: 'info', label: 'Check Advisory' };
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

    if (loading) return (
        <div className="weather-loading">
            <div className="loading-spinner"></div>
            <span>Loading Weather Forecast...</span>
        </div>
    );
    if (!weather || !weather.daily) return null;

    return (
        <div className="weather-widget-modern">
            <div className="weather-header">
                <div className="weather-icon-large">🌤️</div>
                <h4>7-Day Forecast for {city}</h4>
            </div>
            <div className="forecast-grid">
                {weather.daily.time.map((date, index) => {
                    const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
                    const dayNum = new Date(date).getDate();
                    const code = weather.daily.weathercode[index];
                    const max = Math.round(weather.daily.temperature_2m_max[index]);
                    const min = Math.round(weather.daily.temperature_2m_min[index]);

                    return (
                        <div key={index} className={`forecast-card ${index === 0 ? 'today' : ''}`}>
                            <div className="forecast-day-name">{index === 0 ? 'Today' : dayName}</div>
                            <div className="forecast-date">{dayNum}</div>
                            <div className="forecast-icon">{getWeatherIcon(code)}</div>
                            <div className="forecast-temps">
                                <span className="temp-max">{max}°</span>
                                <span className="temp-min">{min}°</span>
                            </div>
                            <div className="temp-bar">
                                <div className="temp-fill" style={{ width: `${((max + 10) / 50) * 100}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Currency code mapping from currency name
const getCurrencyCode = (currencyString) => {
    const codeMatch = currencyString.match(/\(([A-Z]{3}|[$€£¥฿])\)/);
    if (codeMatch) {
        const symbol = codeMatch[1];
        if (symbol === '$') return 'USD';
        if (symbol === '€') return 'EUR';
        if (symbol === '£') return 'GBP';
        if (symbol === '¥') return 'JPY';
        if (symbol === '฿') return 'THB';
        return symbol;
    }
    // Common currency mappings
    if (currencyString.includes('Euro')) return 'EUR';
    if (currencyString.includes('Pound Sterling')) return 'GBP';
    if (currencyString.includes('Japanese Yen')) return 'JPY';
    if (currencyString.includes('US Dollar')) return 'USD';
    if (currencyString.includes('Canadian Dollar')) return 'CAD';
    if (currencyString.includes('Australian Dollar')) return 'AUD';
    if (currencyString.includes('Swiss Franc')) return 'CHF';
    if (currencyString.includes('Indian Rupee')) return 'INR';
    if (currencyString.includes('Thai Baht')) return 'THB';
    if (currencyString.includes('Singapore Dollar')) return 'SGD';
    if (currencyString.includes('Hong Kong Dollar')) return 'HKD';
    if (currencyString.includes('New Zealand Dollar')) return 'NZD';
    if (currencyString.includes('Mexican Peso')) return 'MXN';
    if (currencyString.includes('Brazilian Real')) return 'BRL';
    if (currencyString.includes('South African Rand')) return 'ZAR';
    if (currencyString.includes('Korean Won')) return 'KRW';
    if (currencyString.includes('Turkish Lira')) return 'TRY';
    if (currencyString.includes('UAE Dirham')) return 'AED';
    if (currencyString.includes('Moroccan Dirham')) return 'MAD';
    if (currencyString.includes('Egyptian Pound')) return 'EGP';
    if (currencyString.includes('Indonesian Rupiah')) return 'IDR';
    if (currencyString.includes('Malaysian Ringgit')) return 'MYR';
    if (currencyString.includes('Philippine Peso')) return 'PHP';
    if (currencyString.includes('Vietnamese Dong')) return 'VND';
    return 'USD';
};

const CurrencyConverter = ({ targetCurrency, currencyName }) => {
    const [amount, setAmount] = useState(100);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(null);

    const targetCode = getCurrencyCode(currencyName);

    useEffect(() => {
        const fetchRates = async () => {
            setLoading(true);
            try {
                // Using ExchangeRate-API (free tier - 1500 requests/month)
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                const data = await response.json();
                setRates(data.rates);
                setLastUpdated(new Date().toLocaleTimeString());
            } catch (error) {
                console.error("Exchange rate fetch failed", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, [baseCurrency]);

    const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];
    const displayCurrencies = popularCurrencies.filter(c => c !== targetCode);

    const formatCurrency = (value, code) => {
        const symbols = { USD: '$', EUR: '€', GBP: '£', JPY: '¥', CAD: 'C$', AUD: 'A$' };
        const symbol = symbols[code] || code + ' ';
        return symbol + value.toLocaleString('en-US', { minimumFractionDigits: code === 'JPY' ? 0 : 2, maximumFractionDigits: code === 'JPY' ? 0 : 2 });
    };

    if (loading) {
        return (
            <div className="currency-converter-loading">
                <div className="loading-spinner"></div>
                <span>Loading exchange rates...</span>
            </div>
        );
    }

    if (!rates || !rates[targetCode]) {
        return (
            <div className="currency-error">
                <span>💱</span>
                <p>Exchange rates unavailable for {targetCode}</p>
            </div>
        );
    }

    const convertedAmount = amount * rates[targetCode];

    return (
        <div className="currency-converter-widget">
            <div className="converter-header">
                <div className="converter-icon">💱</div>
                <h4>Currency Converter</h4>
                <span className="live-badge">🔴 LIVE</span>
            </div>

            <div className="converter-main">
                <div className="converter-input-group">
                    <label>Amount in {baseCurrency}</label>
                    <div className="input-with-currency">
                        <span className="currency-symbol">$</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                            min="0"
                            step="10"
                        />
                        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CAD">CAD</option>
                            <option value="AUD">AUD</option>
                        </select>
                    </div>
                </div>

                <div className="converter-arrow">
                    <span>⬇️</span>
                </div>

                <div className="converter-result">
                    <div className="result-label">You'll get approximately</div>
                    <div className="result-amount">
                        {convertedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        <span className="result-currency">{targetCode}</span>
                    </div>
                    <div className="rate-info">
                        1 {baseCurrency} = {rates[targetCode]?.toFixed(4)} {targetCode}
                    </div>
                </div>
            </div>

            <div className="popular-rates">
                <div className="rates-header">
                    <span>📊</span>
                    <span>Quick Comparisons ({baseCurrency} → {targetCode})</span>
                </div>
                <div className="rates-grid">
                    {[50, 100, 500, 1000].map(val => (
                        <div key={val} className="rate-item">
                            <span className="rate-from">{formatCurrency(val, baseCurrency)}</span>
                            <span className="rate-equals">=</span>
                            <span className="rate-to">{(val * rates[targetCode]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {targetCode}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="converter-footer">
                <span className="update-time">Last updated: {lastUpdated}</span>
                <span className="disclaimer">Rates are indicative only</span>
            </div>
        </div>
    );
};



const TravelHacks = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    const filteredCountries = travelRequirements.filter(req => {
        const term = searchTerm.toLowerCase();
        return req.country.toLowerCase().includes(term) ||
            (req.keywords && req.keywords.some(k => k.toLowerCase().includes(term)));
    });

    return (
        <div className="travel-hacks-page-modern">
            {/* Hero Section */}
            <div className="hacks-hero-modern">
                <div className="hero-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
                <div className="container hero-content">
                    <div className="hero-badge">✨ Your Travel Companion</div>
                    <h1>Travel Hacks & Requirements</h1>
                    <p>Everything you need to know before your next adventure. Search visa rules, safety levels, and local tips.</p>
                </div>
            </div>

            {/* Search Section */}
            <div className="container search-section-modern">
                <div className="search-card">
                    <div className="search-header">
                        <span className="search-icon">🔍</span>
                        <h2>Check Entry Requirements</h2>
                    </div>
                    <p className="search-subtitle">Search any destination to see visa, passport, safety, and travel info</p>

                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Where are you traveling? (e.g., Japan, Dubai, France...)"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setSelectedCountry(null);
                            }}
                        />
                        <div className="search-input-icon">🌍</div>

                        {searchTerm && (
                            <div className="search-dropdown">
                                {filteredCountries.length > 0 ? (
                                    filteredCountries.map(country => (
                                        <div
                                            key={country.id}
                                            className="dropdown-item"
                                            onClick={() => {
                                                setSelectedCountry(country);
                                                setSearchTerm('');
                                            }}
                                        >
                                            <span className="item-flag">{country.flag}</span>
                                            <div className="item-info">
                                                <span className="item-name">{country.country}</span>
                                                <span className="item-capital">{country.capital}</span>
                                            </div>
                                            <span className="item-arrow">→</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="no-results">
                                        <span>😕</span> No destinations found
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Country Details */}
            {selectedCountry && (
                <div className="container country-details-modern animate-slide-up">
                    {/* Country Banner */}
                    <div className="country-banner">
                        <div className="banner-bg"></div>
                        <div className="banner-content">
                            <span className="country-flag-xl">{selectedCountry.flag}</span>
                            <div className="banner-text">
                                <h2>{selectedCountry.country}</h2>
                                <p>Capital: {selectedCountry.capital}</p>
                            </div>
                            <button className="close-btn" onClick={() => setSelectedCountry(null)}>
                                <span>×</span>
                            </button>
                        </div>
                    </div>

                    {/* Requirements Grid */}
                    <div className="requirements-grid-modern">
                        {/* Visa Card */}
                        <div className="req-card visa-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper visa">
                                <span>🛂</span>
                            </div>
                            <h4>Visa Requirements</h4>
                            <p>{selectedCountry.visa}</p>
                            <div className={`status-badge ${getVisaStatus(selectedCountry.visa).type}`}>
                                {getVisaStatus(selectedCountry.visa).label}
                            </div>
                        </div>

                        {/* Passport Card */}
                        <div className="req-card passport-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper passport">
                                <span>📘</span>
                            </div>
                            <h4>Passport Validity</h4>
                            <p>{selectedCountry.passport}</p>
                        </div>

                        {/* Safety Card */}
                        <div className="req-card safety-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper safety">
                                <span>⚠️</span>
                            </div>
                            <h4>Safety Advisory</h4>
                            <p>{selectedCountry.safety}</p>
                            <div className={`status-badge ${getSafetyStatus(selectedCountry.safety).type}`}>
                                {getSafetyStatus(selectedCountry.safety).label}
                            </div>
                        </div>

                        {/* Currency Card */}
                        <div className="req-card currency-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper currency">
                                <span>💰</span>
                            </div>
                            <h4>Currency</h4>
                            <p>{selectedCountry.currency}</p>
                        </div>

                        {/* Power Card */}
                        <div className="req-card power-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper power">
                                <span>🔌</span>
                            </div>
                            <h4>Power & Voltage</h4>
                            <p>{selectedCountry.voltage}</p>
                        </div>

                        {/* Sources Card */}
                        <div className="req-card sources-card">
                            <div className="card-glow"></div>
                            <div className="card-icon-wrapper sources">
                                <span>🔗</span>
                            </div>
                            <h4>Official Sources</h4>
                            <div className="sources-tags">
                                {selectedCountry.sources.map((source, idx) => (
                                    <span key={idx} className="source-chip">{source}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Weather Section */}
                    <WeatherWidget lat={selectedCountry.lat} long={selectedCountry.long} city={selectedCountry.capital} />

                    {/* Currency Converter Section */}
                    <CurrencyConverter currencyName={selectedCountry.currency} />

                    {/* Popular Destinations Section */}
                    {travelDestinations[selectedCountry.country] && (
                        <div className="destinations-section">
                            <div className="destinations-header">
                                <div className="destinations-icon">📍</div>
                                <h4>Popular Destinations in {selectedCountry.country}</h4>
                            </div>
                            <div className="destinations-list">
                                {travelDestinations[selectedCountry.country].map((dest, idx) => (
                                    <div key={idx} className="destination-card-enhanced">
                                        <div className="destination-image-large">
                                            <img
                                                src={dest.image}
                                                alt={dest.name}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
                                                }}
                                            />
                                        </div>
                                        <div className="destination-content">
                                            <h5 className="destination-title">{dest.name}</h5>
                                            <p className="destination-desc">{dest.desc}</p>
                                            <div className="destination-essentials">
                                                <div className="essential-item">
                                                    <span className="essential-icon">⏰</span>
                                                    <div>
                                                        <strong>Best Time to Visit</strong>
                                                        <p>{dest.bestTime}</p>
                                                    </div>
                                                </div>
                                                <div className="essential-item">
                                                    <span className="essential-icon">💰</span>
                                                    <div>
                                                        <strong>Cost Breakdown</strong>
                                                        <p>{dest.cost}</p>
                                                    </div>
                                                </div>
                                                <div className="essential-item">
                                                    <span className="essential-icon">🚇</span>
                                                    <div>
                                                        <strong>How to Reach</strong>
                                                        <p>{dest.howToReach}</p>
                                                    </div>
                                                </div>
                                                <div className="essential-item">
                                                    <span className="essential-icon">🤫</span>
                                                    <div>
                                                        <strong>Insider Tip</strong>
                                                        <p>{dest.insider}</p>
                                                    </div>
                                                </div>
                                                <div className="essential-item">
                                                    <span className="essential-icon">⏱️</span>
                                                    <div>
                                                        <strong>Time Needed</strong>
                                                        <p>{dest.duration}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Government Sources */}
            <div className="container trusted-sources-modern">
                <div className="sources-header">
                    <span className="sources-icon">🏛️</span>
                    <h3>Trusted Government Sources</h3>
                </div>
                <div className="sources-grid-modern">
                    <a href="https://travel.gc.ca/" target="_blank" rel="noopener noreferrer" className="source-card-modern">
                        <div className="source-flag">🇨🇦</div>
                        <div className="source-details">
                            <h4>Government of Canada</h4>
                            <p>Official Travel Advice & Advisories</p>
                        </div>
                        <span className="source-arrow">↗</span>
                    </a>
                    <a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer" className="source-card-modern">
                        <div className="source-flag">🇺🇸</div>
                        <div className="source-details">
                            <h4>US State Department</h4>
                            <p>Travel Advisories & Information</p>
                        </div>
                        <span className="source-arrow">↗</span>
                    </a>
                    <a href="https://www.gov.uk/foreign-travel-advice" target="_blank" rel="noopener noreferrer" className="source-card-modern">
                        <div className="source-flag">🇬🇧</div>
                        <div className="source-details">
                            <h4>UK FCDO</h4>
                            <p>Foreign Travel Advice</p>
                        </div>
                        <span className="source-arrow">↗</span>
                    </a>
                    <a href="https://www.iatatravelcentre.com/" target="_blank" rel="noopener noreferrer" className="source-card-modern">
                        <div className="source-flag">✈️</div>
                        <div className="source-details">
                            <h4>IATA Travel Centre</h4>
                            <p>Passport, Visa & Health Rules</p>
                        </div>
                        <span className="source-arrow">↗</span>
                    </a>
                </div>
            </div>

            <style>{`
                .travel-hacks-page-modern {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
                }

                /* Hero Section */
                .hacks-hero-modern {
                    position: relative;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                    padding: 80px 0 100px;
                    overflow: hidden;
                }
                .hero-bg-shapes {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }
                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    animation: float 6s ease-in-out infinite;
                }
                .shape-1 {
                    width: 300px;
                    height: 300px;
                    top: -100px;
                    right: 10%;
                    animation-delay: 0s;
                }
                .shape-2 {
                    width: 200px;
                    height: 200px;
                    bottom: -50px;
                    left: 5%;
                    animation-delay: 2s;
                }
                .shape-3 {
                    width: 150px;
                    height: 150px;
                    top: 40%;
                    right: 30%;
                    animation-delay: 4s;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    color: white;
                }
                .hero-badge {
                    display: inline-block;
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                    border: 1px solid rgba(255,255,255,0.3);
                }
                .hero-content h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 15px;
                    text-shadow: 0 2px 20px rgba(0,0,0,0.2);
                }
                .hero-content p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Search Section */
                .search-section-modern {
                    margin-top: -50px;
                    position: relative;
                    z-index: 10;
                    margin-bottom: 40px;
                }
                .search-card {
                    background: white;
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    border: 1px solid rgba(255,255,255,0.8);
                }
                .search-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 8px;
                }
                .search-icon {
                    font-size: 1.5rem;
                }
                .search-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #1e293b;
                }
                .search-subtitle {
                    color: #64748b;
                    margin-bottom: 25px;
                }
                .search-input-wrapper {
                    position: relative;
                }
                .search-input-wrapper input {
                    width: 100%;
                    padding: 20px 60px 20px 25px;
                    border: 2px solid #e2e8f0;
                    border-radius: 16px;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    background: #f8fafc;
                }
                .search-input-wrapper input:focus {
                    outline: none;
                    border-color: #667eea;
                    background: white;
                    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
                }
                .search-input-icon {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 1.5rem;
                }
                .search-dropdown {
                    position: absolute;
                    top: calc(100% + 10px);
                    left: 0;
                    right: 0;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                    max-height: 350px;
                    overflow-y: auto;
                    z-index: 100;
                    border: 1px solid #e2e8f0;
                }
                .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 16px 20px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border-bottom: 1px solid #f1f5f9;
                }
                .dropdown-item:hover {
                    background: linear-gradient(90deg, #f8fafc 0%, #ede9fe 100%);
                }
                .item-flag {
                    font-size: 2rem;
                }
                .item-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .item-name {
                    font-weight: 600;
                    color: #1e293b;
                }
                .item-capital {
                    font-size: 0.85rem;
                    color: #94a3b8;
                }
                .item-arrow {
                    color: #667eea;
                    font-size: 1.2rem;
                }
                .no-results {
                    padding: 30px;
                    text-align: center;
                    color: #94a3b8;
                }

                /* Country Details */
                .country-details-modern {
                    margin-bottom: 50px;
                }
                .country-banner {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    margin-bottom: 30px;
                }
                .banner-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .banner-content {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 30px 40px;
                    color: white;
                }
                .country-flag-xl {
                    font-size: 4rem;
                    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.2));
                }
                .banner-text {
                    flex: 1;
                }
                .banner-text h2 {
                    margin: 0;
                    font-size: 2rem;
                    font-weight: 700;
                }
                .banner-text p {
                    margin: 5px 0 0;
                    opacity: 0.8;
                }
                .close-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255,255,255,0.2);
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .close-btn:hover {
                    background: rgba(255,255,255,0.3);
                    transform: rotate(90deg);
                }

                /* Requirements Grid */
                .requirements-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 30px;
                }
                @media (max-width: 900px) {
                    .requirements-grid-modern {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .requirements-grid-modern {
                        grid-template-columns: 1fr;
                    }
                }
                .req-card {
                    position: relative;
                    background: white;
                    border-radius: 20px;
                    padding: 25px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .req-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
                .card-glow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                }
                .visa-card .card-glow { background: linear-gradient(90deg, #10b981, #34d399); }
                .passport-card .card-glow { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
                .safety-card .card-glow { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
                .currency-card .card-glow { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
                .power-card .card-glow { background: linear-gradient(90deg, #ec4899, #f472b6); }
                .sources-card .card-glow { background: linear-gradient(90deg, #06b6d4, #22d3ee); }

                .card-icon-wrapper {
                    width: 50px;
                    height: 50px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                }
                .card-icon-wrapper.visa { background: linear-gradient(135deg, #d1fae5, #a7f3d0); }
                .card-icon-wrapper.passport { background: linear-gradient(135deg, #dbeafe, #bfdbfe); }
                .card-icon-wrapper.safety { background: linear-gradient(135deg, #fef3c7, #fde68a); }
                .card-icon-wrapper.currency { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }
                .card-icon-wrapper.power { background: linear-gradient(135deg, #fce7f3, #fbcfe8); }
                .card-icon-wrapper.sources { background: linear-gradient(135deg, #cffafe, #a5f3fc); }

                .req-card h4 {
                    margin: 0 0 10px;
                    font-size: 1rem;
                    color: #64748b;
                    font-weight: 600;
                }
                .req-card p {
                    margin: 0;
                    color: #1e293b;
                    font-weight: 500;
                    line-height: 1.5;
                }

                /* Status Badges */
                .status-badge {
                    display: inline-block;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-top: 12px;
                }
                .status-badge.success {
                    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
                    color: #047857;
                }
                .status-badge.warning {
                    background: linear-gradient(135deg, #fef3c7, #fde68a);
                    color: #b45309;
                }
                .status-badge.danger {
                    background: linear-gradient(135deg, #fee2e2, #fecaca);
                    color: #dc2626;
                }
                .status-badge.critical {
                    background: linear-gradient(135deg, #fecaca, #f87171);
                    color: #991b1b;
                }
                .status-badge.info {
                    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
                    color: #4338ca;
                }

                /* Sources Tags */
                .sources-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 10px;
                }
                .source-chip {
                    background: linear-gradient(135deg, #e0f2fe, #bae6fd);
                    color: #0369a1;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                /* Weather Widget */
                .weather-widget-modern {
                    background: white;
                    border-radius: 24px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                }
                .weather-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                }
                .weather-icon-large {
                    font-size: 2rem;
                }
                .weather-header h4 {
                    margin: 0;
                    font-size: 1.3rem;
                    color: #1e293b;
                }
                .weather-loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    padding: 40px;
                    color: #64748b;
                }
                .loading-spinner {
                    width: 24px;
                    height: 24px;
                    border: 3px solid #e2e8f0;
                    border-top-color: #667eea;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .forecast-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 12px;
                }
                @media (max-width: 768px) {
                    .forecast-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                .forecast-card {
                    background: #f8fafc;
                    border-radius: 16px;
                    padding: 15px 10px;
                    text-align: center;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }
                .forecast-card:hover {
                    transform: translateY(-3px);
                    border-color: #667eea;
                    background: white;
                }
                .forecast-card.today {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .forecast-card.today .forecast-day-name,
                .forecast-card.today .temp-min {
                    color: rgba(255,255,255,0.8);
                }
                .forecast-card.today .temp-max {
                    color: white;
                }
                .forecast-day-name {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #64748b;
                    margin-bottom: 5px;
                }
                .forecast-date {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .forecast-icon {
                    font-size: 2rem;
                    margin-bottom: 10px;
                }
                .forecast-temps {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 8px;
                }
                .temp-max {
                    font-weight: 700;
                    color: #1e293b;
                }
                .temp-min {
                    color: #94a3b8;
                }
                .temp-bar {
                    height: 4px;
                    background: #e2e8f0;
                    border-radius: 2px;
                    overflow: hidden;
                }
                .forecast-card.today .temp-bar {
                    background: rgba(255,255,255,0.3);
                }
                .temp-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #f59e0b, #ef4444);
                    border-radius: 2px;
                }
                .forecast-card.today .temp-fill {
                    background: linear-gradient(90deg, #fbbf24, #f472b6);
                }

                /* Trusted Sources */
                .trusted-sources-modern {
                    margin-bottom: 60px;
                }
                .sources-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                }
                .sources-icon {
                    font-size: 1.8rem;
                }
                .sources-header h3 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #1e293b;
                }
                .sources-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }
                .source-card-modern {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background: white;
                    padding: 20px 25px;
                    border-radius: 16px;
                    text-decoration: none;
                    color: inherit;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }
                .source-card-modern:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    border-color: #667eea;
                }
                .source-flag {
                    font-size: 2.5rem;
                }
                .source-details {
                    flex: 1;
                }
                .source-details h4 {
                    margin: 0;
                    color: #1e293b;
                    font-size: 1rem;
                }
                .source-details p {
                    margin: 4px 0 0;
                    color: #64748b;
                    font-size: 0.85rem;
                }
                .source-arrow {
                    color: #667eea;
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                /* Animations */
                .animate-slide-up {
                    animation: slideUp 0.5s ease-out;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Currency Converter Styles */
                .currency-converter-widget {
                    background: white;
                    border-radius: 24px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                    margin-top: 20px;
                }
                .converter-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                }
                .converter-icon {
                    font-size: 2rem;
                }
                .converter-header h4 {
                    margin: 0;
                    font-size: 1.3rem;
                    color: #1e293b;
                    flex: 1;
                }
                .live-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    background: linear-gradient(135deg, #fef2f2, #fee2e2);
                    color: #dc2626;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .converter-main {
                    background: linear-gradient(135deg, #f8fafc 0%, #ede9fe 100%);
                    border-radius: 16px;
                    padding: 25px;
                    margin-bottom: 20px;
                }
                .converter-input-group {
                    margin-bottom: 15px;
                }
                .converter-input-group label {
                    display: block;
                    font-size: 0.85rem;
                    color: #64748b;
                    margin-bottom: 8px;
                    font-weight: 600;
                }
                .input-with-currency {
                    display: flex;
                    align-items: center;
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .input-with-currency:focus-within {
                    border-color: #667eea;
                    box-shadow: 0 0 0 4px rgba(102,126,234,0.1);
                }
                .currency-symbol {
                    padding: 0 15px;
                    font-size: 1.2rem;
                    color: #64748b;
                    font-weight: 600;
                }
                .input-with-currency input {
                    flex: 1;
                    border: none;
                    padding: 15px 10px;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1e293b;
                    outline: none;
                    min-width: 0;
                }
                .input-with-currency input::-webkit-outer-spin-button,
                .input-with-currency input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                .input-with-currency select {
                    border: none;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 15px 20px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    outline: none;
                }
                .converter-arrow {
                    text-align: center;
                    margin: 15px 0;
                    font-size: 1.5rem;
                }
                .converter-result {
                    background: white;
                    border-radius: 16px;
                    padding: 20px;
                    text-align: center;
                    border: 2px solid #e2e8f0;
                }
                .result-label {
                    font-size: 0.85rem;
                    color: #64748b;
                    margin-bottom: 5px;
                }
                .result-amount {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #1e293b;
                    line-height: 1.2;
                }
                .result-currency {
                    font-size: 1.2rem;
                    color: #667eea;
                    margin-left: 10px;
                    font-weight: 600;
                }
                .rate-info {
                    font-size: 0.85rem;
                    color: #94a3b8;
                    margin-top: 8px;
                }
                .popular-rates {
                    background: #f8fafc;
                    border-radius: 16px;
                    padding: 20px;
                    margin-bottom: 15px;
                }
                .rates-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                    font-size: 0.9rem;
                    color: #64748b;
                    font-weight: 600;
                }
                .rates-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }
                @media (max-width: 600px) {
                    .rates-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .rate-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: white;
                    padding: 12px 15px;
                    border-radius: 10px;
                    border: 1px solid #e2e8f0;
                }
                .rate-from {
                    font-weight: 600;
                    color: #1e293b;
                }
                .rate-equals {
                    color: #94a3b8;
                }
                .rate-to {
                    flex: 1;
                    text-align: right;
                    font-weight: 700;
                    color: #667eea;
                }
                .converter-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.75rem;
                    color: #94a3b8;
                }
                .update-time {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .disclaimer {
                    font-style: italic;
                }
                .currency-converter-loading,
                .currency-error {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    padding: 40px;
                    color: #64748b;
                    background: white;
                    border-radius: 24px;
                    margin-top: 20px;
                    border: 1px solid #e2e8f0;
                }
                .currency-error span {
                    font-size: 2rem;
                }

                /* Enhanced Destinations Section Styles */
                .destinations-section {
                    background: white;
                    border-radius: 24px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                    margin-top: 20px;
                }
                .destinations-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                }
                .destinations-icon {
                    font-size: 2rem;
                }
                .destinations-header h4 {
                    margin: 0;
                    font-size: 1.3rem;
                    color: #1e293b;
                }
                .destinations-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                }
                .destination-card-enhanced {
                    background: #f8fafc;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .destination-card-enhanced:hover {
                    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
                    transform: translateY(-4px);
                }
                .destination-image-large {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                }
                .destination-image-large img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .destination-card-enhanced:hover .destination-image-large img {
                    transform: scale(1.08);
                }
                .destination-content {
                    padding: 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .destination-title {
                    margin: 0 0 6px;
                    font-size: 1.25rem;
                    color: #1e293b;
                    font-weight: 700;
                }
                .destination-desc {
                    margin: 0 0 16px;
                    color: #64748b;
                    font-size: 0.9rem;
                    line-height: 1.4;
                }
                .destination-essentials {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    flex: 1;
                }
                .essential-item {
                    display: flex;
                    gap: 10px;
                    padding: 12px;
                    background: white;
                    border-radius: 10px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.2s ease;
                }
                .essential-item:hover {
                    background: #f0f9ff;
                    border-color: #3b82f6;
                }
                .essential-icon {
                    font-size: 1.2rem;
                    flex-shrink: 0;
                }
                .essential-item strong {
                    display: block;
                    color: #1e293b;
                    font-size: 0.8rem;
                    margin-bottom: 2px;
                }
                .essential-item p {
                    margin: 0;
                    color: #64748b;
                    font-size: 0.85rem;
                    line-height: 1.3;
                }
                @media (max-width: 900px) {
                    .destinations-list {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 768px) {
                    .destination-image-large {
                        height: 180px;
                    }
                    .destination-title {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default TravelHacks;
