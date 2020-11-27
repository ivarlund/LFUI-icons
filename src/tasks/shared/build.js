// const gulp = require('gulp');
// const svgo = require('gulp-svgo');
// const rsp = require('remove-svg-properties').stream;
// var fs = require('fs');
// var es = require('event-stream');
// var path = require('path');
// var merge = require('merge-stream');

// function getFolders(dir) {
//   return fs.readdirSync(dir)
//     .filter(function(file) {
//       return fs.statSync(path.join(dir, file)).isDirectory();
//     });
// }
// gulp.task('scripts', function(done) {
//   var folders = getFolders(scriptsPath);
//   if (folders.length === 0) return done(); // nothing to do!
//   var tasks = folders.map(function(folder) {
//      return gulp.src(path.join(scriptsPath, folder, '/**/*.js'))
//        // concat into foldername.js
//        .pipe(concat(folder + '.js'))
//        // write to output
//        .pipe(gulp.dest(scriptsPath))
//        // minify
//        .pipe(uglify())
//        // rename to folder.min.js
//        .pipe(rename(folder + '.min.js'))
//        // write to output again
//        .pipe(gulp.dest(scriptsPath));
//   });

//   // process all remaining files in scriptsPath root into main.js and main.min.js files
//   var root = gulp.src(path.join(scriptsPath, '/*.js'))
//        .pipe(concat('main.js'))
//        .pipe(gulp.dest(scriptsPath))
//        .pipe(uglify())
//        .pipe(rename('main.min.js'))
//        .pipe(gulp.dest(scriptsPath));

//   return merge(tasks, root);
// });

// const svgBuild = svgPath => {

//   var folders = getFolders(svgPath);
//   console.log(folders)

//   var tasks = folders.map(function(folder) {
//     return gulp.src(path.join(svgPath, folder, '/**/*.svg'))
     
//       // write to output
      
//       .pipe(
//         svgo({
//           plugins: [
//             { removeTitle: true },
//             { convertColors: {currentColor: '#FF0000'}}
//           ],
//         })
//       )
//       .pipe(gulp.dest('dist/sprite/' + folder));
//       // // minify
//       // .pipe(uglify())
//       // // rename to folder.min.js
//       // .pipe(rename(folder + '.min.js'))
//       // // write to output again
//       // .pipe(gulp.dest(scriptsPath));
//  });
//  return merge(tasks);
//   // var streams = fs.readdirSync('src/svg')
//   // .map(function (theme) {
//   //   console.log(theme)
//   //   return gulp
      
//   //     .src(src + fs.mkdirSync(theme) + '/*.svg', {base: src + theme + '/icons.svg'})
//   //     .pipe(
//   //       svgo({
//   //         plugins: [
//   //           { removeTitle: true },
//   //           { convertColors: {currentColor: '#FF0000'}}
//   //         ],
//   //       })
//   //     )
//   // }); 
//   // return es
//   // .merge(streams)
//   // .pipe(gulp.dest('dist/sprite/'));
// };

// module.exports = svgBuild;

// //   var streams = fs.readdirSync('src/svg')
// //       .map(function (theme) {
// //           return gulp
// //               .src('src/svg/' + theme + '/*.svg', {base: 'src/' + theme + '/icons.svg'})
// //               .pipe(svgstore());
// //       });

// //   return es
// //       .merge(streams)
// //       .pipe(gulp.dest('dist/sprite/'));

// // });