import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TaskTable() {
  const { tasks, filterText } = useContext(GlobalContext);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="px-7 pb-7 overflow-x-auto">
      <table className="min-w-full border border-[#27272A] text-left">
        <thead className="hover:bg-[#27272A]">
          <tr>
            <th className="px-4 py-2 border-b border-[#27272A]">Task</th>
            <th className="px-4 py-2 border-b border-[#27272A]">Title</th>
            <th className="px-4 py-2 border-b border-[#27272A]">Status</th>
            <th className="px-4 py-2 border-b border-[#27272A]">Priority</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((e, index) => (
            <tr key={index} className="cursor-pointer hover:bg-[#27272A]">
              <td className="px-4 py-2 border-b border-[#27272A]">{e.task}</td>
              <td className="px-4 py-2 border-b border-[#27272A]">{e.title}</td>
              <td className="px-4 py-2 border-b border-[#27272A]">
                {e.status}
              </td>
              <td className="px-4 py-2 border-b border-[#27272A]">
                {e.priority}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
