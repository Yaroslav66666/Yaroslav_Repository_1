const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const ttf2woff2 = require("gulp-ttf2woff2");

// Функція компіляції scss файлів та видалення не використаних css класів
function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(purgecss({ content: ["*.html", "html/**/*.html"] }))
    .pipe(dest("styles"));
}

function watchTask() {
  // watch( [,перелік файлів для відслідковування],  function)
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

function toWoff2() {
  return src(["fonts/*.ttf"]).pipe(ttf2woff2()).pipe(dest("fonts/"));
}

exports.default = series(toWoff2, buildStyles, watchTask);
