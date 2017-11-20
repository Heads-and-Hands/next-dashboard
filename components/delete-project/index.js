import { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { deleteProject } from './../../store';
import ProjectTitle from './../project-titles';

class DeleteProject extends PureComponent {
  deleteProject = ({ _id }) => async () => {
    console.warn(_id);
    const { data } = await axios({
      method: 'post',
      url: 'http://dashboard.handh.ru:3000/api/deleteProject',
      data: { _id },
    });
    if (data.success) {
      this.props.deleteProject({ _id });
      return 'asdas';
    }
    return data.success;
  }


  render() {
    const { projects } = this.props;
    return (
      <ProjectTitle
        onProjectClick={this.deleteProject}
        title="Удалить проект"
        buttonText="Удалить"
        projects={projects}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  deleteProject: project => dispatch(deleteProject(project)),
});

export default connect(store => ({ projects: store.projects }), mapDispatchToProps)(DeleteProject);
