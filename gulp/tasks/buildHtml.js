import gulp from 'gulp'
import pug from 'gulp-pug'

export default function buildHtml(){
    return gulp.src('./src/pug/pages/*.pug')
        .pipe(pug({pretty:true, verbose:true}))
        .pipe(gulp.dest("./build"))
}