import axios from 'axios';

export default async function fetchGithub(id) {
  const token = 'f9e7ef8ece587/366908282/e834f171/f8f8478dfc';
  const url = `https://api.github.com/repos/Heads-and-Hands/${id}?access_token=${token.replace(/[/]/g, '')}`;
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
