import { useState } from "react";
import { calculate } from "./utils/stringCalculator";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleCalculate = () => {
    const calculationResult = calculate(userInput);
    const resultElement = document.getElementById("calculationResult");
    if (resultElement) {
      resultElement.textContent = `Result: ${calculationResult}`;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>String Calculator</h1>

          <div className="input-section">
            <label htmlFor="numberInput">
              Enter Numbers (comma or newline separated):
            </label>
            <input
              type="text"
              id="numberInput"
              onChange={(event) => setUserInput(event.target.value)}
              value={userInput}
              placeholder="Enter numbers separated by commas"
              className="inputClass"
            />
          </div>

          <div className="button-section">
            <button onClick={handleCalculate} className="buttonClass">
              Calculate
            </button>
          </div>

          <div className="result-section">
            <h2 id="calculationResult">Result: </h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
