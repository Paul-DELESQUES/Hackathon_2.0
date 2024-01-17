import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./components/Config";
import ActionProvider from "./components/ActionProvider";
import messageParser from "./components/MessageParser";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Outlet />
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={messageParser}
        />    
    </div> 
  );
}

export default App;
