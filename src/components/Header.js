import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import playwrightRegular from '../assets/fonts/PlaywriteVN-VariableFont_wght.ttf'; // Import font file

const Header = () => {
    const isMobile = window.innerWidth <= 768; // Determine if the device is mobile

    return (
        <header style={styles.header(isMobile)}>
            <style>
                {`
                    @font-face {
                        font-family: 'PlaywriteVN';
                        src: url(${playwrightRegular}) format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                    
                    nav a::after {
                        content: '|';
                        color: white;
                        margin: 0 10px;
                    }

                    /* Remove separator after the last link */
                    nav a:last-child::after {
                        content: '';
                    }

                    /* Mobile-specific styles */
                    @media (max-width: 768px) {
                        header {
                            flex-direction: column; /* Stack rows vertically on mobile */
                            align-items: center; /* Center align content */
                            text-align: center; /* Center text alignment */
                        }
                        nav {
                            justify-content: center; /* Center navigation links */
                        }
                    }
                `}
            </style>
            <div style={styles.titleContainer(isMobile)}>
                <Link
                    to="/"
                    style={styles.linkWithTitle}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.linkWithTitle.color)}
                >
                    Visit Penang
                </Link>
            </div>
            <nav style={styles.nav(isMobile)} aria-label="Main navigation">
                <Link
                    to="/"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Home
                </Link>
                <Link
                    to="/tourist-spots"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Tourist Spots
                </Link>
                <Link
                    to="/food-beverages"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Food & Beverages
                </Link>
                <Link
                    to="/hotels"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Hotels
                </Link>
                <Link
                    to="/others"
                    style={styles.link}
                    onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
                >
                    Others
                </Link>
            </nav>
        </header>
    );
};

const styles = {
    header: (isMobile) => ({
        background: 'maroon',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack rows on mobile
        justifyContent: isMobile ? 'center' : 'space-between', // Center content on mobile, space-between on desktop
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    }),
    titleContainer: (isMobile) => ({
        marginBottom: isMobile ? '10px' : '0', // Add spacing between rows on mobile
        textAlign: isMobile ? 'center' : 'left', // Center-align on mobile
    }),
    linkWithTitle: {
        margin: 0,
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        fontFamily: '"PlaywriteVN", serif',
        transition: 'color 0.3s ease',
    },
    nav: (isMobile) => ({
        display: 'flex',
        gap: '10px',
        flexDirection: 'row',
        justifyContent: isMobile ? 'center' : 'flex-end', // Center links on mobile, align right on desktop
        alignItems: 'center',
    }),
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
    },
    linkHover: {
        color: '#ffd700', // Gold hover effect
    },
};

export default Header;
