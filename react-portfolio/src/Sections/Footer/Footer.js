import "./Footer.css"
import {FaInstagramSquare,FaTwitterSquare,FaFacebookSquare,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
        <FaInstagramSquare/>
        <FaTwitterSquare/>
        <FaFacebookSquare/>
        <FaLinkedin/>
         </div>
        <p> &copy; 2022 TarekGhali.com</p>
    </div>
  )
}

export default Footer