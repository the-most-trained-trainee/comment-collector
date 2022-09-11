import styled from 'styled-components';

const StyledForm = styled.div`
  & h1 {
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    border: 3px solid #a0a0a3;
    border-radius: 8px;
    & label {
      font-weight: 700;
    }
    & button {
      width: 150px;
      margin-left: auto;
      margin-right: auto;
      text-transform: uppercase;
      padding: 15px;
      font-weight: 700;
      border: 3px solid #90acf1;
      border-radius: 8px;
      margin-top: 20px;
    }
    & input {
      margin-bottom: 15px;
    }

    & textarea {
      resize: none;
      margin-bottom: 20px;
    }
  }
`;

export default StyledForm;
