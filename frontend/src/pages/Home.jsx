import React, { useState } from 'react'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Filter from '../components/Filter'
import PerformanceReport from "./PerformanceReport"
import Footer from "../components/Footer"

const Home = () => {

    const [filterData, setFilterData] = useState({});

    const handleShowData = (data) => {
        console.log("Received from Filter:", data);
        setFilterData(data);
        setCurrentPage(filterData.view);
    };

    const [currentPage, setCurrentPage] = useState("home");

    const handlePerformanceReportPageData = (dat) => {
        setCurrentPage(dat);
    };


    if (currentPage === 'home') {
        return (
            <>
                <Header />
                <Hero />
                <Filter handleShowData={handleShowData}  />
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <PerformanceReport setCurrentPage={handlePerformanceReportPageData} state={filterData.state} district={filterData.district} year={filterData.year} />
                <Footer />
            </>
        )
    }

}

export default Home