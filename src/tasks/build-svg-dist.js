const gulp = require('gulp')
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

const folders = getFolders(svgPath)
const buildSvgDist = () => {
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
      .pipe(gulp.dest('dist/svg/' + folder))
  })
  return merge(tasks)
}

module.exports = buildSvgDist
