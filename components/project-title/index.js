import styled from 'styled-components';

import Button from './../button/button';

export default function ProjectTitle({
  name, platform, clickButton, textButton, className,
}) {
  return (
    <div className={className}>
      <Wrapper>
        <Name>{name} - {platform}</Name>
        <Button click={clickButton} text={textButton} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid aliceblue;
`;

const Name = styled.div`
  color: #000;
`;
