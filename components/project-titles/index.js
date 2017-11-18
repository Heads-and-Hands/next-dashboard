import styled from 'styled-components';

import Button from './../button';
import ProjectTitle from './../project-title';


export default function ProjectsTitles({
  buttonText,
  title, 
  projects, 
  onProjectClick,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Projects>
        {projects.map(item =>
          (<Project 
            key={item.redmineId}
            name={item.name}
            platform={item.platform}
            textButton={buttonText}
            clickButton={onProjectClick({ redmineId: item.redmineId })} 
          />))}
      </Projects>
    </Wrapper>
  );
}

ProjectsTitles.defaultProps = {
  projects: [],
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
`;

const Projects = styled.div`
height: 100%;
max-height: 800px;
overflow-y: scroll;
`;

const Project = styled(ProjectTitle)`
margin-bottom: 20px;
`;

const Title = styled.h1`
font-size: 30px;
line-height: 30px;
`;

const Submit = styled(Button)`
color: #2962ff; 
border-color: #2962ff;

&:hover {
color: #fff;
background: #2962ff; 
}
`;

