// Popular travel destinations with essential travel info
// Structure: name, desc, image, and 5 essential info points

export const travelDestinations = {
    "Argentina": [
        {
            name: "Perito Moreno Glacier",
            desc: "Massive glacier in Patagonia",
            image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
            bestTime: "November-March (summer), mornings for fewer crowds",
            cost: "Park entry ~$35 USD, boat tours extra $50-100",
            howToReach: "Fly to El Calafate, then 80km bus/taxi to park",
            insider: "The glacier 'calves' (breaks off) most often in the afternoon - wait for it!",
            duration: "3-5 hours minimum, full day to explore all viewpoints"
        },
        {
            name: "Iguazu Falls",
            desc: "275 waterfalls spanning nearly 3km",
            image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=800&q=80",
            bestTime: "March-April (fewer crowds, good water levels), early morning",
            cost: "~$40 USD entry, boat ride extra $80-100",
            howToReach: "Fly to Puerto Iguazú, 20min bus to park entrance",
            insider: "Do the boat ride that goes UNDER the falls - you'll get soaked but it's unforgettable",
            duration: "Full day for Argentina side, 2 days to see both sides"
        }
    ],
    "Australia": [
        {
            name: "Sydney Opera House",
            desc: "Iconic architectural masterpiece",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
            bestTime: "September-November (spring), sunset for golden photos",
            cost: "Free to walk around, tours from $43 AUD, shows $50-300+",
            howToReach: "Circular Quay station (2 min walk), ferry from anywhere",
            insider: "The best free photo spot is from Mrs Macquarie's Chair at sunrise",
            duration: "1-2 hours outside, add 2+ hours for tour/show"
        },
        {
            name: "Great Barrier Reef",
            desc: "World's largest coral reef system",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
            bestTime: "June-October (dry season, clearest water, no stingers)",
            cost: "Day trips $200-300 AUD including gear, reef tax $7",
            howToReach: "Fly to Cairns or Airlie Beach, boats depart daily",
            insider: "Outer reef is healthier than inner reef - pay extra for the longer boat trip",
            duration: "Full day minimum, 2-3 days for diving certification"
        }
    ],
    "Austria": [
        {
            name: "Hallstatt",
            desc: "Fairytale lakeside village in the Alps",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            bestTime: "September-October (fall colors) or May-June, before 9 AM",
            cost: "Free to visit, parking €5-10, salt mine tour €40",
            howToReach: "Train to Hallstatt station, then ferry across lake (5 min)",
            insider: "Stay overnight - town empties by 5 PM when day-trippers leave",
            duration: "3-4 hours day trip, overnight for the real experience"
        }
    ],
    "Brazil": [
        {
            name: "Christ the Redeemer",
            desc: "Iconic statue overlooking Rio",
            image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
            bestTime: "May-September (dry season), 8 AM opening or sunset",
            cost: "~R$90 ($18) including train, or taxi + entry R$40",
            howToReach: "Cosme Velho station → cog train, or taxi to Paineiras + van",
            insider: "Go at 8 AM sharp - you'll have 30 min almost alone before crowds",
            duration: "1.5-2 hours total including transport"
        }
    ],
    "Cambodia": [
        {
            name: "Angkor Wat",
            desc: "World's largest religious monument",
            image: "https://images.unsplash.com/photo-1569083692634-f8db006c1227?w=800&q=80",
            bestTime: "November-February (dry, cool), 5 AM for sunrise",
            cost: "1-day pass $37, 3-day $62, 7-day $72",
            howToReach: "Tuk-tuk from Siem Reap ($15-20/day), 6km to main temple",
            insider: "Skip sunrise crowds at Angkor Wat - go to Angkor Thom instead, it's empty",
            duration: "1 day minimum, 3 days to see major temples properly"
        },
        {
            name: "Ta Prohm Temple",
            desc: "Ancient temple embraced by tree roots",
            image: "https://images.unsplash.com/photo-1600807587566-6f1c8893f55e?w=800&q=80",
            bestTime: "Early morning (7-8 AM) for photos without crowds",
            cost: "Included in Angkor pass",
            howToReach: "Part of Angkor complex, 10 min tuk-tuk from Angkor Wat",
            insider: "The famous 'Tomb Raider tree' has a long queue - there are equally amazing ones with no line",
            duration: "45 min to 1.5 hours"
        }
    ],
    "Canada": [
        {
            name: "Banff National Park",
            desc: "Turquoise lakes and stunning Rocky Mountains",
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
            bestTime: "June-September for hiking, January-March for skiing, sunrise at lakes",
            cost: "Day pass $11 CAD/person, camping $18-40/night",
            howToReach: "Fly to Calgary, 1.5hr drive or bus to Banff town",
            insider: "Lake Louise is packed by 10 AM - arrive at 6 AM or go to Moraine Lake instead",
            duration: "Minimum 2 days, 5-7 days to properly explore"
        },
        {
            name: "Niagara Falls",
            desc: "Powerful waterfalls on the US-Canada border",
            image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80",
            bestTime: "June-August for boat rides, evening for illumination shows",
            cost: "Free to view, Maid of the Mist $28 CAD, Journey Behind Falls $23",
            howToReach: "1.5hr drive from Toronto, bus available, VIA Rail to town",
            insider: "The Canadian side has WAY better views than the US side - don't cross the border",
            duration: "Half day for falls, full day with attractions"
        }
    ],
    "Chile": [
        {
            name: "Torres del Paine",
            desc: "Dramatic granite peaks in Patagonia",
            image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80",
            bestTime: "October-April (summer), December-February best weather",
            cost: "Park entry ~$35 USD, W Trek refugios $100-200/night",
            howToReach: "Fly to Punta Arenas, 3hr bus to Puerto Natales, 2hr to park",
            insider: "Book refugios 6+ months ahead for the W Trek - they sell out fast!",
            duration: "Day trip possible, 4-5 days for W Trek, 8-10 for O Trek"
        }
    ],
    "China": [
        {
            name: "Great Wall of China",
            desc: "Ancient wonder stretching thousands of miles",
            image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
            bestTime: "April-May or September-October, weekdays, 8 AM",
            cost: "Entry ¥45-65 ($7-10), cable car extra ¥100-140",
            howToReach: "Beijing → Mutianyu (2hr bus) is less crowded than Badaling",
            insider: "Go to Jinshanling for hiking between watchtowers with almost no tourists",
            duration: "Half day for one section, full day for hiking experience"
        }
    ],
    "Colombia": [
        {
            name: "Cartagena Old Town",
            desc: "Colorful colonial walled city",
            image: "https://images.unsplash.com/photo-1557177324-56c542165309?w=800&q=80",
            bestTime: "December-April (dry season), early morning or sunset for photos",
            cost: "Free to walk, entrance fees to museums $3-10",
            howToReach: "Fly direct to Cartagena, taxi to old town 15 min",
            insider: "Getsemaní neighborhood is cooler and cheaper than the walled city - stay there",
            duration: "1-2 days for old town, 3+ days for beaches nearby"
        }
    ],
    "Costa Rica": [
        {
            name: "Arenal Volcano",
            desc: "Majestic volcano with hot springs",
            image: "https://images.unsplash.com/photo-1562621959-3a6a4c8893d2?w=800&q=80",
            bestTime: "February-April (driest), early morning for clear views",
            cost: "Free to view, hot springs $40-90, national park $15",
            howToReach: "3hr drive from San José, or shuttle bus $30-50",
            insider: "Tabacón is overpriced - Baldi or Ecotermales are just as nice for half the cost",
            duration: "1-2 days to enjoy hot springs and trails"
        }
    ],
    "Croatia": [
        {
            name: "Dubrovnik Old Town",
            desc: "The 'Pearl of the Adriatic'",
            image: "https://images.unsplash.com/photo-1555990538-16c7a8e6a3b0?w=800&q=80",
            bestTime: "May-June or September-October, before 9 AM to avoid cruise ships",
            cost: "Free to enter, wall walk €35, Game of Thrones tours €30-50",
            howToReach: "Airport 20km, bus to Pile Gate (old town entrance)",
            insider: "Check cruise ship schedules online - avoid days with 3+ ships docked",
            duration: "1 full day for old town, 2-3 days to explore surroundings"
        },
        {
            name: "Plitvice Lakes",
            desc: "Cascading terraced lakes and waterfalls",
            image: "https://images.unsplash.com/photo-1504554136821-aa2978c17eb7?w=800&q=80",
            bestTime: "April-May or September-October, 7 AM entry",
            cost: "€20-40 depending on season, parking €7",
            howToReach: "2hr drive from Zagreb, buses available 2-3x daily",
            insider: "Enter from Entrance 2 and walk backwards - you'll avoid 90% of crowds",
            duration: "4-6 hours minimum, full day for both routes"
        }
    ],
    "Czech Republic": [
        {
            name: "Charles Bridge Prague",
            desc: "Gothic bridge with baroque statues",
            image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
            bestTime: "Sunrise (6 AM) or after 10 PM for empty photos",
            cost: "Free to walk, tower entry 100 CZK ($4)",
            howToReach: "Walk from Old Town Square (5 min) or Malá Strana",
            insider: "Touch the dog and the falling saint on the John of Nepomuk statue for good luck",
            duration: "30 min crossing, 1-2 hours to enjoy views and statues"
        }
    ],
    "Egypt": [
        {
            name: "Pyramids of Giza",
            desc: "Ancient wonder of the world",
            image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80",
            bestTime: "October-April (cooler), 8 AM opening or 3 PM for sunset",
            cost: "Giza Plateau 200 EGP ($6.50), Great Pyramid interior extra 400 EGP",
            howToReach: "Uber from Cairo 30-40 min, or Giza metro + taxi",
            insider: "Hire a licensed guide at the gate - unlicensed 'helpers' are scammers. Say no firmly.",
            duration: "3-4 hours for pyramids, add 1-2 hours for Sphinx"
        },
        {
            name: "Abu Simbel Temples",
            desc: "Massive rock temples of Ramesses II",
            image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80",
            bestTime: "Oct 22 & Feb 22 for sun illumination event, otherwise early morning",
            cost: "Entry 300 EGP ($10), flights from Aswan $100-150 return",
            howToReach: "Fly from Aswan (30 min) or 3hr convoy bus at 4 AM",
            insider: "Stay overnight in Abu Simbel village to see the Sound & Light show and dawn temple",
            duration: "2-3 hours at temples, full day for round trip"
        }
    ],
    "France": [
        {
            name: "Eiffel Tower",
            desc: "Iconic iron lattice tower in Paris",
            image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800&q=80",
            bestTime: "Sunset for golden light, late evening for sparkle (every hour)",
            cost: "Stairs to 2nd floor €11.30, elevator to top €29.40",
            howToReach: "Metro: Bir-Hakeim (Line 6) or Trocadéro (Line 9) for best approach",
            insider: "Best FREE photos are from Trocadéro gardens at sunrise - almost nobody there",
            duration: "1.5-2 hours total, longer if dining at restaurant"
        },
        {
            name: "Mont Saint-Michel",
            desc: "Medieval abbey on a tidal island",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
            bestTime: "Off-season (Nov-March), low tide for walking on sand",
            cost: "Free to enter village, abbey €11, shuttle free",
            howToReach: "Train to Rennes or Pontorson, then shuttle bus",
            insider: "Stay overnight ON the island - after 6 PM it becomes magical and empty",
            duration: "Half day minimum, overnight for full experience"
        }
    ],
    "Germany": [
        {
            name: "Neuschwanstein Castle",
            desc: "Fairy-tale castle in Bavaria",
            image: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800&q=80",
            bestTime: "September-October (fall colors), weekdays, first tour slot",
            cost: "€15 for castle, combined ticket with Hohenschwangau €25",
            howToReach: "Train Munich → Füssen (2hr), then bus to Hohenschwangau",
            insider: "Book tickets online - walk-ups often sell out. Marienbrücke bridge has best photos.",
            duration: "Half to full day from Munich"
        }
    ],
    "Greece": [
        {
            name: "Santorini",
            desc: "Iconic blue-domed churches and sunsets",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
            bestTime: "April-May or September-October, avoid July-August",
            cost: "Free to explore, boutique hotels €150-500+/night",
            howToReach: "Fly to Santorini or ferry from Athens (5-8 hours)",
            insider: "Oia sunsets are overcrowded - watch from Imerovigli or a private terrace instead",
            duration: "2-3 days minimum to enjoy the island properly"
        },
        {
            name: "Acropolis of Athens",
            desc: "Ancient citadel with the Parthenon",
            image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
            bestTime: "March-May or October-November, 8 AM opening",
            cost: "€20 (€10 in winter), combined €30 for 7 sites",
            howToReach: "Metro to Acropoli station (Line 2), 5 min walk up",
            insider: "Enter from the south slope entrance - shorter line than main entrance",
            duration: "2-3 hours for Acropolis and museum"
        }
    ],
    "Iceland": [
        {
            name: "Blue Lagoon",
            desc: "Geothermal spa with milky blue waters",
            image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
            bestTime: "Early morning or evening, winter for Northern Lights chance",
            cost: "Standard €56+, Comfort €80+, book weeks ahead",
            howToReach: "40 min drive from Reykjavik, near Keflavik airport",
            insider: "Sky Lagoon in Reykjavik is newer, less crowded, and half the price",
            duration: "2-3 hours in the water"
        },
        {
            name: "Golden Circle",
            desc: "Geysers, waterfalls, and tectonic plates",
            image: "https://images.unsplash.com/photo-1490034883938-fd0a4ff2f7b7?w=800&q=80",
            bestTime: "June-August (midnight sun), September for smaller crowds",
            cost: "Free entry to all sites, tours €60-100 or rental car €50-80/day",
            howToReach: "230km loop from Reykjavik, easy self-drive",
            insider: "Add the Kerið crater and Secret Lagoon for a better experience than the tourist crowds",
            duration: "6-8 hours self-drive, full day with stops"
        }
    ],
    "India": [
        {
            name: "Taj Mahal",
            desc: "Iconic marble mausoleum",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
            bestTime: "October-March (cool), sunrise entry at 6 AM",
            cost: "₹1100 ($13) foreigners, Friday closed, tripods banned",
            howToReach: "Train Delhi → Agra (2-3hr), taxi to East/South gate",
            insider: "Mehtab Bagh across the river has stunning sunset views of Taj - and it's nearly empty",
            duration: "2-3 hours at Taj, full day for Agra Fort too"
        }
    ],
    "Indonesia": [
        {
            name: "Bali Rice Terraces",
            desc: "Tegallalang's stunning green terraces",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            bestTime: "April-October (dry), early morning (7-8 AM)",
            cost: "Entry 20,000 IDR ($1.30), swing photos extra",
            howToReach: "30 min drive north of Ubud, scooter or driver",
            insider: "Skip Tegallalang crowds - Jatiluwih terraces are UNESCO-listed and nearly empty",
            duration: "1-2 hours for photos and walk"
        },
        {
            name: "Borobudur Temple",
            desc: "World's largest Buddhist temple",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
            bestTime: "Sunrise (4:30 AM entry), dry season April-October",
            cost: "Sunrise entry $45, regular entry $25",
            howToReach: "40 min drive from Yogyakarta, hotel pickup available",
            insider: "Combine with Prambanan (Hindu temple) for the full Central Java temple experience",
            duration: "2-3 hours to explore all levels"
        }
    ],
    "Ireland": [
        {
            name: "Cliffs of Moher",
            desc: "Dramatic cliffs on the Atlantic coast",
            image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80",
            bestTime: "May-September for best weather, sunset/sunrise for photos",
            cost: "€8 parking (includes visitor center), free for walkers",
            howToReach: "2.5hr drive from Dublin, day tours €40-60",
            insider: "Walk south past O'Brien's Tower - the crowds thin after 10 min and views are better",
            duration: "1-3 hours depending on walk length"
        }
    ],
    "Italy": [
        {
            name: "Colosseum Rome",
            desc: "Ancient Roman amphitheater",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
            bestTime: "November-March (less crowded), first or last entry slot",
            cost: "€18 standard, €24 with arena floor, €35 underground tour",
            howToReach: "Metro Colosseo (Line B), 1 min walk",
            insider: "Book online at least 2 weeks ahead - skip-the-line tickets are essential",
            duration: "1.5-2 hours inside, longer with forum"
        },
        {
            name: "Venice Canals",
            desc: "Romantic city on water",
            image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
            bestTime: "February (Carnival) or October-November (fewer crowds)",
            cost: "Entry fee €5 day trip (coming soon), gondola €80-120",
            howToReach: "Train to Venezia Santa Lucia, start walking from there",
            insider: "Get lost on purpose - the best discoveries are away from marked tourist routes",
            duration: "2 days minimum, rush visitors regret not staying longer"
        }
    ],
    "Japan": [
        {
            name: "Mount Fuji",
            desc: "Japan's iconic sacred mountain",
            image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91d65?w=800&q=80",
            bestTime: "July-August (climbing season), clear winter days for viewing",
            cost: "Free to view, ¥1000 ($7) climbing fee, hut stays ¥8-10k",
            howToReach: "Kawaguchiko Station (2hr from Tokyo), bus to 5th Station",
            insider: "Lake Kawaguchiko has best reflection photos. Climb overnight to summit for sunrise.",
            duration: "Day trip to view, 2 days for climbing"
        },
        {
            name: "Fushimi Inari Shrine",
            desc: "Thousands of vermillion torii gates",
            image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80",
            bestTime: "Dawn (5-6 AM) or late night (open 24/7), weekdays",
            cost: "Free, always open",
            howToReach: "JR Inari Station or Keihan Fushimi-Inari Station",
            insider: "Go past the first viewpoint - 90% of tourists stop there but the mountain trail is magical",
            duration: "1-2 hours for lower paths, 3-4 hours for full mountain loop"
        }
    ],
    "Jordan": [
        {
            name: "Petra Treasury",
            desc: "Ancient rock-carved city",
            image: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80",
            bestTime: "March-May or September-November, 6 AM entry",
            cost: "1 day 50 JOD ($70), 2 days 55 JOD, Jordan Pass saves money",
            howToReach: "Wadi Musa town (walk to gate), 3hr drive from Amman",
            insider: "Hike to the Monastery (Ad-Deir) - it's bigger than the Treasury and has 1/10th the crowds",
            duration: "Minimum 2 full days to see the main sites properly"
        },
        {
            name: "Wadi Rum Desert",
            desc: "Mars-like desert landscapes",
            image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80",
            bestTime: "March-May or September-November, sunset & sunrise",
            cost: "5 JOD entry, overnight camps $50-150 including tours",
            howToReach: "1hr drive from Aqaba, 1.5hr from Petra",
            insider: "Stay overnight in a Bedouin camp - the stargazing is world-class with zero light pollution",
            duration: "Half day tour minimum, overnight for full experience"
        }
    ],
    "Kenya": [
        {
            name: "Masai Mara Safari",
            desc: "World-famous wildlife reserve",
            image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80",
            bestTime: "July-October for Great Migration river crossings",
            cost: "$80/day park fee, lodges $200-800+/night all-inclusive",
            howToReach: "Fly Nairobi to Mara (1hr) or 5-6hr drive",
            insider: "Conservancies outside the main reserve have fewer crowds and night game drives",
            duration: "Minimum 2-3 nights for good wildlife sightings"
        }
    ],
    "Mexico": [
        {
            name: "Chichen Itza",
            desc: "Ancient Mayan pyramid",
            image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
            bestTime: "Spring/Fall equinox for serpent shadow, 8 AM opening",
            cost: "480 MXN ($28) total (two separate tickets)",
            howToReach: "2.5hr drive from Cancun, buses available from most hotels",
            insider: "Enter right at 8 AM - by 10 AM tour buses arrive and it's unbearable",
            duration: "2-3 hours for full site"
        }
    ],
    "Morocco": [
        {
            name: "Marrakech Medina",
            desc: "Ancient walled city with souks",
            image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
            bestTime: "March-May or September-November, morning for shopping",
            cost: "Free to walk, budget for haggling (start at 1/3 of asking price)",
            howToReach: "Train or fly to Marrakech, taxi to medina gates",
            insider: "Ignore anyone who says 'medina is closed' - it's a scam to lead you to shops",
            duration: "2-3 days to explore properly"
        },
        {
            name: "Sahara Desert",
            desc: "Camel treks and desert camps",
            image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&q=80",
            bestTime: "October-April (cooler), sunset and sunrise essential",
            cost: "2-day tours from $80-200 including overnight camp",
            howToReach: "Day trip from Marrakech or Fes (8-10hr drive), fly to Ouarzazate",
            insider: "Merzouga dunes are iconic but crowded - Zagora is more authentic and cheaper",
            duration: "2 nights minimum (long drives to reach desert)"
        }
    ],
    "Nepal": [
        {
            name: "Everest Base Camp",
            desc: "Trek to the world's highest peak",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
            bestTime: "March-May or October-November, avoid monsoon June-August",
            cost: "Permits $60+, flights $350, tea houses $30-50/day, guides $30-50/day",
            howToReach: "Fly Kathmandu to Lukla (scary famous runway), then walk",
            insider: "Acclimatize slowly - altitude sickness causes most trek abandonments. Don't rush!",
            duration: "12-14 days round trip minimum"
        }
    ],
    "Netherlands": [
        {
            name: "Amsterdam Canals",
            desc: "UNESCO World Heritage canal ring",
            image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
            bestTime: "April-May (tulips and fewer tourists), September",
            cost: "Free to walk, canal cruise €15-20, bike rental €15/day",
            howToReach: "Train from Schiphol Airport (15 min), walk everywhere",
            insider: "Jordaan neighborhood is prettier and less touristy than the Red Light District",
            duration: "2-3 days for Amsterdam proper"
        },
        {
            name: "Keukenhof Gardens",
            desc: "World's largest flower garden",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            bestTime: "Mid-April for peak tulips (open March-May only)",
            cost: "€20.50 adult, parking €6, combo with bus from Amsterdam €31",
            howToReach: "Bus from Amsterdam (1hr) or Schiphol airport (30 min)",
            insider: "Go on a weekday, arrive at 8 AM opening - mornings are magical",
            duration: "3-4 hours to cover the entire garden"
        }
    ],
    "New Zealand": [
        {
            name: "Milford Sound",
            desc: "Fjord with dramatic waterfalls",
            image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
            bestTime: "November-March (summer), rainy days have MORE waterfalls",
            cost: "Cruises $60-150 NZD, kayaking $200+",
            howToReach: "4hr scenic drive from Queenstown or bus/day tour",
            insider: "Rainy days are actually BETTER - there are hundreds of temporary waterfalls!",
            duration: "Full day from Queenstown including drive"
        },
        {
            name: "Hobbiton",
            desc: "Movie set from Lord of the Rings",
            image: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=800&q=80",
            bestTime: "Morning or evening tours for best light, year-round",
            cost: "$89 NZD adult, evening banquet dinner $199",
            howToReach: "45 min from Rotorua, 2hr from Auckland, tours include transport",
            insider: "Book the evening tour that ends with a drink at the Green Dragon Inn",
            duration: "2 hours for tour"
        }
    ],
    "Norway": [
        {
            name: "Trolltunga",
            desc: "Dramatic cliff jutting over lake",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
            bestTime: "June-September only (trail closed in winter without guide)",
            cost: "Free if self-hiking, shuttle €35, guides €100-300",
            howToReach: "Odda town, then bus/drive to trailhead",
            insider: "Start at 6 AM or earlier - the trail is 22km round trip, harder than most expect",
            duration: "8-12 hours hiking (full day commitment)"
        },
        {
            name: "Norwegian Fjords",
            desc: "Stunning deep blue fjords",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
            bestTime: "May-September for boat access and hiking",
            cost: "Norway in a Nutshell tour from Bergen $200+, self-drive cheaper",
            howToReach: "Fly to Bergen, cruise through Geirangerfjord or Sognefjord",
            insider: "Nærøyfjord (UNESCO) is more dramatic than Geirangerfjord and less touristy",
            duration: "2-3 days for proper fjord experience"
        }
    ],
    "Peru": [
        {
            name: "Machu Picchu",
            desc: "Ancient Incan citadel",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
            bestTime: "April-October (dry season), 6 AM entry slot",
            cost: "$50-60 entry, train from Cusco $80-400, Inca Trail $600-1000+",
            howToReach: "Train/bus to Aguas Calientes, then bus up mountain",
            insider: "Huayna Picchu tickets sell out months ahead - book the moment they open",
            duration: "3-4 hours at site, full day with travel"
        },
        {
            name: "Rainbow Mountain",
            desc: "Colorful striped Vinicunca peak",
            image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
            bestTime: "June-September (dry), early morning for clearer skies",
            cost: "$15-30 entry, tours from Cusco $30-80",
            howToReach: "3hr drive from Cusco + 2hr hike to summit",
            insider: "Acclimatize in Cusco first - the altitude (5,000m) makes many sick. Take it SLOW.",
            duration: "Full day tour from Cusco"
        }
    ],
    "Philippines": [
        {
            name: "Palawan El Nido",
            desc: "Limestone cliffs and lagoons",
            image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
            bestTime: "November-May (dry season), book boats for early departure",
            cost: "Island hopping tours $20-40, eco-tourism fee ₱200",
            howToReach: "Fly Manila → El Nido (1hr) or bus from Puerto Princesa (5hr)",
            insider: "Tour C + D combo is better than overcrowded Tour A with Big Lagoon",
            duration: "3-4 days minimum to enjoy the islands"
        }
    ],
    "Portugal": [
        {
            name: "Sintra Palace",
            desc: "Colorful Pena Palace on hilltop",
            image: "https://images.unsplash.com/photo-1580323956656-26baa92d8f96?w=800&q=80",
            bestTime: "Weekdays, 9:30 AM opening (before tour buses), spring/fall",
            cost: "Pena Palace €14, park only €7.50, combined tickets available",
            howToReach: "Train from Lisbon Rossio (40 min), then bus 434 up the hill",
            insider: "The palace ticket gives you access to the park - don't pay separately",
            duration: "Full day from Lisbon for multiple palaces"
        },
        {
            name: "Algarve Caves",
            desc: "Dramatic sea caves and golden beaches",
            image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
            bestTime: "May-September for beach weather, midday for best cave light",
            cost: "Benagil cave boat tour €20-30, kayak rental €15-30",
            howToReach: "Drive from Faro airport (1hr), or train to Lagos",
            insider: "Kayak to Benagil Cave early morning - boat tours get overcrowded by 11 AM",
            duration: "2-3 days for Algarve coast"
        }
    ],
    "Singapore": [
        {
            name: "Gardens by the Bay",
            desc: "Futuristic supertree grove",
            image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
            bestTime: "Evening for light show (7:45 & 8:45 PM)",
            cost: "Outdoor gardens free, conservatories $28 SGD, OCBC Skyway $14",
            howToReach: "MRT Bayfront station, 5 min walk",
            insider: "The light show is free every night - one of the best free attractions in Asia",
            duration: "2-3 hours including conservatories"
        },
        {
            name: "Marina Bay Sands",
            desc: "Iconic infinity pool hotel",
            image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
            bestTime: "Sunset for photos, evening for skyline lights",
            cost: "SkyPark observation deck $26 SGD, infinity pool for hotel guests only",
            howToReach: "MRT Bayfront station, direct access",
            insider: "CÉ LA VI bar on the rooftop is open to public - same view, just buy a drink ($20-30)",
            duration: "1-2 hours"
        }
    ],
    "South Africa": [
        {
            name: "Table Mountain",
            desc: "Flat-topped mountain over Cape Town",
            image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
            bestTime: "November-March (summer), early morning before wind",
            cost: "Cable car R400 ($21) return, hiking is free",
            howToReach: "MyCiti bus or Uber to lower cable car station",
            insider: "Check webcams first - the tablecloth cloud means zero visibility at top",
            duration: "2-4 hours depending on hiking vs cable car"
        },
        {
            name: "Kruger National Park",
            desc: "Big Five safari adventures",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            bestTime: "May-September (dry, easier animal spotting)",
            cost: "Daily fee R485 ($26), self-drive or guided safaris $100-500+",
            howToReach: "Fly to Hoedspruit or Skukuza, drive from Johannesburg (4-5hr)",
            insider: "Self-driving is half the cost and just as rewarding - download Kruger Sightings app",
            duration: "Minimum 2-3 nights for proper safari experience"
        }
    ],
    "South Korea": [
        {
            name: "Gyeongbokgung Palace",
            desc: "Grand royal palace in Seoul",
            image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
            bestTime: "Spring (cherry blossoms) or fall (foliage), 10-11 AM for guard ceremony",
            cost: "₩3000 ($2.30), free if wearing hanbok (traditional dress)",
            howToReach: "Gyeongbokgung Station (Line 3, Exit 5)",
            insider: "Rent a hanbok from nearby shops (from ₩10,000) - free entry + amazing photos",
            duration: "2-3 hours for palace and grounds"
        }
    ],
    "Spain": [
        {
            name: "Sagrada Familia",
            desc: "Gaudí's unfinished masterpiece in Barcelona",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
            bestTime: "Morning for Nativity façade light, afternoon for Passion façade",
            cost: "€26 basic, €36 with towers, €40 with towers + audioguide",
            howToReach: "Metro Sagrada Familia (Line 2 or Line 5)",
            insider: "Book at least 2 weeks ahead - tickets sell out. 9 AM slot has fewer crowds.",
            duration: "1.5-2 hours inside"
        },
        {
            name: "Alhambra Granada",
            desc: "Moorish palace complex",
            image: "https://images.unsplash.com/photo-1591711696474-1c8d89228ab9?w=800&q=80",
            bestTime: "Spring or fall, Nasrid Palaces timeslot at sunset",
            cost: "€19 for full visit including Nasrid Palaces",
            howToReach: "Granada bus C3 from Plaza Nueva, or 20 min uphill walk",
            insider: "Book 2+ months ahead - Nasrid Palace slots sell out immediately. Night visits available.",
            duration: "3-4 hours for full complex"
        }
    ],
    "Sri Lanka": [
        {
            name: "Sigiriya Rock Fortress",
            desc: "Ancient fortress on massive rock",
            image: "https://images.unsplash.com/photo-1580892057583-9d9927de8bb6?w=800&q=80",
            bestTime: "7 AM opening to beat heat and crowds",
            cost: "$30 foreigners entry",
            howToReach: "4hr drive from Colombo, 1hr from Kandy",
            insider: "Pidurangala Rock next door costs $5 and has BETTER views of Sigiriya itself",
            duration: "2-3 hours to climb and explore"
        }
    ],
    "Switzerland": [
        {
            name: "Matterhorn",
            desc: "Iconic pyramid-shaped peak",
            image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80",
            bestTime: "September-October for clearest views, early morning",
            cost: "Gornergrat train CHF 100 ($110) return, Zermatt village is car-free",
            howToReach: "Train to Zermatt (no cars allowed), then Gornergrat railway",
            insider: "The Stellisee lake reflection shot requires a 20 min hike from Blauherd - worth every step",
            duration: "Full day from Zurich, overnight in Zermatt recommended"
        }
    ],
    "Thailand": [
        {
            name: "Wat Arun Temple",
            desc: "Temple of Dawn in Bangkok",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
            bestTime: "Sunrise from across the river, or visit 7-8 AM",
            cost: "100 THB ($3)",
            howToReach: "Ferry from Tha Tien pier (5 THB), near Grand Palace",
            insider: "Best PHOTOS of Wat Arun are from Tha Maharaj or rooftop bars across the river at sunset",
            duration: "30 min to 1 hour at temple"
        },
        {
            name: "Phi Phi Islands",
            desc: "Stunning limestone islands",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
            bestTime: "November-April (dry season), avoid Chinese New Year/Christmas",
            cost: "Day trips from Phuket ฿1500-2500 ($40-70), overnight stays $30-100",
            howToReach: "Ferry from Phuket (2hr) or Krabi (1.5hr)",
            insider: "Stay overnight on Phi Phi - the day-trippers leave by 4 PM and it gets much calmer",
            duration: "2-3 days recommended"
        }
    ],
    "Turkey": [
        {
            name: "Cappadocia",
            desc: "Hot air balloons over fairy chimneys",
            image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80",
            bestTime: "April-June or September-October, balloon flights at sunrise",
            cost: "Balloon rides €150-300 depending on operator",
            howToReach: "Fly Istanbul → Kayseri or Nevşehir (1hr), taxi to Göreme",
            insider: "Watch balloons from the ground at Sunrise Point for free - almost as magical, no 4 AM wakeup",
            duration: "2-3 days for hot springs, underground cities, and valleys"
        },
        {
            name: "Hagia Sophia",
            desc: "Byzantine masterpiece in Istanbul",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
            bestTime: "Early morning (9 AM) or late afternoon, avoid Friday prayers",
            cost: "Free entry (now a mosque), dress modestly",
            howToReach: "Tram Sultanahmet stop, 2 min walk",
            insider: "Enter through the side door to skip the main entrance line",
            duration: "45 min to 1.5 hours"
        }
    ],
    "United Arab Emirates": [
        {
            name: "Burj Khalifa",
            desc: "World's tallest building",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
            bestTime: "Sunset for best views and photos",
            cost: "Levels 124-125 AED 169 ($46), Prime hours AED 224, Top AED 399",
            howToReach: "Dubai Mall Metro station, walk through the mall",
            insider: "Non-prime hours (before 3 PM) are half the price - sunset is beautiful but costs double",
            duration: "1-1.5 hours including queues"
        },
        {
            name: "Sheikh Zayed Mosque",
            desc: "Stunning white marble mosque",
            image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80",
            bestTime: "Sunset for photos with golden light, night for illumination",
            cost: "Free entry, dress code enforced (free abayas available)",
            howToReach: "Abu Dhabi, 1.5hr drive from Dubai, taxi or tour bus",
            insider: "Visit at sunset and stay for night illumination - you get both experiences in one visit",
            duration: "1-2 hours"
        }
    ],
    "United Kingdom": [
        {
            name: "Big Ben & Parliament",
            desc: "Iconic London landmarks",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
            bestTime: "Evening for illumination, blue hour just after sunset",
            cost: "Free to view from outside, Parliament tours £20+",
            howToReach: "Westminster tube station, exit to Bridge Street",
            insider: "Best photo spots: Westminster Bridge, St James Park, or from South Bank at night",
            duration: "30 min photo stop, 2-3 hours including Westminster Abbey"
        },
        {
            name: "Stonehenge",
            desc: "Prehistoric stone circle mystery",
            image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=800&q=80",
            bestTime: "Summer/Winter solstice for special access, otherwise sunrise/sunset",
            cost: "£22.50 adult, book inner circle access separately (limited)",
            howToReach: "2hr drive from London, or train to Salisbury + bus",
            insider: "Standard tickets don't let you touch stones - book special access months ahead for inner circle",
            duration: "1-2 hours at site"
        }
    ],
    "United States": [
        {
            name: "Grand Canyon",
            desc: "Vast colorful canyon carved by Colorado River",
            image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&q=80",
            bestTime: "March-May or September-November, sunrise/sunset at viewpoints",
            cost: "Vehicle entry $35 (valid 7 days), Havasu Falls permit lottery",
            howToReach: "4hr drive from Las Vegas, 3.5hr from Phoenix to South Rim",
            insider: "Skip crowded South Rim - North Rim is equally stunning with 1/10th the crowds",
            duration: "1-2 days for rim views, 2-4 days for hiking into canyon"
        },
        {
            name: "Statue of Liberty",
            desc: "Symbol of freedom in New York",
            image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80",
            bestTime: "Weekdays, first ferry (8:30 AM), spring or fall",
            cost: "Ferry $24, pedestal $24.30, crown $24.30 (book 3+ months ahead)",
            howToReach: "Ferry from Battery Park (Manhattan) or Liberty State Park (NJ)",
            insider: "Free Staten Island Ferry passes her at a distance - great for photos, saves time/money",
            duration: "Half day with Ellis Island"
        }
    ],
    "Vietnam": [
        {
            name: "Ha Long Bay",
            desc: "Emerald waters with limestone islands",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
            bestTime: "October-April (dry), avoid July-August typhoon season",
            cost: "Overnight cruises $100-400+, day trips $50-80 (not worth it)",
            howToReach: "4hr drive/bus from Hanoi to Halong City, boats from port",
            insider: "Lan Ha Bay is less touristy than Halong's main area - choose cruises that go there",
            duration: "2 days/1 night cruise minimum"
        },
        {
            name: "Hoi An Ancient Town",
            desc: "Lantern-lit historic trading port",
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
            bestTime: "February-May before monsoon, full moon nights for lantern festival",
            cost: "Old Town ticket 120,000 VND ($5) for 5 heritage sites",
            howToReach: "Fly to Da Nang, 30 min taxi/bus south",
            insider: "Get custom clothes made - tailors are world-famous. Budget 2+ days for fittings.",
            duration: "2-3 days including beaches"
        }
    ]
};
