import styled from 'styled-components';

export const TelaLogin = styled.div`
  margin: 140px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 30px;
    font-style: italic;
    color: #fff;
  }

  #title {
    font-size: 40px;
    line-height: 30px;
    margin-bottom: 30px;
    font-style: italic;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 12px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  form label span {
    font-weight: normal;
    color: #999;
    font-size: 14px;
  }

  form input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
    font-style: italic;
  }

  button.btn {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #536f4d;
    color: #fff;
    cursor: pointer;
  }

  button.btn:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;
