import React from "react";
import { ThemeProvider } from "styled-components";
import LoadMore from "./LoadMore";
import theme from "../../Theme";

export default {
  title: "Components/LoadMore",
  component: LoadMore,
};

const Template = ({ loadTop }) => (
  <ThemeProvider theme={theme}>
    <LoadMore loadTop={loadTop} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  loadTop: false,
};
