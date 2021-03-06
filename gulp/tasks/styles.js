module.exports = function () {
    $.gulp.task('styles:build', function() {
        return $.gulp.src('./dev/sass/main.sass')
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            //.pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
    });

    $.gulp.task('styles:dev', function() {
        return $.gulp.src('./dev/sass/main.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('libsstyles:copy', function() {
        return $.gulp.src(['node_modules/normalize.css/normalize.css',
                            'node_modules/slick-carousel/slick/slick.css',
                            'node_modules/slick-carousel/slick/slick-theme.css',
                            'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
                            'dev/js/libs/jquery-scrollbar/jquery.scrollbar.css'
                            ])
            .pipe($.gp.concat('libs.min.css'))
            .pipe($.gulp.dest('./build/css/'));
    });
};
