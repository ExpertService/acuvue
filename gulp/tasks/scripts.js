module.exports = function() {
    $.gulp.task('libsJS:dev', function() {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                            'node_modules/jquery-validation/dist/jquery.validate.js',
                            'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                            'dev/js/libs/jquery-scrollbar/jquery.scrollbar.min.js',
                            'dev/js/libs/customInputNumberSpin.js',
                            'node_modules/slick-carousel/slick/slick.min.js',
                            'dev/js/libs/jquery.maskedinput.js',
                            'dev/js/libs/passwordfield.js',
                            'dev/js/libs/showpassword.js',
                            'dev/js/libs/custom_checkbox.js',
                            'dev/js/libs/customTabs.js',
                            'dev/js/libs/jquery.quickWizard.js'
                            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', function() {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                            'node_modules/jquery-validation/dist/jquery.validate.js',
                            'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                            'dev/js/libs/jquery-scrollbar/jquery.scrollbar.min.js',
                            'dev/js/libs/customInputNumberSpin.js',
                            'node_modules/slick-carousel/slick/slick.min.js',
                            'dev/js/libs/jquery.maskedinput.js',
                            'dev/js/libs/passwordfield.js',
                            'dev/js/libs/showpassword.js',
                            'dev/js/libs/custom_checkbox.js',
                            'dev/js/libs/customTabs.js',
                            'dev/js/libs/jquery.quickWizard.js'
                            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/js/'));
    });

    $.gulp.task('js:copy', function() {
        return $.gulp.src(['./dev/js/*.js',
            '!./dev/js/libs.min.js'])
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
