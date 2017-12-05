import { PureComponent } from 'react';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';

import initStore, { initProjects } from '../store';
import { Title, Projects, Head, Project } from '../pages.styles/index.style';
import axios from './../Api/axios';

class Main extends PureComponent {
  static async getInitialProps({ store, isServer }) {
    if (!store.getState().projects.length) {
      try {
        const res = await axios.get('/getProjects');
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

  getHref = () => (this.props.isLogined ? '/admin?addProject' : '/auth'); 

  render() {
    const { projects } = this.props;
    return (
      <div>
        <Head>
          <Title>Heads and Hands Dashboard</Title>
          <Link
            href={this.getHref()}
            as={this.getHref().replace('?', '/')} 
            prefetch
          >
            <a href={this.getHref()}>Вход</a>
          </Link>
        </Head>
        <Projects>
          { projects.length ? 
              projects.map(item =>
                <Project key={item._id} data={item} />) :
              <div>Ошибка</div>   
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
