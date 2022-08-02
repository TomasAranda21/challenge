import React from 'react'

const TableTd = ({children}) => {
  return (
    <td className="text-gray-500 py-3 px-5">
        {children}
    </td>
  )
}

export default TableTd