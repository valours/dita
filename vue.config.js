module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dita/dist/'
    : '/',
  indexPath: '../index.html',
};