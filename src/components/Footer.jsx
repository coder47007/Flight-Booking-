function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h4>✈️ SkyStay</h4>
                        <p>
                            Your trusted partner for finding the best flight and hotel deals worldwide.
                            Compare prices from hundreds of providers and book with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#flights">Search Flights</a></li>
                            <li><a href="#hotels">Search Hotels</a></li>
                            <li><a href="#deals">Today's Deals</a></li>
                            <li><a href="#destinations">Popular Destinations</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#faq">FAQs</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#cancellation">Cancellation Policy</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#cookies">Cookie Policy</a></li>
                            <li><a href="#affiliate">Affiliate Disclosure</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-disclaimer">
                        <strong>Affiliate Disclosure:</strong> SkyStay is a travel comparison platform.
                        We earn commissions from our partners when you book through our links at no extra cost to you.
                        All bookings are processed directly by the travel providers (airlines, hotels).
                        Prices shown are indicative and may vary.
                    </p>
                    <p className="footer-copyright">
                        © {currentYear} SkyStay. All rights reserved. Powered by Travelpayouts.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
