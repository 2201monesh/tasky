import React, { useState } from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";

function StatusTab() {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setOpen((prev) => !prev)} className='flex items-center px-3.5 py-1 border border-dashed border-[#27272A] rounded-lg text-sm mr-2 cursor-pointer hover:bg-[#27272A]'>
        <HiOutlinePlusCircle size={16} className='mr-1.5 font-bold' />
        <p>status</p>
      </div>

      {open && (
        <p className="absolute left-0 top-full mt-1 bg-white p-2 shadow-md border border-gray-300 rounded">hello</p>
      )}
    </div>
    
  )
}

export default StatusTab
