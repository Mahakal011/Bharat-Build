import React from 'react'

const Hero = () => {
    return (
        <section className="bg-linear-to-b from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to District Performance Dashboard</h2>
                <p className="text-xl text-gray-600 mb-8">Monitor and analyze MGNREGA district-level performance across India with real-time data on employment, expenditure, and infrastructure progress.</p>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Access comprehensive performance data of various districts including economic indicators, literacy rates, employment statistics, and infrastructure development metrics.
                </p>
            </div>
        </section>
    )
}

export default Hero