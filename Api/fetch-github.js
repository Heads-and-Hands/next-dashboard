import axios from 'axios';

export default async function fetchGithub(id) {
  const token = '1fa312e3b3d20489bc0e9df86d9c3dba5a85a667';
  const url = `https://api.github.com/repos/Heads-and-Hands/${id}?access_token=${token}`;
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json; charset=utf-8',
  };
  try {
    const { data } = await axios({
      method: 'get',
      url,
      headers,
    });
    return data.pushed_at;
  } catch (e) {
    return false;
  }
}
