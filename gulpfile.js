const { task, series } = require('gulp')
const clean = require('./src/tasks/clean')
const buildSprite = require('./src/tasks/build-sprite')
const buildSpriteSpecial = require('./src/tasks/build-sprite-special')
const buildSvg = require('./src/tasks/build-svg-dist')

/* Tasks */
task('clean', clean)
task('build:sprite', buildSprite)
task('build:spriteSpecial', buildSpriteSpecial)
task('build:svg', buildSvg)
task('build', series(buildSprite, buildSpriteSpecial, buildSvg))
