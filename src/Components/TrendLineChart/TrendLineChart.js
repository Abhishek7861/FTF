import React, {useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TrendLineChart.css'
import get from '../../Apis/Apis';

export default function TrendLineChart(props) {
  const [trendLineData, setTrendLineData] = React.useState([]);
  const params = {trend_name:props.trend,timewindow:100};
  const compParams = {trend_name:props.selectedTrend,timewindow:100};

  useEffect(() => {
    get("/get_time_series_data", params)
      .then(trendData => {
        get("/get_time_series_data", compParams).then(compTrendData => {
          const allDates = new Set([]);
          for (const date in trendData.data.time_series_data){
            allDates.add(date);
          }
          for (const date in compTrendData.data.time_series_data){
            allDates.add(date);
          }
          const datesArray = Array.from(allDates).sort();
          console.log(trendData);
          console.log(compTrendData);
          const convertedData = [];

          for (const i in datesArray) {
            let date = datesArray[i];
            let obj = {
              date:date,
              trend:trendData.data.time_series_data[date] || 0,
              compTrend:compTrendData.data.time_series_data[date] || 0
            }
            convertedData.push(obj)
          }
          console.log(convertedData);
          setTrendLineData(convertedData.reverse());
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.selectedTrend]);

  var compare = null;
  if(props.selectedTrend!=null){
    compare = <Line type="monotone" label="Compare Trend" dataKey="compTrend" stroke="#82ca9d" />;
  }
    

  return (
    <div className='line-chart-container'>
        <ResponsiveContainer width={'79%'} height={400}>
        <LineChart
          width={500}
          height={300}
          data={trendLineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" label="selected Trend" dataKey="trend" stroke="#8884d8" activeDot={{ r: 8 }} />
          {compare}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
