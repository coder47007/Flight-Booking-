import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className="header">
            <div className="container header-content">
                {/* Logo */}
                <Link to="/" className="logo">
                    <div className="logo-icon">✈️</div>
                    <span>SkyStay</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-links desktop-nav">
                    <Link to="/" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/destinations" className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}>
                        Destinations
                    </Link>
                    <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
                        Gallery
                    </Link>
                    <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
                        Travel Blog
                    </Link>
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    <ThemeToggle />
                    <Link to="/" className="btn btn-primary">
                        Search Flights
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="mobile-nav">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</Link>
                    <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                    <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Travel Blog</Link>
                    <div className="mobile-theme-toggle">
                        <ThemeToggle />
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;

