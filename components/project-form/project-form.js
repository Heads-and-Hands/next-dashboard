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
} from './project-form.style';

class ProjectForm extends Component {
  changeValue = (value, target) => {
    this.props.onChangeField(value, target);
  }

  submit = () => {
    this.props.onSubmit();
  }

  render() {
    const {
      name, platform, hockeyAppId, redmineId, github, teamCityId,
    } = this.props;
    return (
      <Wrapper className={this.props.className}>
        <Name label="Проект" target="name" vlaue={name} onChange={this.changeValue} />
        <Platform target="platform" label="Платформа" vlaue={platform} onChange={this.changeValue} />
        <HockeyApp target="hockeyAppId" label="HockeyAppId" vlaue={hockeyAppId} onChange={this.changeValue} />
        <TeamCity target="teamCityId" label="TeamCityId" vlaue={teamCityId} onChange={this.changeValue} />
        <Redmine target="redmineId" label="RedmineId" vlaue={redmineId} onChange={this.changeValue} />
        <Github target="githubId" label="GithubId" vlaue={github} onChange={this.changeValue} />
        <Submit text="Добавить" click={this.submit} />
      </Wrapper>
    );
  }
}

export default ProjectForm;

