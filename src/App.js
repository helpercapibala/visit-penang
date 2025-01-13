import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import VideoGallery from './components/VideoGallery';
import MapSection from './components/MapSection';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';
import Hotel from './components/Hotels';
import Others from './components/Others';
import TouristSpots from './components/TouristSpots'; // Import TouristSpots component
import FoodBeverages from './components/FoodBeverages'; // Import FoodBeverages component 
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component

function App() {
    const backgroundImage = "url('/images/bgpic.jpg')";

    return (
        <Router>
            <div
                style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Background Image Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                    }}
                ></div>

                <Header />
                <ScrollToTop />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <main>
                                    <center>
                                        <h2 style={{fontWeight: 'bold', color:'snow', WebkitTextStroke: '1px white'}}>Welcome to Penang !</h2>
                                        <p style={{/*fontWeight: 'bold',*/ color:'snow', WebkitTextStroke: '1px snow'}}>Discover the beauty, food, and culture of Penang here ~</p>
                                    </center>
                                </main>
                                <ImageCarousel />
                                <MainContent />
                                <VideoGallery />
                            </>
                        }
                    />
                    <Route path="/hotels" element={<Hotel />} />
                    <Route path="/tourist-spots" element={<TouristSpots />} />
                    <Route path="/food-beverages" element={<FoodBeverages />} /> 
                    <Route path="/others" element={<Others />} /> {/* New Route */}
                </Routes>
                <div className="map-contact-container">
                <ContactForm />
                <MapSection />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
