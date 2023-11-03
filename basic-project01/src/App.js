import { useState } from "react";
import { CalculateForm } from "./components/CalculateForm";
import { Header } from "./components/Header";
import { Result } from "./components/Result";

function App() {
  const [submitArr, setSubmitArr] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.current; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearly; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expect / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });

      setSubmitArr(yearlyData);
    }

    // do something with yearlyData ...
  };

  console.log(submitArr);

  return (
    <div>
      <Header />
      <CalculateForm calculateData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Result submitData={submitArr} />
    </div>
  );
}

export default App;
