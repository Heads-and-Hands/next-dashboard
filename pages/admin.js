import withRedux from 'next-redux-wrapper';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import initStore from '../store';
import { AdminContent } from './../components';
import Sidebar from './../components/sidebar';

class Admin extends PureComponent {
  static async getInitialProps({ res, req, store, isServer }) {
    console.warn(req);
    if (!store.getState().isLogined) {
      res.redirect('/auth');
      res.end();
    }
    return {};
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
    
    return isLogined ? this.getAdminContent() : <div>dasdsa</div>;
    // Router.push('/auth'); 
  }
}

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled(Sidebar)`
  width: 30%;
`;

export default withRedux(initStore, state => ({ isLogined: state.isLogined }), null)(Admin);
