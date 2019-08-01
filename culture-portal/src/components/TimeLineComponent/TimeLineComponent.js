import React from "react";
import i18next from "i18next";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./TimeLineComponent.css";

const TimeLineComponent = props => {
  return (
    <div className="container" id="timeline">
      <h3>Timeline</h3>
      <Timeline lineColor={"#ddd"}>
        {props.author.timelineData.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              dateText={item.date}
              style={{ color: "#0a02ab" }}
              dateInnerStyle={{
                backgroundImage:
                  "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
                color: "#fff",
                fontSize: "22px",
                fontWeight: "400"
              }}
              bodyContainerStyle={{
                backgroundImage:
                  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0.5rem 0.5rem 2rem 0 #a1c4fd",
                color: "#0a02ab"
              }}
            >
              <h3>{item.date}</h3>
              <p>{i18next.t(`${props.author.path}:${item.text}`)}</p>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default TimeLineComponent;
