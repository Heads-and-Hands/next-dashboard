import { PureComponent } from 'react';
import styled from 'styled-components';
import withRedux from 'next-redux-wrapper';

import initStore, { addProject } from './../../store';
import Form from './../project-form';
import axios from './../../Api/axios';
import Omit from './../../utils';

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
    this.setState(prevState => ({ ...prevState, [target]: value }));
  }

  addProject = async () => {
    this.setState(prevState => ({ ...prevState, success: false }));
    const filteredData = Omit(this.state, 'success');
    const { data } = await axios.post('/createProject', filteredData);

    if (data.success) {
      this.props.addProject({ ...filteredData, _id: data._id });
      this.setState(() => ({
        name: '',
        platform: '',
        hockeyAppId: '',
        teamCityId: '',
        redmineId: '',
        githubId: '',
        success: true, 
      }));
    }
  }

  render() {
    return (
      <div>
        <Header>Добавление проекта</Header>
        <FormProject 
          onChangeField={this.changeValue} 
          onSubmit={this.addProject} 
          {...this.state} 
          text="Добавить" 
        />
        {this.state.success && <Success>Проект Добавлен</Success> }
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


const mapDispatchToProps = dispatch => ({
  dispatch,
  addProject: project => dispatch(addProject(project)),
});

export default withRedux(initStore, null, mapDispatchToProps)(AddProjectComponent);
