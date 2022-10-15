import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div className="navbar">
       <div className="toggle-button"> 
         <button> </button>
       </div>
       <div className="links">
        
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/experience"> Experience</Link>

       </div>
    </div>
  )
}

export default NavBar