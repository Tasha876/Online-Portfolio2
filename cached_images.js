const fs = require('fs')

const path = require('path')

const images = fs.readdirSync(path.join(__dirname,'./public/assets/images'))

fs.writeFile('src/files_to_write.json',JSON.stringify({
    images: images
    }),
    err => {
        if (err) throw err
})