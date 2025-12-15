const AFFILIATE_MARKER = '690795';

// Helper to generate flight search URL with dynamic date (next month)
const getNextMonthDate = () => {
    const today = new Date();
    const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
    // Format: DDMM
    const day = String(nextMonth.getDate()).padStart(2, '0');
    const month = String(nextMonth.getMonth() + 1).padStart(2, '0');
    return `${day}${month}`;
};

const flightUrl = (destCode, destName) => {
    const date = getNextMonthDate();
    return `https://www.aviasales.com/search/NYC${date}${destCode}1?marker=${AFFILIATE_MARKER}&destination=${encodeURIComponent(destName)}`;
};

export const destinations = [
    // --- EUROPE ---
    {
        id: 'paris',
        city: 'Paris',
        country: 'France',
        continent: 'Europe',
        code: 'CDG',
        emoji: '🗼',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        description: 'The City of Light draws millions with its culture, gastronomy, and fashion.',
        avgFlightPrice: '$450-750',
        url: flightUrl('CDG', 'Paris')
    },
    {
        id: 'rome',
        city: 'Rome',
        country: 'Italy',
        continent: 'Europe',
        code: 'FCO',
        emoji: '🏛️',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        description: 'A sprawling cosmopolitan city with nearly 3,000 years of globally influential art and architecture.',
        avgFlightPrice: '$500-800',
        url: flightUrl('FCO', 'Rome')
    },
    {
        id: 'barcelona',
        city: 'Barcelona',
        country: 'Spain',
        continent: 'Europe',
        code: 'BCN',
        emoji: '🥘',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for its art and architecture, the imaginative food scene, and vibrant street life.',
        avgFlightPrice: '$450-700',
        url: flightUrl('BCN', 'Barcelona')
    },
    {
        id: 'london',
        city: 'London',
        country: 'United Kingdom',
        continent: 'Europe',
        code: 'LHR',
        emoji: '🇬🇧',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
        description: 'A 21st-century city with history stretching back to Roman times.',
        avgFlightPrice: '$400-700',
        url: flightUrl('LHR', 'London')
    },
    {
        id: 'amsterdam',
        city: 'Amsterdam',
        country: 'Netherlands',
        continent: 'Europe',
        code: 'AMS',
        emoji: '🚲',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        description: 'Known for its artistic heritage, elaborate canal system and narrow houses.',
        avgFlightPrice: '$450-750',
        url: flightUrl('AMS', 'Amsterdam')
    },
    {
        id: 'venice',
        city: 'Venice',
        country: 'Italy',
        continent: 'Europe',
        code: 'VCE',
        emoji: '🛶',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
        description: 'Built on more than 100 small islands in a lagoon in the Adriatic Sea.',
        avgFlightPrice: '$550-850',
        url: flightUrl('VCE', 'Venice')
    },
    {
        id: 'santorini',
        city: 'Santorini',
        country: 'Greece',
        continent: 'Europe',
        code: 'JTR',
        emoji: '🇬🇷',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
        description: 'One of the Cyclades islands in the Aegean Sea, famous for whitewashed houses.',
        avgFlightPrice: '$600-900',
        url: flightUrl('JTR', 'Santorini')
    },
    {
        id: 'dubrovnik',
        city: 'Dubrovnik',
        country: 'Croatia',
        continent: 'Europe',
        code: 'DBV',
        emoji: '🏰',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
        description: 'Known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century.',
        avgFlightPrice: '$650-950',
        url: flightUrl('DBV', 'Dubrovnik')
    },
    {
        id: 'prague',
        city: 'Prague',
        country: 'Czech Republic',
        continent: 'Europe',
        code: 'PRG',
        emoji: '🍺',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        description: 'Nicknamed "the City of a Hundred Spires", known for its Old Town Square and baroque buildings.',
        avgFlightPrice: '$500-800',
        url: flightUrl('PRG', 'Prague')
    },
    {
        id: 'vienna',
        city: 'Vienna',
        country: 'Austria',
        continent: 'Europe',
        code: 'VIE',
        emoji: '🎻',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80',
        description: 'Known for its Imperial palaces, including Schönbrunn, the Habsburgs\' summer residence.',
        avgFlightPrice: '$550-850',
        url: flightUrl('VIE', 'Vienna')
    },

    // --- ASIA ---
    {
        id: 'tokyo',
        city: 'Tokyo',
        country: 'Japan',
        continent: 'Asia',
        code: 'NRT',
        emoji: '🗾',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
        description: 'Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
        avgFlightPrice: '$800-1200',
        url: flightUrl('NRT', 'Tokyo')
    },
    {
        id: 'kyoto',
        city: 'Kyoto',
        country: 'Japan',
        continent: 'Asia',
        code: 'KIX',
        emoji: '⛩️',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
        avgFlightPrice: '$850-1250',
        url: flightUrl('KIX', 'Kyoto')
    },
    {
        id: 'bangkok',
        city: 'Bangkok',
        country: 'Thailand',
        continent: 'Asia',
        code: 'BKK',
        emoji: '🐘',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
        description: 'A large city known for ornate shrines and vibrant street life.',
        avgFlightPrice: '$600-900',
        url: flightUrl('BKK', 'Bangkok')
    },
    {
        id: 'bali',
        city: 'Bali',
        country: 'Indonesia',
        continent: 'Asia',
        code: 'DPS',
        emoji: '🏝️',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        description: 'Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
        avgFlightPrice: '$700-1100',
        url: flightUrl('DPS', 'Bali')
    },
    {
        id: 'singapore',
        city: 'Singapore',
        country: 'Singapore',
        continent: 'Asia',
        code: 'SIN',
        emoji: '🦁',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        description: 'A global financial center with a tropical climate and multicultural population.',
        avgFlightPrice: '$700-1100',
        url: flightUrl('SIN', 'Singapore')
    },
    {
        id: 'seoul',
        city: 'Seoul',
        country: 'South Korea',
        continent: 'Asia',
        code: 'ICN',
        emoji: '🥢',
        image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80',
        description: 'A huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples.',
        avgFlightPrice: '$800-1200',
        url: flightUrl('ICN', 'Seoul')
    },
    {
        id: 'hong-kong',
        city: 'Hong Kong',
        country: 'China',
        continent: 'Asia',
        code: 'HKG',
        emoji: '🏙️',
        image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800',
        description: 'A major port and global financial hub famed for its tower-studded skyline.',
        avgFlightPrice: '$800-1200',
        url: flightUrl('HKG', 'Hong Kong')
    },
    {
        id: 'dubai',
        city: 'Dubai',
        country: 'UAE',
        continent: 'Asia',
        code: 'DXB',
        emoji: '🐪',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        description: 'Known for luxury shopping, ultramodern architecture and a lively nightlife scene.',
        avgFlightPrice: '$600-900',
        url: flightUrl('DXB', 'Dubai')
    },
    {
        id: 'jaipur',
        city: 'Jaipur',
        country: 'India',
        continent: 'Asia',
        code: 'JAI',
        emoji: '🕌',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
        description: 'The capital of India’s Rajasthan state, known as the "Pink City" for its trademark building color.',
        avgFlightPrice: '$700-1000',
        url: flightUrl('JAI', 'Jaipur')
    },
    {
        id: 'maldives',
        city: 'Malé',
        country: 'Maldives',
        continent: 'Asia',
        code: 'MLE',
        emoji: '🐚',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        description: 'A tropical nation in the Indian Ocean composed of 26 ring-shaped atolls.',
        avgFlightPrice: '$900-1500',
        url: flightUrl('MLE', 'Malé')
    },

    // --- NORTH AMERICA ---
    {
        id: 'new-york',
        city: 'New York City',
        country: 'USA',
        continent: 'North America',
        code: 'JFK',
        emoji: '🗽',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
        description: 'Comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.',
        avgFlightPrice: '$300-600',
        url: flightUrl('JFK', 'New York City')
    },
    {
        id: 'los-angeles',
        city: 'Los Angeles',
        country: 'USA',
        continent: 'North America',
        code: 'LAX',
        emoji: '🎬',
        image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=800&q=80',
        description: 'The center of the nation’s film and television industry.',
        avgFlightPrice: '$300-600',
        url: flightUrl('LAX', 'Los Angeles')
    },
    {
        id: 'miami',
        city: 'Miami',
        country: 'USA',
        continent: 'North America',
        code: 'MIA',
        emoji: '🌴',
        image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800',
        description: 'International city at Florida\'s southeastern tip, with Cuban influence.',
        avgFlightPrice: '$200-500',
        url: flightUrl('MIA', 'Miami')
    },
    {
        id: 'las-vegas',
        city: 'Las Vegas',
        country: 'USA',
        continent: 'North America',
        code: 'LAS',
        emoji: '🎰',
        image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=800&q=80',
        description: 'Resort city famed for its vibrant nightlife, centered around 24-hour casinos.',
        avgFlightPrice: '$200-500',
        url: flightUrl('LAS', 'Las Vegas')
    },
    {
        id: 'vancouver',
        city: 'Vancouver',
        country: 'Canada',
        continent: 'North America',
        code: 'YVR',
        emoji: '🍁',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        description: 'A bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities.',
        avgFlightPrice: '$300-600',
        url: flightUrl('YVR', 'Vancouver')
    },
    {
        id: 'toronto',
        city: 'Toronto',
        country: 'Canada',
        continent: 'North America',
        code: 'YYZ',
        emoji: '🇨🇦',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
        description: 'A major Canadian city along Lake Ontario’s northwestern shore.',
        avgFlightPrice: '$300-600',
        url: flightUrl('YYZ', 'Toronto')
    },
    {
        id: 'montreal',
        city: 'Montreal',
        country: 'Canada',
        continent: 'North America',
        code: 'YUL',
        emoji: '🥯',
        image: 'https://images.unsplash.com/photo-1519178614-68673b201f36?w=800',
        description: 'Set on an island in the Saint Lawrence River and named after Mt. Royal.',
        avgFlightPrice: '$300-600',
        url: flightUrl('YUL', 'Montreal')
    },
    {
        id: 'cancun',
        city: 'Cancun',
        country: 'Mexico',
        continent: 'North America',
        code: 'CUN',
        emoji: '🍹',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        description: 'Known for its beaches, numerous resorts and energetic nightlife.',
        avgFlightPrice: '$300-600',
        url: flightUrl('CUN', 'Cancun')
    },
    {
        id: 'mexico-city',
        city: 'Mexico City',
        country: 'Mexico',
        continent: 'North America',
        code: 'MEX',
        emoji: '🌮',
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800',
        description: 'Densely populated, high-altitude capital of Mexico.',
        avgFlightPrice: '$300-600',
        url: flightUrl('MEX', 'Mexico City')
    },
    {
        id: 'san-francisco',
        city: 'San Francisco',
        country: 'USA',
        continent: 'North America',
        code: 'SFO',
        emoji: '🌁',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
        description: 'Known for its Year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses.',
        avgFlightPrice: '$300-600',
        url: flightUrl('SFO', 'San Francisco')
    },

    // --- SOUTH AMERICA ---
    {
        id: 'rio',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        continent: 'South America',
        code: 'GIG',
        emoji: '🇧🇷',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
        description: 'Famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue.',
        avgFlightPrice: '$600-900',
        url: flightUrl('GIG', 'Rio de Janeiro')
    },
    {
        id: 'buenos-aires',
        city: 'Buenos Aires',
        country: 'Argentina',
        continent: 'South America',
        code: 'EZE',
        emoji: '🇦🇷',
        image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=800&q=80',
        description: 'Large, cosmopolitan capital city with a European atmosphere.',
        avgFlightPrice: '$700-1000',
        url: flightUrl('EZE', 'Buenos Aires')
    },
    {
        id: 'machu-picchu',
        city: 'Cusco (Machu Picchu)',
        country: 'Peru',
        continent: 'South America',
        code: 'CUZ',
        emoji: '🦙',
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
        description: 'Gateway to the Inca Empire and the legendary Machu Picchu.',
        avgFlightPrice: '$600-900',
        url: flightUrl('CUZ', 'Cusco')
    },
    {
        id: 'santiago',
        city: 'Santiago',
        country: 'Chile',
        continent: 'South America',
        code: 'SCL',
        emoji: '🇨🇱',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        description: 'Surrounded by the snow-capped Andes and the Chilean Coast Range.',
        avgFlightPrice: '$700-1000',
        url: flightUrl('SCL', 'Santiago')
    },
    {
        id: 'cartagena',
        city: 'Cartagena',
        country: 'Colombia',
        continent: 'South America',
        code: 'CTG',
        emoji: '🇨🇴',
        image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80',
        description: 'A port city on Colombia’s Caribbean coast, famous for its colorful colonial architecture.',
        avgFlightPrice: '$400-700',
        url: flightUrl('CTG', 'Cartagena')
    },

    // --- AFRICA ---
    {
        id: 'cape-town',
        city: 'Cape Town',
        country: 'South Africa',
        continent: 'Africa',
        code: 'CPT',
        emoji: '🇿🇦',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80',
        description: 'A port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.',
        avgFlightPrice: '$800-1200',
        url: flightUrl('CPT', 'Cape Town')
    },
    {
        id: 'marrakech',
        city: 'Marrakech',
        country: 'Morocco',
        continent: 'Africa',
        code: 'RAK',
        emoji: '🇲🇦',
        image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80',
        description: 'A former imperial city in western Morocco, a major economic center and home to mosques, palaces and gardens.',
        avgFlightPrice: '$500-800',
        url: flightUrl('RAK', 'Marrakech')
    },
    {
        id: 'victoria-falls',
        city: 'Victoria Falls',
        country: 'Zimbabwe',
        continent: 'Africa',
        code: 'VFA',
        emoji: '🌊',
        image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800',
        description: 'A waterfall on the Zambezi River in southern Africa, providing habitat for several unique species.',
        avgFlightPrice: '$900-1300',
        url: flightUrl('VFA', 'Victoria Falls')
    },
    {
        id: 'cairo',
        city: 'Cairo',
        country: 'Egypt',
        continent: 'Africa',
        code: 'CAI',
        emoji: '⛺',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
        description: 'Sprawling capital of Egypt, set on the Nile River.',
        avgFlightPrice: '$500-800',
        url: flightUrl('CAI', 'Cairo')
    },
    {
        id: 'serengeti',
        city: 'Serengeti (Kilimanjaro)',
        country: 'Tanzania',
        continent: 'Africa',
        code: 'JRO',
        emoji: '🐆',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for its massive annual migration of wildebeest and zebra.',
        avgFlightPrice: '$900-1400',
        url: flightUrl('JRO', 'Kilimanjaro')
    },

    // --- OCEANIA ---
    {
        id: 'sydney',
        city: 'Sydney',
        country: 'Australia',
        continent: 'Oceania',
        code: 'SYD',
        emoji: '🦙',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        description: 'Capital of New South Wales and one of Australia\'s largest cities, best known for its harbourfront Opera House.',
        avgFlightPrice: '$900-1400',
        url: flightUrl('SYD', 'Sydney')
    },
    {
        id: 'melbourne',
        city: 'Melbourne',
        country: 'Australia',
        continent: 'Oceania',
        code: 'MEL',
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80',
        description: 'Known for its arts, commerce, education, entertainment, sport and tourism.',
        avgFlightPrice: '$900-1400',
        url: flightUrl('MEL', 'Melbourne')
    },
    {
        id: 'cairns',
        city: 'Cairns (Great Barrier Reef)',
        country: 'Australia',
        continent: 'Oceania',
        code: 'CNS',
        emoji: '🐠',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
        description: 'Gateway to Australia\'s Great Barrier Reef.',
        avgFlightPrice: '$1000-1500',
        url: flightUrl('CNS', 'Cairns')
    },
    {
        id: 'queenstown',
        city: 'Queenstown',
        country: 'New Zealand',
        continent: 'Oceania',
        code: 'ZQN',
        emoji: '🇳🇿',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
        description: 'Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.',
        avgFlightPrice: '$1000-1500',
        url: flightUrl('ZQN', 'Queenstown')
    },
    {
        id: 'auckland',
        city: 'Auckland',
        country: 'New Zealand',
        continent: 'Oceania',
        code: 'AKL',
        emoji: '⛵',
        image: 'https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=800',
        description: 'A major city in the north of New Zealand’s North Island.',
        avgFlightPrice: '$1000-1500',
        url: flightUrl('AKL', 'Auckland')
    },
    {
        id: 'bora-bora',
        city: 'Bora Bora',
        country: 'French Polynesia',
        continent: 'Oceania',
        code: 'BOB',
        emoji: '🏝️',
        image: 'https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?auto=format&fit=crop&w=800&q=80',
        description: 'A small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed islets.',
        avgFlightPrice: '$1500-2500',
        url: flightUrl('BOB', 'Bora Bora')
    },
    {
        id: 'fiji',
        city: 'Nadi',
        country: 'Fiji Islands',
        continent: 'Oceania',
        code: 'NAN',
        emoji: '🏖️',
        image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800',
        description: 'An archipelago of more than 300 islands, famous for rugged landscapes, palm-lined beaches and coral reefs.',
        avgFlightPrice: '$1200-1800',
        url: flightUrl('NAN', 'Nadi')
    },
    {
        id: 'tahiti',
        city: 'Tahiti',
        country: 'French Polynesia',
        continent: 'Oceania',
        code: 'PPT',
        emoji: '🌺',
        image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800',
        description: 'The largest island in French Polynesia, shaped like a figure-8.',
        avgFlightPrice: '$1200-2000',
        url: flightUrl('PPT', 'Tahiti')
    },

    // --- MIDDLE EAST ---
    {
        id: 'petra',
        city: 'Petra (Amman)',
        country: 'Jordan',
        continent: 'Middle East',
        code: 'AMM',
        emoji: '🏜️',
        image: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800',
        description: 'A famous archaeological site in Jordan\'s southwestern desert.',
        avgFlightPrice: '$600-900',
        url: flightUrl('AMM', 'Amman')
    },
    {
        id: 'muscat',
        city: 'Muscat',
        country: 'Oman',
        continent: 'Middle East',
        code: 'MCT',
        emoji: '🇴🇲',
        image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800',
        description: 'Port capital of Oman, sits on the Gulf of Oman surrounded by mountains and desert.',
        avgFlightPrice: '$600-900',
        url: flightUrl('MCT', 'Muscat')
    }
];

// Get destination by ID
export const getDestinationById = (id) => {
    return destinations.find(dest => dest.id === id);
};

// Get destination by airport code
export const getDestinationByCode = (code) => {
    return destinations.find(dest => dest.code === code);
};
