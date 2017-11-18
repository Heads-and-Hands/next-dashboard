import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Sidebar from './../sidebar';

export default class AdminContent extends PureComponent {
  render() {
    const { Links } = this.props;
    return (
      <Wrapper>
        <SideBar links={Links} />
          
      </Wrapper>

    );
  }
}

const Wrapper = styled.div`
display: flex;
`;

const SideBar = styled(Sidebar)`
width: 30%;
`;

// const Content = styled(AdminContent)`
// display: flex;
// justify-content: center;
// align-items: center;
// width: 70%;
// height: 100vh;
// `;
