import { Component } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import addProject from './../add-project';
import deleteProject from './../delete-project';
import editProject from './../edit-project';

const Error = () => (<div>Сайдбар</div>);

class AdminContent extends Component {
  getQuery = () => {
    const { asPath } = this.props.router;
    return asPath.split('/')[2];  
  }

  render() {
    const PAGES = {
      addProject,
      deleteProject,
      editProject,
    };

    const Handler = PAGES[this.getQuery()] || Error;
   
    return (
      <Content>
        <Handler />
      </Content>
    );
  }
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-height: 100vh;
`;

export default withRouter(AdminContent);
