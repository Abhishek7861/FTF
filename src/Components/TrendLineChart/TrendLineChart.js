import React, { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';
import './TrendLineChart.css'
import get from '../../Apis/Apis';

export default function TrendLineChart(props) {
  const [trendLineData, setTrendLineData] = React.useState([]);
  const params = { trend_name: props.trend, timewindow: 100 };
  const compParams = { trend_name: props.selectedTrend, timewindow: 100 };

  useEffect(() => {
    const url = "/get_time_series_data";

    const apiCalls = [];
    apiCalls.push(get(url, params));
    if (props.selectedTrend != "compare trend") { apiCalls.push(get(url, compParams)); }

    Promise.all(apiCalls)
      .then(([response1, response2]) => {
        let trendData = response1.data;
        let compTrendData = { time_series_data: {} };
        let trendCount = 0;
        let trendCompCount = 0;
        if (props.selectedTrend != "compare trend") { compTrendData = response2.data; }

        const allDates = new Set([]);
        for (const date in trendData.time_series_data) {
          allDates.add(date);
        }
        for (const date in compTrendData.time_series_data) {
          allDates.add(date);
        }

        const datesArray = Array.from(allDates).sort();
        const convertedData = [];
        for (const i in datesArray) {
          let date = datesArray[i];
          trendCount += (trendData.time_series_data[date] || 0);
          trendCompCount += (compTrendData.time_series_data[date] || 0);
          let obj = {
            date: date,
            trend: trendCount,
            compTrend: trendCompCount
          }
          convertedData.push(obj)
        }
        setTrendLineData(convertedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [props.selectedTrend, props.trend]);

  var compare = null;
  if (props.selectedTrend != null) {
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
          <XAxis dataKey="date" tick={{ fontSize: 12 }} >
            <Label value="Date" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis >
          <Label angle={-90} value="Cumlative Trend Count" position={{ x: 10, y: 70 }} offset={-10} />
          </YAxis>
          <Tooltip />
          <Line type="monotone" label="selected Trend" dataKey="trend" stroke="#8884d8" activeDot={{ r: 8 }} />
          {compare}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
