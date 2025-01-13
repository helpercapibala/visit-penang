import React from 'react';
import beach from '../assets/videos/nicebeach.mp4';

const VideoGallery = () => {
    return (
        <section id="video-gallery" style={styles.section}>
            <h2 style={styles.heading}>Explore Penang Through Videos</h2>
            <div style={styles.videoContainer}>
                <iframe
                    style={styles.video}
                    src="https://www.youtube.com/embed/SqoozK8twsc"
                    title="PENANG, MALAYSIA (2023) | 10 Awesome Things To Do On Penang Island"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <video style={styles.video} controls>
                    <source src={beach} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <iframe
                    style={styles.video}
                    src="https://www.youtube.com/embed/sbRLPFUO7GE"
                    title="Best Things To Do in Penang Malaysia 2025 4K"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

const styles = {
    section: {
        margin: '40px 0',
        padding: '20px',
        background: 'rgba(128, 0, 0, 0.6)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: "'Playfair Display', serif",
    },
    videoContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    },
    video: {
        width: '100%',
        aspectRatio: '16 / 9', // Maintain 16:9 aspect ratio for all videos
        borderRadius: '8px',
        border: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    videoHover: {
        transform: 'scale(1.05)', // Slight zoom effect
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Elevated shadow
    },
};

export default VideoGallery;
