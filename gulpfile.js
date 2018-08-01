const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');



/*-------Server---------*/
gulp.task('server', function() {
    browserSync.init({
        server: {
            port:9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*-------pug compile-------*/
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/templates/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
});

/*-------Style compile------*/
gulp.task('styles:complete', function () {
    return gulp.src('source/styles/main.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('build/css'));
});

 /*-----------js---------------*/
 gulp.task('js', function () {
     return gulp.src([
             'bower_components/jquery/dist/jquery.min.js',
             'bower_components/fotorama/fotorama.js',
             'bower_components/iCheck/icheck.min.js',
             'bower_components/social-likes/dist/social-likes.min.js',
             'source/js/aside_menu.js',
             'source/js/form.js',
             'source/js/main.js'
     ])
     .pipe(sourcemaps.init())
     .pipe(concat('main.min.js'))
     .pipe(uglify())
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('build/js'));
 });

/*------Sprites------------*/
gulp.task('sprite', function (cb) {
    const spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        imgPath:'../images/sprite.png',
        cssName: 'sprite.scss'
    }));
     spriteData.img.pipe(gulp.dest('build/images'));
     spriteData.css.pipe((gulp.dest('source/styles/global')));
    cb();
});

/*------Delete----*/
gulp.task('clean',function del(cb) {
    return rimraf('build',cb);
});

/*-----Copy fonts------*/
gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**/*')
        .pipe(gulp.dest('build/fonts'));

});
/*------Copy Images-------*/
gulp.task('copy:images',function () {
    return gulp.src('./source/images/**/*')
        .pipe(gulp.dest('build/images'));
});
/*--------Copy--------*/
gulp.task('copy',gulp.parallel('copy:fonts','copy:images'));

/*------Watchers------*/
gulp.task('watch',function () {
    gulp.watch('source/templates/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:complete'));
    gulp.watch('source/js/**/*.js', gulp.series('js'));
});

gulp.task('default',gulp.series('clean',
    gulp.parallel('templates:compile','styles:complete','js','sprite','copy'),
    gulp.parallel('watch','server')
)
);













