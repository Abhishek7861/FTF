import React, { useState, useEffect } from 'react';
import './Table.css'
import get from '../../Apis/Apis';

export default function Table(props) {
    const [trendAData, setTrendAData] = useState({ head: "", category: "", brand: "", trendA: "", trendB: "" });
    const [trendBData, setTrendBData] = useState({ head: "", category: "", brand: "", trendA: "", trendB: "" });

    useEffect(() => {
        if (props.selectedTrendCategory != null) {
            const url = "/percentage_contribution";
            const paramsA = { category: props.selectedTrendCategory, trendName: props.trend };
            //TODO: remove maxiboycon hardcoding
            const paramsB = { category: props.selectedTrendCategory, trendName: "maxi bodycon" };
            const apiCalls = [];
            apiCalls.push(get(url, paramsA));
            if (props.selectedTrend != "compare trend") { apiCalls.push(get(url, paramsB)); }
            Promise.all(apiCalls)
                .then(([response1, response2]) => {
                    const categoryContributionAjio = response1.data.category_level_contributions
                    .filter(obj => obj.ecommerce == "Ajio")[0].percentage_contribution;
                    const categoryContributionMyntra = response1.data.category_level_contributions
                    .filter(obj => obj.ecommerce == "Myntra")[0].percentage_contribution;

                    const trendAContributionAjio = response1.data.trend_level_contributions
                    .filter(obj => obj.ecommerce == "Ajio")[0].percentage_contribution;

                    const trendAContributionMyntra = response1.data.trend_level_contributions
                    .filter(obj => obj.ecommerce == "Myntra")[0].percentage_contribution;
                    var trendBContributionAjio = null;
                    var trendBContributionMyntra = null;
                    if (props.selectedTrend != "compare trend") { 
                        trendBContributionAjio = response2.data.trend_level_contributions
                        .filter(obj => obj.ecommerce == "Ajio")[0].percentage_contribution;
    
                        trendBContributionMyntra = response2.data.trend_level_contributions
                        .filter(obj => obj.ecommerce == "Myntra")[0].percentage_contribution;
                     }

                    const trendA = { head: (categoryContributionAjio), category: response1.data.category, brand: "Ajio", trendA: (trendAContributionAjio), trendB: trendBContributionAjio };
                    const trendB = { head: (categoryContributionMyntra), category: response1.data.category, brand: "Myntra", trendA: (trendAContributionMyntra), trendB: trendBContributionMyntra };
                    setTrendAData(trendA);
                    setTrendBData(trendB);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [props.selectedTrendCategory, props.trend, props.selectedTrend]);

    if (trendAData === null || trendBData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className='tableApp'>
            <table>
                <tr>
                    <th>Contribution %</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>{(props.trend) || "TREND A"}</th>
                    <th>{"Compare Trend"}</th>
                    {/* <th>{(props.selectedTrend) || "TREND B"}</th> */}
                </tr>
                <tr>
                    <td>{trendAData.head}</td>
                    <td>{trendAData.category}</td>
                    <td>{trendAData.brand}</td>
                    <td>{trendAData.trendA}</td>
                    <td>{trendAData.trendB}</td>
                </tr>
                <tr>
                    <td>{trendBData.head}</td>
                    <td>{trendBData.category}</td>
                    <td>{trendBData.brand}</td>
                    <td>{trendBData.trendA}</td>
                    <td>{trendBData.trendB}</td>
                </tr>
            </table>
        </div>
    )
}
