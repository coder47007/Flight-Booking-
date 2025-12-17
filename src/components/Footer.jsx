/**
 * Simple Footer - Logo and Copyright
 */

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
                    <p className="footer-copyright">
                        © {currentYear} SkyStay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
