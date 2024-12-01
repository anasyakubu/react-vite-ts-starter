
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const App: React.FC = () => {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
  