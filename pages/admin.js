import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import { PureComponent } from 'react';
import styled from 'styled-components';

import initStore from '../store';
import Sidebar from './../components/sidebar';
// import AdminContent from '../components';

class Admin extends PureComponent {
  getAdminContent = () => {
    const Links = [
      {
        path: '/admin/addProject',
        title: 'Создать проект',
      },
      {
        path: '/admin/deleteProject',
        title: 'Удалить проект',
      },
      {
        path: '/admin/editProject',
        title: 'Редактировать проект',
      },
    ];

    return (
      <Wrapper>
        <SideBar links={Links} />
        <div>gfhg</div>
      </Wrapper>

    );   
  }

  render() {
    const { isLogined } = this.props;
    
    return (
      isLogined ? this.getAdminContent() : Router.push('/auth') 
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


export default withRedux(initStore, state => ({ isLogined: state.isLogined }), null)(Admin);
  
