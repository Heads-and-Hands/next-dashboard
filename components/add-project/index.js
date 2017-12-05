import { PureComponent } from 'react';
import styled from 'styled-components';
import withRedux from 'next-redux-wrapper';

import initStore, { addProject } from './../../store';
import Form from './../project-form';
import axios from './../../Api/axios';
import omit from './../../utils';

class AddProjectComponent extends PureComponent {
  state = {
    name: '',
    platform: '',
    hockeyAppId: '',
    teamCityId: '',
    redmineId: '',
    githubId: '',
    success: false,
  };

  changeValue = (value, target) => {
    this.setState(prevState => ({ 
      ...prevState,
      [target]: value,
      success: false,
      error: false,
    }));
  }

  addProject = async () => {
    this.setState(prevState => ({ ...prevState, success: false }));
    const filteredData = omit(this.state, 'success', 'error');
    const { data } = await axios.post('/createProject', filteredData);
    const { success } = data;
    this.setState(() => ({
      name: '',
      platform: '',
      hockeyAppId: '',
      teamCityId: '',
      redmineId: '',
      githubId: '',
      error: !success,
      success,       
    }));

    if (success) {
      this.props.addProject({ ...filteredData, _id: data._id });
    } 
  }

  render() {
    const { error, success } = this.state;
    return (
      <div>
        <Header>Добавление проекта</Header>
        <FormProject 
          onChangeField={this.changeValue} 
          onSubmit={this.addProject} 
          {...this.state} 
          text="Добавить" 
        />
      
        { success && <Success>Проект Добавлен</Success> }
        { error && <Error>Произошла ошибка </Error> }
      </div>
    );
  }
}

const FormProject = styled(Form)`
  width: 400px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const Success = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #69F0AE;
`;

const Error = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #c62828;
`;


const mapDispatchToProps = dispatch => ({
  dispatch,
  addProject: project => dispatch(addProject(project)),
});

export default withRedux(initStore, null, mapDispatchToProps)(AddProjectComponent);
