import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./TimeLineComponent.css";

const TimeLineComponent = props => {
  return (
    <div className="container">
      <Timeline lineColor={"#ddd"}>
        {props.timeline.timelineData.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              dateText={item.date}
              style={{ color: "#e86971" }}
              dateInnerStyle={{
                background: "#61b8ff",
                color: "#000",
                fontSize: "20px"
              }}
              bodyContainerStyle={{
                background: "#ddd",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
              }}
            >
              <h3>{item.date}</h3>
              {item.text}
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default TimeLineComponent;
