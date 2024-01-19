import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </header>
  );
}

export default App;
