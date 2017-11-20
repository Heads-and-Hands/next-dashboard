import React, { Component } from 'react';

import {
  Wrapper,
  Name,
  Platform,
  HockeyApp,
  TeamCity,
  Redmine,
  Github,
  Submit,
} from './style';

class ProjectForm extends Component {
  changeValue = (value, target) => {
    this.props.onChangeField(value, target);
  }

  submit = () => {
    this.props.onSubmit();
  }

  render() {
    const {
      name, platform,  
      hockeyAppId, redmineId,
      githubId, teamCityId,
      text,
    } = this.props;
    return (
      <Wrapper className={this.props.className}>
        <Name label="Проект" target="name" value={name} onChange={this.changeValue} />
        <Platform target="platform" label="Платформа" value={platform} onChange={this.changeValue} />
        <HockeyApp target="hockeyAppId" label="HockeyAppId" value={hockeyAppId} onChange={this.changeValue} />
        <TeamCity target="teamCityId" label="TeamCityId" value={teamCityId} onChange={this.changeValue} />
        <Redmine target="redmineId" label="RedmineId" value={redmineId} onChange={this.changeValue} />
        <Github target="githubId" label="GithubId" value={githubId} onChange={this.changeValue} />
        <Submit click={this.submit}>{text}</Submit>
      </Wrapper>
    );
  }
}

export default ProjectForm;

