export const getTouristSpots = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Penang Hill', description: 'A scenic hilltop retreat.' },
                { id: 2, name: 'Kek Lok Si Temple', description: 'A beautiful Buddhist temple.' },
                { id: 3, name: 'Penang National Park', description: 'A lush and tranquil nature reserve.' },
            ]);
        }, 1000); // Simulates a network delay
    });
};
