var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll server']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: 'public/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);
