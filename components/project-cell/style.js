import styled from 'styled-components';

const Project = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 20px 0;
  border-radius: 5px;   
  background: ${props => (props.platform === 'iOS' ? '#D1C4E9' : '#C5E1A5')};
  transition: .5s;
  
  &:hover {
    box-shadow: #e9e9e9 0 20px 20px 0;
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
  padding: 0 20px;
  b {
    margin-right: 10px;
  }
`;

const Name = styled.div`
  color: #00BCD4;
  border-bottom: 1px solid #039be5;
`;

const Line = styled.div`
  padding: 0 20px;
  background: ${props => props.error && '#F44336'} 
`;

export { Line, Name, Title, Project };
