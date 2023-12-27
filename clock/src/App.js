import ReactDOM  from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import "./index.css";

function App() {
  const [timeSet, timeLive] = useState(
    new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      timeLive(
        new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clockDiv">
      <h1>{timeSet}</h1>
    </div>
  );
}

export default App;
