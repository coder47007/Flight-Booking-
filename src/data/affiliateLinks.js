/**
 * Central Affiliate Configuration
 * All affiliate partner IDs and URL generators in one place
 * Update your affiliate IDs here after signing up with each provider
 */

// ============================================
// AFFILIATE IDS - UPDATE THESE WITH YOUR IDS
// ============================================
export const AFFILIATE_IDS = {
    // Flights
    travelpayouts: '690795',           // Your existing Travelpayouts/Aviasales ID
    skyscanner: 'YOUR_SKYSCANNER_ID',  // Pending approval - Sign up: https://www.skyscanner.net/affiliates/
    kiwi: '690795',                    // Uses Travelpayouts
    bookingFlights: '690795',          // Uses Travelpayouts

    // Hotels
    hotellook: '690795',               // Same as Travelpayouts
    bookingHotels: '690795',           // Uses Travelpayouts
    agoda: '690795',                   // Uses Travelpayouts
    hotelsCombined: '690795',          // Uses Travelpayouts

    // Car Rentals (pending approval)
    rentalcars: 'skystay',             // Your existing ID
    discoverCars: 'YOUR_DC_ID',        // Pending approval - Sign up: https://www.discovercars.com/affiliates
};

// ============================================
// HELPER: Format date for URLs
// ============================================
const formatDateForUrl = (dateStr) => {
    if (!dateStr) {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const day = String(nextMonth.getDate()).padStart(2, '0');
        const month = String(nextMonth.getMonth() + 1).padStart(2, '0');
        return `${day}${month}`;
    }
    const [year, month, day] = dateStr.split('-');
    return `${day}${month}`;
};

const formatDateISO = (dateStr) => {
    if (!dateStr) {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return nextMonth.toISOString().split('T')[0];
    }
    return dateStr;
};

// ============================================
// FLIGHT URL GENERATORS
// ============================================
export const flightUrls = {
    /**
     * Travelpayouts/Aviasales - Your primary affiliate
     */
    travelpayouts: (from, to, departDate, returnDate, passengers = 1) => {
        const origin = from?.toUpperCase() || 'NYC';
        const dest = to?.toUpperCase() || '';
        const depDate = formatDateForUrl(departDate);

        if (origin.length === 3 && dest.length === 3) {
            let url = `https://www.aviasales.com/search/${origin}${depDate}${dest}`;
            if (returnDate) {
                url += formatDateForUrl(returnDate);
            }
            url += `${passengers}?marker=${AFFILIATE_IDS.travelpayouts}`;
            return url;
        }

        const params = new URLSearchParams({
            marker: AFFILIATE_IDS.travelpayouts,
            origin_name: from || '',
            destination_name: to || '',
            depart_date: departDate || '',
            adults: passengers
        });
        if (returnDate) params.append('return_date', returnDate);
        return `https://www.aviasales.com/?${params.toString()}`;
    },

    /**
     * Skyscanner - Great for price alerts and flexible dates
     */
    skyscanner: (from, to, departDate, returnDate, passengers = 1) => {
        const depDate = formatDateISO(departDate);
        const origin = encodeURIComponent(from || 'New York');
        const dest = encodeURIComponent(to || '');

        let url = `https://www.skyscanner.com/transport/flights/${origin}/${dest}/${depDate.replace(/-/g, '')}`;
        if (returnDate) {
            url += `/${returnDate.replace(/-/g, '')}`;
        }
        url += `/?adultsv2=${passengers}&associateid=${AFFILIATE_IDS.skyscanner}`;
        return url;
    },

    /**
     * Kiwi.com - Best for flexible/nomad travelers, multi-city
     */
    kiwi: (from, to, departDate, returnDate, passengers = 1) => {
        const depDate = formatDateISO(departDate);
        const params = new URLSearchParams({
            affilid: AFFILIATE_IDS.kiwi,
            flyFrom: from || 'NYC',
            to: to || '',
            dateFrom: depDate,
            adults: passengers
        });
        if (returnDate) {
            params.append('returnFrom', returnDate);
            params.append('returnTo', returnDate);
        }
        return `https://www.kiwi.com/en/search/results?${params.toString()}`;
    },

    /**
     * Booking.com Flights
     */
    booking: (from, to, departDate, returnDate, passengers = 1) => {
        const depDate = formatDateISO(departDate);
        const params = new URLSearchParams({
            aid: AFFILIATE_IDS.bookingFlights,
            type: 'flights',
            from: from || '',
            to: to || '',
            depart: depDate,
            adults: passengers
        });
        if (returnDate) params.append('return', returnDate);
        return `https://www.booking.com/flights/search.html?${params.toString()}`;
    }
};

// ============================================
// HOTEL URL GENERATORS
// ============================================
export const hotelUrls = {
    /**
     * Hotellook (Travelpayouts)
     */
    hotellook: (destination, checkIn, checkOut, rooms = 1) => {
        const params = new URLSearchParams({
            marker: AFFILIATE_IDS.hotellook,
            destination: destination || '',
            checkIn: checkIn || '',
            checkOut: checkOut || '',
            rooms: rooms
        });
        return `https://search.hotellook.com/?${params.toString()}`;
    },

    /**
     * Booking.com Hotels
     */
    booking: (destination, checkIn, checkOut, rooms = 1) => {
        const params = new URLSearchParams({
            aid: AFFILIATE_IDS.bookingHotels,
            ss: destination || '',
            checkin: checkIn || '',
            checkout: checkOut || '',
            no_rooms: rooms
        });
        return `https://www.booking.com/searchresults.html?${params.toString()}`;
    },

    /**
     * Agoda
     */
    agoda: (destination, checkIn, checkOut, rooms = 1) => {
        const params = new URLSearchParams({
            cid: AFFILIATE_IDS.agoda,
            textToSearch: destination || '',
            checkIn: checkIn || '',
            checkOut: checkOut || '',
            rooms: rooms
        });
        return `https://www.agoda.com/search?${params.toString()}`;
    },

    /**
     * HotelsCombined
     */
    hotelsCombined: (destination, checkIn, checkOut, rooms = 1) => {
        const params = new URLSearchParams({
            a_aid: AFFILIATE_IDS.hotelsCombined,
            ss: destination || '',
            checkin: checkIn || '',
            checkout: checkOut || '',
            rooms: rooms
        });
        return `https://www.hotelscombined.com/Search?${params.toString()}`;
    }
};

// ============================================
// CAR RENTAL URL GENERATORS
// ============================================
export const carUrls = {
    /**
     * Rentalcars.com
     */
    rentalcars: (location) => {
        return `https://www.rentalcars.com/SearchResults.do?country=${encodeURIComponent(location || '')}&affiliateCode=${AFFILIATE_IDS.rentalcars}`;
    },

    /**
     * DiscoverCars
     */
    discoverCars: (location, pickupDate, dropoffDate) => {
        const params = new URLSearchParams({
            a_aid: AFFILIATE_IDS.discoverCars,
            location: location || '',
        });
        if (pickupDate) params.append('pick_date', pickupDate);
        if (dropoffDate) params.append('drop_date', dropoffDate);
        return `https://www.discovercars.com/search?${params.toString()}`;
    }
};

// ============================================
// AFFILIATE PROVIDER INFO
// ============================================
export const PROVIDERS = {
    flights: [
        {
            id: 'travelpayouts',
            name: 'Aviasales',
            logo: '✈️',
            tagline: 'Best Overall Prices',
            color: '#ff6b35',
            getUrl: flightUrls.travelpayouts
        },
        {
            id: 'skyscanner',
            name: 'Skyscanner',
            logo: '🔍',
            tagline: 'Price Alerts & Flexible Dates',
            color: '#0770e3',
            getUrl: flightUrls.skyscanner
        },
        {
            id: 'kiwi',
            name: 'Kiwi.com',
            logo: '🥝',
            tagline: 'Flexible & Multi-City Routes',
            color: '#00a991',
            getUrl: flightUrls.kiwi
        },
        {
            id: 'booking',
            name: 'Booking.com',
            logo: '🏨',
            tagline: 'Bundle with Hotels',
            color: '#003580',
            getUrl: flightUrls.booking
        }
    ],
    hotels: [
        {
            id: 'hotellook',
            name: 'Hotellook',
            logo: '🏨',
            tagline: 'Compare 70+ booking sites',
            color: '#ff6b35',
            getUrl: hotelUrls.hotellook
        },
        {
            id: 'booking',
            name: 'Booking.com',
            logo: '🅱️',
            tagline: 'Free cancellation available',
            color: '#003580',
            getUrl: hotelUrls.booking
        },
        {
            id: 'agoda',
            name: 'Agoda',
            logo: '🅰️',
            tagline: 'Best for Asia',
            color: '#5542f6',
            getUrl: hotelUrls.agoda
        },
        {
            id: 'hotelsCombined',
            name: 'HotelsCombined',
            logo: '🔗',
            tagline: 'Price comparison',
            color: '#ec5b24',
            getUrl: hotelUrls.hotelsCombined
        }
    ],
    cars: [
        {
            id: 'rentalcars',
            name: 'Rentalcars.com',
            logo: '🚗',
            tagline: '900+ Companies Worldwide',
            color: '#f5a623',
            getUrl: carUrls.rentalcars
        },
        {
            id: 'discoverCars',
            name: 'DiscoverCars',
            logo: '🚙',
            tagline: 'Best Price Guarantee',
            color: '#3498db',
            getUrl: carUrls.discoverCars
        }
    ]
};

// ============================================
// QUICK ACCESS FUNCTIONS
// ============================================

/**
 * Get all flight search URLs for comparison
 */
export const getFlightComparisonUrls = (from, to, departDate, returnDate, passengers) => {
    return PROVIDERS.flights.map(provider => ({
        ...provider,
        url: provider.getUrl(from, to, departDate, returnDate, passengers)
    }));
};

/**
 * Get all hotel search URLs for comparison
 */
export const getHotelComparisonUrls = (destination, checkIn, checkOut, rooms) => {
    return PROVIDERS.hotels.map(provider => ({
        ...provider,
        url: provider.getUrl(destination, checkIn, checkOut, rooms)
    }));
};

/**
 * Get all car rental URLs
 */
export const getCarRentalUrls = (location, pickupDate, dropoffDate) => {
    return PROVIDERS.cars.map(provider => ({
        ...provider,
        url: provider.id === 'discoverCars'
            ? provider.getUrl(location, pickupDate, dropoffDate)
            : provider.getUrl(location)
    }));
};
