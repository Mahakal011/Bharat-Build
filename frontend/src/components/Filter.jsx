import React, { useState } from 'react'
import { MapPin, Calendar, Eye } from 'lucide-react';
import statesData from "../lib/util.js"

const Filter = ({ handleShowData }) => {

    const financialYears = ['2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'];
    const [selectedState, setSelectedState] = useState('maharashtra');
    const [selectedDistrict, setSelectedDistrict] = useState('ahmednagar');
    const [selectedYear, setSelectedYear] = useState('2023-2024');


    const handleStateChange = (state) => {

        setSelectedState(state);
        const districts = statesData[state]?.districts || [];
        setSelectedDistrict(districts[0]?.toLowerCase() || '');
    };

    const getDistricts = () => {
        return statesData[selectedState]?.districts || [];
    };

    return (
        <section className="py-12 bg-gray-50 grow">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-xl shadow-lg p-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Access District Performance Data</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-3 items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                Select State
                            </label>
                            <select
                                value={selectedState}
                                onChange={(e) => handleStateChange(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-blue-600 bg-white text-gray-800"
                            >
                                {Object.entries(statesData).map(([key, state]) => (
                                    <option key={key} value={key}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label className="block text-gray-700 font-semibold mb-3 items-center gap-2">
                                <MapPin className="w-5 h-5 text-green-600" />
                                Select District
                            </label>
                            <select
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-green-600 bg-white text-gray-800"
                            >
                                {getDistricts().map((district) => (
                                    <option key={district} value={district.toLowerCase()}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label className="block text-gray-700 font-semibold mb-3 items-center gap-2">
                                <Calendar className="w-5 h-5 text-orange-600" />
                                Financial Year
                            </label>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium focus:outline-none focus:border-orange-600 bg-white text-gray-800"
                            >
                                {financialYears.map((year) => (
                                    <option key={year} value={year}>
                                        FY {year}
                                    </option>
                                ))}
                            </select>
                        </div>

                        
                    </div>

                    <button
                        onClick={() => handleShowData({
                            view: "dashboard",
                            state: selectedState,
                            district: selectedDistrict,
                            year: selectedYear
                           
                        })}
                        className="w-full bg-linear-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <Eye className="w-5 h-5" />
                        Show Performance Data
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Filter