import { useState } from 'react';
import Odometer from './Components/odometer';
import './App.css';

function App() {
  const [hovered, setHovered] = useState(1);
  let days = 365;

  function changeDay(day) {
    setHovered(day)
  }

  return (
    <>
      <main className="bg-zinc-950 min-h-screen relative size-full flex items-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex flex-wrap items-start justify-start gap-2">
            {Array.from({ length: days }).map((_, index) => (
              <div key={index} className="group hover:cursor-pointer size-5 flex items-center justify-center" onMouseEnter={() => changeDay(index)} onMouseLeave={() => changeDay(1)}>
                <div style={{ transitionDuration: `${500 - index * 1}ms` }} className={`size-1 rounded-full group-hover:zinc-200 transition-all ${hovered >= index ? "bg-zinc-100" : "bg-zinc-600"}`}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8 text-sm pr-4">
            <h1 className="text-zinc-100">2025</h1>
            <p className="text-zinc-100 flex items-center"><Odometer value={hovered} duration={500} size={"0.875rem"} /> <span className="text-zinc-600 ml-1.5">days left</span></p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;