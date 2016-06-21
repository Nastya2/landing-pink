/* --------- plugins --------- */

var
	gulp = require('gulp'),
	compass = require('gulp-compass'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber');
    
	
  
/*----------------sass-compass------------------*/
gulp.task('compass', function() {
  gulp.src('app/sass/main.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/css',
      sass: 'app/sass'
    }))
    .pipe(gulp.dest('app/css'));

});
/*----------------jade------------------*/
gulp.task('jade', function() {
    return gulp.src('app/jade/index.jade')
     .pipe(plumber())
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('app'))
});
 
/*----------------browser-sync------------------*/
gulp.task('browser-sync', function () {
    browserSync.init({
        server:'app'
    });

browserSync.watch('app/**/*.*').on('change',browserSync.reload);
});
/*----------------watch------------------*/
gulp.task('watch',['compass','jade','browser-sync'],function(){
    gulp.watch('app/sass/**/*.scss',['compass']);
    gulp.watch('app/jade/**/*.jade',['jade']);
    gulp.watch('app/*.html');
    gulp.watch('app/js/**/*.js');
});
    