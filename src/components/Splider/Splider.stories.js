import React from "react";
import Splider from "./Splider";
import theme from "../../Theme";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/Splide",
  component: Splider,
};

const Template = () => (
  <ThemeProvider theme={theme}>
    <Splider />
  </ThemeProvider>
);

export const Default = Template.bind({});
