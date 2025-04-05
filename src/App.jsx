import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ActionTab from "./components/ActionTab";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleFunction = (task) => {
    setTasks((prev) => {
      const updated = [...prev, task];
      console.log("Updated tasks inside appjsx:", updated);
      return updated;
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80%] border border-[#27272A] rounded-lg">
        <Header />
        <ActionTab handleFunction={handleFunction} />
      </div>
    </div>
  );
}

export default App;
