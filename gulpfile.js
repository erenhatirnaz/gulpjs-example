var gulp = require('gulp');

var jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	coffee = require('gulp-coffee');

gulp.task('jade', function(){
	gulp.src('src/*.jade')
		.pipe(jade())
		.pipe(gulp.dest("dist/"));
});

gulp.task('sass', function(){
	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest("dist/css"));
});

gulp.task('coffee', function(){
	gulp.src('src/coffee/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest("dist/js"));
});

gulp.task('default', ['jade', 'sass', 'coffee']);