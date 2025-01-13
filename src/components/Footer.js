import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Explore Section */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>About Us</h4>
                    <ul style={styles.list}>
                        {["Lau Kai Xuan", "Matric no. 23300965", "Only me"].map((item) => (
                            <li key={item} style={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Neighborhoods Section */}
                <div style={styles.section}>
                    <h4 style={styles.heading}>Everyday Quote</h4>
                    <ul style={styles.list}>
                        {["If you want something done,", "do it yourself！"].map((item) => (
                            <li key={item} style={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div style={styles.section}>
                <h4 style={styles.heading}>Follow Us</h4>
                <div style={styles.socialIcons}>
                    <a href="https://www.facebook.com/penangglobal.tourism/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <FaFacebookF style={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/penang.experience/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <FaInstagram style={styles.icon} />
                    </a>
                    <a href="https://www.tiktok.com/@experiencepenang" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <FaTiktok style={styles.icon} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCcirvBTjbnpkYLlzNkmyKEQ/feed" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                        <FaYoutube style={styles.icon} />
                    </a>
                </div>
                <p style={styles.systemStatus}>● All system operational</p>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div style={styles.bottomSection}>
                <p>&copy; 2025 Visit Penang. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        background: '#333',
        color: 'white',
        padding: '20px 40px',
        fontSize: '14px',
        borderTop: '4px solid #ff6347',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px 0',
    },
    section: {
        flex: '1',
        minWidth: '200px',
    },
    heading: {
        marginBottom: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        marginBottom: '5px',
    },
    socialIcons: {
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
    },
    icon: {
        fontSize: '20px',
        cursor: 'pointer',
    },
    iconLink: {
        textDecoration: 'none',
        color: 'inherit',
    },    
    downloadButtons: {
        marginBottom: '10px',
    },
    storeButton: {
        height: '40px',
        marginRight: '10px',
    },
    systemStatus: {
        color: '#34c759',
        fontSize: '14px',
    },
    bottomSection: {
        borderTop: '1px solid #444',
        paddingTop: '10px',
        textAlign: 'center',
    },
    links: {
        marginTop: '10px',
    },
    link: {
        margin: '0 10px',
        color: '#ff6347',
        textDecoration: 'none',
    },
};

export default Footer;
