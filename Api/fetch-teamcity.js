import axios from 'axios';

export default async function fetchTeamCity(project) {
  if (!project.teamCityId) return false;

  const headers = {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Basic ${window.btoa('developer:dev1861')}`, 
  };
  let serverURL = '';
  if (project.platform === 'iOS') {
    serverURL = 'teamcity/ios';
  } else {
    serverURL = 'teamcity/android';
  }

  const url = `${serverURL}/httpAuth/app/rest/latest/builds/?locator=buildType(id:${project.teamCityId})&fields=build(status,finishDate)`;

  try {
    const { data } = await axios({
      method: 'get',
      url,
      headers,
    });

    if (!data) return false;
    const { status } = data.build[0];
    if (status !== 'SUCCESS') return false;
    return data.build[0].finishDate;
  } catch (e) {
    return false;
  }
}
