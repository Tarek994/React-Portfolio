import "./NavBar.css"
import { Link,useLocation } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder'
import { useEffect, useState } from "react"



const NavBar = () => {
  const [expendNavBar, setExpendNavBar] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    setExpendNavBar(false)
  },[location])

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

export default NavBar;