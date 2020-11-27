const gulp = require('gulp');
const clean = require('./src/tasks/clean');
// const buildData = require('./tasks/build-data');
const buildSprite = require('./src/tasks/build-sprite');
const buildSvgDist = require('./src/tasks/build-svg-dist');

/* Tasks */
gulp.task('clean', clean); 
gulp.task('build:sprite', buildSprite);

gulp.task('build:svgDist', buildSvgDist);
gulp.task('build', ['build:sprite', 'build:svgDist']);
