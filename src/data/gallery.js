// Curated travel imagery with affiliate links
// All images link to Aviasales/Hotellook or external car rentals

const AFFILIATE_MARKER = '690795';

// Helper to generate flight search URL
const flightUrl = (destCode, destName) =>
    `https://www.aviasales.com/search/NYC1501${destCode}1?marker=${AFFILIATE_MARKER}&destination=${destName}`;

// Helper to generate hotel search URL
const hotelUrl = (location) =>
    `https://search.hotellook.com/?marker=${AFFILIATE_MARKER}&destination=${encodeURIComponent(location)}`;

// Helper for car rental (using affiliate-friendly services)
const carUrl = (location) =>
    `https://www.rentalcars.com/SearchResults.do?country=${encodeURIComponent(location)}&affiliateCode=skystay`;

export const travelGallery = {
    // Luxury Hotels - Click to search hotels in that location
    luxuryHotels: [
        {
            id: 'hotel-1',
            title: 'Burj Al Arab, Dubai',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
            location: 'Dubai, UAE',
            category: 'Luxury Hotel',
            url: hotelUrl('Dubai')
        },
        {
            id: 'hotel-2',
            title: 'Overwater Bungalow, Maldives',
            image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
            location: 'Maldives',
            category: 'Resort',
            url: hotelUrl('Maldives')
        },
        {
            id: 'hotel-3',
            title: 'The Ritz Paris',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            location: 'Paris, France',
            category: 'Luxury Hotel',
            url: hotelUrl('Paris')
        },
        {
            id: 'hotel-4',
            title: 'Marina Bay Sands',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
            location: 'Singapore',
            category: 'Iconic Hotel',
            url: hotelUrl('Singapore')
        },
        {
            id: 'hotel-5',
            title: 'Santorini Cave Hotel',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
            location: 'Santorini, Greece',
            category: 'Boutique Hotel',
            url: hotelUrl('Santorini')
        },
        {
            id: 'hotel-6',
            title: 'Swiss Alps Chalet',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
            location: 'Switzerland',
            category: 'Mountain Resort',
            url: hotelUrl('Zurich')
        },
        {
            id: 'hotel-7',
            title: 'Aman Tokyo',
            image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
            location: 'Tokyo, Japan',
            category: 'Luxury Hotel',
            url: hotelUrl('Tokyo')
        },
        {
            id: 'hotel-8',
            title: 'Four Seasons Bora Bora',
            image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
            location: 'Bora Bora',
            category: 'Resort',
            url: hotelUrl('Bora Bora')
        },
        {
            id: 'hotel-9',
            title: 'The Plaza New York',
            image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
            location: 'New York, USA',
            category: 'Historic Hotel',
            url: hotelUrl('New York')
        },
        {
            id: 'hotel-10',
            title: 'Claridges London',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
            location: 'London, UK',
            category: 'Luxury Hotel',
            url: hotelUrl('London')
        }
    ],

    // Dream Destinations - Click to search flights
    destinations: [
        {
            id: 'dest-1',
            title: 'Bora Bora Paradise',
            image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800',
            location: 'French Polynesia',
            category: 'Beach',
            code: 'BOB',
            url: flightUrl('BOB', 'Bora Bora')
        },
        {
            id: 'dest-2',
            title: 'Northern Lights, Iceland',
            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
            location: 'Iceland',
            category: 'Adventure',
            code: 'KEF',
            url: flightUrl('KEF', 'Iceland')
        },
        {
            id: 'dest-3',
            title: 'Machu Picchu',
            image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
            location: 'Peru',
            category: 'Adventure',
            code: 'CUZ',
            url: flightUrl('CUZ', 'Cusco Peru')
        },
        {
            id: 'dest-4',
            title: 'Safari Adventure',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
            location: 'Kenya',
            category: 'Safari',
            code: 'NBO',
            url: flightUrl('NBO', 'Nairobi Kenya')
        },
        {
            id: 'dest-5',
            title: 'Amalfi Coast',
            image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800',
            location: 'Italy',
            category: 'Coastal',
            code: 'NAP',
            url: flightUrl('NAP', 'Naples Italy')
        },
        {
            id: 'dest-6',
            title: 'Cherry Blossoms, Japan',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
            location: 'Tokyo, Japan',
            category: 'Cultural',
            code: 'NRT',
            url: flightUrl('NRT', 'Tokyo')
        },
        {
            id: 'dest-7',
            title: 'Grand Canyon',
            image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800',
            location: 'Arizona, USA',
            category: 'Nature',
            code: 'PHX',
            url: flightUrl('PHX', 'Phoenix Arizona')
        },
        {
            id: 'dest-8',
            title: 'Tropical Thailand',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
            location: 'Phuket, Thailand',
            category: 'Beach',
            code: 'HKT',
            url: flightUrl('HKT', 'Phuket Thailand')
        }
    ],

    // Luxury Experiences - Link to related searches
    experiences: [
        {
            id: 'exp-1',
            title: 'Private Yacht Charter',
            image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
            description: 'Sail the Mediterranean in style',
            url: hotelUrl('Monaco')
        },
        {
            id: 'exp-2',
            title: 'First Class Flying',
            image: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=800',
            description: 'Experience luxury at 40,000 feet',
            url: flightUrl('DXB', 'Dubai')
        },
        {
            id: 'exp-3',
            title: 'Exotic Car Rental',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
            description: 'Drive your dream car on vacation',
            url: carUrl('Dubai')
        },
        {
            id: 'exp-4',
            title: 'Helicopter Tours',
            image: 'https://images.unsplash.com/photo-1534481016308-0fca71578ae5?w=800',
            description: 'See destinations from above',
            url: flightUrl('LAS', 'Las Vegas')
        },
        {
            id: 'exp-5',
            title: 'Luxury Safari Lodge',
            image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
            description: 'Wildlife in ultimate comfort',
            url: hotelUrl('Serengeti')
        },
        {
            id: 'exp-6',
            title: 'Private Island Escape',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
            description: 'Your own tropical paradise',
            url: hotelUrl('Maldives')
        },
        {
            id: 'exp-7',
            title: 'Hot Air Balloon Safari',
            image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=800',
            description: 'Float over African plains at sunrise',
            url: flightUrl('NBO', 'Kenya')
        },
        {
            id: 'exp-8',
            title: 'Michelin Star Dining',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
            description: 'World-class culinary experiences',
            url: hotelUrl('Paris')
        },
        {
            id: 'exp-9',
            title: 'Skiing in the Alps',
            image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800',
            description: 'Powder days on pristine slopes',
            url: hotelUrl('Zermatt')
        },
        {
            id: 'exp-10',
            title: 'Scuba in Great Barrier Reef',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
            description: 'Explore underwater wonderlands',
            url: flightUrl('CNS', 'Cairns')
        }
    ],

    // Luxury Cars - Link to car rental in popular destinations
    luxuryCars: [
        {
            id: 'car-1',
            title: 'Bugatti Chiron',
            image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
            type: 'Hypercar',
            url: carUrl('Dubai')
        },
        {
            id: 'car-2',
            title: 'Rolls Royce Wraith',
            image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800',
            type: 'Luxury Coupe',
            url: carUrl('London')
        },
        {
            id: 'car-3',
            title: 'Ferrari 458 Italia',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
            type: 'Sports Car',
            url: carUrl('Monaco')
        },
        {
            id: 'car-4',
            title: 'Mercedes-Benz G-Class',
            image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800',
            type: 'Luxury SUV',
            url: carUrl('Los Angeles')
        },
        {
            id: 'car-5',
            title: 'BMW M4',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
            type: 'Sports Coupe',
            url: carUrl('Miami')
        },
        {
            id: 'car-6',
            title: 'Porsche 911 Carrera',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
            type: 'Sports Car',
            url: carUrl('Las Vegas')
        },
        {
            id: 'car-7',
            title: 'Lamborghini Aventador',
            image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800',
            type: 'Supercar',
            url: carUrl('Monaco')
        },
        {
            id: 'car-8',
            title: 'Aston Martin Vantage',
            image: 'https://images.unsplash.com/photo-1596385573612-aebef54acae4?w=800',
            type: 'Grand Tourer',
            url: carUrl('London')
        },
        {
            id: 'car-9',
            title: 'Range Rover Velar',
            image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800',
            type: 'Luxury SUV',
            url: carUrl('Dubai')
        },
        {
            id: 'car-10',
            title: 'Bentley Bentayga',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
            type: 'Luxury SUV',
            url: carUrl('Los Angeles')
        }
    ],

    // Hero banners
    heroBanners: [
        {
            id: 'hero-1',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600',
            title: 'Explore the World',
            subtitle: 'Find your next adventure'
        },
        {
            id: 'hero-2',
            image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600',
            title: 'Luxury Awaits',
            subtitle: 'Premium travel experiences'
        },
        {
            id: 'hero-3',
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600',
            title: 'Dream Destinations',
            subtitle: 'Make memories that last'
        }
    ]
};

// Get random items from a category
export const getRandomItems = (items, count = 4) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
