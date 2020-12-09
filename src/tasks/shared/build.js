const gulp = require('gulp');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');


const svgBuild = src => {
  var streams = fs.readdirSync('src/svg')
  return gulp
    .src(src)
    
    .pipe(
      svgo({
        plugins: [
          { removeTitle: true },
          { convertColors: {currentColor: '#FF0000'}}
        ],
      })
    )
    
};

module.exports = svgBuild;

//   var streams = fs.readdirSync('src/svg')
//       .map(function (theme) {
//           return gulp
//               .src('src/svg/' + theme + '/*.svg', {base: 'src/' + theme + '/icons.svg'})
//               .pipe(svgstore());
//       });

//   return es
//       .merge(streams)
//       .pipe(gulp.dest('dist/sprite/'));

// });