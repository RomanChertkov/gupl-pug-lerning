import * as clean from 'del'

export default  async function cleanBuild() {
    return await clean.deleteAsync("./build/*")
}