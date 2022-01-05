import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormExample = () => {
  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledWrapper>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </StyledWrapper>
    </>
  );
};
