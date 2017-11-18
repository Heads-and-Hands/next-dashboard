import { PureComponent } from 'react';
import axios from 'axios';
import withRedux from 'next-redux-wrapper';

import initStore, { initProjects } from '../store';
import { Title, Projects, Head, Project } from '../pages.styles/index.style';
import Link from '../components/link';

class Main extends PureComponent {
  static async getInitialProps({ store, isServer }) {
    if (isServer) {
      try {
        const res = await axios({
          method: 'get',
          url: 'http://localhost:3000/api/getProjects',
          headers: {
            Accept: 'application/json; charset=utf-8',
          },
        });
        const projects = await res.data;
        store.dispatch(initProjects(projects));
        return { isServer };
      } catch (e) {
        return {
          projects: [],
        };
      }
    } else {
      return { isServer };
    }
  }
  
  render() {
    const { projects, isLogined } = this.props;
    return (
      <div>
        <Head>
          <Title>Heads and Hands Dashboard</Title>
          
          <Link href={isLogined ? '/admin' : '/auth'} >{isLogined ? 'Админка' : 'Вход'}</Link>
        </Head>
        <Projects>
          {
            projects.map(item =>
              <Project key={item._id} data={item} />)
          }
        </Projects>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  isLogined: state.isLogined,
});

const mapDispatchProps = dispatch => ({
  dispatch,
  initProjects: () => dispatch(initProjects),
});

export default withRedux(initStore, mapStateToProps, mapDispatchProps)(Main);
