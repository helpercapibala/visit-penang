import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import garden from '../assets/images/botanicgarden.jpg';
import kekLokSi from '../assets/images/kekloksi.jpg';
import streetart from '../assets/images/streetart.jpg';
import chewJetty from '../assets/images/chewjetty.jpg';
import butterworthArtWalk from '../assets/images/butterworthartwalk.jpg';
import snakeTemple from '../assets/images/snaketemple.jpg'; // Import Snake Temple image

const TouristSpots = () => {
    const spots = [
        {
            id: 1,
            name: 'Penang Botanic Gardens',
            description: 'A serene retreat featuring lush greenery, beautiful flora, and peaceful surroundings. Perfect for nature lovers.',
            image: garden,
            link: 'https://botanicalgardens.penang.gov.my/index.php/en/',
        },
        {
            id: 2,
            name: 'Kek Lok Si Temple',
            description: 'One of Southeast Asia’s largest and most beautiful Buddhist temples, featuring stunning architecture and cultural significance.',
            image: kekLokSi,
            link: 'https://kekloksitemple.com/',
        },
        {
            id: 3,
            name: 'Street Art',
            description: 'Explore the vibrant street art of George Town, showcasing creative murals and cultural expressions.',
            image: streetart,
            link: 'https://streetartpenang.com/',
        },
        {
            id: 4,
            name: 'Chew Jetty',
            description: 'A traditional waterfront community on stilts, offering a glimpse into Penang’s heritage and unique lifestyle.',
            image: chewJetty,
            link: 'https://www.trip.com/moments/detail/george-town-57611-119587754/',
        },
        {
            id: 5,
            name: 'Butterworth Art Walk',
            description: 'A hidden gem in Butterworth featuring vibrant murals and sculptures that celebrate local culture and creativity.',
            image: butterworthArtWalk,
            link: 'https://mypenang.gov.my/culture-heritage/street-art/butterworth-art-walk/?lg=en',
        },
        {
            id: 6,
            name: 'Snake Temple',
            description: 'The Snake Temple also well-known for being a refuge of resident snakes, is a Chinese temple within George Town in the Malaysian state of Penang.',
            image: snakeTemple,
            link: 'https://www.malaysia-traveller.com/penang-snake-temple.html',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start animation
            animate={{ opacity: 1, y: 0 }} // End animation
            transition={{ duration: 0.8 }} // Animation duration
            style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px', marginTop: '40px' }}
        >
            <h1 style={{ color: 'maroon', textAlign: 'center' }}>Tourist Spots in Penang</h1>
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                }}
            >
                {spots.map((spot) => (
                    <motion.div
                        key={spot.id}
                        initial={{ scale: 0.9, opacity: 0 }} // Start animation
                        animate={{ scale: 1, opacity: 1 }} // End animation
                        transition={{ duration: 0.6, delay: spot.id * 0.1 }} // Delay per item
                        style={{
                            border: '3px solid #800000',
                            borderRadius: '8px',
                            background: 'rgba(128, 0, 0, 0.8)',
                            padding: '10px',
                            textAlign: 'center',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <a
                            href={spot.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <img
                                src={spot.image}
                                alt={spot.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                        </a>
                        <h2 style={{ color: 'snow', margin: '10px 0' }}>{spot.name}</h2>
                        <p style={{ color: 'cornsilk' }}>{spot.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default TouristSpots;
