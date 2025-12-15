import { generateHotelAffiliateUrl } from '../data/mockData';

function HotelCard({ hotel, onBook, checkIn, checkOut }) {
    const handleBookClick = () => {
        // Generate dynamic affiliate URL with search dates
        const affiliateUrl = checkIn && checkOut
            ? generateHotelAffiliateUrl(hotel.location.split(',')[1]?.trim() || hotel.location, checkIn, checkOut)
            : hotel.affiliateUrl;

        // Open affiliate link in new tab
        window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
        if (onBook) onBook(hotel);
    };

    // Generate star display
    const renderStars = (count) => {
        return '★'.repeat(count) + '☆'.repeat(5 - count);
    };

    // Calculate discount percentage
    const discountPercent = hotel.originalPrice
        ? Math.round((1 - hotel.price / hotel.originalPrice) * 100)
        : 0;

    return (
        <div className="hotel-card animate-fadeIn">
            {/* Hotel Image */}
            <div className="hotel-image">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop';
                    }}
                />
            </div>

            {/* Hotel Info */}
            <div className="hotel-info">
                <div className="hotel-header">
                    <div>
                        <h3 className="hotel-name">{hotel.name}</h3>
                        <span className="hotel-stars">{renderStars(hotel.stars)}</span>
                    </div>
                    {discountPercent > 0 && (
                        <span style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600'
                        }}>
                            -{discountPercent}%
                        </span>
                    )}
                </div>

                <p className="hotel-location">📍 {hotel.location}</p>

                {/* Rating Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    <span style={{
                        background: 'var(--primary-500)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontWeight: '700',
                        fontSize: '14px'
                    }}>
                        {hotel.rating}
                    </span>
                    <span style={{ color: 'var(--gray-500)', fontSize: '14px' }}>
                        ({hotel.reviewCount.toLocaleString()} reviews)
                    </span>
                </div>

                {/* Amenities */}
                <div className="hotel-amenities">
                    {hotel.amenities.slice(0, 4).map(amenity => (
                        <span key={amenity} className="amenity-tag">
                            {amenity}
                        </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                        <span className="amenity-tag">+{hotel.amenities.length - 4} more</span>
                    )}
                </div>

                {/* Footer with Price */}
                <div className="hotel-footer">
                    <div className="hotel-price">
                        {hotel.originalPrice && (
                            <span style={{
                                textDecoration: 'line-through',
                                color: 'var(--gray-400)',
                                fontSize: '14px',
                                marginRight: '8px'
                            }}>
                                ${hotel.originalPrice}
                            </span>
                        )}
                        <span className="price">${hotel.price}</span>
                        <span className="price-label">per night</span>
                    </div>
                    <button className="book-btn" onClick={handleBookClick}>
                        Book Now →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
