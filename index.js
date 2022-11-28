const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
  })



// const csv = require('csv-parser')
// const fs = require('fs')
// const results = [];
// const states = new Array();

// fs.createReadStream('distributorList.csv').pipe(csv({})).on('data', (data) => results.push(data)).on('end', () => {
//     console.log("result length :"+results.length)
//     // states = new Array(results.length)
//     results.forEach(element => {
//         // console.log(element.State)
//         states.push(element.State)
//     });
//     let ic = [...new Set(states)]
//     console.log('sorted array : '+ic.length)
//     console.log("States : "+states)
//     console.log("List of States : "+ic)
// })

// console.log("len "+states.length)


app.listen(port, () => {
    console.log(`Example app listening on port`)
  })
