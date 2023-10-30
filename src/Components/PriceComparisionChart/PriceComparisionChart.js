import React, {useEffect} from 'react'
import './PriceComparisionChart.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DropDown from '../DropDown/DropDown';
import get from '../../Apis/Apis';

export default function PriceComparisionChart(props) {
    const [compData, setCompData] = React.useState([]);
    const [storeA, setStoreA] = React.useState("Ajio");
    const [storeB, setStoreB] = React.useState("Myntra");

    useEffect(() => {
        if (props.trend != null) {
            const url = "/get_product_counts_by_price_range";
            const paramsA = { trendName: props.trend, ecommerce: storeA };
            //TODO: remove maxiboycon hardcoding
            const paramsB = { trendName: props.trend, ecommerce: storeB };
            const apiCalls = [];
            apiCalls.push(get(url, paramsA));
            apiCalls.push(get(url, paramsB));
            const compData = [];
            Promise.all(apiCalls)
                .then(([response1, response2]) => {
                    const priceRange = new Set([]);
                    for (let range in response1.data.product_counts_by_price_range) {
                        priceRange.add(range);
                    }
                    for (let range in response2.data.product_counts_by_price_range) {
                        priceRange.add(range);
                    }
                    const rangeArray = Array.from(priceRange);
                    for(var i in rangeArray){
                        let range = rangeArray[i];
                        var row = {
                            range: range,
                            storeA: response1.data.product_counts_by_price_range[range],
                            storeB: response2.data.product_counts_by_price_range[range],
                        }
                        compData.push(row);
                    }
                    setCompData(compData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [storeB, props.trend, storeA]);

    return (
        <div>
            <div>
                <div className='heading-dropdown-bar'>
                    <h2 className='columnchart-heading'>{props.heading}</h2>
                    <div className='drop'>
                        <label>{" Select Store A"}</label>
                        <DropDown onChange={setStoreA} selectMessage="Select Store" selectOptions={[{ value: "Ajio", label: "Ajio" }, { value: "Myntra", label: "Myntra" } ]} selectedOption={storeA}></DropDown>
                        <label>{"   "}</label>
                        <label>{"    Select Store B"}</label>
                        <DropDown onChange={setStoreB} selectMessage="Select Store" selectOptions={[{ value: "Ajio", label: "Ajio" }, { value: "Myntra", label: "Myntra" } ]} selectedOption={storeB}></DropDown>
                    </div>
                </div>
                <div className='chart-container'>
                    <ResponsiveContainer width={'90%'} height={400}>

                        <BarChart
                            width={500}
                            height={300}
                            data={compData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="range" minTickGap={-50} tick={{ fontSize: 11 }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="storeA" fill="blue" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="storeB" fill="green" activeBar={<Rectangle fill="orange" stroke="red" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
