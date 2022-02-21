import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabulated = () => {
  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledWrapper>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Content 3</h2>
          </TabPanel>
        </Tabs>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
`;

export default Tabulated;
