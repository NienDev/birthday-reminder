import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [clear, setClear] = useState(false);
  const listElements = data.map((item) => (
    <List img={item.image} name={item.name} age={item.age} />
  ));

  function handleClick() {
    setClear(true);
  }

  return (
    <div className="max-w-xl mx-auto my-8 bg-white p-8 rounded-xl shadow-xl">
      <h3>{!clear ? data.length : 0} birthdays today</h3>
      {!clear && <div className="flex flex-col">{listElements}</div>}
      <button
        onClick={handleClick}
        className="w-full btn-primary py-2 rounded-lg mt-6 text-lg font-medium"
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
