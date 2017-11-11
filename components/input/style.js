import styled, { css } from 'styled-components';


const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;  
  height: 42px;
    &:after {
    position: absolute;
    left: 0;
    top: 40px;
    display: block;
    content: '';
    width: 100%;
    height: 2px;  
    background-color: #2962ff;
    transform: scale(0);
    transition: transform .150s ease;
   }
   
  ${props => props.active && css`
    &:after {
      transform: scale(1);
    }
  `}
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;  
  padding: 10px 5px;
  border: none;
  border-bottom: 1px solid #757575;
  outline: none;
  font-size: 18px;
`;


const Label = styled.label`
  position: absolute;
  left: 5px;
  top: 10px;
  color: black; 
  font-size: 18px;
  font-weight: normal;
  pointer-events: none;
  transition: color, font-size, top .150s ease;
  
 ${props => props.active && css`
    color: #2962ff;
    font-size: 14px;
    top: -7px;
`}
`;

export { Wrapper, Input, Label }
