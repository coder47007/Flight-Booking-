import FlightCard from './FlightCard';
import HotelCard from './HotelCard';

function ResultsList({ results, searchType, sortBy, onSortChange, onBook, searchParams }) {
    if (!results || results.length === 0) {
        return (
            <div className="empty-state animate-fadeIn">
                <div className="empty-icon">
                    {searchType === 'flights' ? '✈️' : '🏨'}
                </div>
                <h3 className="empty-title">No results found</h3>
                <p className="empty-text">
                    Try adjusting your search criteria or filters to find what you're looking for.
                </p>
            </div>
        );
    }

    return (
        <div className="results-container">
            {/* Results Header */}
            <div className="results-header">
                <span className="results-count">
                    <span>{results.length}</span> {searchType === 'flights' ? 'flights' : 'hotels'} found
                </span>
                <select
                    className="sort-select"
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    {searchType === 'flights' && (
                        <option value="duration">Duration: Shortest</option>
                    )}
                    {searchType === 'hotels' && (
                        <>
                            <option value="rating">Rating: Highest</option>
                            <option value="stars">Stars: Highest</option>
                        </>
                    )}
                </select>
            </div>

            {/* Results Grid */}
            <div className="results-grid">
                {searchType === 'flights'
                    ? results.map((flight, index) => (
                        <FlightCard
                            key={flight.id}
                            flight={flight}
                            onBook={onBook}
                            searchDate={searchParams?.checkIn}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        />
                    ))
                    : results.map((hotel, index) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            onBook={onBook}
                            checkIn={searchParams?.checkIn}
                            checkOut={searchParams?.checkOut}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ResultsList;
