import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false); 
    const [isFormTouched, setIsFormTouched] = useState(false); // Track if the form is touched

    useEffect(() => {
        // Add beforeunload event listener
        const handleBeforeUnload = (e) => {
            if (isFormTouched) {
                e.preventDefault();
                e.returnValue = ''; // Required for the prompt to show
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isFormTouched]); // Runs only once on component mount

    const validate = () => {
        let formErrors = {};
        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
        }
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!isFormTouched) setIsFormTouched(true); // Mark the form as touched
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                // Check if the response status is not OK (e.g., 404, 500)
                if (!response.ok) {
                    throw new Error(`Server responded with status: ${response.status}`);
                }

                const data = await response.json();
                alert(data.message);
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            } catch (error) {
                console.error('Error submitting the form:', error);

                // Check if the error is due to the server not running
                if (error.message === 'Failed to fetch') {
                    alert('The backend server is not running. Please start the server and try again.');
                } else {
                    alert('An unexpected error occurred. Please try again later.');
                }
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.field}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                </div>
                <div style={styles.field}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>
                <div style={styles.field}>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                    ></textarea>
                    {errors.message && <p style={styles.error}>{errors.message}</p>}
                </div>
                <button type="submit" style={styles.button} disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center', // Center the heading and content
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '500px',  // Set a max width to avoid stretching too far
        width: '80%',
        margin: '0 auto',  // Center the form horizontally
    },
    field: {
        position: 'relative',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
        width: '100%',
    },
    textarea: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
        resize: 'none',
        height: '100px',
        width: '100%',
    },
    error: {
        color: 'red',
        fontSize: '0.95em',
        marginTop: '5px',
        WebkitTextStroke: '0.07px black', // Note camelCase for React
    },
    button: {
        padding: '10px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
    },

    // Mobile responsiveness
    '@media (max-width: 768px)': {
        section: {
            margin: '20px 0',  // Adjust margin for mobile
            padding: '15px',  // Reduce padding for mobile
        },
        heading: {
            fontSize: '20px',  // Smaller heading font size for mobile
        },
        form: {
            maxWidth: '90%',  // Ensure the form is more flexible in mobile view
        },
        input: {
            padding: '8px',  // Smaller padding on mobile
        },
        textarea: {
            padding: '8px',  // Smaller padding on mobile
        },
        button: {
            padding: '8px',  // Adjust button padding for mobile
        },
    },
};

export default ContactForm;
