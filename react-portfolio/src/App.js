import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Projects, Experience} from "./Pages/index"


const App = () =>  {
  return (
    < >
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>

      </Routes>


    </Router>
      
    </>
  );
}

export default App;
