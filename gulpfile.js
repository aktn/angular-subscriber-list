var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var del 		= require('del');
var vinylPaths  = require('vinyl-paths');
var typescript 	= require('gulp-typescript');

/**
 * Defining destination path
 */
gulp.task('copyIndex', function()
{
	return gulp.src('./index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});

/**
 * Serve files from build dir
 */
gulp.task('browserSync', function()
{
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

/**
 *Instructing browseSync to montior all source files changes 
 */
gulp.task('watchFiles', function()
{
	gulp.watch('./index.html', ['copyIndex']);
	gulp.watch('app/**/*.ts', ['typescriptIt']);
});

/**
 * Compile typescript files from app dir into build folder as .js
 */
gulp.task('typescriptIt', function()
{
	return gulp.src('app/**/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

/**
 * Removing build directory
 */
gulp.task('clean', function()
{
	return gulp.src('./build', {read: false})
			.pipe(vinylPaths(del));
});


gulp.task('default', ['clean', 'copyIndex', 'typescriptIt', 'browserSync', 'watchFiles']);