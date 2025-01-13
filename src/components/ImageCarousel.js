import React from 'react';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Import local images
import ferry from '../assets/images/oldferry.jpg';
import food from '../assets/images/foodparadise.jpg';
import culture from '../assets/images/culture.jpg';

const ImageCarousel = () => {
    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Penang Highlights</h2>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {[{ image: ferry, caption: "Ferry Our Memory" }, 
                { image: food, caption: "Food Paradise" }, 
                { image: culture, caption: "Human Touch" }].map(
                    (item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            style={styles.carouselContainer}
                        >
                            <img src={item.image} alt={item.caption} style={styles.carouselImage} />
                            <div style={styles.caption}>
                                <p>{item.caption}</p>
                            </div>
                        </motion.div>
                    )
                )}
            </Carousel>
        </section>
    );
};

const styles = {
    section: {
        margin: '20px 0', // Reduced margin to make the section smaller
        padding: '10px', // Reduced padding to make the section smaller
        background: 'rgba(128, 0, 0, 0.6)', // Maroon with 60% transparency
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    carouselContainer: {
        position: 'relative',
        //width: '90%', // Reduced width
        margin: '0 auto', // Center the container
        overflow: 'hidden',
    },
    carouselImage: {
        width: '100%',
        maxHeight: '450px', // Reduced height
        objectFit: 'cover',
    },
    caption: {
        position: 'absolute',
        bottom: '10%', // Adjust to place caption closer to the bottom inside the image
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker background for better contrast
        color: 'white',
        padding: '5px 10px', // Reduced padding to make the box smaller
        borderRadius: '4px',
        fontSize: '16px', // Slightly smaller font size
        textAlign: 'center',
    },
};

export default ImageCarousel;
