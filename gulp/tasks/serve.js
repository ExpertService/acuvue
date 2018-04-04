module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build',
            host: $.devip(),
            notify: false,
            ui: false
        });
    });
};