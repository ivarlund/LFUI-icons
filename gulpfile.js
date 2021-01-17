const gulp = require('gulp');
const clean = require('./src/tasks/clean');
// const buildData = require('./tasks/build-data');
const buildSprite = require('./src/tasks/build-sprite');
const buildSpriteSpecial = require('./src/tasks/build-sprite-special');
const buildSvgDist = require('./src/tasks/build-svg-dist');

/* Tasks */
gulp.task('clean', clean); 
gulp.task('build:sprite', buildSprite);
gulp.task('build:spriteSpecial', buildSpriteSpecial);
gulp.task('build:svgDist', buildSvgDist);
gulp.task('build', ['build:sprite', 'build:spriteSpecial', 'build:svgDist']);
