import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .error {
    color: red;
  }

  button {
    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  label {
    user-select: none;
    background: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.secondary};
    border-radius: 2px;
    letter-spacing: 2px;
    padding: 0.5rem;
  }

  input {
    outline: none;
    border: none;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    border-radius: 2px;
    letter-spacing: 2px;
    width: 100%;
    padding: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    label {
      font-size: 0.8rem;
    }

    input {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;

    label {
      font-size: 1rem;
    }

    input {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 60%;

    label {
      font-size: 1.2rem;
    }

    input {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1025px) {
    width: 50%;

    label {
      font-size: 1.4rem;
    }

    input {
      font-size: 1.6rem;
    }
  }
`;

export default StyledForm;
