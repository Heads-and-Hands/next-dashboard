import styled from 'styled-components';

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
            key={item._id}
            name={item.name}
            platform={item.platform}
            textButton={buttonText}
            clickButton={onProjectClick({ _id: item._id })} 
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
  max-height: 700px;
  overflow-y: scroll;
`;

const Project = styled(ProjectTitle)`
  padding: 0 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 30px;
`;
