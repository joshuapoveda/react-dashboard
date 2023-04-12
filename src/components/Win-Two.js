let areas = ["North wing", "South Wing", "West Wing"];

function WindowTwo() {
    const workAreas = areas.map(attr => <li>{attr}</li>)
  return (
    <div className="win-two">
      <ul>{workAreas}</ul>
    </div>
  );
}

export default WindowTwo;
