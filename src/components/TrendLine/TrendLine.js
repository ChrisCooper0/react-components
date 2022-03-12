import React from "react";
import Trend from "react-trend";
import { Link } from "react-router-dom";

const TrendLine = ({ radius, width }) => {
  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        gradient={["#00c6ff", "#F0F", "#FF0"]}
        radius={10}
        strokeWidth={2}
        strokeLinecap={"round"}
      />
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        gradient={[
          `${(props) => props.theme.background.blue[400]}`,
          `${(props) => props.theme.background.blue[800]}`,
        ]}
        radius={radius}
        strokeWidth={width}
        strokeLinecap={"butt"}
      />
    </>
  );
};

export default TrendLine;
