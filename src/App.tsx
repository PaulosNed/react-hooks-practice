import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // The useState hook is used to manage state and re-render the page whenever the state changes. In this case
  // The val state will be re-rendering the page and initiating the useEffect hook which I will describe below
  const [val, setVal] = useState<number>(0);

  // Title state
  const [title, setTitle] = useState<string>("");

  //button refs
  // useRefs are mainly used to access DOM elements. In this case, I have used this refs to access my 'increase'
  // and 'decrease' buttons and access their names to show an alert.
  const butonRef1 = useRef<HTMLButtonElement | null>(null);
  const butonRef2 = useRef<HTMLButtonElement | null>(null);

  //increase total count by 1
  const increase = () => {
    if (butonRef2.current !== null) {
      // we can use the useRef here if we want
      alertPage(butonRef2);
    }
    setVal((prev) => prev + 1);
  };

  // decrease toal count by 1
  const decrease = () => {
    setVal((prev) => prev - 1);
    if (butonRef1.current !== null) {
      // we can use the useRef here if we want
      alertPage(butonRef1);
    }
  };

  // to Alert a button was pressed
  const alertPage = (ref: React.MutableRefObject<HTMLButtonElement | null>) => {
    if (ref.current !== null) {
      alert(`${ref.current.name} button clicked`);
    }
  };

  //changing title based on current count
  // The useEffect hook is used to call a function based on certain dependencies list as a second parameter. in this case
  // the val state is a dependency that triggers the useEffect function and this useEffect function will in-turn update
  // the title state showing a modified title based on the change of val.
  useEffect(() => setTitle(`Current Count: ${val}`), [val]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        {/* Title section */}
        <div className="w-full justify-center">
          <p className="text-3xl">{title}</p>
        </div>

        {/* Buttons section */}
        <div className="flex justify-center gap-8">
          {/* Decrease Button */}
          <button
            ref={butonRef1}
            onClick={decrease}
            name="Decrease"
            className="rounded-lg flex justify-center bg-red-500 p-2 text-white"
          >
            Decrease
          </button>

          {/* Increase button */}
          <button
            ref={butonRef2}
            onClick={increase}
            name="Increase"
            className="rounded-lg flex justify-center bg-green-500 p-2 text-white"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
