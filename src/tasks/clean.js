const gulp = require('gulp');
const del = require('del');

// Clean folders and files
const clean = () => {
  return del([
    'dist/react/*',
    'dist/sprite/*'
  ]);
};

module.exports = clean;