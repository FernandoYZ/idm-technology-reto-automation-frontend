module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    format: ['progress-bar', 'html:reportes/reporte.html'],
  },
};
