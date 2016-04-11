gulp = require('gulp'),
sass = require('gulp-sass'),
nunjucksRender = require('gulp-nunjucks-render'),
ghPages = require('gulp-gh-pages');

// compile the main scss
gulp.task('sass', function () {
    return gulp.src('scss/rif.scss')
        .pipe(sass())
        .on('error', swallowError) 
        .pipe(gulp.dest('css')); 
});

//compile the html
gulp.task('nunjucks', function () {
    return gulp.src(['html/pages/*.html'])
        .pipe(nunjucksRender({
            path: ['html/pages/', 'html/templates/']
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('html')); 
});

// prevents gulp from bombing out
function swallowError() {
    this.emit('end');
}
 
gulp.task('watch', function () {

    //watch scss files 
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/global/*.scss', ['sass']);
    gulp.watch('scss/layouts/*.scss', ['sass']);
    gulp.watch('scss/modules/*.scss', ['sass']);

    //watch html files
    gulp.watch('html/pages/*.html', ['nunjucks']);
    gulp.watch('html/templates/*.html', ['nunjucks']);
    gulp.watch('html/templates/partials/*.html', ['nunjucks']);
});

gulp.task('deploy',['sass','nunjucks'], function(){
    return gulp.src('./html/**/*')
    .pipe(ghPages());
});

// default tasks
gulp.task('default', ['watch']);     