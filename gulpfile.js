const GulpClient = require('gulp');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');

// function initWatch () {
//     gulp.watch(['./*.njk'], (cb) => {
//         gulp.src('./index.njk')
//             .pipe(nunjucks.compile())
//             .pipe(gulp.dest('./zzz'));
//         // cb();
//     });
// }

gulp.task('sass', () => {
    return gulp.src('assets/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/styles'))
});