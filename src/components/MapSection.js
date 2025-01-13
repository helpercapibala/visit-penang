import React from 'react';

const MapSection = () => {
    return (
        <section id="map-section" style={styles.section}>
            <h2 style={styles.heading}>Discover Penang on the Map</h2>
            <iframe
                style={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31808.81676926954!2d100.2488535!3d5.4162989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3d3658bfe5f%3A0xdf5cd805f6e228cc!2sPenang%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy"
                title="Penang Map"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </section>
    );
};

const styles = {
    section: {
        margin: '40px 0',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.85)', // Maroon with 60% transparency
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: 'DarkSlateGray',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1.5em', // Adjust for better visibility
        '@media (max-width: 768px)': {
        fontSize: '1.2em', // Smaller font for mobile
        },
    },
    map: {
        width: '100%',
        height: '285px',
        borderRadius: '8px',
        border: 'none',
    },
};

export default MapSection;
