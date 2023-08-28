import React, { useEffect, useState } from 'react'

function Table() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch('https://64e994a9bf99bdcc8e66ceef.mockapi.io/port/user');
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
                            <td className='td'>Business Description</td>
                            <td>{row.businessDescription}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Corporate Philosophy</td>
                            <td>{row.corporatePhilosophy}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Company Name</td>
                            <td>{row.companyName}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Industry</td>
                            <td>{row.industry}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Mail ID</td>
                            <td>{row.email}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Phone Number</td>
                            <td>{row.phoneNumber}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Location</td>
                            <td>{row.location}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Website</td>
                            <td>{row.website}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Working Hours</td>
                            <td>{row.workingHours}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Establishment Date</td>
                            <td>{row.establishmentDate}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Initial Capital</td>
                            <td>{row.initailCapital}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Representative</td>
                            <td>{row.representative}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Branch</td>
                            <td>{row.branch}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Number Of Employees</td>
                            <td>{row.numberOfEmployees}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Sales Revenue</td>
                            <td>{row.salesRevenue}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Operation Profit</td>
                            <td>{row.operationProfit}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Avrage Age Of Employees</td>
                            <td>{row.avrageAgeOfEmployess}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Stock</td>
                            <td>{row.stock}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Stock</td>
                            <td>{row.stock}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Linkedin Link</td>
                            <td>{row.linkedinLink}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Twitter Link</td>
                            <td>{row.twitterLink}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Facebook Link</td>
                            <td>{row.facebookLink}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Instagram Link</td>
                            <td>{row.istagramLink}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Youtube Link</td>
                            <td>{row.youtubeLink}</td>
                        </tr>
                        <tr key={row.id}>
                            <td className='td'>Foreign Owned</td>
                            <td>{row.foreign}</td>
                        </tr>
                    </>
                ))}

            </table>
        </>
    )
}

export default Table
