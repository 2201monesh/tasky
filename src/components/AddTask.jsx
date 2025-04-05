import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";

function AddTask({ handleTasks }) {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");

  const { tasks, setTasks } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.task.trim() !== "") {
      setTasks((prev) => [...prev, data]);
      setTask(""); // optional since you're using react-hook-form
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center px-3.5 py-1 border border-[#27272A] rounded-lg text-sm cursor-pointer hover:bg-[#27272A]"
      >
        Add Task
      </button>

      {open && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Blurred Background */}
            <div className="absolute inset-0 backdrop-blur-[1px]"></div>

            {/* Modal Content */}
            <div className="relative bg-[#09090B] p-6 rounded-xl shadow-lg border border-gray-300 w-96">
              <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
              <input
                {...register("task", { required: "Task is required" })}
                type="text"
                placeholder="Enter task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {errors.task && (
                <p className="text-xs mt-2">{errors.task.message}</p>
              )}

              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {errors.title && (
                <p className="text-xs mt-2 text">{errors.title.message}</p>
              )}

              <select
                {...register("status", { required: "Status is required" })}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer text-[#97979F]"
              >
                <option value="">Please Select</option>
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo</option>
                <option value="Done">Done</option>
                <option value="Canceled">Canceled</option>
              </select>
              {errors.status && (
                <p className="text-xs mt-2 text">{errors.status.message}</p>
              )}

              <select
                {...register("priority", { required: "Priority is required" })}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer text-[#97979F]"
              >
                <option value="">Please Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {errors.priority && (
                <p className="text-xs mt-2 text">{errors.priority.message}</p>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-1 border border-gray-400 rounded-md text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1 bg-blue-500 text-white cursor-pointer rounded-md text-sm hover:bg-blue-600"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddTask;
