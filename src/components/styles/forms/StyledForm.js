import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  label {
    user-select: none;
    font-size: 1.4rem;
    background: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.secondary};
    border-radius: 2px;
    padding: 0.5rem;
    letter-spacing: 2px;
  }

  .error {
    color: red;
  }

  input {
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
    padding: 0.5rem;
    outline: none;
    border: none;
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    border-radius: 2px;
    letter-spacing: 2px;
  }

  button {
    align-self: center;
  }
`;

export default StyledForm;
