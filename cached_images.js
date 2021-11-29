const fs = require('fs')

const path = require('path')

fs.readdir(path.join(__dirname,'./public/assets/images'),((err,files) => {
    if (err) throw err
    files = files.filter(file => !(/^\..*/.test(file)))
    fs.writeFile('src/files_to_write.json',JSON.stringify({
        images: files
        }),
        err => {
            if (err) throw err
    })
}))