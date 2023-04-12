import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <div><h2>{count} times.</h2><button onClick={handleClick}>Clicked</button></div>
}

function MyStatus(){
let [stat, setStatus] = useState("No");

function handleStatus() {
  setStatus((stat = "Yes"));
}
return <div><button onClick={handleStatus}>{stat}</button></div>
}

function Main() {
  return (
    <div className="main">
      <div>
        <MyButton />
        <MyButton />
      </div>
 
      <div>
        <h3>Are you clocked In?</h3>
        <MyStatus></MyStatus>
      </div> 
    </div>
  );
}

export default Main;
