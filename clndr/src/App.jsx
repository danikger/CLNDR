import { useState } from 'react';
import Odometer from './Components/odometer';
import { isLeapYear, getDayOfYear, getDateFromDay } from './utils/dateFunctions';
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
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex flex-wrap items-start justify-start gap-0">
            {Array.from({ length: days }).map((_, index) => (
              <div
                key={index}
                className="group size-5 flex items-center justify-center m-0 sm:m-1"
                onMouseEnter={() => changeDay(index)}
                onMouseLeave={() => changeDay()}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={getDateFromDay(index + 1)}
              >
                <div style={{ transitionDuration: `${500 - index * 1.3}ms` }}
                  className={`size-1 rounded-full group-hover:zinc-200 transition-all ${currentDate >= index ? "bg-zinc-100" : "bg-zinc-700"}`}
                ></div>
              </div>
            ))}
          </div>

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