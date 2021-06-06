const gulp = require('gulp');
const clean = require('./src/tasks/clean');
const buildSprite = require('./src/tasks/build-sprite');
const buildSpriteSpecial = require('./src/tasks/build-sprite-special');

/* Tasks */
gulp.task('clean', clean);
gulp.task('build:sprite', buildSprite);
gulp.task('build:spriteSpecial', buildSpriteSpecial);
gulp.task('build', ['build:sprite', 'build:spriteSpecial']);
