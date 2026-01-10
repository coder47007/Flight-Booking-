import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Us</h1>

            <div className="prose dark:prose-invert max-w-none">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Mission</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        At SkyStay, we believe that travel should be accessible to everyone. Our mission is to simplify the process of booking flights and hotels
                        by aggregating the best deals from around the web into one easy-to-use platform.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">What We Do</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        We partner with over 500 airlines and 2 million properties worldwide to bring you competitive prices and a vast selection.
                        Whether you are planning a business trip, a family vacation, or a spontaneous getaway, SkyStay provides the tools you need to book with confidence.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">
                        <li><strong>Comprehensive Search:</strong> Compare prices from hundreds of travel sites in seconds.</li>
                        <li><strong>Transparent Pricing:</strong> No hidden fees. The price you see is the price you pay.</li>
                        <li><strong>Trusted Partners:</strong> We only work with reputable airlines and hotel chains to ensure a safe and comfortable journey.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        Thank you for choosing SkyStay for your travel needs. We look forward to helping you explore the world.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
