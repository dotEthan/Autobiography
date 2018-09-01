const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
	return gulp
		.src(['scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: './'
	});

	gulp.watch(['scss/*.scss'], ['sass']);
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
