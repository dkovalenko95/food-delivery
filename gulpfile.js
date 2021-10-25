const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const browsersync = require("browser-sync");

const dist = "./dist";
// const dist = "../../../../Progs/OpenServer/domains/test";

function copyhtml() {
  return gulp.src("./src/index.html")
      .pipe(gulp.dest(dist))
      .pipe(browsersync.stream());
}

function copyphp() {
  return gulp.src("./src/*.php")
      .pipe(gulp.dest(dist))
      .pipe(browsersync.stream());
}

function buildJS() {
  return gulp.src("./src/js/main.js")
      .pipe(webpack({
          mode: 'development',
          output: {
              filename: 'script.js'
          },
          watch: false,
          devtool: "source-map",
          module: {
              rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [['@babel/preset-env', {
                          debug: true,
                          corejs: 3,
                          useBuiltIns: "usage"
                      }]]
                    }
                  }
                }
              ]
            }
      }))
      .pipe(gulp.dest(dist + '/js'))
      .pipe(browsersync.stream());
}

function buildSass() {
  return gulp.src("./src/scss/**/*.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dist + '/css'))
      .pipe(browsersync.stream());
}

function copyAssets() {
  return [
      gulp.src("./src/icons/**/*.*")
          .pipe(gulp.dest(dist + "/icons")),
          
      gulp.src("./src/img/**/*.*")
          .pipe(gulp.dest(dist + "/img"))
          .pipe(browsersync.stream())
  ];
}

function watch() {
  return [
      browsersync.init({
      server: "./dist/",
      // server: "../../../../Progs/OpenServer/domains/test",
      port: 4000,
      notify: true
      }),

      gulp.watch("./src/index.html", gulp.parallel(copyhtml)),
      gulp.watch("./src/icons/**/*.*", gulp.parallel(copyAssets)),
      gulp.watch("./src/img/**/*.*", gulp.parallel(copyAssets)),
      gulp.watch("./src/scss/**/*.scss", gulp.parallel(buildSass)),
      gulp.watch("./src/js/**/*.js", gulp.parallel(buildJS)),
      gulp.watch("./src/*.php", gulp.parallel(copyphp)),
    ];
} 

const build = gulp.series(
  buildJS,
  gulp.parallel(copyhtml, copyAssets, buildSass, buildJS, copyphp)
);

function prod() {
  return [
    gulp.src("./src/index.html")
        .pipe(gulp.dest(dist)),
    gulp.src("./src/*.php")
        .pipe(gulp.dest(dist)),
    gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img")),
    gulp.src("./src/icons/**/*.*")
        .pipe(gulp.dest(dist + "/icons")),

    gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env', {
                            debug: false,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest(dist + '/js')),

    gulp.src("./src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist + '/css'))
  ];  
}

const dev = gulp.series(
  gulp.parallel(watch, build),
  prod
);

exports.default = dev;