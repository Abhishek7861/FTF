import React from 'react'
import TrendLineChart from '../TrendLineChart/TrendLineChart'
import Table from '../Table/Table'
import DropDown from '../DropDown/DropDown'
import './TrendCompare.css'

export default function TrendCompare() {
  return (
    <div>
      <div className='TrendCompare-header'>
      <h3 className='trendcompare-heading'>Selected Trend Name: XYZ</h3>
      <h3 className='trendcompare-heading'>Compare Trend Name: XYZ</h3>
      <DropDown selectMessage="Select Trend" selectOptions={[{value:"value1", label:"label1"},{value:"value2", label:"label2"},{value:"value3", label:"label3"},{value:"value4", label:"label4"}]}/>
      </div>
      <TrendLineChart></TrendLineChart>
      <Table></Table>
    </div>
  )
}
