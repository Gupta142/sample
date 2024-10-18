import Child from "./component/Child/index.js"
import './App.css';

function App() {


  const parentBtn = () => {
    console.log("parent btn is clicked...!");
  }

  const childBtn = () => {
    console.log("child btn is clicked...!");
  }

  return (
    <div className="App">
      <h1>Hello, Welcome to React</h1>
      <p>Adding a new line in new-features branch</p>
      <button type="button" onClick={parentBtn} >parent btn</button>
      <Child childBtn = {childBtn}/>
    </div>
  );
}

export default App;
