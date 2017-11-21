import axios from 'axios';

export default async function fetchGithub(id) {
  const token = 'c7b691d36db7cf60021e4f5a20452e354a314f55';
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
