import React, { useState } from 'react'

function AddTask() {

    const [open, setOpen] = useState(false);
    const [task, setTask] = useState("");

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)} className='flex items-center px-3.5 py-1 border border-[#27272A] rounded-lg text-sm cursor-pointer hover:bg-[#27272A]'>
        Add Task
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>

          {/* Modal Content */}
          <div className="relative bg-[#09090B] p-6 rounded-xl shadow-lg border border-gray-300 w-96">
            <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              placeholder="Enter task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1 border border-gray-400 rounded-md text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Task Saved:", task);
                  setTask("");
                  setOpen(false);
                }}
                className="px-4 py-1 bg-blue-500 text-white cursor-pointer rounded-md text-sm hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default AddTask;
