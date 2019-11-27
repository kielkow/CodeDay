import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 50px;

  li {
    padding: 15px 0;
    font-size: 20px;
    color: #eee;
    font-weight: bold;
    margin-left: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #71c159;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      padding: 17px;
      font-size: 22px;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      a {
        color: #71c159;
      }
    }

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      text-decoration: none;
      color: #eee;
      padding: 17px;
    }
  }
`;

export const SubmitButtonBack = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  flex: 1;
  background: #077f68;
  max-width: 100px;
  border: 1px solid #eee;
  margin: 5px;
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  font-style: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
