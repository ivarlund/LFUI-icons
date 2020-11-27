const gulp = require('gulp');
const svgo = require('gulp-svgo');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
const svgPath = 'src/svg';

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}
// SVG Config

var folders = getFolders(svgPath);
const  buildSvgDist = () => {
  var tasks = folders.map(function(folder) {
    return gulp.src(path.join(svgPath, folder, '/**/*.svg'))
      .pipe(
        svgo({
          plugins: [
            { removeTitle: true },
            { convertColors: {currentColor: '#FF0000'}}
          ],
        })
      )
      .pipe(gulp.dest('dist/svg/' + folder));

  });
 return merge(tasks);  
};

module.exports = buildSvgDist;