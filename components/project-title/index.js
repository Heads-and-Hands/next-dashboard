import styled from 'styled-components';

import Button from './../button';

export default function ProjectTitle({
  name, platform, clickButton, textButton, className,
}) {
  return (
    <div className={className}>
      <Wrapper>
        <Name>{name} - {platform}</Name>
        <Button click={clickButton}>{textButton}</Button>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid aliceblue;
  padding-left: 10px;
`;

const Name = styled.div`
  color: #000;
`;
