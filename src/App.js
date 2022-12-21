
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<Home />} />;
      </Routes>
    </div>
  );
}

export default App;
