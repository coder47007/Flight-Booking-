/**
 * AdPlacement - Prepared Google AdSense container
 * Easy to enable/disable once AdSense is approved
 * 
 * To activate:
 * 1. Sign up at https://www.google.com/adsense/
 * 2. Get your publisher ID (ca-pub-XXXXXXXX)
 * 3. Add the AdSense script to index.html
 * 4. Set enabled={true} on this component
 */

function AdPlacement({
    slot = 'auto',
    format = 'auto',
    enabled = false,  // Set to true after AdSense approval
    className = '',
    style = {}
}) {
    // Don't render anything if not enabled
    if (!enabled) {
        return null;
    }

    return (
        <div className={`ad-placement ${className}`} style={style}>
            <div className="ad-container">
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your publisher ID
                    data-ad-slot={slot}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                />
            </div>
            <span className="ad-label">Advertisement</span>
        </div>
    );
}

/**
 * AdPlaceholder - Shows where ads will appear (for development)
 * Remove or replace with AdPlacement once ads are approved
 */
export function AdPlaceholder({ label = 'Ad Space', height = '250px' }) {
    return (
        <div
            className="ad-placeholder"
            style={{ minHeight: height }}
        >
            <span className="ad-placeholder-icon">📢</span>
            <span className="ad-placeholder-label">{label}</span>
            <span className="ad-placeholder-note">
                Google AdSense - Apply after reaching traffic milestones
            </span>
        </div>
    );
}

export default AdPlacement;
