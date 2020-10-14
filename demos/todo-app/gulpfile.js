var gulp         = require('gulp'),
		browserSync  = require('browser-sync');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

// Custom Styles
gulp.task('styles', function() {
	return gulp.src('./style.css')
	.pipe(browserSync.reload({ stream: true }))
});

// Scripts & JS Libraries
gulp.task('scripts', function() {
	return gulp.src([
		'./script.js', // Custom scripts. Always at the end
		])
	.pipe(browserSync.reload({ stream: true }))
});

// Code & Reload
gulp.task('code', function() {
	return gulp.src('./*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
	gulp.watch('./style.css', gulp.parallel('styles'));
	gulp.watch('./script.js', gulp.parallel('scripts'));
	gulp.watch('./*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));