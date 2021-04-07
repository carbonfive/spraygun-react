import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      An example stateful component.
      <button className="Counter__button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
