import "./NavBar.css"
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder'
import { useState } from "react"



const NavBar = () => {
  const [expendNavBar, setExpendNavBar] = useState(false);


  return (
    <div className="navbar" id={expendNavBar ? "open": "close"}>
       <div className="toggle-button"> 
         <button onClick={()=>{
          setExpendNavBar((prev)=> !prev);}}>

          <ReorderIcon/> </button>
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