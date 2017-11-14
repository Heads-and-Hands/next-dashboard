import { PureComponent } from 'react';
import axios from 'axios';

import { Title, Projects, Head, SignIn, Project } from '../pages.styles/index.style';

export default class Main extends PureComponent {
  static async getInitialProps() {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3000/api/getProjects',
      headers: {
        Accept: 'application/json; charset=utf-8',
      },
    });
    const projects = await res.data;
    return { projects };
  }

  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  showAdmin = () => {
    this.setState({ auth: true });
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        <Head>
          <Title>Heads and Hands Dashboard</Title>
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
