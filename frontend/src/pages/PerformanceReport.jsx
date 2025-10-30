import { useEffect, useState } from "react";
import logo from "../assets/Images/logo/Logo1.png"
import Card from "../components/ui/Card"

const PerformanceReport = ({ setCurrentPage, state, district, year }) => {

    const [records, setRecords] = useState([]);

    useEffect(() => {

        if (!state || !district || !year) return;

        fetch(`https://bharat-build.onrender.com/api/mgnrega?state_name=${state}&district_name=${district}&fin_year=${year}`)
            .then((res) => res.json())
            .then((data) => {
                setRecords(data.records || []);
            })
            .catch((err) => console.error("Error:", err));
    }, [state, district, year]);

    return (

        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
            {console.log(records)}
            <header className="bg-linear-to-r from-[#1E8449] via-[#F4D03F] to-[#5DADE2] text-[#0b3d91] py-6 shadow-md border-b-4 border-[#0b3d91]">
                <div className="max-w-7xl px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-white p-2 rounded-full" width="158px" height="48px" >
                            <img src={logo} alt="Logo" className='h-14 w-14' />
                        </div>
                        <h1 className="text-2xl font-bold">District Performance Portal</h1>
                    </div>
                    <button
                        onClick={() => setCurrentPage('home')}
                        className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                    >
                        ← Back to Home
                    </button>
                </div>
            </header>
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Performance Report</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b-2 border-gray-200">
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                            <p className="text-gray-600 font-semibold mb-2">State</p>
                            <p className="text-2xl font-bold text-blue-700">{state.charAt(0).toUpperCase() + state.slice(1)}</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                            <p className="text-gray-600 font-semibold mb-2">District</p>
                            <p className="text-2xl font-bold text-green-700">{district.charAt(0).toUpperCase() + district.slice(1)}</p>
                        </div>
                        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-300">
                            <p className="text-gray-600 font-semibold mb-2">Financial Year</p>
                            <p className="text-2xl font-bold text-yellow-700">FY {year}</p>
                        </div>

                    </div>

                    {records.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {/*  Money and Payment */}
                            <Card  title="Approved Labour Budget" desc="The total money planned by the government to pay workers for work in a year." data={"₹ "+ Math.round(records[0].Approved_Labour_Budget * 100) / 100+" Lakhs"}/>
                            <Card title="Average Wage Rate Per Day" desc="The average daily payment each worker gets for one day of work." data={"₹ "+ Math.round(records[0].Average_Wage_rate_per_day_per_person * 100) / 100}/>
                            <Card title="Wages" desc="The total money paid to all workers as payment for their work." data={"₹ "+ Math.round(records[0].Wages * 100) / 100+" Lakhs"}/>
                            <Card title="Material and Skilled Wages" desc="Money spent on buying materials and paying skilled workers like masons and electricians." data={"₹ "+ Math.round(records[0].Material_and_skilled_Wages * 100) / 100+" Lakhs"}/>
                            <Card title="Total Administrative Expenditure" desc="Money spent on running the program like salaries and training costs." data={"₹ "+ Math.round(records[0].Total_Adm_Expenditure* 100) / 100+" Lakhs"}/>
                            <Card title="Total Expenditure" desc="All money spent on the entire program including wages, materials, and other costs." data={"₹ "+Math.round(records[0].Total_Exp  * 100) / 100+" Lakhs"}/>

                            {/*  Workers */}
                            <Card title="Total Workers" desc="The total number of people registered to work under this job program." data={records[0].Total_No_of_Workers}/>
                            <Card title="Active Workers" desc="The number of workers currently working right now under the scheme." data={records[0].Total_No_of_Active_Workers}/>
                            <Card title="Total Households Worked" desc="The total number of families who got work and earned money." data={records[0].Total_Households_Worked}/>
                            <Card title="Total Individuals Worked" desc="The total number of individual people who actually worked and got paid." data={records[0].Total_Individuals_Worked}/>
                            <Card title="Average Days of Employment Per Household" desc="The average number of workdays each family got to work in a year." data={records[0].Average_days_of_employment_provided_per_Household}/>
                            <Card title="Households with 100 Days of Work" desc="The number of families who completed 100 full days of work in a year." data={records[0].Total_No_of_HHs_completed_100_Days_of_Wage_Employment}/>

                            {/*  Job Cards */}
                            <Card title="Total Job Cards Issued" desc="The total number of job cards given out since the program started."data={records[0].Total_No_of_JobCards_issued}/>
                            <Card title="Active Job Cards" desc="The number of job cards that are currently active and being used." />

                            {/*  Special Groups */}
                            <Card title="Women Persondays" desc="The total number of workdays completed by women workers." data={records[0].Women_Persondays}/>
                            <Card title="Differently-abled Persons Worked" desc="The total number of workers with disabilities who worked under the scheme." data={records[0].Differently_abled_persons_worked}/>
                            <Card title="SC Persondays" desc="The total number of workdays completed by people from Scheduled Castes." data={records[0].SC_persondays}/>
                            <Card title="SC Workers Percentage" desc="What percent of active workers belong to Scheduled Castes." data={records[0].SC_workers_against_active_workers}/>
                            <Card title="ST Persondays" desc="The total number of workdays completed by people from Scheduled Tribes." data={records[0].ST_persondays}/>
                            <Card title="ST Workers Percentage" desc="What percent of active workers belong to Scheduled Tribes." data={records[0].ST_workers_against_active_workers}/>

                            {/*  Work & Projects */}
                            <Card title="Total Works Taken Up" desc="The total number of projects that have been started." data={records[0].Total_No_of_Works_Takenup}/>
                            <Card title="Completed Works" desc="The total number of projects that have been finished (like roads, ponds, etc.)." data={records[0].Number_of_Completed_Works}/>
                            <Card title="Ongoing Works" desc="The number of projects that are still in progress and not yet finished." data={records[0].Number_of_Ongoing_Work}/>
                            <Card title="GPs with NIL Expenditure" desc="The number of villages that have not spent any funds yet." data={records[0].Number_of_GPs_with_NIL_exp}/>
                            <Card title="Category B Works Percentage" desc="What percent of projects are for rural infrastructure like roads and bridges." data={records[0].percent_of_Category_B_Works}/>

                            {/* Special Work Types */}
                            <Card title="Agriculture & Allied Works" desc="What percent of total money is spent on farm work and farming-related activities." data={records[0].percent_of_Expenditure_on_Agriculture_Allied_Works}/>
                            <Card title="Natural Resource Management" desc="What percent of money is spent on water conservation and land development." data={records[0].percent_of_NRM_Expenditure}/>

                            {/*  Payments */}
                            <Card title="Persondays of Central Liability" desc="The total number of workdays for which the central government has to pay wages." data={records[0].Persondays_of_Central_Liability_so_far}/>
                            <Card title="Payments Within 15 Days" desc="What percent of wage payments were given within 15 days of work completion." data={records[0].percentage_payments_gererated_within_15_days}/>


                        </div>
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PerformanceReport
