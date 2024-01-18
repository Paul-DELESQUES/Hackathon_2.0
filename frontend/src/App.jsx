import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Outlet } from "react-router-dom";
import config from "./components/Config";
import ActionProvider from "./components/ActionProvider";
import messageParser from "./components/MessageParser";
import "./App.css";

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <Outlet />
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={messageParser}
        />
      </div>
    </header>
  );
}

export default App;
