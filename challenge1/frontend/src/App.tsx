import React, { useEffect } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/";

type Count = {
  count: number;
};

function App() {
  const [count, setCount] = React.useState<Count>({ count: 0 });

  useEffect(() => {
    fetch(API_URL).then((res) =>
      res.json().then((data) => {
        console.log("data", data);
        setCount(data);
      })
    );
  }, []);

  const add = () => {
    const res = fetch(API_URL, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      });
  };

  const reset = () => {
    const res = fetch(API_URL, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      });
  };

  return (
    <div className="App">
      <h1>Counter</h1>

      <h2>{count.count}</h2>

      <button onClick={add}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
