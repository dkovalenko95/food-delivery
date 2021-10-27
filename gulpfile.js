const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const browsersync = require("browser-sync");

const { series, parallel } = require("gulp");

const dist = "./dist";
// const dist = "../../../../Progs/OpenServer/domains/Food_withGulp4";

function copyhtml() {
  return gulp.src("./src/index.html")
      .pipe(gulp.dest(dist))
      .pipe(browsersync.stream());
}
exports.copyhtml = copyhtml;

function copyphp() {
  return gulp.src("./src/*.php")
      .pipe(gulp.dest(dist))
      .pipe(browsersync.stream());
}
exports.copyphp = copyphp;

function buildJS() {
  return gulp.src("./src/js/main.js")
      .pipe(webpack({
          mode: 'production',
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
exports.buildJS = buildJS;

function buildSass() {
  return gulp.src("./src/scss/**/*.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dist + '/css'))
      .pipe(browsersync.stream());
}
exports.buildSass = buildSass;

function copyAssets() {
  return [
      gulp.src("./src/icons/**/*.*")
          .pipe(gulp.dest(dist + "/icons")),
          
      gulp.src("./src/img/**/*.*")
          .pipe(gulp.dest(dist + "/img"))
          .pipe(browsersync.stream())
  ];
}
exports.copyAssets = copyAssets;

function watch() {
  return [
      browsersync.init({
      server: "./dist/",
      // server: "../../../../Progs/OpenServer/domains/Food_withGulp4",
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
exports.watch = watch;

// function prod() {
//   return [
//     gulp.src("./src/index.html")
//         .pipe(gulp.dest(dist)),
//     gulp.src("./src/*.php")
//         .pipe(gulp.dest(dist)),
//     gulp.src("./src/img/**/*.*")
//         .pipe(gulp.dest(dist + "/img")),
//     gulp.src("./src/icons/**/*.*")
//         .pipe(gulp.dest(dist + "/icons")),
//     gulp.src("./src/scss/style.scss")
//         .pipe(sass().on('error', sass.logError))
//         .pipe(postcss([autoprefixer()]))
//         .pipe(cleanCSS())
//         .pipe(gulp.dest(dist + '/css')),

//     gulp.src("./src/js/main.js")
//         .pipe(webpack({
//             mode: 'production',
//             output: {
//                 filename: 'bundle.js'
//             },
//             module: {
//                 rules: [
//                   {
//                     test: /\.m?js$/,
//                     exclude: /(node_modules|bower_components)/,
//                     use: {
//                       loader: 'babel-loader',
//                       options: {
//                         presets: [['@babel/preset-env', {
//                             debug: false,
//                             corejs: 3,
//                             useBuiltIns: "usage"
//                         }]]
//                       }
//                     }
//                   }
//                 ]
//               }
//         }))
//         .pipe(gulp.dest(dist + '/js'))
//   ];  
// }
// exports.prod = prod;

// const production = prod;
const dev = parallel(watch, copyhtml, copyphp, copyAssets, buildSass, buildJS);

exports.default = dev;