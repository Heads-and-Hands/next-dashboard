import React, { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';

import initStore, { auth, initProjects } from '../store';
import { Wrapper, Form, Login, Password, Submit, Error } from '../pages.styles/auth.style';
import axios from './../Api/axios';

class Auth extends PureComponent {
  static async getInitialProps({ isServer, store }) {
    if (!store.getState().projects.length) {
      try {
        const res = await axios({
          method: 'get',
          url: '/getProjects',
          headers: {
            Accept: 'application/json; charset=utf-8',
          },
        });
        const projects = await res.data;
        store.dispatch(initProjects(projects));
        return { isServer };
      } catch (e) {
        return {
          projects: [],
        };
      }
    } else {
      return { isServer };
    }
  }

  state = {
    password: '',
    login: '',  
    error: false,
  };

  handleSubmit = async () => {
    const { password, login } = this.state;
    const { router, logIn } = this.props;  
    const { data } = await axios.post('/auth', { password, login });
    if (data.success) {
      logIn(true);
      router.push('/admin?addProject', '/admin/addProject');
    } else {
      this.setState({ error: true });
    }
  }

  changeField = (e, target) => {
    this.setState({ [target]: e });
  }

  render() {
    const { password, login } = this.state;
    return ( 
      <Wrapper>
        <Form>
          <Login 
            label="Login"
            onChange={this.changeField}
            value={login}
            target="login"
          />
          <Password
            label="Password"
            onChange={this.changeField}
            value={password}
            target="password"
            type="password"
          />
          <Submit click={this.handleSubmit} >Войти</Submit>
          {this.state.error && <Error>Логин или пароль неверны</Error>}
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  logIn: success => dispatch(auth(success)),
  initProjects: () => dispatch(initProjects),
});

const enhanced = withRouter(Auth);
export default withRedux(
  initStore,
  state => ({ projects: state.projects }), 
  mapDispatchToProps,
)(enhanced);
