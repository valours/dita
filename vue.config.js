module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  indexPath: '../index.html',
};