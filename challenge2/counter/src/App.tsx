import React, { useEffect } from "react";
import "./App.css";
import { db } from "./fb";

import { doc, getDoc, setDoc } from "firebase/firestore";

function App() {
  const [count, setCount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  const getCounter = async () => {
    const counterRef = doc(db, "counters", "counter");
    const counterSnap = await getDoc(counterRef);
    const counter = counterSnap.data();
    return { counterRef, counter };
  };

  useEffect(() => {
    async function fetchCounter() {
      const { counterRef, counter } = await getCounter();

      if (counter === undefined) {
        setDoc(counterRef, { count: 0 });
        setCount(0);
      } else {
        setCount(counter.count);
      }
      setLoading(false);
    }

    fetchCounter();
  }, []);

  const add = async () => {
    const { counterRef, counter } = await getCounter();

    if (counter === undefined) return;
    const newCount = counter.count + 1;
    setCount(newCount);
    setDoc(counterRef, { count: newCount });
  };

  const reset = async () => {
    const { counterRef, counter } = await getCounter();
    if (counter === undefined) return;
    setCount(0);
    setDoc(counterRef, { count: 0 });
  };

  return (
    <div className="App">
      <h1>Counter</h1>

      <h2>{loading ? "Loading" : count}</h2>

      <button onClick={add}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
