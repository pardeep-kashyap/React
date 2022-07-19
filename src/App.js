import { useMemo, useState } from "react";
import "./styles.css";
export default function App() {
  const [number, setNumber] = useState(0);
  const [numberSecond, setNumbersecond] = useState(0);

  const getNumber = useMemo(() => {
    console.log("Number is", number);
    return number;
  }, [number]);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={number}
          onChange={(evt) => setNumber(evt.target.value)}
        />
        <button onClick={() => setNumber(parseInt(number) + 1)}>
          Increament
        </button>

        <div>Your No is - {getNumber}</div>
      </div>
      <input
        type="text"
        value={numberSecond}
        onChange={(evt) => setNumbersecond(evt.target.value)}
      />
      <button onClick={() => setNumbersecond(parseInt(numberSecond) + 1)}>
        Increament
      </button>
    </div>
  );
}
