import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Projects, Experience} from "./Pages/index"
import { NavBar} from "./components/index";
import {Footer} from "./Sections/index"

const App = () =>  {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>

      </Routes>
      <Footer/>


    </Router>
      
    </div>
  );
}

export default App;
