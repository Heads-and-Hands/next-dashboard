import React, { PureComponent } from 'react';

import { Wrapper, Input, Label } from './style';

class InputComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      labelActive: false,
      value: this.props.value,
    };

    this.focusOut = this.focusOut.bind(this);
    this.focus = this.focus.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState(
      { value: e.target.value },
      () => this.props.onChange(this.state.value, this.props.target),
    );
  }

  focusOut() {
    this.setState({
      labelActive: !!this.state.value.length,
    });
  }

  focus() {
    this.setState({
      labelActive: true,
    });
  }

  render() {
    return (
      <div>
        <Wrapper active={this.state.labelActive} className={this.props.className}>
          <Input
            type={this.props.type}
            onBlur={this.focusOut}
            onFocus={this.focus}
            onChange={this.changeValue}
          />
          <Label active={this.state.labelActive}>
            {this.props.label}
          </Label>
        </Wrapper>
      </div>
    );
  }
}

InputComponent.defaultProps = {
  value: '',
  type: 'text',
  target: '',
};
