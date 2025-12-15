import { generateFlightAffiliateUrl } from '../data/mockData';

function FlightCard({ flight, onBook, searchDate }) {
    const handleBookClick = () => {
        // Generate dynamic affiliate URL with search date
        const affiliateUrl = searchDate
            ? generateFlightAffiliateUrl(flight.departure.code, flight.arrival.code, searchDate)
            : flight.affiliateUrl;

        // Open affiliate link in new tab
        window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
        if (onBook) onBook(flight);
    };

    return (
        <div className="flight-card animate-fadeIn">
            {/* Airline Info */}
            <div className="airline-info">
                <div className="airline-logo">
                    {flight.airlineCode}
                </div>
                <span className="airline-name">{flight.airline}</span>
            </div>

            {/* Flight Details */}
            <div className="flight-details">
                {/* Departure */}
                <div className="flight-time">
                    <div className="time">{flight.departure.time}</div>
                    <div className="city">{flight.departure.code}</div>
                </div>

                {/* Flight Path */}
                <div className="flight-path">
                    <span className="duration">{flight.duration}</span>
                    <div className="path-line"></div>
                    <span className={`stops ${flight.stops === 0 ? 'non-stop' : ''}`}>
                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </span>
                </div>

                {/* Arrival */}
                <div className="flight-time">
                    <div className="time">{flight.arrival.time}</div>
                    <div className="city">{flight.arrival.code}</div>
                </div>
            </div>

            {/* Price & Book */}
            <div className="flight-price">
                <div className="price">${flight.price}</div>
                <div className="price-label">per person</div>
                <button className="book-btn" onClick={handleBookClick}>
                    Book Now →
                </button>
            </div>
        </div>
    );
}

export default FlightCard;
