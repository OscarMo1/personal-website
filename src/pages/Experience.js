import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import SchoolIcon from "@material-ui/icons/School";
  import WorkIcon from "@material-ui/icons/Work";

  
function Experience() {
  return (
    <div classname='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
            Queens High School for the Sciences at York College, Jamaica, NY
          </h3>
          <p> High School Diploma</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            82nd Street Academics Summer Teacher
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Queens, NY
          </h4>
          <p> Taught 8th grade students in 82nd Street Academics summer program with a focus in music and career awareness</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Boston University, Boston, MA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ID Tech Instructor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manhattan, NY
          </h4>
          <p> taught python and machine learning with a focus in machine learning and artificial intelligence to 13-17 year old students 
            at Columbia University
          </p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  )
}

export default Experience
