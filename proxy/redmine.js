module.exports = {
  target: 'http://pm.handh.ru',
  changeOrigin: true,
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Redmine-API-Key': '657933577bb209070a4af0ac8227172604f07a1b',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  pathRewrite: {
    '/redmine': '',
  },
};
