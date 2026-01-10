import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Introduction</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        Welcome to SkyStay ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Information We Collect</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        We may collect personal information that you voluntarily provide to us when you subscribe to our newsletter,
                        contact us, or participate in interactive features of the site. This includes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
                        <li>Name and Email address (when contacting us or subscribing)</li>
                        <li>Usage Data (automatically collected via cookies and analytics)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Cookies and Advertising</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our website.
                        These companies may use information about your visits to this and other websites in order to provide advertisements
                        about goods and services of interest to you.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">DoubleClick DART Cookie</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
                        <li>Google, as a third-party vendor, uses cookies to serve ads on our site.</li>
                        <li>Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</li>
                        <li>Users may opt-out of the use of the DART cookie by visiting the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google ad and content network privacy policy</a>.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Third-Party Links</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        Our website may contain links to other websites. Please note that we have no control over the content and practices
                        of these sites and cannot accept responsibility or liability for their respective privacy policies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Contact Us</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us via our Contact page.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
