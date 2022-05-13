import React from 'react';
import Select from 'react-select'

function SelectShots() {
  const options = [
    { value: 'one', label: '1' },
    { value: 'two', label: '2' },
    { value: 'three', label: '3' },
    { value: 'four', label: '4' },
    { value: 'five', label: '5' }
  ]
  return (
     <Select isSearchable={false} options={options} />
  )
}

export default SelectShots;
