var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function(){
	console.log('Hello, world.');
});

gulp.task('sass', function(){
  return gulp.src('./scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){	
	gulp.watch('./scss/**/*.scss', ['sass']); 
});