# day3-gulp-sass


This gulp task compiles Sass into CSS using middleware called gulp-sass.
```
gulp.task('sass', function(){
  return gulp.src('./scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

```