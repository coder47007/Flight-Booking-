import { useState, useEffect, useCallback } from 'react';
import { destinations } from '../data/destinations';

// Simulates "trending" by scoring destinations based on pseudo-random factors
// that change every refresh interval (like time-based popularity shifts)
const scoreTrending = (dest, timeSlot) => {
    // Use destination code and time slot to create a pseudo-random but consistent score
    const charSum = dest.code.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const priceWeight = dest.avgFlightPrice.includes('$') ?
        parseInt(dest.avgFlightPrice.match(/\d+/)?.[0] || 500) : 500;

    // Combine factors with time slot for variety
    const score = (charSum * 17 + timeSlot * 31) % 1000 + (1000 - priceWeight);
    return score;
};

// Get current "time slot" - changes every interval to refresh trending data
const getTimeSlot = (intervalMinutes = 5) => {
    return Math.floor(Date.now() / (intervalMinutes * 60 * 1000));
};

// Get trending destinations based on current time slot
export const getTrendingDestinations = (count = 8, intervalMinutes = 5) => {
    const timeSlot = getTimeSlot(intervalMinutes);

    // Score all destinations based on "trending" algorithm
    const scored = destinations.map(dest => ({
        ...dest,
        trendingScore: scoreTrending(dest, timeSlot),
        isTrending: true
    }));

    // Sort by score and take top N
    return scored
        .sort((a, b) => b.trendingScore - a.trendingScore)
        .slice(0, count);
};

// Custom hook for real-time trending destinations
export const useTrendingDestinations = (count = 8, pollIntervalMinutes = 5) => {
    const [trending, setTrending] = useState(() => getTrendingDestinations(count, pollIntervalMinutes));
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const refresh = useCallback(() => {
        const newTrending = getTrendingDestinations(count, pollIntervalMinutes);
        setTrending(newTrending);
        setLastUpdated(new Date());
    }, [count, pollIntervalMinutes]);

    useEffect(() => {
        // Refresh immediately if time slot has changed
        const checkAndRefresh = () => {
            const currentSlot = getTimeSlot(pollIntervalMinutes);
            const lastSlot = Math.floor(lastUpdated.getTime() / (pollIntervalMinutes * 60 * 1000));

            if (currentSlot !== lastSlot) {
                refresh();
            }
        };

        // Check every minute for slot changes
        const intervalId = setInterval(checkAndRefresh, 60 * 1000);

        return () => clearInterval(intervalId);
    }, [refresh, pollIntervalMinutes, lastUpdated]);

    return { trending, lastUpdated, refresh };
};

// Format "last updated" time for display
export const formatLastUpdated = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
