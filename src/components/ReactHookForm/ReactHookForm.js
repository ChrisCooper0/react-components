import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  place-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.whitesmoke};
  padding: 2rem;
  border-radius: 5px;

  input {
    border: none;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 5px;
    padding: 0.25rem;
    margin-bottom: 1rem;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 0.4rem;
    background: ${({ theme }) => theme.background.blue[400]};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      background: ${({ theme }) => theme.background.blue[500]};
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const ReactHookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <p>Name is required</p>}
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <p>Email is required</p>}
          <button type="submit">Submit</button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default ReactHookForm;
