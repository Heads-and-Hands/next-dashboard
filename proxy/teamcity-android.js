module.exports = {
  target: 'http://build.handh.ru:8090',
  changeOrigin: true,
  headers: {
    Accept: 'application/json; charset=utf-8\ ',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Basic ZGV2ZWxvcGVyOmRldjE4NjE=',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  pathRewrite: {
    '/teamcity/android': '/',
  },
};
