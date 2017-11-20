import { PureComponent } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import withRedux from 'next-redux-wrapper';

import initStore, { addProject } from './../../store';
import Form from './../project-form';

class AddProjectComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      platform: '',
      hockeyAppId: '',
      teamCityId: '',
      redmineId: '',
      githubId: '',
    };
  }

  changeValue = (value, target) => {
    this.setState({ [target]: value }, console.log(this.state));
  }

  addProject = async () => {
    console.warn(this.state);
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/createProject',
      data: { ...this.state }, 
    });

    if (data.success) {
      this.props.addProject({ ...this.state, _id: data._id });
    }
  }

  render() {
    return (
      <FormProject onChangeField={this.changeValue} onSubmit={this.addProject} {...this.state} text="Добавить" />
    );
  }
}

const FormProject = styled(Form)`
  width: 400px;
`;

const mapDispatchToProps = dispatch => ({
  dispatch,
  addProject: project => dispatch(addProject(project)),
});

export default withRedux(initStore, null, mapDispatchToProps)(AddProjectComponent);
