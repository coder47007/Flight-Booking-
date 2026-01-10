import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-simple">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-icon">✈️</span>
                        <span className="logo-text">SkyStay</span>
                    </div>

                    <div className="footer-links" style={{ margin: '1rem 0', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/about-us" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
                        <Link to="/contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
                        <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link to="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
                    </div>

                    <p className="footer-copyright">
                        © {currentYear} SkyStay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
