import React, { useState } from "react";

export default function Counter() {
  let [showSec, setShowSec] = useState(100);
  let [status, setStatus] = useState(false);

  if (status === false) {
    return (
      <div>
        <span className="box">
          <input type="text" pattern="[0-9]" value={showSec} />
        </span>
        <button onClick={() => setStatus(true)}>→</button>
        <button onClick={() => setShowSec(showSec + 1)}>↑</button>
        <button onClick={() => setShowSec(showSec - 1)}>↓</button>
      </div>
    );
  } else {
    setTimeout(() => {
      setShowSec(showSec - 1);
    }, "1000");

    return (
      <div>
        <span className="box">
          <h1>{showSec}</h1>
        </span>
        <button onClick={() => setStatus(false)}>●</button>
      </div>
    );
  }
}
