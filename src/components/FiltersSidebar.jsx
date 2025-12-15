import { airlines, hotelAmenities } from '../data/mockData';

function FiltersSidebar({
    searchType,
    filters,
    setFilters,
    priceRange,
    onClearFilters,
    isOpen,
    onClose
}) {
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value ? parseInt(value) : ''
        }));
    };

    const handleAirlineChange = (airline) => {
        setFilters(prev => {
            const currentAirlines = prev.airlines || [];
            const newAirlines = currentAirlines.includes(airline)
                ? currentAirlines.filter(a => a !== airline)
                : [...currentAirlines, airline];
            return { ...prev, airlines: newAirlines };
        });
    };

    const handleStopsChange = (stops) => {
        setFilters(prev => ({
            ...prev,
            stops: prev.stops === stops ? null : stops
        }));
    };

    const handleStarsChange = (star) => {
        setFilters(prev => {
            const currentStars = prev.stars || [];
            const newStars = currentStars.includes(star)
                ? currentStars.filter(s => s !== star)
                : [...currentStars, star];
            return { ...prev, stars: newStars };
        });
    };

    const handleAmenityChange = (amenity) => {
        setFilters(prev => {
            const currentAmenities = prev.amenities || [];
            const newAmenities = currentAmenities.includes(amenity)
                ? currentAmenities.filter(a => a !== amenity)
                : [...currentAmenities, amenity];
            return { ...prev, amenities: newAmenities };
        });
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
                onClick={onClose}
            />

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h3 className="sidebar-title">🎯 Filters</h3>
                        <button
                            className="btn btn-ghost"
                            onClick={onClearFilters}
                            style={{ padding: '4px 12px', fontSize: '12px' }}
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Price Range Filter */}
                    <div className="filter-section">
                        <h4 className="filter-title">💰 Price Range</h4>
                        <div className="price-range">
                            <div className="price-inputs">
                                <input
                                    type="number"
                                    name="minPrice"
                                    className="input price-input"
                                    placeholder={`$${priceRange.min}`}
                                    value={filters.minPrice || ''}
                                    onChange={handlePriceChange}
                                    min={priceRange.min}
                                    max={priceRange.max}
                                />
                                <span className="price-separator">–</span>
                                <input
                                    type="number"
                                    name="maxPrice"
                                    className="input price-input"
                                    placeholder={`$${priceRange.max}`}
                                    value={filters.maxPrice || ''}
                                    onChange={handlePriceChange}
                                    min={priceRange.min}
                                    max={priceRange.max}
                                />
                            </div>
                            <input
                                type="range"
                                className="range-slider"
                                min={priceRange.min}
                                max={priceRange.max}
                                value={filters.maxPrice || priceRange.max}
                                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
                            />
                        </div>
                    </div>

                    {/* Flight-specific filters */}
                    {searchType === 'flights' && (
                        <>
                            {/* Airlines Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">✈️ Airlines</h4>
                                <div className="filter-options">
                                    {airlines.map(airline => (
                                        <label key={airline} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={(filters.airlines || []).includes(airline)}
                                                onChange={() => handleAirlineChange(airline)}
                                            />
                                            {airline}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Stops Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">🛬 Stops</h4>
                                <div className="filter-options">
                                    {[
                                        { value: 0, label: 'Non-stop' },
                                        { value: 1, label: '1 stop' },
                                        { value: 2, label: '2+ stops' }
                                    ].map(option => (
                                        <label key={option.value} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={filters.stops === option.value}
                                                onChange={() => handleStopsChange(option.value)}
                                            />
                                            {option.label}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">⏱️ Max Duration</h4>
                                <select
                                    className="select"
                                    value={filters.maxDuration || ''}
                                    onChange={(e) => setFilters(prev => ({
                                        ...prev,
                                        maxDuration: e.target.value ? parseInt(e.target.value) : null
                                    }))}
                                >
                                    <option value="">Any duration</option>
                                    <option value="5">Under 5 hours</option>
                                    <option value="8">Under 8 hours</option>
                                    <option value="12">Under 12 hours</option>
                                    <option value="18">Under 18 hours</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Hotel-specific filters */}
                    {searchType === 'hotels' && (
                        <>
                            {/* Star Rating Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">⭐ Star Rating</h4>
                                <div className="filter-options">
                                    {[5, 4, 3, 2, 1].map(star => (
                                        <label key={star} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={(filters.stars || []).includes(star)}
                                                onChange={() => handleStarsChange(star)}
                                            />
                                            {'★'.repeat(star)}{'☆'.repeat(5 - star)}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">🏊 Amenities</h4>
                                <div className="filter-options">
                                    {hotelAmenities.map(amenity => (
                                        <label key={amenity} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={(filters.amenities || []).includes(amenity)}
                                                onChange={() => handleAmenityChange(amenity)}
                                            />
                                            {amenity}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Min Rating Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">📊 Guest Rating</h4>
                                <select
                                    className="select"
                                    value={filters.minRating || ''}
                                    onChange={(e) => setFilters(prev => ({
                                        ...prev,
                                        minRating: e.target.value ? parseFloat(e.target.value) : null
                                    }))}
                                >
                                    <option value="">Any rating</option>
                                    <option value="9">9+ Exceptional</option>
                                    <option value="8">8+ Excellent</option>
                                    <option value="7">7+ Good</option>
                                    <option value="6">6+ Pleasant</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Mobile Close Button */}
                    <button
                        className="btn btn-primary"
                        onClick={onClose}
                        style={{ width: '100%', marginTop: '16px', display: 'none' }}
                        id="mobile-close-btn"
                    >
                        Apply Filters
                    </button>
                </div>
            </aside>
        </>
    );
}

export default FiltersSidebar;
