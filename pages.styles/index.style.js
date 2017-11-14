import styled from 'styled-components';
import { Input, Button, ProjectCell } from '../components';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #FFEB3B;
`;

const SignIn = styled(Button)`
  margin-left: 30px;
`;

const Project = styled(ProjectCell)`
  min-width: 350px;
  max-width: 500px;
  width: 30%;
  margin-bottom: 30px;
`;

const Sign = styled.a`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 20px;
  border: 1px solid #2196F3;
  border-radius: 3px;
  cursor: pointer;
  color: #2196F3;
  transition: background-color, border-color, color .4s;
  
  &:hover {
    background-color:  #2196F3;
    border-color: #fff;
    color: #fff;
  }
`;


export {
  Title,
  Projects,
  Head,
  SignIn,
  Input,
  Project,
  Sign,
};
