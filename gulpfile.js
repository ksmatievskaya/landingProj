
const gulp      = require('gulp'), 
	sass        = require('gulp-sass')(require('sass')), 
	browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function(){ 
	return gulp.src('./src/scss/**/*.scss') 
		.pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('./src/css/')) 
		.pipe(browserSync.reload({stream: true}));
});
 
gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: './src' 
		},
		notify: false 
	});
});
 
gulp.task('watch', function() {
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass')); 
    gulp.watch('./src/*.html', browserSync.reload); 
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));


