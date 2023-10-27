import React, { useState, useEffect } from 'react';
import './Table.css'
import get from '../../Apis/Apis';

export default function Table(props) {
    const [trendAData, setTrendAData] = useState(null);
    const [trendBData, setTrendBData] = useState(null);
    const data = [
        { head: "Contribution %", category: "category selected", brand: "AJIO", trendA: "trend A", trendB: "trend B" },
        { head: "Contribution %", category: "category selected", brand: "MYNTRA", trendA: "trend A", trendB: "trend B" }
    ]

    useEffect(() => {
        const url = "/percentage_contribution";
        const paramsA = { category: props.selectedTrendCategory, trendName: props.trend };
        const paramsB = { category: props.selectedTrendCategory, trendName: props.selectedTrend };
        const calls = [];
        if(props.selectedTrendCategory!=null){
            Promise.all([get(url,paramsA), get(url,paramsB)])
            .then(([response1, response2]) => {
                // console.log(response1.data);
                // console.log(response2.data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    }, [props.selectedTrendCategory,props.trend,props.selectedTrend]);

    if (trendAData === null || trendBData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className='tableApp'>
            <table>
                <tr>
                    <th>Head</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>{props.trend}</th>
                    <th>{props.selectedTrend }</th>
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
