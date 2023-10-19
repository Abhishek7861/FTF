import React from 'react'
import './Banner.css'
import DropDown from '../DropDown/DropDown'

export default function Banner() {
  return (
    <div className='horizontal-container'>
        <div className='component'>
        <DropDown selectMessage="Select Period" selectOptions={[{value:"value1", label:"label1"},{value:"value2", label:"label2"},{value:"value3", label:"label3"},{value:"value4", label:"label4"}]}/>
      </div>
      <div className='component'>
      <DropDown selectMessage="Select Trend Category" selectOptions={[{value:"value1", label:"label1"},{value:"value2", label:"label2"},{value:"value3", label:"label3"},{value:"value4", label:"label4"}]}/>
      </div>
      <div className='component'>
      <DropDown selectMessage="Select Geography" selectOptions={[{value:"value1", label:"label1"},{value:"value2", label:"label2"},{value:"value3", label:"label3"},{value:"value4", label:"label4"}]}/>
        </div>
    </div>
  )
}
