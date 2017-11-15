import { PureComponent } from 'react';
import axios from 'axios';
import Link from '../components/link';
import { Title, Projects, Head, Project } from '../pages.styles/index.style';

class Main extends PureComponent {
  static async getInitialProps() {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/getProjects',
        headers: {
          Accept: 'application/json; charset=utf-8',
        },
      });
      const projects = await res.data;
      return { projects };
    } catch (e) {
      return {
        projects: [],
      };
    }
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        <Head>
          <Title>Heads and Hands Dashboard</Title>
          <Link href="sadsadasd">Вход</Link>
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

export default Main;
