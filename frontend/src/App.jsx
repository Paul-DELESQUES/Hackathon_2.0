import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./components/Config";
import ActionProvider from "./components/ActionProvider";
import messageParser from "./components/MessageParser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={messageParser}
        />
      </header>
    </div>
  );
}

export default App;
