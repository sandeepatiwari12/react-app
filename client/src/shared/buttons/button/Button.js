import styled from "styled-components";

export default styled.button`
   /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#3f51b5" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#3f51b5")};
  border: 2px solid #3f51b5;
  font-size: 1em;
  margin: 1em;
  padding: .5em 3em;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
`;

// // The Button from the last section without the interpolations
// export default Button = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;
