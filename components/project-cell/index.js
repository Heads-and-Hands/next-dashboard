import React, { PureComponent } from 'react';

import { Line, Name, Title, Project } from './style';
import fetchProject from './../../Api/fetch-project';

export default class ProjectCell extends PureComponent {
   state = {
     hockey: 'getting data',
     slack: 'getting data',
     github: 'getting data',
     PM: 'getting data',
     QA: 'getting data',
     teamcity: 'getting data',
   };


   async componentDidMount() {
     this.updateInterval = setInterval(() => this.updateProject(), 160000);
     this.updateProject();
   }

   componentWillUnmount() {
     clearInterval(this.updateInterval);
   }

   async updateProject() {
     const project = this.props.data;
     const data = await fetchProject(project);
     this.setState(data);
   }

  // component
   render() {
     const { name, platform } = this.props.data;
     const {
       hockey,
       github,
       teamcity,
       slack,
       PM,
       QA,
     } = this.state;

     return (
       <Project 
         platform={platform} 
         className={this.props.className}
       >
         <Title>
           <b>Проект:</b><Name>{ name } - { platform }</Name>
         </Title>
         <Line error={!hockey}>
           <b>HockeyApp:</b>{ hockey || 'hasnt Id' }
         </Line>
         <Line error={!teamcity}>
           <b>TeamCity:</b> { teamcity || 'Error' }
         </Line>
         <Line error={!PM}>
           <b>Менеджер:</b> { PM || 'Error' }
         </Line>
         <Line error={!QA}>
           <b>Тестировщик:</b> { QA || 'Error' }
         </Line>
         <Line error={!slack}>
           <b>Slack chanel:</b> { slack || 'Error' }
         </Line>
         <Line error={!github}>
           <b>Github: </b>{ github || 'Error' }
         </Line>
       </Project>
     );
   }
}
