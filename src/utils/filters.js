// Filter utility functions for flights and hotels

/**
 * Filter flights based on provided criteria
 */
export function filterFlights(flights, filters) {
    return flights.filter(flight => {
        // Price filter
        if (filters.minPrice && flight.price < filters.minPrice) return false;
        if (filters.maxPrice && flight.price > filters.maxPrice) return false;

        // Airline filter
        if (filters.airlines && filters.airlines.length > 0) {
            if (!filters.airlines.includes(flight.airline)) return false;
        }

        // Stops filter
        if (filters.stops !== undefined && filters.stops !== null) {
            if (filters.stops === 0 && flight.stops !== 0) return false;
            if (filters.stops === 1 && flight.stops > 1) return false;
            // 2+ means any number of stops is allowed
        }

        // Duration filter (in hours)
        if (filters.maxDuration) {
            const durationMatch = flight.duration.match(/(\d+)h/);
            if (durationMatch) {
                const hours = parseInt(durationMatch[1]);
                if (hours > filters.maxDuration) return false;
            }
        }

        // Search query filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            const matchesOrigin = flight.departure.city.toLowerCase().includes(query) ||
                flight.departure.code.toLowerCase().includes(query);
            const matchesDest = flight.arrival.city.toLowerCase().includes(query) ||
                flight.arrival.code.toLowerCase().includes(query);
            if (!matchesOrigin && !matchesDest) return false;
        }

        return true;
    });
}

/**
 * Filter hotels based on provided criteria
 */
export function filterHotels(hotels, filters) {
    return hotels.filter(hotel => {
        // Price filter
        if (filters.minPrice && hotel.price < filters.minPrice) return false;
        if (filters.maxPrice && hotel.price > filters.maxPrice) return false;

        // Stars filter
        if (filters.stars && filters.stars.length > 0) {
            if (!filters.stars.includes(hotel.stars)) return false;
        }

        // Amenities filter
        if (filters.amenities && filters.amenities.length > 0) {
            const hasAllAmenities = filters.amenities.every(amenity =>
                hotel.amenities.includes(amenity)
            );
            if (!hasAllAmenities) return false;
        }

        // Rating filter
        if (filters.minRating && hotel.rating < filters.minRating) return false;

        // Search query filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            const matchesName = hotel.name.toLowerCase().includes(query);
            const matchesLocation = hotel.location.toLowerCase().includes(query);
            if (!matchesName && !matchesLocation) return false;
        }

        return true;
    });
}

/**
 * Sort results by various criteria
 */
export function sortResults(results, sortBy, type = 'flights') {
    const sorted = [...results];

    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);

        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);

        case 'duration':
            if (type === 'flights') {
                return sorted.sort((a, b) => {
                    const getDuration = (d) => {
                        const match = d.duration.match(/(\d+)h\s*(\d*)m?/);
                        return match ? parseInt(match[1]) * 60 + (parseInt(match[2]) || 0) : 0;
                    };
                    return getDuration(a) - getDuration(b);
                });
            }
            return sorted;

        case 'rating':
            if (type === 'hotels') {
                return sorted.sort((a, b) => b.rating - a.rating);
            }
            return sorted;

        case 'stars':
            if (type === 'hotels') {
                return sorted.sort((a, b) => b.stars - a.stars);
            }
            return sorted;

        default:
            return sorted;
    }
}

/**
 * Get unique values for filter options
 */
export function getFilterOptions(data, key) {
    const values = data.map(item => item[key]);
    return [...new Set(values)].sort();
}

/**
 * Get price range from data
 */
export function getPriceRange(data) {
    if (data.length === 0) return { min: 0, max: 1000 };

    const prices = data.map(item => item.price);
    return {
        min: Math.floor(Math.min(...prices)),
        max: Math.ceil(Math.max(...prices))
    };
}
