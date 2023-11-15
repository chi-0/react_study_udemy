import "./Result.css";

export const Result = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.submitData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{~~data.savingsEndOfYear}</td>
            <td>{~~data.yearlyInterest}</td>
            <td>{~~data.totalInterest}</td>
            <td>{data.yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
