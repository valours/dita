module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dita/'
    : '/',
  indexPath: '../index.html',
};