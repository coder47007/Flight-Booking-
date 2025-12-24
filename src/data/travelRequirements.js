
export const travelRequirements = [
    {
        id: 1,
        country: "France",
        flag: "🇫🇷",
        keywords: ["Paris", "Nice", "Lyon", "Marseille", "Europe"],
        visa: "No visa required for US/CA/UK citizens for stays up to 90 days (Schengen Area). ETIAS required starting mid-2025.",
        passport: "Must be valid for at least 3 months beyond your planned date of departure.",
        safety: "Level 2: Exercise Increased Caution (due to threat of terrorism).",
        currency: "Euro (€)",
        language: "French",
        voltage: "230V (Type E)",
        sources: ["France Diplomacy", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "Eiffel Tower",
                image: "https://images.unsplash.com/photo-1511739001486-91ded02752dd?w=800&q=80",
                description: "The iron lady of Paris, offering breathtaking city views."
            },
            {
                name: "Louvre Museum",
                image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?w=800&q=80",
                description: "Home to the Mona Lisa and thousands of classic artworks."
            },
            {
                name: "French Riviera",
                image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
                description: "Glamorous beaches and charming coastal towns like Nice and Cannes."
            }
        ]
    },
    {
        id: 2,
        country: "Japan",
        flag: "🇯🇵",
        keywords: ["Tokyo", "Kyoto", "Osaka", "Asia"],
        visa: "Visa-free for US/CA/UK citizens for stays up to 90 days for tourism.",
        passport: "Must be valid for the duration of your stay.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "Japanese Yen (¥)",
        language: "Japanese",
        voltage: "100V (Type A/B)",
        sources: ["Japan National Tourism Org", "US State Dept"],
        famousPlaces: [
            {
                name: "Mount Fuji",
                image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
                description: "Japan's iconic active volcano and sacred mountain."
            },
            {
                name: "Kyoto Temples",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
                description: "Ancient shrines like Fushimi Inari and Kinkaku-ji."
            },
            {
                name: "Shibuya Crossing",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
                description: "The busiest pedestrian crossing in the world, located in Tokyo."
            }
        ]
    },
    {
        id: 3,
        country: "United Kingdom",
        flag: "🇬🇧",
        keywords: ["London", "England", "Scotland", "Wales", "UK"],
        visa: "No visa required for US/CA citizens for stays up to 6 months. ETA required for some nationals starting 2025.",
        passport: "Must be valid for the whole of your stay.",
        safety: "Level 2: Exercise Increased Caution (due to terrorism threat).",
        currency: "Pound Sterling (£)",
        language: "English",
        voltage: "230V (Type G - Warning: Needs Adapter)",
        sources: ["GOV.UK", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "Big Ben & Parliament",
                image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80",
                description: "The iconic clock tower and seat of the UK government."
            },
            {
                name: "Tower Bridge",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
                description: "A defining engineering marvel of the London skyline."
            },
            {
                name: "Scottish Highlands",
                image: "https://images.unsplash.com/photo-1506377550980-bc039ed09e80?w=800&q=80",
                description: "Rugged mountains, deep lochs, and historic castles."
            }
        ]
    },
    {
        id: 4,
        country: "United States",
        flag: "🇺🇸",
        keywords: ["New York", "California", "Florida", "Las Vegas", "USA"],
        visa: "ESTA required for Visa Waiver Program countries (UK, EU, AU, etc.). Canadians equivalent to visa-free.",
        passport: "Must be valid for 6 months beyond stay (with some country-specific exemptions).",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "US Dollar ($)",
        language: "English",
        voltage: "120V (Type A/B)",
        sources: ["US Customs & Border Protection", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "Statue of Liberty",
                image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80",
                description: "Universal symbol of freedom in New York Harbor."
            },
            {
                name: "Grand Canyon",
                image: "https://images.unsplash.com/photo-1474044159687-195f007c9b27?w=800&q=80",
                description: "A mile-deep gorge carved by the Colorado River."
            },
            {
                name: "Las Vegas Strip",
                image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80",
                description: "World-famous resort city known for gambling and entertainment."
            }
        ]
    },
    {
        id: 5,
        country: "Mexico",
        flag: "🇲🇽",
        keywords: ["Cancun", "Tulum", "Mexico City", "Cabo"],
        visa: "No visa required for US/CA/UK/EU citizens for tourism up to 180 days.",
        passport: "Must be valid at time of entry.",
        safety: "Level 2-4: Varies by state. Exercise Increased Caution generally; Do Not Travel to some specific states.",
        currency: "Mexican Peso (MXN)",
        language: "Spanish",
        voltage: "127V (Type A/B)",
        sources: ["Gobierno de México", "US State Dept"],
        famousPlaces: [
            {
                name: "Chichen Itza",
                image: "https://images.unsplash.com/photo-1518638151313-982d5438c825?w=800&q=80",
                description: "A complex of Mayan ruins and one of the New 7 Wonders."
            },
            {
                name: "Tulum Beaches",
                image: "https://images.unsplash.com/photo-1504730655569-4e12501a3507?w=800&q=80",
                description: "Ancient ruins overlooking pristine Caribbean waters."
            },
            {
                name: "Cenotes (Yucatan)",
                image: "https://images.unsplash.com/photo-1533591380348-14193f1915f8?w=800&q=80",
                description: "Natural limestone swimming holes unique to the region."
            }
        ]
    },
    {
        id: 6,
        country: "Italy",
        flag: "🇮🇹",
        keywords: ["Rome", "Venice", "Florence", "Milan", "Europe"],
        visa: "No visa required for US/CA/UK citizens for stays up to 90 days (Schengen).",
        passport: "Must be valid for at least 3 months beyond departure.",
        safety: "Level 2: Exercise Increased Caution.",
        currency: "Euro (€)",
        language: "Italian",
        voltage: "230V (Type F/L)",
        sources: ["Viaggiare Sicuri", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "The Colosseum",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
                description: "The largest amphitheater ever built, center of ancient Rome."
            },
            {
                name: "Venice Canals",
                image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&q=80",
                description: "Historic city built on water, famous for gondola rides."
            },
            {
                name: "Amalfi Coast",
                image: "https://images.unsplash.com/photo-1633321088355-d0f81f5c6b6c?w=800&q=80",
                description: "Dramatic coastline with colorful villages like Positano."
            }
        ]
    },
    {
        id: 7,
        country: "Spain",
        flag: "🇪🇸",
        keywords: ["Barcelona", "Madrid", "Ibiza", "Seville", "Europe"],
        visa: "No visa required for US/CA/UK citizens for stays up to 90 days (Schengen).",
        passport: "Must be valid for at least 3 months beyond departure.",
        safety: "Level 2: Exercise Increased Caution.",
        currency: "Euro (€)",
        language: "Spanish",
        voltage: "230V (Type F)",
        sources: ["Spain Ministry of Foreign Affairs", "US State Dept"],
        famousPlaces: [
            {
                name: "Sagrada Familia",
                image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
                description: "Gaudí's masterpiece basilica in Barcelona, still unfinished."
            },
            {
                name: "Ibiza",
                image: "https://images.unsplash.com/photo-1518557984649-7b16d92815bd?w=800&q=80",
                description: "World-famous island for nightlife and stunning beaches."
            },
            {
                name: "Alhambra",
                image: "https://images.unsplash.com/photo-1564887707324-da172f3273e8?w=800&q=80",
                description: "Stunning palace and fortress complex in Granada."
            }
        ]
    },
    {
        id: 8,
        country: "Thailand",
        flag: "🇹🇭",
        keywords: ["Bangkok", "Phuket", "Chiang Mai", "Asia"],
        visa: "Visa exemption for US/CA/UK citizens for stays up to 30 days.",
        passport: "Must be valid for at least 6 months remaining.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "Thai Baht (฿)",
        language: "Thai",
        voltage: "220V (Type A/C)",
        sources: ["Tourism Authority of Thailand", "UK FCDO"],
        famousPlaces: [
            {
                name: "The Grand Palace",
                image: "https://images.unsplash.com/photo-1582236967733-145455648939?w=800&q=80",
                description: "The spectacular official residence of the Kings of Siam."
            },
            {
                name: "Phi Phi Islands",
                image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&q=80",
                description: "Crystal clear waters and limestone cliffs."
            },
            {
                name: "Chiang Mai Temples",
                image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
                description: "Ancient temples like Wat Chedi Luang in the mountains."
            }
        ]
    },
    {
        id: 9,
        country: "Australia",
        flag: "🇦🇺",
        keywords: ["Sydney", "Melbourne", "Brisbane", "Gold Coast"],
        visa: "ETA (Electronic Travel Authority) required for US/CA citizens. eVisitor for UK/EU.",
        passport: "Must be valid for duration of stay.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "Australian Dollar (AUD)",
        language: "English",
        voltage: "230V (Type I)",
        sources: ["Home Affairs Australia", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "Sydney Opera House",
                image: "https://images.unsplash.com/photo-1523482580638-01c63b6a709f?w=800&q=80",
                description: "Architectural masterpiece on Sydney Harbour."
            },
            {
                name: "Great Barrier Reef",
                image: "https://images.unsplash.com/photo-1583212234801-62f56823164e?w=800&q=80",
                description: "The world's largest coral reef system, visible from space."
            },
            {
                name: "Uluru",
                image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800&q=80",
                description: "Massive sandstone monolith in the heart of the Northern Territory."
            }
        ]
    },
    {
        id: 10,
        country: "United Arab Emirates",
        flag: "🇦🇪",
        keywords: ["Dubai", "Abu Dhabi", "UAE", "Desert"],
        visa: "Free Visa on Arrival (30 days) for US/CA/UK/EU citizens.",
        passport: "Must be valid for at least 6 months from date of entry.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "UAE Dirham (AED)",
        language: "Arabic (English widely spoken)",
        voltage: "220V (Type G)",
        sources: ["UAE Government Portal", "US State Dept"],
        famousPlaces: [
            {
                name: "Burj Khalifa",
                image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
                description: "The world's tallest building, dominating the Dubai skyline."
            },
            {
                name: "Palm Jumeirah",
                image: "https://images.unsplash.com/photo-1512453979798-5ea904f47624?w=800&q=80",
                description: "Iconic palm-shaped artificial island."
            },
            {
                name: "Sheikh Zayed Mosque",
                image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
                description: "Massive, stunning white marble mosque in Abu Dhabi."
            },
            {
                name: "Desert Safari",
                image: "https://images.unsplash.com/photo-1451440068599-c3735071a94f?w=800&q=80",
                description: "Thrilling dune bashing and traditional desert camps."
            }
        ]
    },
    {
        id: 11,
        country: "Turkey",
        flag: "🇹🇷",
        keywords: ["Istanbul", "Cappadocia", "Antalya", "Bodrum"],
        visa: "e-Visa required for US/CA citizens. Visa-free for UK/EU citizens (tourism).",
        passport: "Must be valid for at least 6 months beyond entry.",
        safety: "Level 2: Exercise Increased Caution.",
        currency: "Turkish Lira (TRY)",
        language: "Turkish",
        voltage: "230V (Type F)",
        sources: ["Republic of Türkiye MFA", "Travel.gc.ca"],
        famousPlaces: [
            {
                name: "Hagia Sophia",
                image: "https://images.unsplash.com/photo-1545920703-a26b77207c4c?w=800&q=80",
                description: "Historic place of worship with massive dome and mosaics."
            },
            {
                name: "Cappadocia",
                image: "https://images.unsplash.com/photo-1641128328198-15fc9b4de741?w=800&q=80",
                description: "Famous for its unique rock formations and hot air balloons."
            },
            {
                name: "Pamukkale",
                image: "https://images.unsplash.com/photo-1529949712779-19ec47596d65?w=800&q=80",
                description: "Surreal white travertine thermal pools."
            }
        ]
    },
    {
        id: 12,
        country: "Germany",
        flag: "🇩🇪",
        keywords: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        visa: "No visa required for US/CA/UK citizens for stays up to 90 days (Schengen).",
        passport: "Must be valid for at least 3 months beyond departure.",
        safety: "Level 2: Exercise Increased Caution.",
        currency: "Euro (€)",
        language: "German",
        voltage: "230V (Type F)",
        sources: ["German Missions", "UK FCDO"],
        famousPlaces: [
            {
                name: "Neuschwanstein Castle",
                image: "https://images.unsplash.com/photo-1579569736853-b0f34045432a?w=800&q=80",
                description: "The fairytale castle that inspired Disney's Cinderella castle."
            },
            {
                name: "Brandenburg Gate",
                image: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=800&q=80",
                description: "18th-century neoclassical monument in Berlin."
            },
            {
                name: "Oktoberfest (Munich)",
                image: "https://images.unsplash.com/photo-1559160581-44bd4b5677a2?w=800&q=80",
                description: "The world's largest Volksfest (beer festival)."
            }
        ]
    },
    {
        id: 13,
        country: "Indonesia",
        flag: "🇮🇩",
        keywords: ["Bali", "Jakarta", "Ubud", "Asia"],
        visa: "Visa on Arrival (VOA) available for US/CA/UK/EU (approx $35 USD).",
        passport: "Must be valid for at least 6 months.",
        safety: "Level 2: Exercise Increased Caution.",
        currency: "Indonesian Rupiah (IDR)",
        language: "Indonesian",
        voltage: "230V (Type C/F)",
        sources: ["Indonesian Immigration", "US State Dept"],
        famousPlaces: [
            {
                name: "Bali Rice Terraces",
                image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
                description: "Stunning green landscapes in Ubud."
            },
            {
                name: "Uluwatu Temple",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
                description: "Sea temple perched on a steep cliff."
            },
            {
                name: "Nusa Penida",
                image: "https://images.unsplash.com/photo-1549448834-31e74a87ad18?w=800&q=80",
                description: "Island known for Kelingking Beach's T-Rex shape."
            }
        ]
    },
    {
        id: 14,
        country: "Canada",
        flag: "🇨1",
        keywords: ["Toronto", "Vancouver", "Montreal", "Banff"],
        visa: "eTA required for Visa-exempt foreign nationals flying to Canada. US citizens exempt.",
        passport: "Must be valid for duration of stay.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "Canadian Dollar (CAD)",
        language: "English, French",
        voltage: "120V (Type A/B)",
        sources: ["Canada.ca", "US State Dept"],
        famousPlaces: [
            {
                name: "Banff National Park",
                image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80",
                description: "Turquoise lakes and Rocky Mountain peaks."
            },
            {
                name: "CN Tower",
                image: "https://images.unsplash.com/photo-1506169894395-36397e4aaee5?w=800&q=80",
                description: "Dominating the Toronto skyline, featuring a glass floor."
            },
            {
                name: "Niagara Falls",
                image: "https://images.unsplash.com/photo-1534062098679-5095d32c525f?w=800&q=80",
                description: "Famous group of massive waterfalls on the US border."
            }
        ]
    },
    {
        id: 15,
        country: "Portugal",
        flag: "🇵🇹",
        keywords: ["Lisbon", "Porto", "Algarve", "Europe"],
        visa: "No visa required for US/CA/UK citizens for stays up to 90 days (Schengen).",
        passport: "Must be valid for at least 3 months beyond departure.",
        safety: "Level 1: Exercise Normal Precautions.",
        currency: "Euro (€)",
        language: "Portuguese",
        voltage: "230V (Type F)",
        sources: ["Visit Portugal", "UK FCDO"],
        famousPlaces: [
            {
                name: "Belem Tower",
                image: "https://images.unsplash.com/photo-1546702656-78ab5a23f46f?w=800&q=80",
                description: "Historic fortified tower in Lisbon."
            },
            {
                name: "Algarve Beaches",
                image: "https://images.unsplash.com/photo-1565576189569-826d4b4556a3?w=800&q=80",
                description: "Golden cliffs and turquoise waters in the south."
            },
            {
                name: "Pena Palace",
                image: "https://images.unsplash.com/photo-1543328574-d4b68448eb06?w=800&q=80",
                description: "Colorful Romanticist castle in Sintra."
            }
        ]
    }
];
