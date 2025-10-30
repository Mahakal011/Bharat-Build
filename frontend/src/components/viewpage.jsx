import React from 'react'

const viewpage = ({records}) => {
    return (
        <>

            <div style={{ padding: "20px" }}>
                <h2>📊 MGNREGA Data (Uttar Pradesh 2024–2025)</h2>
                {console.log(records)}
                {records.length > 0 ? (
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>District</th>
                                <th>Approved Labour Budget</th>
                                <th>Average Wage</th>
                                <th>Completed Works</th>
                                <th>ongoing works</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.month}</td>
                                    <td>{row.district_name}</td>
                                    <td>{row.Approved_Labour_Budget}</td>
                                    <td>{row.Average_Wage_rate_per_day_per_person}</td>
                                    <td>{row.Number_of_Completed_Works}</td>
                                    <td>{row.Number_of_Ongoing_Works}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>    </>
    )
}

export default viewpage