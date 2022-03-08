import React from "react";
import { ThemeProvider } from "styled-components";
import Accordian from "./Accordian";
import theme from "../../Theme";

export default {
  title: "Components/Accordian",
  component: Accordian,
};

const Template = () => (
  <ThemeProvider theme={theme}>
    <Accordian />
  </ThemeProvider>
);
export const Default = Template.bind({});
