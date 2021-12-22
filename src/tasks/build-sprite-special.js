const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const svgo = require('gulp-svgo')
const path = require('path')

const config = {
  shape: {
    id: {
      generator: function (name) {
        return path.basename(name, '.svg')
      }
    }
  },

  mode: {

    symbol: {
      // Activate the defs mode
      dest: '',

      bust: false, // Cache busting
      example: false, // Build a page
      sprite: 'icons.svg'
    }
  }
}

const buildSpriteSpecial = () => {
  return gulp.src('**/*.svg', { cwd: 'src/svg/special' })
    .pipe(
      svgo({
        plugins: [
          { removeTitle: true },
          { convertColors: { currentColor: '#FF0000' } }
        ]
      })
    )
    .pipe(svgSprite(config))
    .pipe(gulp.dest('dist/sprite/special'))
}
module.exports = buildSpriteSpecial
