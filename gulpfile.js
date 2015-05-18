var
	gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('uglify', function () {
	gulp.src(['tmpl.js'])
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['uglify']);
