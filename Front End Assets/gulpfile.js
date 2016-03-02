var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

// compile the main scss
gulp.task('sass', function () {
    return gulp.src('scss/rif.scss')
        .pipe(sass())
        .pipe(gulp.dest('css')); 
});

//compile the html
gulp.task('nunjucks', function () {
    return gulp.src(['html/pages/*.html', 'html/modules/*.html'])  
    .pipe(nunjucksRender({
        path: ['html/pages/', 'html/templates/', 'html/modules/'] 
    }))
    .pipe(gulp.dest('html'));
});

gulp.task('watch', function () {

    //watch scss files
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/global/*.scss', ['sass']);
    gulp.watch('scss/layouts/*.scss', ['sass']);
    gulp.watch('scss/modules/*.scss', ['sass']);

    //watch html files
    gulp.watch('html/modules/*.html', ['nunjucks']);
    gulp.watch('html/pages/*.html', ['nunjucks']);
    gulp.watch('html/partials/*.html', ['nunjucks']);
    gulp.watch('html/templates/*.html', ['nunjucks']); 
});

// default tasks
gulp.task('default', ['watch']);    