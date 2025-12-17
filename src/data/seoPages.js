/**
 * SEO Money Pages Data - Real Flight Deals
 * These pages are designed to rank on Google and drive organic traffic
 * Each page targets specific high-value keywords with real pricing
 */

import { flightUrls, hotelUrls } from './affiliateLinks';

// Helper to create a deal page
const createDealPage = (data) => ({
    ...data,
    lastUpdated: new Date().toISOString().split('T')[0]
});

export const seoPages = {
    // Real flight deals - popular routes with actual pricing
    flightDeals: [
        // North America to Europe
        createDealPage({
            id: 'new-york-to-london',
            slug: 'cheap-flights-new-york-to-london',
            title: 'Cheap Flights from New York to London',
            metaTitle: 'Cheap Flights NYC to London from $299 | Compare 500+ Airlines',
            metaDescription: 'Book cheap flights from New York (JFK) to London (LHR). Find deals starting from $299 roundtrip. Compare British Airways, Virgin Atlantic & more.',
            h1: 'Cheap Flights from New York to London',
            origin: { city: 'New York', code: 'JFK', country: 'USA' },
            destination: { city: 'London', code: 'LHR', country: 'UK' },
            heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600',
            avgPrice: '$299-650',
            flightTime: '7-8 hours',
            bestMonths: ['January', 'February', 'November'],
            airlines: ['British Airways', 'Virgin Atlantic', 'American Airlines', 'Delta', 'United'],
            content: {
                intro: 'Looking for cheap flights from New York to London? This is one of the world\'s busiest flight routes with over 30 daily departures, meaning great competition and amazing deals for travelers.',
                tips: [
                    'Book 2-3 months in advance for best prices',
                    'Tuesday and Wednesday departures are typically cheapest',
                    'Consider flying into Gatwick or Stansted for lower fares',
                    'Norwegian and Icelandair offer great budget options',
                    'Use airline miles for business class upgrades'
                ],
                bestTime: 'January and February offer the lowest fares. Avoid summer (June-August) and Christmas for budget travel.',
                visa: 'US citizens can visit the UK visa-free for up to 6 months.'
            }
        }),
        createDealPage({
            id: 'toronto-to-dubai',
            slug: 'cheap-flights-toronto-to-dubai',
            title: 'Cheap Flights from Toronto to Dubai',
            metaTitle: 'Cheap Flights Toronto to Dubai from $599 | Emirates & More',
            metaDescription: 'Find cheap flights from Toronto (YYZ) to Dubai (DXB). Compare Emirates, Etihad, Turkish Airlines. Deals from $599 roundtrip.',
            h1: 'Find Cheap Flights from Toronto to Dubai',
            origin: { city: 'Toronto', code: 'YYZ', country: 'Canada' },
            destination: { city: 'Dubai', code: 'DXB', country: 'UAE' },
            heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600',
            avgPrice: '$599-1100',
            flightTime: '12-14 hours',
            bestMonths: ['January', 'February', 'September', 'October'],
            airlines: ['Emirates', 'Etihad', 'Turkish Airlines', 'Air Canada'],
            content: {
                intro: 'Dubai is a bucket-list destination for Canadians, offering world-class shopping, stunning architecture, and luxury experiences. Find the best flight deals from Toronto.',
                tips: [
                    'Book during Ramadan for lower prices',
                    'Emirates often has sales in January',
                    'Consider connecting through Istanbul on Turkish Airlines',
                    'Friday departures are often cheaper',
                    'Sign up for Emirates Skywards for miles'
                ],
                bestTime: 'September-October and January-February offer the best combination of prices and weather.',
                visa: 'Canadians can obtain a visa on arrival in Dubai for stays up to 30 days.'
            }
        }),
        createDealPage({
            id: 'los-angeles-to-tokyo',
            slug: 'cheap-flights-los-angeles-to-tokyo',
            title: 'Cheap Flights from Los Angeles to Tokyo',
            metaTitle: 'Cheap Flights LA to Tokyo from $449 | Japan Travel Deals',
            metaDescription: 'Book cheap flights from Los Angeles to Tokyo. Compare ANA, Japan Airlines, United. Find deals from $449 roundtrip.',
            h1: 'Book Cheap Flights from Los Angeles to Tokyo',
            origin: { city: 'Los Angeles', code: 'LAX', country: 'USA' },
            destination: { city: 'Tokyo', code: 'NRT', country: 'Japan' },
            heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600',
            avgPrice: '$449-900',
            flightTime: '11-12 hours',
            bestMonths: ['January', 'February', 'May', 'November'],
            airlines: ['ANA', 'Japan Airlines', 'United', 'Singapore Airlines', 'Korean Air'],
            content: {
                intro: 'Tokyo awaits! Experience the perfect blend of ancient temples and cutting-edge technology. Find cheap flights from LA to Japan\'s vibrant capital.',
                tips: [
                    'Fly into Haneda (HND) for easier city access',
                    'Book cherry blossom trips 6 months ahead',
                    'ANA and JAL often match competitor prices',
                    'Consider multi-city with Osaka for better deals',
                    'Tuesday/Wednesday flights are cheapest'
                ],
                bestTime: 'January-February for lowest prices. Cherry blossom (March-April) is popular but pricey.',
                visa: 'US citizens can visit Japan visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'chicago-to-paris',
            slug: 'cheap-flights-chicago-to-paris',
            title: 'Cheap Flights from Chicago to Paris',
            metaTitle: 'Cheap Flights Chicago to Paris from $389 | Air France & More',
            metaDescription: 'Find cheap flights from Chicago (ORD) to Paris (CDG). Compare Air France, United, American. Deals from $389 roundtrip.',
            h1: 'Cheap Flights from Chicago to Paris',
            origin: { city: 'Chicago', code: 'ORD', country: 'USA' },
            destination: { city: 'Paris', code: 'CDG', country: 'France' },
            heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600',
            avgPrice: '$389-750',
            flightTime: '8-9 hours',
            bestMonths: ['January', 'February', 'March', 'November'],
            airlines: ['Air France', 'United', 'American Airlines', 'Delta', 'Norwegian'],
            content: {
                intro: 'The City of Light awaits! Paris offers world-class cuisine, iconic landmarks, and unforgettable experiences. Find cheap flights from Chicago.',
                tips: [
                    'Air France often has flash sales in winter',
                    'Consider flying into Orly for some routes',
                    'Book 6-8 weeks in advance for best deals',
                    'Norwegian offers budget-friendly options',
                    'Join Flying Blue for miles accumulation'
                ],
                bestTime: 'January-March offers the best deals. Avoid Fashion Week and summer for lower prices.',
                visa: 'US citizens can visit France/Schengen visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'miami-to-barcelona',
            slug: 'cheap-flights-miami-to-barcelona',
            title: 'Cheap Flights from Miami to Barcelona',
            metaTitle: 'Cheap Flights Miami to Barcelona from $349 | Iberia & More',
            metaDescription: 'Book cheap flights from Miami to Barcelona. Compare Iberia, American, Vueling. Find deals from $349 roundtrip.',
            h1: 'Cheap Flights from Miami to Barcelona',
            origin: { city: 'Miami', code: 'MIA', country: 'USA' },
            destination: { city: 'Barcelona', code: 'BCN', country: 'Spain' },
            heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600',
            avgPrice: '$349-700',
            flightTime: '9-10 hours',
            bestMonths: ['January', 'February', 'October', 'November'],
            airlines: ['Iberia', 'American Airlines', 'Level', 'Air Europa'],
            content: {
                intro: 'Barcelona combines stunning architecture, beautiful beaches, and incredible nightlife. Find cheap flights from Miami to this Mediterranean gem.',
                tips: [
                    'Level (Iberia\'s low-cost) offers great deals',
                    'Book directly with Iberia for best prices',
                    'Consider connecting through Madrid',
                    'Wednesday flights are typically cheapest',
                    'Avoid La Mercè Festival week (September)'
                ],
                bestTime: 'January-February and October-November offer the best deals and pleasant weather.',
                visa: 'US citizens can visit Spain/Schengen visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'boston-to-dublin',
            slug: 'cheap-flights-boston-to-dublin',
            title: 'Cheap Flights from Boston to Dublin',
            metaTitle: 'Cheap Flights Boston to Dublin from $279 | Aer Lingus Direct',
            metaDescription: 'Find cheap flights from Boston to Dublin. Direct flights on Aer Lingus from $279. Compare all airlines.',
            h1: 'Cheap Flights from Boston to Dublin',
            origin: { city: 'Boston', code: 'BOS', country: 'USA' },
            destination: { city: 'Dublin', code: 'DUB', country: 'Ireland' },
            heroImage: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1600',
            avgPrice: '$279-550',
            flightTime: '6-7 hours',
            bestMonths: ['January', 'February', 'March', 'November'],
            airlines: ['Aer Lingus', 'Delta', 'United', 'American Airlines'],
            content: {
                intro: 'Ireland is calling! Boston has one of the best connections to Dublin with multiple daily flights. Find amazing deals to the Emerald Isle.',
                tips: [
                    'Aer Lingus offers direct flights from $279',
                    'St. Patrick\'s Day week is expensive',
                    'Consider flying mid-week for savings',
                    'Pre-clear US customs in Dublin on return',
                    'Book 6-8 weeks in advance'
                ],
                bestTime: 'January-March and November offer the lowest fares. Avoid summer and St. Patrick\'s Day.',
                visa: 'US citizens can visit Ireland visa-free for up to 90 days.'
            }
        }),
        // Asia Routes
        createDealPage({
            id: 'san-francisco-to-singapore',
            slug: 'cheap-flights-san-francisco-to-singapore',
            title: 'Cheap Flights from San Francisco to Singapore',
            metaTitle: 'Cheap Flights SFO to Singapore from $499 | Singapore Airlines',
            metaDescription: 'Book cheap flights from San Francisco to Singapore. Compare Singapore Airlines, United, Cathay Pacific. From $499.',
            h1: 'Cheap Flights from San Francisco to Singapore',
            origin: { city: 'San Francisco', code: 'SFO', country: 'USA' },
            destination: { city: 'Singapore', code: 'SIN', country: 'Singapore' },
            heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600',
            avgPrice: '$499-1100',
            flightTime: '16-18 hours',
            bestMonths: ['February', 'March', 'September', 'October'],
            airlines: ['Singapore Airlines', 'United', 'Cathay Pacific', 'Korean Air', 'EVA Air'],
            content: {
                intro: 'Singapore - the Lion City! Experience world-class dining, stunning architecture, and incredible cleanliness. Find cheap flights from SFO.',
                tips: [
                    'Singapore Airlines has the longest nonstop flights',
                    'Consider 1-stop options via Tokyo or Hong Kong',
                    'Book during Singapore Airlines sales',
                    'Avoid Chinese New Year period',
                    'Join KrisFlyer for miles accumulation'
                ],
                bestTime: 'February-March and September-October offer the best deals.',
                visa: 'US citizens can visit Singapore visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'seattle-to-seoul',
            slug: 'cheap-flights-seattle-to-seoul',
            title: 'Cheap Flights from Seattle to Seoul',
            metaTitle: 'Cheap Flights Seattle to Seoul from $389 | Korean Air Direct',
            metaDescription: 'Find cheap flights from Seattle to Seoul. Direct on Korean Air, Delta, Asiana. Deals from $389 roundtrip.',
            h1: 'Cheap Flights from Seattle to Seoul',
            origin: { city: 'Seattle', code: 'SEA', country: 'USA' },
            destination: { city: 'Seoul', code: 'ICN', country: 'South Korea' },
            heroImage: 'https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=1600',
            avgPrice: '$389-850',
            flightTime: '11-12 hours',
            bestMonths: ['January', 'February', 'March', 'November'],
            airlines: ['Korean Air', 'Delta', 'Asiana', 'United'],
            content: {
                intro: 'Seoul is a K-pop paradise, food heaven, and shopping mecca! Find cheap flights from Seattle to South Korea\'s dynamic capital.',
                tips: [
                    'Korean Air offers multiple daily direct flights',
                    'K-ETA required before travel',
                    'Book during Korean Air winter sales',
                    'Consider Seoul as a stopover to other Asian cities',
                    'Delta partners with Korean Air for miles'
                ],
                bestTime: 'January-March and November offer the lowest fares. Avoid Chuseok holiday.',
                visa: 'US citizens need K-ETA but can visit visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'new-york-to-bangkok',
            slug: 'cheap-flights-new-york-to-bangkok',
            title: 'Cheap Flights from New York to Bangkok',
            metaTitle: 'Cheap Flights NYC to Bangkok from $549 | Thai Airways & More',
            metaDescription: 'Book cheap flights from New York to Bangkok. Compare Thai Airways, Qatar, Emirates. Deals from $549.',
            h1: 'Cheap Flights from New York to Bangkok',
            origin: { city: 'New York', code: 'JFK', country: 'USA' },
            destination: { city: 'Bangkok', code: 'BKK', country: 'Thailand' },
            heroImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600',
            avgPrice: '$549-1000',
            flightTime: '17-20 hours',
            bestMonths: ['January', 'May', 'September', 'October'],
            airlines: ['Thai Airways', 'Qatar Airways', 'Emirates', 'EVA Air', 'Korean Air'],
            content: {
                intro: 'Thailand awaits! Bangkok offers incredible temples, amazing street food, and vibrant nightlife. Find cheap flights from New York.',
                tips: [
                    'Qatar Airways via Doha often has best deals',
                    'Avoid Songkran (April) for lower prices',
                    'Consider flying into Suvarnabhumi (BKK) vs Don Mueang',
                    'Turkish Airlines offers competitive rates',
                    'Book 3-4 months in advance for best prices'
                ],
                bestTime: 'May and September-October offer great deals and avoiding peak tourist season.',
                visa: 'US citizens can visit Thailand visa-free for up to 30 days (extendable).'
            }
        }),
        // Middle East Routes
        createDealPage({
            id: 'london-to-dubai',
            slug: 'cheap-flights-london-to-dubai',
            title: 'Cheap Flights from London to Dubai',
            metaTitle: 'Cheap Flights London to Dubai from £199 | Emirates Direct',
            metaDescription: 'Find cheap flights from London to Dubai. Emirates and British Airways direct. Deals from £199 roundtrip.',
            h1: 'Cheap Flights from London to Dubai',
            origin: { city: 'London', code: 'LHR', country: 'UK' },
            destination: { city: 'Dubai', code: 'DXB', country: 'UAE' },
            heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600',
            avgPrice: '£199-450',
            flightTime: '6-7 hours',
            bestMonths: ['January', 'February', 'May', 'September'],
            airlines: ['Emirates', 'British Airways', 'flydubai', 'Virgin Atlantic'],
            content: {
                intro: 'Dubai is just 6-7 hours from London! Experience luxury shopping, desert adventures, and world-class dining.',
                tips: [
                    'Emirates offers 6 daily flights from London',
                    'flydubai offers budget-friendly alternatives',
                    'Book during Dubai Shopping Festival (January)',
                    'Avoid peak summer (July-August) unless seeking deals',
                    'Consider Dubai as a stopover to Asia/Australia'
                ],
                bestTime: 'January-February and September offer the best combination of price and weather.',
                visa: 'UK citizens can visit UAE visa-free for up to 30 days.'
            }
        }),
        createDealPage({
            id: 'new-york-to-tel-aviv',
            slug: 'cheap-flights-new-york-to-tel-aviv',
            title: 'Cheap Flights from New York to Tel Aviv',
            metaTitle: 'Cheap Flights NYC to Tel Aviv from $449 | El Al Direct',
            metaDescription: 'Book cheap flights from New York to Tel Aviv. Direct on El Al, United, Delta. Deals from $449 roundtrip.',
            h1: 'Cheap Flights from New York to Tel Aviv',
            origin: { city: 'New York', code: 'JFK', country: 'USA' },
            destination: { city: 'Tel Aviv', code: 'TLV', country: 'Israel' },
            heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600',
            avgPrice: '$449-900',
            flightTime: '10-11 hours',
            bestMonths: ['January', 'February', 'March', 'November'],
            airlines: ['El Al', 'United', 'Delta', 'Turkish Airlines'],
            content: {
                intro: 'Explore the Holy Land! Tel Aviv offers beautiful beaches, incredible nightlife, and proximity to Jerusalem. Find cheap flights from NYC.',
                tips: [
                    'El Al offers multiple daily nonstops',
                    'Avoid Jewish holidays for lower prices',
                    'United and Delta also fly direct',
                    'Consider flying mid-week',
                    'Book 2-3 months in advance'
                ],
                bestTime: 'January-March and November offer the lowest fares. Avoid Passover and High Holidays.',
                visa: 'US citizens can visit Israel visa-free for up to 90 days.'
            }
        }),
        // Australia/Pacific Routes
        createDealPage({
            id: 'los-angeles-to-sydney',
            slug: 'cheap-flights-los-angeles-to-sydney',
            title: 'Cheap Flights from Los Angeles to Sydney',
            metaTitle: 'Cheap Flights LA to Sydney from $699 | Qantas Direct',
            metaDescription: 'Find cheap flights from Los Angeles to Sydney. Qantas, United, Delta direct. Deals from $699 roundtrip.',
            h1: 'Cheap Flights from Los Angeles to Sydney',
            origin: { city: 'Los Angeles', code: 'LAX', country: 'USA' },
            destination: { city: 'Sydney', code: 'SYD', country: 'Australia' },
            heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600',
            avgPrice: '$699-1400',
            flightTime: '14-16 hours',
            bestMonths: ['February', 'March', 'May', 'November'],
            airlines: ['Qantas', 'United', 'Delta', 'American Airlines', 'Virgin Australia'],
            content: {
                intro: 'G\'day mate! Sydney offers stunning beaches, iconic landmarks, and incredible wildlife. Find cheap flights from LA to Australia.',
                tips: [
                    'Qantas Dreamliner offers the best experience',
                    'Book during Qantas sales (usually January)',
                    'Consider flying via Auckland or Fiji for deals',
                    'February-March is their autumn (great weather)',
                    'Book 4-6 months in advance for best prices'
                ],
                bestTime: 'February-March and November offer the best deals outside Australian summer.',
                visa: 'US citizens need an ETA (Electronic Travel Authority) before travel.'
            }
        }),
        createDealPage({
            id: 'san-francisco-to-auckland',
            slug: 'cheap-flights-san-francisco-to-auckland',
            title: 'Cheap Flights from San Francisco to Auckland',
            metaTitle: 'Cheap Flights SFO to Auckland from $599 | Air New Zealand',
            metaDescription: 'Book cheap flights from San Francisco to Auckland. Air New Zealand direct. Deals from $599 roundtrip.',
            h1: 'Cheap Flights from San Francisco to Auckland',
            origin: { city: 'San Francisco', code: 'SFO', country: 'USA' },
            destination: { city: 'Auckland', code: 'AKL', country: 'New Zealand' },
            heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600',
            avgPrice: '$599-1200',
            flightTime: '12-13 hours',
            bestMonths: ['February', 'March', 'May', 'November'],
            airlines: ['Air New Zealand', 'United', 'American Airlines', 'Qantas'],
            content: {
                intro: 'New Zealand is pure magic! From Lord of the Rings landscapes to adventure sports. Find cheap flights from San Francisco.',
                tips: [
                    'Air New Zealand has direct flights',
                    'Book during their Grabaseat sales',
                    'February-March is NZ autumn (beautiful)',
                    'Consider multi-city with Australia',
                    'United partners with Air NZ for miles'
                ],
                bestTime: 'February-March (autumn) and November (spring) offer best deals and weather.',
                visa: 'US citizens need NZeTA before travel.'
            }
        }),
        // Europe to Europe
        createDealPage({
            id: 'london-to-rome',
            slug: 'cheap-flights-london-to-rome',
            title: 'Cheap Flights from London to Rome',
            metaTitle: 'Cheap Flights London to Rome from £29 | Ryanair & EasyJet',
            metaDescription: 'Find cheap flights from London to Rome. Ryanair, EasyJet, British Airways. Deals from £29 one-way.',
            h1: 'Cheap Flights from London to Rome',
            origin: { city: 'London', code: 'LGW', country: 'UK' },
            destination: { city: 'Rome', code: 'FCO', country: 'Italy' },
            heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600',
            avgPrice: '£29-150',
            flightTime: '2.5 hours',
            bestMonths: ['January', 'February', 'March', 'November'],
            airlines: ['Ryanair', 'EasyJet', 'British Airways', 'Wizz Air', 'ITA Airways'],
            content: {
                intro: 'Rome is calling! Experience ancient history, incredible food, and la dolce vita. Find cheap flights from London.',
                tips: [
                    'Ryanair often has £29 sales',
                    'Fly Gatwick or Stansted for budget carriers',
                    'Book Tuesday for best deals',
                    'Avoid Easter and August',
                    'Consider Ciampino airport for cheaper flights'
                ],
                bestTime: 'January-March and November offer the best deals. Spring and fall have pleasant weather.',
                visa: 'UK citizens can visit Italy/Schengen visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'paris-to-lisbon',
            slug: 'cheap-flights-paris-to-lisbon',
            title: 'Cheap Flights from Paris to Lisbon',
            metaTitle: 'Cheap Flights Paris to Lisbon from €29 | TAP Portugal',
            metaDescription: 'Book cheap flights from Paris to Lisbon. TAP, Transavia, EasyJet. Deals from €29 one-way.',
            h1: 'Cheap Flights from Paris to Lisbon',
            origin: { city: 'Paris', code: 'CDG', country: 'France' },
            destination: { city: 'Lisbon', code: 'LIS', country: 'Portugal' },
            heroImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1600',
            avgPrice: '€29-120',
            flightTime: '2.5 hours',
            bestMonths: ['January', 'February', 'November', 'December'],
            airlines: ['TAP Portugal', 'Transavia', 'EasyJet', 'Vueling', 'Air France'],
            content: {
                intro: 'Discover Lisbon! Beautiful tiles, amazing seafood, and stunning viewpoints. Find cheap flights from Paris.',
                tips: [
                    'TAP Portugal often has flash sales',
                    'Transavia offers great budget options',
                    'Fly from Orly for some carriers',
                    'Book 4-6 weeks in advance',
                    'Consider Porto as an alternative'
                ],
                bestTime: 'January-February and November-December offer the lowest fares.',
                visa: 'Schengen citizens can travel freely between France and Portugal.'
            }
        }),
        // Americas
        createDealPage({
            id: 'new-york-to-cancun',
            slug: 'cheap-flights-new-york-to-cancun',
            title: 'Cheap Flights from New York to Cancun',
            metaTitle: 'Cheap Flights NYC to Cancun from $199 | JetBlue & More',
            metaDescription: 'Find cheap flights from New York to Cancun. JetBlue, Delta, American. Deals from $199 roundtrip.',
            h1: 'Cheap Flights from New York to Cancun',
            origin: { city: 'New York', code: 'JFK', country: 'USA' },
            destination: { city: 'Cancun', code: 'CUN', country: 'Mexico' },
            heroImage: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1600',
            avgPrice: '$199-450',
            flightTime: '4-5 hours',
            bestMonths: ['January', 'February', 'May', 'September'],
            airlines: ['JetBlue', 'Delta', 'American Airlines', 'United', 'Southwest'],
            content: {
                intro: 'Escape to paradise! Cancun offers stunning beaches, Mayan ruins, and incredible resorts. Find cheap flights from NYC.',
                tips: [
                    'JetBlue often has the best deals',
                    'Avoid Spring Break (March) for crowds and prices',
                    'Book all-inclusive packages for value',
                    'September-October is hurricane season but cheapest',
                    'Consider nearby airports like Cozumel'
                ],
                bestTime: 'January-February and May offer the best deals outside spring break.',
                visa: 'US citizens can visit Mexico visa-free for up to 180 days.'
            }
        }),
        createDealPage({
            id: 'toronto-to-havana',
            slug: 'cheap-flights-toronto-to-havana',
            title: 'Cheap Flights from Toronto to Havana',
            metaTitle: 'Cheap Flights Toronto to Havana from $299 | Air Canada',
            metaDescription: 'Book cheap flights from Toronto to Havana. Air Canada, Sunwing, WestJet. Deals from $299 roundtrip.',
            h1: 'Cheap Flights from Toronto to Havana',
            origin: { city: 'Toronto', code: 'YYZ', country: 'Canada' },
            destination: { city: 'Havana', code: 'HAV', country: 'Cuba' },
            heroImage: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1600',
            avgPrice: '$299-500',
            flightTime: '3.5 hours',
            bestMonths: ['January', 'February', 'November', 'December'],
            airlines: ['Air Canada', 'Sunwing', 'WestJet', 'Air Transat'],
            content: {
                intro: 'Experience Cuba! Classic cars, beautiful architecture, and vibrant culture. Find cheap flights from Toronto to Havana.',
                tips: [
                    'All-inclusive resort packages often cheaper',
                    'Book with Canadian carriers for direct flights',
                    'January-February is peak season',
                    'Get a tourist card before travel',
                    'Consider Varadero for beach resorts'
                ],
                bestTime: 'November-December offers good deals before peak season.',
                visa: 'Canadians need a tourist card, available at airport.'
            }
        }),
        createDealPage({
            id: 'miami-to-bogota',
            slug: 'cheap-flights-miami-to-bogota',
            title: 'Cheap Flights from Miami to Bogota',
            metaTitle: 'Cheap Flights Miami to Bogota from $249 | Avianca Direct',
            metaDescription: 'Find cheap flights from Miami to Bogota. Avianca, LATAM, American. Deals from $249 roundtrip.',
            h1: 'Cheap Flights from Miami to Bogota',
            origin: { city: 'Miami', code: 'MIA', country: 'USA' },
            destination: { city: 'Bogota', code: 'BOG', country: 'Colombia' },
            heroImage: 'https://images.unsplash.com/photo-1568633702474-9a2e6df8a428?w=1600',
            avgPrice: '$249-500',
            flightTime: '3.5-4 hours',
            bestMonths: ['January', 'February', 'September', 'October'],
            airlines: ['Avianca', 'LATAM', 'American Airlines', 'Spirit', 'JetBlue'],
            content: {
                intro: 'Colombia is booming! Bogota offers incredible food, vibrant nightlife, and stunning street art. Find cheap flights from Miami.',
                tips: [
                    'Avianca offers multiple daily flights',
                    'Spirit often has the cheapest fares',
                    'Book during Avianca sales',
                    'Consider Cartagena or Medellin too',
                    'Tuesday/Wednesday flights are cheapest'
                ],
                bestTime: 'January-February and September-October offer the best deals.',
                visa: 'US citizens can visit Colombia visa-free for up to 90 days.'
            }
        }),
        createDealPage({
            id: 'los-angeles-to-lima',
            slug: 'cheap-flights-los-angeles-to-lima',
            title: 'Cheap Flights from Los Angeles to Lima',
            metaTitle: 'Cheap Flights LA to Lima from $349 | LATAM Direct',
            metaDescription: 'Book cheap flights from Los Angeles to Lima. LATAM, Avianca, American. Deals from $349 roundtrip.',
            h1: 'Cheap Flights from Los Angeles to Lima',
            origin: { city: 'Los Angeles', code: 'LAX', country: 'USA' },
            destination: { city: 'Lima', code: 'LIM', country: 'Peru' },
            heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600',
            avgPrice: '$349-700',
            flightTime: '8-9 hours',
            bestMonths: ['January', 'February', 'May', 'September'],
            airlines: ['LATAM', 'Avianca', 'American Airlines', 'United', 'Copa'],
            content: {
                intro: 'Peru awaits! From Machu Picchu to amazing ceviche, Lima is your gateway to incredible adventures.',
                tips: [
                    'LATAM often has the best direct flights',
                    'Book Machu Picchu tickets months in advance',
                    'Consider Peru Hop for internal travel',
                    'May-September is dry season (best for Machu Picchu)',
                    'Copa via Panama is often cheaper'
                ],
                bestTime: 'May-September is dry season in the Andes, perfect for Machu Picchu.',
                visa: 'US citizens can visit Peru visa-free for up to 183 days.'
            }
        })
    ],

    // Travel guides for SEO
    guides: [
        createDealPage({
            id: 'best-airlines-europe',
            slug: 'best-airlines-to-fly-to-europe',
            title: 'Best Airlines to Fly to Europe',
            metaTitle: 'Best Airlines to Fly to Europe 2024 | Complete Guide',
            metaDescription: 'Discover the best airlines for flying to Europe. Compare service, prices, and routes.',
            h1: 'Best Airlines to Fly to Europe in 2024',
            heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600',
            airlines: [
                { name: 'Emirates', rating: 4.8, pros: ['Luxury service', 'Modern fleet', 'Great entertainment'], cons: ['Higher prices'] },
                { name: 'Lufthansa', rating: 4.5, pros: ['German efficiency', 'Good connections', 'Reliable'], cons: ['Basic economy restrictive'] },
                { name: 'British Airways', rating: 4.3, pros: ['Direct routes', 'Heathrow hub', 'Club World'], cons: ['Economy can be tight'] },
                { name: 'Norwegian', rating: 4.0, pros: ['Budget-friendly', 'Dreamliner fleet', 'WiFi included'], cons: ['No frills'] },
                { name: 'TAP Portugal', rating: 4.2, pros: ['Good value', 'Free stopover in Lisbon'], cons: ['Smaller network'] }
            ],
            content: {
                intro: 'Choosing the right airline can make or break your European adventure. We\'ve analyzed comfort, value, and service.',
                conclusion: 'For luxury, Emirates and Lufthansa lead. Budget travelers should consider Norwegian or TAP Portugal.'
            }
        }),
        createDealPage({
            id: 'cheapest-month-to-book',
            slug: 'cheapest-month-to-book-flights',
            title: 'Cheapest Month to Book Flights',
            metaTitle: 'Cheapest Month to Book Flights 2024 | Save 30-50%',
            metaDescription: 'Learn the cheapest months to book flights and save up to 50%. Expert booking tips.',
            h1: 'When Is the Cheapest Month to Book Flights?',
            heroImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600',
            content: {
                intro: 'Timing is everything when it comes to booking cheap flights. The right month can save you hundreds.',
                sections: [
                    { title: 'Best Months for Booking', content: 'January and February typically offer the lowest prices.' },
                    { title: 'Best Days to Book', content: 'Tuesday afternoons often have the lowest prices.' },
                    { title: 'How Far in Advance?', content: 'Domestic: 1-3 months. International: 2-8 months ahead.' }
                ],
                monthlyBreakdown: {
                    January: { deals: 'Excellent', reason: 'Post-holiday sales' },
                    February: { deals: 'Excellent', reason: 'Low demand' },
                    March: { deals: 'Good', reason: 'Spring break prices rising' },
                    April: { deals: 'Good', reason: 'Shoulder season' },
                    May: { deals: 'Average', reason: 'Summer bookings start' },
                    June: { deals: 'Poor', reason: 'Peak season' },
                    July: { deals: 'Poor', reason: 'Highest demand' },
                    August: { deals: 'Poor', reason: 'Still peak' },
                    September: { deals: 'Good', reason: 'Shoulder season deals' },
                    October: { deals: 'Good', reason: 'Fall sweet spot' },
                    November: { deals: 'Excellent', reason: 'Pre-holiday lull' },
                    December: { deals: 'Poor', reason: 'Holiday travel' }
                }
            }
        }),
        createDealPage({
            id: 'best-budget-airlines',
            slug: 'best-budget-airlines-2024',
            title: 'Best Budget Airlines 2024',
            metaTitle: 'Best Budget Airlines 2024 | Fly Cheap Without Sacrificing Comfort',
            metaDescription: 'Complete guide to the best low-cost airlines. Compare Spirit, Frontier, Ryanair, EasyJet and more.',
            h1: 'Best Budget Airlines to Fly in 2024',
            heroImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600',
            content: {
                intro: 'Budget airlines have revolutionized travel. Here\'s how to fly cheap without sacrificing comfort.',
                conclusion: 'With the right strategy, budget airlines can save you hundreds on every trip.'
            }
        })
    ]
};

// Helper to get all SEO pages as flat array
export const getAllSeoPages = () => {
    return [
        ...seoPages.flightDeals,
        ...seoPages.guides
    ];
};

// Helper to get page by slug
export const getSeoPageBySlug = (slug) => {
    return getAllSeoPages().find(page => page.slug === slug);
};

// Generate affiliate links for a deal page
export const getAffiliateLinksForDeal = (page) => {
    if (page.origin && page.destination) {
        return {
            flights: flightUrls.travelpayouts(page.origin.code, page.destination.code),
            hotels: hotelUrls.booking(page.destination.city)
        };
    }
    return null;
};
