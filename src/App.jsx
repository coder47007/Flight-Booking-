import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Destinations from './pages/Destinations';
import DestinationPage from './pages/DestinationPage';
import Gallery from './pages/Gallery';
import DealsPage from './pages/DealsPage';
import TravelHacks from './pages/TravelHacks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="app">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/destinations" element={<Destinations />} />
                            <Route path="/destinations/:id" element={<DestinationPage />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/deals" element={<DealsPage />} />
                            <Route path="/deals/:slug" element={<DealsPage />} />
                            <Route path="/travel-hacks" element={<TravelHacks />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-of-service" element={<TermsOfService />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
