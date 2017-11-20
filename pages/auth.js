import React, { PureComponent } from 'react';
import axios from 'axios';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';

import initStore, { auth } from '../store';
import { Wrapper, Form, Login, Password, Submit, Error } from '../pages.styles/auth.style';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      login: '',  
      error: false,
    };
  }

  
  handleSubmit = async () => {
    const { password, login } = this.state;
    const { router, logIn } = this.props;  
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth',
      data: { password, login },    
    });
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
});

const enhanced = withRouter(Auth);
export default withRedux(initStore, null, mapDispatchToProps)(enhanced);
