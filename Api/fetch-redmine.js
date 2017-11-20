import axios from 'axios';

const redmineApiToken = '657933577bb209070a4af0ac8227172604f07a1b';
const headers = {
  Accept: 'application/json; charset=utf-8',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Redmine-API-Key': redmineApiToken,
  'Access-Control-Allow-Origin': '*',
};

export async function fetchRedmineUser(id) {
  const url = `redmine/users/${id}.json`;
  try {
    const { data } = await axios({
      method: 'get',
      url,
      headers,
    });
    return `${data.user.firstname} ${data.user.lastname}`;
  } catch (e) {
    return false;
  }
}

export default async function fetchRedmine(id) {
  if (!id) return false;
  const url = `redmine/projects/${id}.json`;
  const { data } = await axios({
    method: 'get',
    url,
    headers,
  });

  const slack = data.project.custom_fields[1].value;
  try {
    const [PM, QA] = await Promise.all([
      fetchRedmineUser(data.project.custom_fields[2].value),
      fetchRedmineUser(data.project.custom_fields[3].value),
    ]);
    return {
      slack,
      PM,
      QA,
    };  
  } catch (e) {
    return {
      slack,
    };
  }
}
