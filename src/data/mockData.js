// Mock Flight Data with proper Aviasales deeplinks (Travelpayouts partner)
export const mockFlights = [
    {
        id: 'FL001',
        airline: 'Emirates',
        airlineCode: 'EK',
        flightNumber: 'EK203',
        departure: {
            city: 'New York',
            code: 'JFK',
            time: '08:00',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Dubai',
            code: 'DXB',
            time: '07:30',
            date: '2024-03-16'
        },
        duration: '12h 30m',
        stops: 0,
        price: 899,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/JFK1503DXB1?marker=690795'
    },
    {
        id: 'FL002',
        airline: 'Delta',
        airlineCode: 'DL',
        flightNumber: 'DL100',
        departure: {
            city: 'Los Angeles',
            code: 'LAX',
            time: '14:30',
            date: '2024-03-15'
        },
        arrival: {
            city: 'London',
            code: 'LHR',
            time: '09:15',
            date: '2024-03-16'
        },
        duration: '10h 45m',
        stops: 0,
        price: 756,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/LAX1503LHR1?marker=690795'
    },
    {
        id: 'FL003',
        airline: 'United',
        airlineCode: 'UA',
        flightNumber: 'UA901',
        departure: {
            city: 'Chicago',
            code: 'ORD',
            time: '06:00',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Tokyo',
            code: 'NRT',
            time: '10:30',
            date: '2024-03-16'
        },
        duration: '13h 30m',
        stops: 1,
        price: 1245,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/ORD1503NRT1?marker=690795'
    },
    {
        id: 'FL004',
        airline: 'British Airways',
        airlineCode: 'BA',
        flightNumber: 'BA178',
        departure: {
            city: 'San Francisco',
            code: 'SFO',
            time: '17:00',
            date: '2024-03-15'
        },
        arrival: {
            city: 'London',
            code: 'LHR',
            time: '11:00',
            date: '2024-03-16'
        },
        duration: '10h 00m',
        stops: 0,
        price: 682,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/SFO1503LHR1?marker=690795'
    },
    {
        id: 'FL005',
        airline: 'Lufthansa',
        airlineCode: 'LH',
        flightNumber: 'LH401',
        departure: {
            city: 'New York',
            code: 'JFK',
            time: '19:30',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Frankfurt',
            code: 'FRA',
            time: '09:00',
            date: '2024-03-16'
        },
        duration: '7h 30m',
        stops: 0,
        price: 545,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/JFK1503FRA1?marker=690795'
    },
    {
        id: 'FL006',
        airline: 'American',
        airlineCode: 'AA',
        flightNumber: 'AA100',
        departure: {
            city: 'Miami',
            code: 'MIA',
            time: '10:00',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Paris',
            code: 'CDG',
            time: '01:00',
            date: '2024-03-16'
        },
        duration: '9h 00m',
        stops: 1,
        price: 623,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/MIA1503CDG1?marker=690795'
    },
    {
        id: 'FL007',
        airline: 'Qatar Airways',
        airlineCode: 'QR',
        flightNumber: 'QR702',
        departure: {
            city: 'Washington',
            code: 'IAD',
            time: '22:00',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Doha',
            code: 'DOH',
            time: '18:30',
            date: '2024-03-16'
        },
        duration: '13h 30m',
        stops: 0,
        price: 978,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/IAD1503DOH1?marker=690795'
    },
    {
        id: 'FL008',
        airline: 'Singapore Airlines',
        airlineCode: 'SQ',
        flightNumber: 'SQ26',
        departure: {
            city: 'New York',
            code: 'JFK',
            time: '23:45',
            date: '2024-03-15'
        },
        arrival: {
            city: 'Singapore',
            code: 'SIN',
            time: '06:30',
            date: '2024-03-17'
        },
        duration: '18h 45m',
        stops: 0,
        price: 1450,
        class: 'Economy',
        affiliateUrl: 'https://www.aviasales.com/search/JFK1503SIN1?marker=690795'
    }
];

// Mock Hotel Data with proper Hotellook deeplinks (Travelpayouts partner)
export const mockHotels = [
    {
        id: 'HT001',
        name: 'The Ritz-Carlton',
        location: 'Manhattan, New York',
        stars: 5,
        rating: 9.2,
        reviewCount: 2845,
        price: 599,
        originalPrice: 750,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12153&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT002',
        name: 'Four Seasons Resort',
        location: 'Beverly Hills, Los Angeles',
        stars: 5,
        rating: 9.5,
        reviewCount: 1923,
        price: 725,
        originalPrice: 890,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Concierge'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12169&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT003',
        name: 'Marriott Marquis',
        location: 'Times Square, New York',
        stars: 4,
        rating: 8.7,
        reviewCount: 5621,
        price: 289,
        originalPrice: 350,
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Gym', 'Restaurant', 'Business Center'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12153&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT004',
        name: 'Hilton Garden Inn',
        location: 'Downtown, Chicago',
        stars: 3,
        rating: 8.3,
        reviewCount: 3254,
        price: 159,
        originalPrice: 199,
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Gym', 'Breakfast', 'Parking'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12155&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT005',
        name: 'W Hotel',
        location: 'South Beach, Miami',
        stars: 5,
        rating: 9.0,
        reviewCount: 2156,
        price: 449,
        originalPrice: 520,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Pool', 'Beach', 'Spa', 'Bar', 'Nightclub'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12158&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT006',
        name: 'Hyatt Regency',
        location: 'Union Square, San Francisco',
        stars: 4,
        rating: 8.5,
        reviewCount: 4123,
        price: 245,
        originalPrice: 310,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Gym', 'Restaurant', 'Rooftop Bar'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12161&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT007',
        name: 'Waldorf Astoria',
        location: 'Park Avenue, New York',
        stars: 5,
        rating: 9.4,
        reviewCount: 1876,
        price: 685,
        originalPrice: 820,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Pool', 'Spa', 'Gym', 'Fine Dining', 'Butler'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12153&checkIn=2024-03-15&checkOut=2024-03-18'
    },
    {
        id: 'HT008',
        name: 'Holiday Inn Express',
        location: 'Airport, Denver',
        stars: 3,
        rating: 7.8,
        reviewCount: 2876,
        price: 109,
        originalPrice: 139,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
        amenities: ['WiFi', 'Breakfast', 'Parking', 'Shuttle'],
        affiliateUrl: 'https://search.hotellook.com/?marker=690795&locationId=12166&checkIn=2024-03-15&checkOut=2024-03-18'
    }
];

// Airlines for filter
export const airlines = [
    'Emirates',
    'Delta',
    'United',
    'British Airways',
    'Lufthansa',
    'American',
    'Qatar Airways',
    'Singapore Airlines'
];

// Hotel amenities for filter
export const hotelAmenities = [
    'WiFi',
    'Pool',
    'Spa',
    'Gym',
    'Restaurant',
    'Bar',
    'Breakfast',
    'Parking',
    'Beach',
    'Business Center'
];

// Helper to generate dynamic affiliate URLs based on search parameters
export function generateFlightAffiliateUrl(origin, destination, date, marker = '690795') {
    // Format date as DDMM
    const dateFormatted = date ? date.replace(/-/g, '').slice(4, 8) : '1503';
    return `https://www.aviasales.com/search/${origin}${dateFormatted}${destination}1?marker=${marker}`;
}

export function generateHotelAffiliateUrl(cityName, checkIn, checkOut, marker = '690795') {
    // Hotellook search by city name
    const city = encodeURIComponent(cityName);
    return `https://search.hotellook.com/?marker=${marker}&destination=${city}&checkIn=${checkIn}&checkOut=${checkOut}`;
}
