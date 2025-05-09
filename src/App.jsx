import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ActionTab from "./components/ActionTab";
import TaskTable from "./components/TaskTable";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%] border border-[#27272A] rounded-lg">
        <Header />
        <ActionTab />
        <TaskTable />
      </div>
    </div>
  );
}

export default App;
