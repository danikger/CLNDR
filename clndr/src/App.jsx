import { useState } from 'react';
import Odometer from './Components/odometer';
import { isLeapYear, getDayOfYear, getDateFromDay } from './utils/dateFunctions';
import { Tooltip } from 'react-tooltip'
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(getDayOfYear());

  const currentYear = new Date().getFullYear();
  const days = isLeapYear(currentYear) ? 366 : 365;

  /**
   * Updates the current day when hovering over a day
   * 
   * @param {*} day - Day of the year (1-366)
   * @returns {void}
   */
  function changeDay(day = getDayOfYear()) {
    setCurrentDate(day)
  }

  return (
    <>
      <main className="bg-zinc-950 min-h-screen relative size-full flex items-center">
        <div className="w-full max-w-2xl mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] gap-0.25 min-[420px]:gap-2" >
            {Array.from({ length: days }).map((_, index) => (
              <div
                key={index}
                className="group size-5 flex items-center justify-center justify-self-center"
                onMouseEnter={() => changeDay(index+1)}
                onMouseLeave={() => changeDay()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={getDateFromDay(index + 1)}
              >
                <div style={{ transitionDuration: `${500 - index * 1.3}ms` }}
                  className={`size-1 rounded-full group-hover:zinc-200 transition-all ${currentDate >= index+1 ? "bg-zinc-100" : "bg-zinc-700"}`}
                ></div>
              </div>
            ))}
          </div>

          <Tooltip
            id="my-tooltip"
            delayShow={100}
            className="animate-in slide-in-from-bottom-2 duration-300"
            effect="solid"
            place="top-start"
            opacity={1}
            noArrow
            style={{ backgroundColor: "#f4f4f5", color: "#09090b", padding: "0.25rem 0.5rem" }}
          />

          <div className="flex justify-between mt-8 text-sm px-2.5">
            <h1 className="text-zinc-100">{currentYear}</h1>
            <div className="text-zinc-100 flex items-center">
              <Odometer value={days - currentDate - 1} duration={500} size={"0.875rem"} />
              <span className="text-zinc-600 ml-1.5">
                {days - currentDate - 1 === 1 ? "day" : "days"} left
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;