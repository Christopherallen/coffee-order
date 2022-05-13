import React, { useState } from 'react';
import Select from 'react-select'

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ]
function SelectShots({data, setData}: any) {
  return (
     <Select
      onChange={value => {
        setData({...data, shots: value});
      }}
      options={options}
      value={data.shots}
      isSearchable={false}
    />
  )
}

export default SelectShots;
