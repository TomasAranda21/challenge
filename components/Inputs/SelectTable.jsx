import React from 'react'

const SelectTable = ({value, onChange}) => {
  return (
    <select name="status" id="status" value={value} onChange={onChange}
        className="sm:border-x border-y sm:border-y-0 border-gray-300 py-2 px-1 sm:hover:bg-gray-50 text-center font-semibold duration-100 appearance-none outline-none cursor-pointer">
        <option value="">Status: All</option>
        <option value="in progress">Status: In progress</option>
        <option value="done">Status: Done</option>
        <option value="canceled">Status: Canceled</option>
    </select>
  )
}

export default SelectTable