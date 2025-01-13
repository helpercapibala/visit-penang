import React from 'react';
import penangBridge from '../assets/images/penangbridge.jpg';

const Other = () => {
    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>About Penang</h2>
            <p style={styles.paragraph}>
                Penang, known as the "Pearl of the Orient," is a state in Malaysia celebrated for its rich history, diverse culture, and vibrant food scene. 
                Located on the northwest coast of Peninsular Malaysia, it consists of Penang Island and a strip of land on the mainland, connected by the iconic Penang Bridge.
            </p>

            {/* Penang Bridge Section */}
            <div style={styles.featured}>
                <img src={penangBridge} alt="Penang Bridge" style={styles.image} />
                <div style={styles.textContainer}>
                    <h3 style={{ color: 'maroon' }}>Penang Bridge</h3>
                    <p style={{ color: 'DarkSlateGray' }}>
                        The Penang Bridge is one of Southeast Asia's longest bridges, stretching 13.5 km and offering breathtaking views of the surrounding waters. 
                        It connects the island to the mainland, symbolizing the unity and progress of Penang.
                    </p>
                    <a
                        href="https://www.jalanow.com/PNB-penang-bridge-live-traffic-cam.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        The Penang Bridge Live Cam (Click me to go)
                    </a>
                </div>
            </div>

            {/* Explore More Section */}
            <h3 style={styles.subHeading}>Explore More</h3>
            <div style={styles.exploreMore}>
                <div style={styles.exploreItem}>
                    <h4 style={{ color: 'maroon' }}>Tourist Spots</h4>
                    <p>Discover breathtaking landmarks and cultural heritage in Penang.</p>
                    <a href="/tourist-spots" style={styles.exploreLink}>
                        Explore Tourist Spots
                    </a>
                </div>
                <div style={styles.exploreItem}>
                    <h4 style={{ color: 'maroon' }}>Food & Beverages</h4>
                    <p>Savor Penang’s world-famous street food and culinary delights.</p>
                    <a href="/food-beverages" style={styles.exploreLink}>
                        Explore Food & Beverages
                    </a>
                </div>
                <div style={styles.exploreItem}>
                    <h4 style={{ color: 'maroon' }}>Hotels</h4>
                    <p>Find comfortable and luxurious accommodations during your stay in Penang.</p>
                    <a href="/hotels" style={styles.exploreLink}>
                        Find Hotels
                    </a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '40px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: '8px',
        maxWidth: '900px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '28px',
        color: 'maroon',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: 'DarkSlateGray',
        marginBottom: '20px',
    },
    featured: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
    image: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '8px',
        objectFit: 'cover',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    textContainer: {
        flex: 1,
    },
    link: {
        display: 'inline-block',
        marginTop: '10px',
        color: 'red',
        WebkitTextStroke: '0.05px black',
        textDecoration: 'none',
    },
    subHeading: {
        fontSize: '22px',
        color: 'maroon',
        marginBottom: '15px',
    },
    exploreMore: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
        margin: '0 auto',
    },
    exploreItem: {
        flex: '1 1 calc(33% - 20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: 'DarkSlateGray',
        '@media (max-width: 768px)': {
            flex: '1 1 100%',
        },
    },
    exploreLink: {
        marginTop: '10px',
        display: 'inline-block',
        color: 'deepskyblue',
        WebkitTextStroke: '0.05px black',
        textDecoration: 'none',
    },
};

export default Other;
