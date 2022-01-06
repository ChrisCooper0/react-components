import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  padding: 40px 20px;
  width: 300px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #fff;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 2px;
`;

const StyledButton = styled.button`
  width: 30%;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #fff;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const FormExample = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
      resetForm();
    },
  });

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledWrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <StyledInput
            id="firstName"
            name="firstName"
            type="text"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <StyledInput
            id="lastName"
            name="lastName"
            type="text"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <StyledLabel htmlFor="email">Email Address</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          {formik.isSubmitting ? (
            <StyledButton type="submit" disabled>
              Submit
            </StyledButton>
          ) : (
            <StyledButton type="submit">Submit</StyledButton>
          )}
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default FormExample;
