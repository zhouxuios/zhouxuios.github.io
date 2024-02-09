import fs from 'node:fs'
import Path from 'node:path'
export function genSidebar(path) {
    let result = {
        text: Path.basename(path),
    }
    const whiteSpace = ['.vitepress','index.md','me.md','.DS_Store']
    let files = fs.readdirSync(path).filter(file => {
        console.log(file)
        return !whiteSpace.includes(file)
    })
    result.items = files.map(file => {
        const subPath = Path.resolve(path,file)
        const stat = fs.statSync(subPath)
        if(stat.isDirectory()){
            return genSidebar(subPath)
        }else{
            const link = `/${Path.basename(path)}/${file}`
            return {
                path: subPath,
                text: file,
                link: link
            }
        }
    })
    return result
}





