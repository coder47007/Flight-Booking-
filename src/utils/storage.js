// LocalStorage utilities for search persistence

const STORAGE_KEY = 'skystay_recent_searches';
const MAX_SEARCHES = 5;

/**
 * Save a search to localStorage
 */
export function saveSearch(search) {
    try {
        const searches = getRecentSearches();

        // Check if similar search already exists
        const existingIndex = searches.findIndex(s =>
            s.type === search.type &&
            s.from === search.from &&
            s.to === search.to &&
            s.checkIn === search.checkIn
        );

        // Remove existing if found
        if (existingIndex > -1) {
            searches.splice(existingIndex, 1);
        }

        // Add new search at the beginning
        searches.unshift({
            ...search,
            timestamp: Date.now()
        });

        // Keep only max searches
        const trimmed = searches.slice(0, MAX_SEARCHES);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
        return true;
    } catch (error) {
        console.warn('Failed to save search to localStorage:', error);
        return false;
    }
}

/**
 * Get recent searches from localStorage
 */
export function getRecentSearches() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn('Failed to get searches from localStorage:', error);
        return [];
    }
}

/**
 * Clear all recent searches
 */
export function clearSearches() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.warn('Failed to clear searches:', error);
        return false;
    }
}

/**
 * Get the last search parameters
 */
export function getLastSearch() {
    const searches = getRecentSearches();
    return searches.length > 0 ? searches[0] : null;
}

/**
 * Format a search for display
 */
export function formatSearchDisplay(search) {
    if (search.type === 'flights') {
        return `${search.from} → ${search.to}`;
    }
    return search.destination || search.to || 'Unknown';
}

/**
 * Save user preferences
 */
export function savePreferences(prefs) {
    try {
        localStorage.setItem('skystay_preferences', JSON.stringify(prefs));
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Get user preferences
 */
export function getPreferences() {
    try {
        const stored = localStorage.getItem('skystay_preferences');
        return stored ? JSON.parse(stored) : {
            currency: 'USD',
            sortBy: 'price-low'
        };
    } catch (error) {
        return { currency: 'USD', sortBy: 'price-low' };
    }
}
