var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nunjucksRender = require('gulp-nunjucks-render'),
    ghPages = require('gulp-gh-pages'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    server = require('gulp-server-livereload');

var distFolder = '../dist'

// compile the main scss
gulp.task('sass', function () {
    return gulp.src('scss/rif.scss')
        .pipe(sass())
        .pipe(gulp.dest(distFolder + '/css'));
});

//compile the html
gulp.task('nunjucks', function () {
    return gulp.src(['html/pages/*.html'])
        .pipe(nunjucksRender({
            path: ['html/pages/', 'html/templates/']
        }))

        .pipe(replace(/\.\.\//g,''))
        .pipe(rename(function(file){
            var result = file;
            if(file.basename === 'home'){
                file.basename = 'index';
            }

            return file;
        }))
        .pipe(gulp.dest(distFolder));
});

gulp.task('copy', function() {
    return gulp.src('{images,scripts,libs}/**')
        .pipe(gulp.dest(distFolder))
})

gulp.task('clean', function(){
    return gulp.src(distFolder, {read: false})
        .pipe(clean({force: true}));
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

    // images etc
    gulp.watch('{images,scripts,libs}/**', ['copy']);
});

gulp.task('doDeploy', function(){

    return gulp.src(distFolder + '/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', function(){

    return runSequence('build', 'doDeploy');
});

gulp.task('server', function(){
  gulp.src(distFolder)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
// default tasks
gulp.task('default', function(){
    return runSequence('build', ['server','watch']);
});

gulp.task('build', function(){
    return runSequence('clean', ['sass','nunjucks','copy']);
});
