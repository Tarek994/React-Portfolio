import "./Experience.css"
import { VerticalTimeline,
        VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">My Random High School, Random Place, Random State </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience