import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";

function StatusTab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center px-3.5 py-1 border border-dashed border-[#27272A] rounded-lg text-sm mr-2 cursor-pointer hover:bg-[#27272A]"
      >
        <HiOutlinePlusCircle size={16} className="mr-1.5 font-bold" />
        <p>status</p>
      </div>

      {open && (
        <p className="absolute left-0 top-full mt-1 p-2 border border-gray-300 rounded bg-[#09090B]">
          <div className="flex py-1 px-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              name="High"
              id="High"
            />
            <label className="text-sm cursor-pointer" htmlFor="High">
              High
            </label>
          </div>
          <div className="flex py-1 px-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              name="Medium"
              id="Medium"
            />
            <label className="text-sm cursor-pointer" htmlFor="Medium">
              Medium
            </label>
          </div>
          <div className="flex py-1 px-2">
            <input
              className="mr-2 cursor-pointer"
              type="checkbox"
              name="Low"
              id="Low"
            />
            <label className="text-sm cursor-pointer" htmlFor="Low">
              Low
            </label>
          </div>
        </p>
      )}
    </div>
  );
}

export default StatusTab;
