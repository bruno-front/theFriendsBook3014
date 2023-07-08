import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Friends from "./modules/friends/friends";
import Menu from "./modules/menu/menu";
import Profile from "./modules/profile/profile";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <span className="App-logo">Logo</span>
          <div className="">
            <button onClick={ minusCount }>-</button>
            <span>{count}</span>
            <button onClick={ plusCount }>+</button>
          </div>
        </header>
        <main className="App-main">
          <div className="App-sidebar">
            <Menu />
          </div>
          <div className="App-views">
            <Routes>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/friends" element={<Friends />}/>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
