import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <TitleSection name="React" />
    </>
  );
}

function TitleSection(props = { name: "Vite" }) {
  let name = props.name;

  const [title, setTitle] = useState(props.name);
  const [count, setCount] = useState(0);

  function handleTitleChange(e) {
    setCount(0);
    setTitle(e.target.value);
  }

  function handleOnHover(e) {
    setCount(count + 1);
  }

  return (
    <>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p onMouseOver={handleOnHover}> {title} </p>
        <p>Title Hovered {count} times</p>
        <p>Name : {name}</p>
        <p>
          <input value={title} onChange={handleTitleChange} />
        </p>
      </header>
    </>
  );
}

export default App;
