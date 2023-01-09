import gulp from 'gulp'
import buildHtml from './gulp/tasks/buildHtml.js'
import buildStyles from './gulp/tasks/buildStyles.js'
import cleanBuild from './gulp/tasks/cleanBuild.js'

const mainTasks = gulp.series(cleanBuild, gulp.parallel(buildHtml, buildStyles))
const build =  gulp.series(cleanBuild, buildHtml, buildStyles)


export { build }
export default  function(){
    gulp.watch('./src/**/*.pug', mainTasks)
    gulp.watch('./src/**/*.scss', mainTasks)
}
