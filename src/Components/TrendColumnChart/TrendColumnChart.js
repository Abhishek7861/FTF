import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TrendColumnChart.css'
import DropDown from '../DropDown/DropDown';


const data = [
    {
        name: 'Trend A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Trend B',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function TrendColumnChart(props) {
    var headingDropdownBar = null;
    if (props.StoreDropDown) {
        var StoreDropDown1 = <DropDown selectMessage="Select Store" selectOptions={[{ value: "AJIO", label: "AJIO" }, { value: "Myntra", label: "Myntra" }, { value: "H&M", label: "H&M" }, { value: "Shein", label: "Shein" }]}></DropDown>
        var StoreDropDown2 = <DropDown selectMessage="Select Store" selectOptions={[{ value: "AJIO", label: "AJIO" }, { value: "Myntra", label: "Myntra" }, { value: "H&M", label: "H&M" }, { value: "Shein", label: "Shein" }]}></DropDown>
        headingDropdownBar = (<div className='heading-dropdown-bar'>
            <h2 className='columnchart-heading'>{props.heading}</h2>
            {StoreDropDown1}
            {StoreDropDown2}
        </div>)
    }
    else {
        headingDropdownBar = <h2 className='columnchart-heading'>{props.heading}</h2>
    }
    return (
        <div>
            {headingDropdownBar}    
            <div className='chart-container'>
                <ResponsiveContainer width={'79%'} height={400}>

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
