import React from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";

function PriorityTab() {
  return (
    <div className='flex items-center px-3.5 py-1 border border-dashed border-[#27272A] rounded-lg text-sm mr-2 cursor-pointer hover:bg-[#27272A]'>
        <HiOutlinePlusCircle size={16} className='mr-1.5 font-bold' />
        <p>Priority</p>
    </div>
  )
}

export default PriorityTab;
