import React, { useState, useEffect } from 'react';
import { getTouristSpots } from '../mockApi';

const MainContent = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTouristSpots().then((data) => {
            setSpots(data);
            setLoading(false);
        });
    }, []);

    return (
        <main style={styles.main}>
            <section id="tourist-spots" style={styles.section}>
                <h2>Tourist Spots</h2>
                {loading ? (
                    <p>Loading tourist spots...</p>
                ) : (
                    <ul>
                        {spots.map((spot) => (
                            <li key={spot.id}>
                                <h3>{spot.name}</h3>
                                <p>{spot.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
};

const styles = {
    main: { padding: '20px' },
    section: { marginBottom: '40px' },
};

export default MainContent;
