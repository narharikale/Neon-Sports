import "./App.css";
import { Navbar } from "./components";


import { Routers } from "./router/router";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routers/>
    </div>
  );
}

export default App;
