import React from 'react';
import styled from 'styled-components';

function Button({ text, click, className }) {
  return (
    <Wrapper onClick={click} className={className}>
      <Title>{text}</Title>
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
  border: 1px solid #2196F3;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color, border-color, .4s;
  &:hover {
    background-color:  #2196F3;
    border-color: #fff;
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
