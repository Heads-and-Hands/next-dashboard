import { fetchTeamCity, fetchGithub, fetchHockey, fetchRedmine } from './index';

export default async function fetchProjectData(project) {
  const [hockey, redmine, teamcity, github] = await Promise.all([
    fetchHockey(project.hockeyAppId),
    fetchRedmine(project.redmineId),
    fetchTeamCity(project),
    fetchGithub(project.githubId),
  ]);
  return {
    slack: redmine.slack,
    PM: redmine.PM,
    QA: redmine.QA,
    teamcity,
    hockey,
    github,
  };
}
