import { PureComponent } from 'react';

import { Wrapper, Input, Label } from './style';

export default class InputComponent extends PureComponent {
  static defaultProps = {
    value: '',
    type: 'text',
    target: '',
  }

  state = {
    labelActive: false,
    value: this.props.value,
  };
  

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState(() => ({ value: nextProps.value, labelActive: false }));
    }
  }

  changeValue = (e) => {
    this.setState(
      { value: e.target.value },
      () => this.props.onChange(this.state.value, this.props.target),
    );
  }

  focusOut = () => {
    this.setState({
      labelActive: !!this.state.value.length,
    });
  }

  focus = () => {
    this.setState({
      labelActive: true,
    });
  }

  render() {
    return (
      <div>
        <Wrapper 
          active={this.state.labelActive || this.state.value} 
          className={this.props.className}
        >
          <Input
            type={this.props.type}
            onBlur={this.focusOut}
            onFocus={this.focus}
            onChange={this.changeValue}
            value={this.state.value}
          />
          <Label active={this.state.labelActive || this.state.value}>
            {this.props.label}
          </Label>
        </Wrapper>
      </div>
    );
  }
}
