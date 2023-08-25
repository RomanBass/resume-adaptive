const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const del = require("del");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", () => sync.reload());
}



// Copy Files

const copy = () => {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/js/**",
      "source/img/**",
      "source/records/**",
      "source/*.html"
  ], {
      base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

//Clear Folder

const clean = () => {
    return del("build");
};

exports.clean = clean;

const build = gulp.series(
  clean,
  copy,
  styles
  // images,
  // createWebp,
  // sprite,
  // htmlMinify
);

exports.build = build;

exports.default = gulp.series(
  build, server, watcher
);
