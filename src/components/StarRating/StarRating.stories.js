import React from "react";
import StarRating from "./StarRating";

export default {
  title: "Components/StarRating",
  component: StarRating,
};

const Template = ({ rating, fullColor, emptyColor }) => (
  <StarRating rating={rating} fullColor={fullColor} emptyColor={emptyColor} />
);

export const Default = Template.bind({});

Default.args = {
  rating: 3.6,
  fullColor: "#508072",
  emptyColor: "#C8FCEB",
};
