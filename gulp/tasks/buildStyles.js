import gulp from 'gulp'
import autoPrefixer from 'gulp-autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export default function buildStyles(){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({cascade: false, overrideBrowserslist:["last 4 version"]}))
        .pipe(gulp.dest('./build/css'))
}