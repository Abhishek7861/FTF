import React, {useEffect}from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TrendColumnChart.css'
import DropDown from '../DropDown/DropDown';
import get from '../../Apis/Apis';


const data = [
    {
        name: 'Trend A',
        pv: 2400,
  
    },
    {
        name: 'Trend B',
        pv: 4300,
    },
];


export default function TrendColumnChart(props) {
    const [trendData, setTrendData] = React.useState([]);

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
        headingDropdownBar = (<h2 className='columnchart-heading'>{props.heading}</h2>);
    }
    const params = {category: props.selectedTrendCategory, period: props.selectedPeriod, geography: props.selectedGeography, top_n: 10};
    useEffect(() => {
        get("/get_top_trends_and_distribution_by_category",params)
          .then(response => {
            const trendData = response.data.map(obj => ({
                name: obj._id,
                nameSliced: obj._id.slice(0, 20),
                distribution: obj.percentageDistribution
              }));
            setTrendData(trendData);
          })
          .catch(error => {
            console.error(error);
          });
      }, [props.selectedTrendCategory]);




    return (
        <div>
            {headingDropdownBar}    
            <div className='chart-container'>
                <ResponsiveContainer width={'89%'} height={400}>

                    <BarChart
                        width={500}
                        height={300}
                        data={trendData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" minTickGap={-50} tick={{ fontSize: 11 }}/>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="distribution" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
