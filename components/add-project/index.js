import { PureComponent } from 'react';
import styled from 'styled-components';
import withRedux from 'next-redux-wrapper';

import initStore, { addProject } from './../../store';
import Form from './../project-form';
import axios from './../../Api/axios';

class AddProjectComponent extends PureComponent {
  state = {
    name: '',
    platform: '',
    hockeyAppId: '',
    teamCityId: '',
    redmineId: '',
    githubId: '',
  };

  changeValue = (value, target) => {
    this.setState({ [target]: value }, console.log(this.state));
  }

  addProject = async () => {
    const { data } = await axios.post('/createProject', { ...this.state });

    if (data.success) {
      this.props.addProject({ ...this.state, _id: data._id });
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

const mapDispatchToProps = dispatch => ({
  dispatch,
  addProject: project => dispatch(addProject(project)),
});

export default withRedux(initStore, null, mapDispatchToProps)(AddProjectComponent);
