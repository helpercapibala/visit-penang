import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
// Import local images
import charKwayTeow from '../assets/images/char_kway_teow.jpg';
import assamLaksa from '../assets/images/asamlaksa.jpg';
import nasiKandar from '../assets/images/nasi_kandar.jpg';
import cendol from '../assets/images/cendol.jpg';
import iceKacang from '../assets/images/abc.jpg';
import penangWhiteCoffee from '../assets/images/kopipenang.jpg'; // Add image for Penang White Coffee

const FoodBeverages = () => {
    const foodItems = [
        {
            id: 1,
            name: 'Char Kway Teow',
            description: 'A stir-fried noodle dish infused with smoky flavors, prawns, eggs, and Chinese sausage. A Penang classic!',
            image: charKwayTeow,
            link: 'https://thesmartlocal.my/penang-char-koay-teow/',
        },
        {
            id: 2,
            name: 'Asam Laksa',
            description: 'A tangy, fish-based noodle soup that’s bursting with bold flavors. One of Penang’s iconic dishes.',
            image: assamLaksa,
            link: 'https://guide.michelin.com/my/en/article/dining-out/how-to-make-the-perfect-assam-laksa-penang-malaysia',
        },
        {
            id: 3,
            name: 'Nasi Kandar',
            description: 'A hearty dish featuring steamed rice and a variety of curries, often accompanied by fried chicken and vegetables.',
            image: nasiKandar,
            link: 'https://mypenang.gov.my/food-lifestyle/my-stories/115/?lg=en',
        },
        {
            id: 4,
            name: 'Cendol',
            description: 'A refreshing dessert made with shaved ice, coconut milk, green rice flour jelly, and palm sugar syrup.',
            image: cendol,
            link: 'https://chendul.my/',
        },
        {
            id: 5,
            name: 'Ice Kacang (ABC)',
            description: 'A colorful dessert made with shaved ice, sweet syrup, red beans, corn, and jelly. A must-try on a hot day!',
            image: iceKacang,
            link: 'https://www.adriancheah.com/index.php?option=com_content&view=article&id=399:ice-kacang-penang-s-all-time-ubiquitous-but-favourite-dessert&catid=32&Itemid=126',
        },
        {
            id: 6,
            name: 'Penang White Coffee',
            description: 'A rich and smooth coffee brewed from beans roasted with palm oil, commonly served with sweetened condensed milk. Known for its aromatic flavor.',
            image: penangWhiteCoffee,
            link: 'https://penangwhitecoffee.com/',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start animation
            animate={{ opacity: 1, y: 0 }} // End animation
            transition={{ duration: 0.8 }} // Animation duration
            style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}
        >
            <h1 style={{ color: 'maroon', textAlign: 'center' }}>Food & Beverages in Penang</h1>
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                }}
            >
                {foodItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ scale: 0.9, opacity: 0 }} // Start animation
                        animate={{ scale: 1, opacity: 1 }} // End animation
                        transition={{ duration: 0.6, delay: item.id * 0.1 }} // Delay per item
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
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                        </a>
                        <h2 style={{ color: 'snow', margin: '10px 0' }}>{item.name}</h2>
                        <p style={{ color: 'cornsilk' }}>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FoodBeverages;
