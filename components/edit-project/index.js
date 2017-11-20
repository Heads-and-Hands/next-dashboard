import { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { withRouter } from 'next/router';

import { editProject } from './../../store';
import ProjectTitles from './../project-titles';
import ProjectForm from './../project-form';

class EditProject extends PureComponent {
  state = {
    chosen: false,
  }

  goto = ({ _id }) => () => {

    console.warn(_id);
    this.setState((prevState, props) => {
      console.log(prevState);
      return {
        ...prevState,
        chosen: !prevState.chosen,
        ...props.projects.find(item => item._id === _id),
      };
    });

    // this.setState(prevState => ({...prevState, chosen: true}))
  }

  changeValue = (value, target) => {
    this.setState(prevState => ({ ...prevState, [target]: value }));
  }

  editProject = async () => {
    const { data } = await axios({
      method: 'post',
      url: 'http://dashboard.handh.ru:3000/api/updateProject',
      data: { ...this.state },
    });
    if (data.success) {
      this.props.editProject({ ...this.state });
      this.setState((prevState) => {
        return {
          ...prevState,
          chosen: !prevState.chosen,
        };
      });
    }
  }

  render() {
    const { projects } = this.props;
    const { chosen } = this.state;
    return (
      chosen ?
        <ProjectForm
          onSubmit={this.editProject}
          text="Редактировать"
          onChangeField={this.changeValue}
          {...this.state}
        /> :
        <ProjectTitles
          onProjectClick={this.goto}
          title="Редактирование проектов"
          buttonText="Редактировать"
          projects={projects}
        />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  editProject: project => dispatch(editProject(project)),
});


export default connect(store => ({ projects: store.projects }), mapDispatchToProps)(EditProject);
