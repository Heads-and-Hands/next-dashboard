import styled from 'styled-components';
import Button from '../button';
import InputComponent from '../input';


const Wrapper = styled.div`
  width: 400px;
`;

const Name = styled(InputComponent)`
  margin-bottom: 20px;
`;
//
const Platform = styled(InputComponent)`
  margin-bottom: 20px;
`;
const HockeyApp = styled(InputComponent)`
  margin-bottom: 20px;
`;

const TeamCity = styled(InputComponent)`
  margin-bottom: 20px;
`;

const Redmine = styled(InputComponent)`
  margin-bottom: 20px;
`;

const Github = styled(InputComponent)`
  margin-bottom: 35px;
`;

const Submit = styled(Button)`
  color: #2962ff;
   border-color: #2962ff; 
   &:hover {
    color: #fff;
    background: #2962ff; 
   }
`;


export {
  Wrapper,
  Name,
  Platform,
  HockeyApp,
  TeamCity,
  Redmine,
  Github,
  Submit,
};
