import styled from "styled-components"

export const ContactForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #1A1A1A;
  height: 31.25rem;
  width: 24.25rem;
  border-radius: 0.375rem;

  margin-top: 1.25rem;
  gap: 1.15rem;

  @media screen and (max-height: 678px) {
    height: 28.55rem;
  }

  @media screen and (max-height: 598px) {
    height: 27.55rem;
  }

  button {
    background-color: var(--primary-color);
    color: #373737;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;

    border: none;
    border-radius: 0.375rem;
    width: 19.938rem;
    height: 2.375rem;
    margin-bottom: 1rem;

    &:hover {
      filter: brightness(1.1);
    }
  }
`

export const FormInputs = styled.div `
  display: flex;
  flex-direction: column;

  .form-label {
    color: var(--body-text-color);
    font-weight: 700;
    padding-bottom: 0.313rem;

    @media screen and (max-height: 678px) {
      font-size: 0.9rem;
    }
  }

  input, textarea, select {
      background-color: var(--body-text-color-alt);
      border: none;
      border-radius: 0.375rem;
      width: 19.938rem;
      height: 2.375rem;
      font-size: 0.875rem;
      padding: 0.5rem;

      &::placeholder {
        color: #858585;
      }

      &:not(:placeholder-shown), &:focus {
        color: var(--primary-color);
      }
  }

  option, select {
    color: var(--body-text-color);

    &:not(:first-of-type) {
      color: var(--body-text-color);
    }
  }

  textarea {
    height: 5.5rem;
    resize: none;

    @media screen and (max-height: 678px) {
      height: 3.66rem;
    }
  }
`