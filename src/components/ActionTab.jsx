import React from 'react'
import StatusTab from './StatusTab'
import PriorityTab from './PriorityTab'
import AddTask from './AddTask'

function ActionTab() {
  return (
    <div className='flex items-center justify-between p-7 border border-red-400'>
      <div className='flex'>
        <input type="text" className='text-white px-2.5 py-1 mr-2 text-sm rounded-md border border-[#27272A]' placeholder='filter tasks...' />
        <StatusTab />
        <PriorityTab />
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  )
}

export default ActionTab
