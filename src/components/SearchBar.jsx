import { useState } from 'react';

function SearchBar({ searchType, setSearchType, onSearch, isSearching }) {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        checkIn: '',
        checkOut: '',
        passengers: 1,
        rooms: 1
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // Validate required fields
        if (searchType === 'flights' && (!formData.from || !formData.to)) {
            alert('Please enter both origin and destination');
            return;
        }
        if (searchType === 'hotels' && !formData.to) {
            alert('Please enter a destination');
            return;
        }
        if (!formData.checkIn) {
            alert('Please select a check-in/departure date');
            return;
        }

        onSearch(formData);
    };

    // Get today's date for min date
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="search-bar animate-slideDown">
            {/* Search Type Toggle */}
            <div className="search-toggle">
                <button
                    type="button"
                    className={`toggle-btn ${searchType === 'flights' ? 'active' : ''}`}
                    onClick={() => setSearchType('flights')}
                >
                    ✈️ Flights
                </button>
                <button
                    type="button"
                    className={`toggle-btn ${searchType === 'hotels' ? 'active' : ''}`}
                    onClick={() => setSearchType('hotels')}
                >
                    🏨 Hotels
                </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch}>
                <div className="search-inputs">
                    {searchType === 'flights' ? (
                        <>
                            <div className="search-input-group">
                                <label htmlFor="from">From (City or Airport Code)</label>
                                <input
                                    type="text"
                                    id="from"
                                    name="from"
                                    placeholder="e.g. NYC or New York"
                                    value={formData.from}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="search-input-group">
                                <label htmlFor="to">To (City or Airport Code)</label>
                                <input
                                    type="text"
                                    id="to"
                                    name="to"
                                    placeholder="e.g. DXB or Dubai"
                                    value={formData.to}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <div className="search-input-group" style={{ gridColumn: 'span 2' }}>
                            <label htmlFor="to">Destination</label>
                            <input
                                type="text"
                                id="to"
                                name="to"
                                placeholder="City name (e.g. Dubai, Paris, London)"
                                value={formData.to}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    <div className="search-input-group">
                        <label htmlFor="checkIn">{searchType === 'flights' ? 'Departure' : 'Check In'}</label>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            min={today}
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="search-input-group">
                        <label htmlFor="checkOut">{searchType === 'flights' ? 'Return (Optional)' : 'Check Out'}</label>
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            min={formData.checkIn || today}
                            value={formData.checkOut}
                            onChange={handleInputChange}
                        />
                    </div>

                    {searchType === 'flights' ? (
                        <div className="search-input-group">
                            <label htmlFor="passengers">Passengers</label>
                            <input
                                type="number"
                                id="passengers"
                                name="passengers"
                                min="1"
                                max="9"
                                value={formData.passengers}
                                onChange={handleInputChange}
                            />
                        </div>
                    ) : (
                        <div className="search-input-group">
                            <label htmlFor="rooms">Rooms</label>
                            <input
                                type="number"
                                id="rooms"
                                name="rooms"
                                min="1"
                                max="10"
                                value={formData.rooms}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}
                </div>

                <div className="search-actions">
                    <button type="submit" className="search-btn" disabled={isSearching}>
                        {isSearching ? (
                            '🔄 Searching...'
                        ) : (
                            <>🔍 Search {searchType === 'flights' ? 'Flights' : 'Hotels'}</>
                        )}
                    </button>
                </div>

                <p className="search-note">
                    ✨ Search opens real-time results from {searchType === 'flights' ? 'Aviasales' : 'Hotellook'} with live prices
                </p>
            </form>
        </div>
    );
}

export default SearchBar;
