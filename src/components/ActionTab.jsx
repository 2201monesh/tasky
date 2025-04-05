import React, { useContext, useEffect, useState } from "react";
import StatusTab from "./StatusTab";
import PriorityTab from "./PriorityTab";
import AddTask from "./AddTask";
import { GlobalContext } from "../context/GlobalState";

function ActionTab() {
  const { filterText, setFilterText } = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-between p-7">
      <div className="flex">
        <input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          type="text"
          className="text-white px-2.5 py-1 mr-2 text-sm rounded-md border border-[#27272A]"
          placeholder="filter task title..."
        />
        <StatusTab />
        <PriorityTab />
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
}

export default ActionTab;
