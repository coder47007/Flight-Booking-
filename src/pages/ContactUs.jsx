import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>

                <div className="contact-grid">
                    <div className="contact-info">
                        <p className="contact-intro">
                            Have a question, suggestion, or feedback? We'd love to hear from you! Please fill out the form below
                            or reach out to us directly via email.
                        </p>

                        <div className="contact-detail">
                            <h3>📧 Email</h3>
                            <p>support@skystay.com</p>
                        </div>

                        <div className="contact-detail">
                            <h3>📍 Address</h3>
                            <p>
                                123 Travel Lane<br />
                                Suite 100<br />
                                New York, NY 10001
                            </p>
                        </div>

                        <div className="contact-detail">
                            <h3>📞 Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                .contact-page {
                    padding: 4rem 0;
                    min-height: 70vh;
                }

                .page-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    color: #6366f1;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 3rem;
                }

                .contact-intro {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                }

                .contact-detail {
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    background: var(--card-bg);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                }

                .contact-detail h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--text-primary);
                }

                .contact-detail p {
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .contact-form {
                    background: var(--card-bg);
                    padding: 2rem;
                    border-radius: 16px;
                    border: 1px solid var(--border-color);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    color: var(--text-primary);
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    font-size: 1rem;
                    font-family: inherit;
                    background: var(--bg-color);
                    color: var(--text-primary);
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                .btn-submit {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }

                    .page-title {
                        font-size: 2rem;
                    }

                    .contact-form {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactUs;
