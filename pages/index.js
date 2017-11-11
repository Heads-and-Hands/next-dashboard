import { PureComponent } from 'react';

import Button from '../components/button';

export default class Main extends PureComponent {
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
    const { auth } = this.state;
    return (
      <div>
        <Button text="helo" />
        <div>sdaasds { auth }</div>
      </div>

    );
  }
}
