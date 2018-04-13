# Gulp & Sass - Day 3 of 100 #100DaysOfCode
An application that uses Gulp to compile Sass. 

## Live Link

## Technologies Used
- Gulp.js
- gulp-sass - npm 
- Sass (SCSS)


This gulp task compiles Sass into CSS using middleware called gulp-sass.
```
gulp.task('sass', function(){
  return gulp.src('./scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

```