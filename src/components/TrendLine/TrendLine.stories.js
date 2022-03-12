import React from "react";
import TrendLine from "./TrendLine";
import theme from "../../Theme";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/TrendLine",
  component: TrendLine,
  argTypes: {
    radius: {
      control: { type: "number", min: 0, max: 25, step: 0.5 },
    },
    width: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
  },
};

const Template = ({ radius, width }) => (
  <ThemeProvider theme={theme}>
    <TrendLine radius={radius} width={width} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  radius: 15.5,
  width: 2.5,
};
