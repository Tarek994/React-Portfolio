import "./Home.css"
import { RiMailSendFill,RiGithubFill } from "react-icons/ri";
import {FaLinkedin} from "react-icons/fa"


const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name Is Tarek</h2>
        <div className="prompt">
        <p> A Softwear Developer With a passion for learning and creating.</p>
        <FaLinkedin/>
        <RiMailSendFill/>
        <RiGithubFill/>
        </div>
      </div>
      <div className="Skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 className="">Front-End </h2>
            <span>Html, Css , Javescript,Bootstartp,React Js, Redux, Git, Github </span>
          </li>
          <li className="item">
            <h2 className="">languagas </h2>
            <span>Arabic, English, Germany(Beginner) </span>
          </li>
          <li className="item">
            <h2 className="">Soft Skills</h2>
            <span> MS Office, Outlook, Mail, Zoom</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home