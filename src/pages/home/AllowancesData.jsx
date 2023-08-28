import React, { useEffect, useState } from 'react'
import './allowancesData.css';
function AllowanceData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch('https://64e994a9bf99bdcc8e66ceef.mockapi.io/port/allowances');
                setData(await responce.json());
            } catch (error) {
                console.log(error.code)
            }
        }

        fetchData()
    }, [])
    return (
        <>
            <table>
                {data.map((row) => (
                    <>
                        <tr key={row.id}>
                            <td className='td'>Salary System Based On Meritocracy</td>
                            <td className={`${row.alarySystemBasedOnMeritocracy === 'yes' ? 'green' : 'red'}`}>{row.alarySystemBasedOnMeritocracy}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>120 Or More Annual Holidays</td>
                            <td className={`${row.OrMoreAnnualHolidays === 'yes' ? 'green' : 'red'}`}>{row.OrMoreAnnualHolidays}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Generous Welfare Benifits</td>
                            <td className={`${row.generousWelfareBenifits === 'yes' ? 'green' : 'red'}`}>{row.generousWelfareBenifits}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Enhanced Education And Training</td>
                            <td className={`${row.enhancedEducationAndTraining === 'yes' ? 'green' : 'red'}`}>{row.enhancedEducationAndTraining}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Support System For Acquriring Qualification</td>
                            <td>{row.supportSystemForAcquriringQualification}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Reduced Working Hours System</td>
                            <td className={`${row.reducedWorkingHoursSystem === 'yes' ? 'green' : 'red'}`}>{row.reducedWorkingHoursSystem}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Maternity Care Leave System</td>
                            <td className={`${row.maternityCareLeaveSystem === 'yes' ? 'green' : 'red'}`}>{row.maternityCareLeaveSystem}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Company Housing / Rent Subsidy</td>
                            <td className={`${row.companyHousingRentSubsidy === 'yes' ? 'green' : 'red'}`}>{row.companyHousingRentSubsidy}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Family Allowance</td>
                            <td className={`${row.familyAllowance === 'yes' ? 'green' : 'red'}`}>{row.familyAllowance}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Employee Stock Ownership</td>
                            <td className={`${row.employeeStockOwnership === 'yes' ? 'green' : 'red'}`}>{row.employeeStockOwnership}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Side Job Available</td>
                            <td className={`${row.sideJobAvailable === 'yes' ? 'green' : 'red'}`}>{row.sideJobAvailable}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Mentor System</td>
                            <td className={`${row.mentorSystem === 'yes' ? 'green' : 'red'}`}>{row.mentorSystem}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Career Consulting</td>
                            <td className={`${row.careerConsulting === 'yes' ? 'green' : 'red'}`}>{row.careerConsulting}</td>
                        </tr>
                    </>
                ))}

            </table>
        </>
    )
}

export default AllowanceData
