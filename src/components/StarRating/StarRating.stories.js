import React from "react";
import StarRating from "./StarRating";

export default {
  title: "Components/StarRating",
  component: StarRating,
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
  },
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
