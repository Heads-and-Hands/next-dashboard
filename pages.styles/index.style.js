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
  cursor: pointer;
`;

const Project = styled(ProjectCell)`
  min-width: 350px;
  max-width: 500px;
  width: 30%;
  margin-bottom: 30px;
`;

export {
  Title,
  Projects,
  Head,
  SignIn,
  Input,
  Project,
};
