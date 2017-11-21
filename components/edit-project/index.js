import { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { editProject } from './../../store';
import ProjectTitles from './../project-titles';
import ProjectForm from './../project-form';
import Button from './../button';
import axios from './../../Api/axios';

class EditProject extends PureComponent {
  state = {
    chosen: false,
  }

  goto = ({ _id }) => () => {
    this.setState((prevState, props) => ({
      ...prevState,
      chosen: !prevState.chosen,
      ...props.projects.find(item => item._id === _id),
    }));
  }

  goBack = () => {
    this.setState(prevState => ({ ...prevState, chosen: !prevState.chosen }));
  }

  changeValue = (value, target) => {
    this.setState(prevState => ({ ...prevState, [target]: value }));
  }

  editProject = async () => {
    const { data } = await axios.post('/updateProject', { ...this.state });
    if (data.success) {
      this.props.editProject({ ...this.state });
      this.setState(prevState => ({
        ...prevState,
        chosen: !prevState.chosen,
      }));
    }
  }

  render() {
    const { projects } = this.props;
    const { chosen } = this.state;
    return (
      chosen ?
        <div>
          <ProjectForm
            onSubmit={this.editProject}
            text="Редактировать"
            onChangeField={this.changeValue}
            {...this.state}
          />
          <Back click={this.goBack}>Назад</Back>
        </div> :
        <ProjectTitles
          onProjectClick={this.goto}
          title="Редактирование проектов"
          buttonText="Редактировать"
          projects={projects}
        />
    );
  }
}

const Back = styled(Button)`
  margin-top: 20px;
`;

const mapDispatchToProps = dispatch => ({
  dispatch,
  editProject: project => dispatch(editProject(project)),
});


export default connect(store => ({ projects: store.projects }), mapDispatchToProps)(EditProject);
