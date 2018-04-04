global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    devip: require('dev-ip')
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dev', 'libsstyles:copy', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'libsstyles:copy', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));