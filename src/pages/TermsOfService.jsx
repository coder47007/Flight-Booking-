import React from 'react';

const TermsOfService = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>

            <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Agreement to Terms</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        By accessing our website SkyStay, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Use License</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        Permission is granted to temporarily download one copy of the materials (information or software) on SkyStay's website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Disclaimer</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        The materials on SkyStay's website are provided on an 'as is' basis. SkyStay makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Limitations</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        In no event shall SkyStay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                        or due to business interruption) arising out of the use or inability to use the materials on SkyStay's website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Governing Law</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive
                        jurisdiction of the courts in that location.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
