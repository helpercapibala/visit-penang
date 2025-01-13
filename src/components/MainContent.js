import React from 'react';
import { Link } from 'react-router-dom';
import place from '../assets/images/welcome.jpg';
import food from '../assets/images/hokkienmee.jpg';
import hotel from '../assets/images/hotel.jpg';

const MainContent = () => {
    return (
        <main style={styles.main}>
            <div style={styles.container}>
                <section id="tourist-spots" style={styles.section}>
                    <h2>Tourist Spots</h2>
                    <p>Explore the beautiful landmarks and attractions in Penang.</p>
                    <Link to={"/tourist-spots"}>
                    <img src={place} alt="Tourist Spot" style={styles.image} />
                    </Link>
                </section>
                <section id="food-beverages" style={styles.section}>
                    <h2>Food & Beverages</h2>
                    <p>Indulge in the mouthwatering flavors of Penang's cuisine.</p>
                    <Link to={"/food-beverages"}>
                    <img src={food} alt="Food" style={styles.image} />
                    </Link>
                </section>
                <section id="hotels" style={styles.section}>
                    <h2>Hotels</h2>
                    <p>Find the best places to stay during your visit to Penang.</p>
                    <Link to="/hotels">
                        <img src={hotel} alt="Hotels" style={styles.image} />
                    </Link>
                </section>
            </div>
        </main>
    );
};

const styles = {
    main: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Ensures wrapping on smaller screens
        gap: '20px',
        position: 'relative',
    },
    section: {
        flex: '1 1 calc(33.333% - 20px)', // Responsive width: 3 items per row
        boxSizing: 'border-box',
        background: 'rgba(128, 0, 0, 0.6)', // Maroon with 60% transparency
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
        display: 'flex', // Centers content vertically
        flexDirection: 'column', // Ensures title and image stack vertically
        justifyContent: 'space-between', // Adds equal spacing
    },
    image: {
        width: '100%', // Makes the image responsive
        height: 'auto',
        borderRadius: '8px',
        marginTop: '10px',
        cursor: 'pointer',
    },
    header: {
        backgroundColor: '#f5f5f5', // Or any style you prefer
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
    },

    // Media Query for Mobile Devices
    '@media (max-width: 768px)': {
        section: {
            maxWidth: '100%', // Stacks sections vertically on smaller screens
        },
    },
};

export default MainContent;
