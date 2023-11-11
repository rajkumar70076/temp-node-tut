//const {readFileSync} = require('fs')
// const fs = require('fs')
//fs.read
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }

    //console.log(result)

    const first = result;
    readFile('./content/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
    
        //console.log(result)
    
        const second = result;
        writeFile('./content/result-async.txt', `\n Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
        )

    })

})