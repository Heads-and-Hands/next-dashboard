import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import { auth } from '../../store';
import { Wrapper, Form, Login, Password, Submit, Error } from './style';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      login: '',  
      error: false,
    };
  }

  submit = () => {
    this.props.logIn(true);
  }
  handleSubmit = async () => {
    const { password, login } = this.state;  
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth',
      data: { password, login },    
    });
    console.warn(data);
    this.submit(true);
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
          <Submit text="Войти" click={this.handleSubmit} />
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

export default connect(null, mapDispatchToProps)(Auth);
