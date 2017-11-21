import React from 'react';
import styled from 'styled-components';


function Button({ children, click, className }) {
  return (
    <Wrapper onClick={click} className={className}>
      <Title>{children}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color, border-color, .4s;
  color: #2962ff;
  border-color: #2962ff; 
   &:hover {
    color: #fff;
    background: #2962ff; 
   }
`;

const Title = styled.div`
  margin: 0;
  color: #2196F3;
  transition: color .4s;
  
  ${Wrapper}:hover & {
    color: #fff;
  }
`;

export default Button;
