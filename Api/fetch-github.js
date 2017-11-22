import axios from 'axios';

export default async function fetchGithub(id) {
  const token = '11f5672ec4a4299c330f7ac03180f7a180bcf27f';
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
