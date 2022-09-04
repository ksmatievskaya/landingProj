
const gulp      = require('gulp'), 
	sass        = require('gulp-sass')(require('sass')), 
	browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function(){ 
	return gulp.src('./public/static/scss/**/*.scss') 
		.pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('./public/static/css/')) 
		.pipe(browserSync.reload({stream: true}));
});
 
gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: './public' 
		},
		notify: false 
	});
});
 
gulp.task('watch', function() {
	gulp.watch('./public/static/scss/**/*.scss', gulp.parallel('sass')); 
    gulp.watch('./public/static/*.html', browserSync.reload); 
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));


