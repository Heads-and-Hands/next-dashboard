import styled from 'styled-components';

import Input from './../../components/input';

import Button from './../../components/button';


const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;


const Form = styled.div`
  display: block;
  width: 400px;
  height: 200px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 2px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
              0 2px 2px 0 rgba(0,0,0,.14),
              0 1px 5px 0 rgba(0,0,0,.12);
`;

const Login = styled(Input)`
  margin-bottom: 20px;
`;

const Password = styled(Input)`
  margin-bottom: 20px;
`;


const Submit = styled(Button)`
   margin-bottom: 10px;
   color: #2962ff;
   border-color: #2962ff;
   
   &:hover {
    color: #fff;
    background: #2962ff; 
   }
`;
const Error = styled.div`
    color: red;
`;

export { Wrapper, Form, Login, Password, Submit, Error };
