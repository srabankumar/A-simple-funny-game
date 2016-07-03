var gulp = require('gulp'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync').create();

gulp.task('minify',function(){
    return gulp.src('components/js/funapp.js')
               .pipe(minify())
               .pipe(gulp.dest('./'))
               .pipe(browserSync.reload({stream:true}));
    
})


gulp.task('browserSync',function(){
    browserSync.init({
        server :{
            baseDir:'./'
        }
    })
})

gulp.task('watch',function(){
    gulp.watch('components/js/funapp.js',['minify']);
    gulp.watch('./*.html',browserSync.reload);
    
})

gulp.task('default',['minify','browserSync','watch']);