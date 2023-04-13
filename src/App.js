import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subhero from "./components/Subhero";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Subhero />

        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          {/* <Route path="/" element={<Hero />} exact /> */}
        </Routes>
   
      
    </Router>
  );
}

export default App;
