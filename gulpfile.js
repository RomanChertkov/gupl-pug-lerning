import gulp from 'gulp'
import buildHtml from './gulp/tasks/buildHtml.js'
import buildStyles from './gulp/tasks/buildStyles.js'
import cleanBuild from './gulp/tasks/cleanBuild.js'

function html(cb){
    buildHtml()
    cb()
}
 function css(cb){
    buildStyles()
    cb()
 }

const mainTasks = gulp.series(cleanBuild, gulp.parallel(buildHtml, buildStyles))
export const build =  gulp.series(html, css)


export default  function(){
    gulp.watch('./src/**/*.pug', mainTasks)
    gulp.watch('./src/**/*.scss', mainTasks)
}
