const GulpClient = require("gulp");
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function compileSass() {
  return gulp
    .src("assets/styles/**/*.scss")
    .pipe(sass())
    .pipe(rename({ extname: ".also.processed.css" })) // TODO – confirm that css is correct
    .pipe(gulp.dest("assets/styles"));
}

function complieNunjucks () {
  return gulp.src("./*.njk").pipe(nunjucks.compile()).pipe(gulp.dest("./"));
}

module.exports = {
  serve: gulp.series(compileSass, complieNunjucks, () => {
    function refresh(done) {
      browserSync.reload();
      done();
    }
    browserSync.init({
      server: "./",
    });
    gulp.watch(["./**/*.njk", "assets/styles/**/*.scss"], gulp.series(compileSass, complieNunjucks, refresh));
  }),
};
