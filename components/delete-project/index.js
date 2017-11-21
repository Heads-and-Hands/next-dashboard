import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { deleteProject } from './../../store';
import ProjectTitle from './../project-titles';
import axios from './../../Api/axios';

class DeleteProject extends PureComponent {
  deleteProject = ({ _id }) => async () => {
    const { data } = await axios.post('/deleteProject', { _id });
    if (data.success) {
      this.props.deleteProject({ _id });
      return 'success';
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
