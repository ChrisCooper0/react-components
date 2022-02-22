import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
  const notify = () => {
    toast.success("Success Notification", {
      position: toast.POSITION.TOP_CENTER,
    });

    toast.error("Error Notification with hidden progress bar", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });

    toast.warn("Warning Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    toast.info("Info Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>

      <StyledWrapper>
        <StyledButton onClick={notify}>Notify!</StyledButton>
        <ToastContainer />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: lightblue;
  color: #000;
  cursor: pointer;
  font-size: 16px;
`;

export default ToastNotification;
