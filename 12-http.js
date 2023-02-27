// every file is a module 
// module is encapsulated

//import the names

// const http = require('http')

// const server = http.createServer((req,res) =>{
//     if(req.url==='/'){
//         res.end('Welcome to our home page')
//     }
//     if(req.url==='/about'){
//         res.end('Here is our history')
//     } 
//     res.end(`<h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for </p>
//     <a href="/">back Home </a>
//     `)
// })

// server.listen(5000)

const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Here is our history')
    } 

    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back Home</a>
    `)
    
})

server.listen(5000)

