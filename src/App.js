import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />

        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} exact />
        </Routes>
   
      
    </Router>
  );
}

export default App;
