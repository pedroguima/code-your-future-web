const gulp = require('gulp');
const hb = require('gulp-hb');
const handlebarsLayouts = require('handlebars-layouts');
const sass = require('gulp-sass');
const sequence = require('run-sequence');

const paths = {};
paths.src = {};
paths.src.root = 'src';
paths.src.stylesheets = `${paths.src.root}/stylesheets`;
paths.src.html = `${paths.src.root}/html/**/*.html`;
paths.src.htmlPartials = `${paths.src.root}/html/partials/**/*.hbs`;
paths.src.img = `${paths.src.root}/img/**/*`;
paths.src.js = `${paths.src.root}/js/**/*`;
paths.src.fonts = `${paths.src.root}/fonts/**/*`;
paths.src.resources = `${paths.src.root}/resources/**/*`;

paths.build = {};
paths.build.root = 'build';
paths.build.stylesheets = `${paths.build.root}/stylesheets/`;
paths.build.img = `${paths.build.root}/img/`;
paths.build.js = `${paths.build.root}/js/`
paths.build.fonts = `${paths.build.root}/fonts/`;


gulp.task('handlebars', function () {
  return gulp
	.src(paths.src.html)
	  .pipe(
		hb({
		  partials: paths.src.htmlPartials
		}).helpers(handlebarsLayouts)
	  )
	.pipe(gulp.dest(paths.build.root));
});


gulp.task('stylesheets', function () {
  return gulp.src(`${paths.src.stylesheets}/index.scss`)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest(paths.build.stylesheets));
});


gulp.task('img', function () {
  return gulp.src(paths.src.img)
	  .pipe(gulp.dest(paths.build.img));
});

gulp.task('fonts', function () {
  return gulp.src(paths.src.fonts)
	  .pipe(gulp.dest(paths.build.fonts));
});


gulp.task('js', function () {
  return gulp.src([paths.src.js, 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
	  .pipe(gulp.dest(paths.build.js));
});

gulp.task('resources', function () {
  return gulp.src([paths.src.resources])
	  .pipe(gulp.dest(paths.build.root));
});


gulp.task('rebuild', function(callback) {
  sequence('handlebars', 'stylesheets', 'img', 'fonts', 'js', 'resources', callback);
});


gulp.task('watch', function() {
  gulp.watch([`${paths.src.root}/**/*`], ['rebuild']);
});
