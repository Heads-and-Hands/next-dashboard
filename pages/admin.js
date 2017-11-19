import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import initStore from '../store';
import { AdminContent } from './../components';
import Sidebar from './../components/sidebar';

class Admin extends PureComponent {
  static async getInitialProps({ store }) {
    if (!store.getState().isLogined) {
      Router.push('/auth');
    }
  }
  getAdminContent = () => {
    const Links = [
      {
        path: '/admin/addProject',
        href: '/admin?add',
        title: 'Создать проект',
      },
      {
        path: '/admin/deleteProject',
        href: '/admin?delete',
        title: 'Удалить проект',
      },
      {
        path: '/admin/editProject',
        href: '/admin?edit',
        title: 'Редактировать проект',
      },
    ];

    return (
      <Wrapper>
        <SideBar links={Links} />
        <AdminContent />
      </Wrapper>

    );   
  }

  render() {
    const { isLogined } = this.props;
    
    return isLogined ? this.getAdminContent() : <div>dasdsa</div>
    // Router.push('/auth'); 
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

export default withRedux(initStore, state => ({ isLogined: state.isLogined }), null)(Admin);
