import React from 'react'
import './Table.css'

export default function Table() {
    const data = [
        { head: "Contribution %", category: "category selected", brand: "AJIO", trendA: "trend A", trendB: "trend B" },
        { head: "Contribution %", category: "category selected", brand: "MYNTRA", trendA: "trend A", trendB: "trend B" },
        { head: "Contribution %", category: "category selected", brand: "MYNTRA", trendA: "trend A", trendB: "trend B" },
        { head: "Contribution %", category: "category selected", brand: "MYNTRA", trendA: "trend A", trendB: "trend B" }
    ]
    return (
        <div className='tableApp'>
            <table>
                <tr>
                    <th>Head</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Trend A</th>
                    <th>Trend B</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.head}</td>
                            <td>{val.category}</td>
                            <td>{val.brand}</td>
                            <td>{val.trendA}</td>
                            <td>{val.trendB}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
