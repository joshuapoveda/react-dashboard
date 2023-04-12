let hours = [3, 5, 6, 8];

function WindowOne() {
 let hoursWorked = [];
  for (let i = 0; i < hours.length; i++) {
    hoursWorked.push(hours[i]);
  }
  const totalHrs = hoursWorked.reduce((accumulator,currentValue) => accumulator + currentValue);

  return (
    <div className="win-one">
      <h4>Total Hours Worked:</h4>  
      <ul>
        <li>{totalHrs}</li>
      </ul>
    </div>
  );
}

export default WindowOne;
