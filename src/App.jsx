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
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

