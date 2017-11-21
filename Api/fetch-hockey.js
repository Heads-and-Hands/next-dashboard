import axios from 'axios';

export default async function fetchHockey(id) {
  if (!id) return false;

  const hockeyAppToken = '2feeaec6457e42ddac54c5b6dc27a3bc';
  const url = `https://rink.hockeyapp.net/api/2/apps/${id}/app_versions`;
  const headers = { 'X-HockeyAppToken': hockeyAppToken };
  try {
    const { data } = await axios({
      method: 'get',
      url,
      headers,
    });
    return data.app_versions[0].created_at;
  } catch (e) {
    return false;
  }
}
