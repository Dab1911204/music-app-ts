const fs = require('fs-extra')

const listForderCopy = [
    {
        sourceDirectory:"views",
        targetDirectory:"dist/views"
    },
    {
        sourceDirectory:"public",
        targetDirectory:"dist/public"
    }
]

listForderCopy.forEach(item => {
    fs.copy(item.sourceDirectory, item.targetDirectory, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Copy thành công")
        }
    })
})