const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const svgo = require('gulp-svgo')
const fs = require('fs')
const path = require('path')
const merge = require('merge-stream')
const svgPath = 'src/svg'

function getFolders (dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory()
    })
}
// SVG Config
const config = {
  shape: {
    id: {
      generator: '%s'
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

const folders = getFolders(svgPath)

const buildSprite = () => {
  const tasks = folders.map(function (folder) {
    return gulp.src(path.join(svgPath, folder, '/**/*.svg'))
      .pipe(
        svgo({
          plugins: [
            { removeTitle: true },
            { convertColors: { currentColor: '#FF0000' } }
          ]
        })
      )
      .pipe(svgSprite(config))
      .pipe(gulp.dest('dist/sprite/' + folder))
  })
  return merge(tasks)
}

module.exports = buildSprite
