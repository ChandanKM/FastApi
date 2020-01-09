'use strict'

const http = require('http')

const autocannon = require('autocannon')

const server = http.createServer(handle)

server.listen(3000, startBench)


const options = {
  hostname: 'https://jsonplaceholder.typicode.com',
  path: '/posts',
  port: 80,
  method: 'POST',
  body: JSON.stringify(
    { userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    }
    )
}


function handle (req, res) 
{
  const req1 = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', (d) => {
      console.error(d)
      process.stdout.write(d)
    })
  })
  
  req1.on('error', (error) => 
  {
    res.end(JSON.stringify(error))
    console.error(error)
  })

  
}

function startBench () {
  autocannon({
    url: 'http://localhost:3000/',
    connections: 5, //default
    pipelining: 1, // default
    duration: 5, // default
    requests: [
      {
        path: '/'
        // this will automatically add the pregenerated auth token
      }
    ]
  }, finishedBench)
 
  function finishedBench (err, res) {
    console.log('finished bench', err, res)
  }
}







// 'use strict'

// const http = require('http')
// const autocannon = require('autocannon')

// const server = http.createServer(handle)

// server.listen(0, startBench)

// function handle (req, res) {
//   res.end('hello world')
// }

// function startBench () {
//   const instance = autocannon({
//     url: 'http://localhost:' + server.address().port
//   }, finishedBench)

//   autocannon.track(instance)

//   // this is used to kill the instance on CTRL-C
//   process.once('SIGINT', () => {
//     instance.stop()
//   })

//   function finishedBench (err, res) {
//     console.log('finished bench', err, res)
//   }
// }




// 'use strict'

// const http = require('http')
// const autocannon = require('autocannon')

// const server = http.createServer(handle)

// server.listen(0, startBench)

// function handle (req, res) {
//   res.end('hello world')
// }

// function startBench () {
//   const url = 'http://localhost:' + server.address().port

//   autocannon({
//     url: url,
//     connections: 1000,
//     duration: 10,
//     headers: {
//       // by default we add an auth token to all requests
//       auth: 'A Pregenerated auth token'
//     },
//     requests: [
//       {
//         method: 'POST', // this should be a post for logging in
//         path: '/login',
//         body: 'valid login details',
//         // overwrite our default headers,
//         // so we don't add an auth token
//         // for this request
//         headers: {}
//       },
//       {
//         path: '/mySecretDetails'
//         // this will automatically add the pregenerated auth token
//       },
//       {
//         method: 'PUT', // this should be a put for modifying secret details
//         path: '/mySecretDetails',
//         headers: { // let submit some json?
//           'Content-type': 'application/json; charset=utf-8'
//         },
//         // we need to stringify the json first
//         body: JSON.stringify({
//           name: 'my new name'
//         })
//       }
//     ]
//   }, finishedBench)

//   function finishedBench (err, res) {
//     console.log('finished bench', err, res)
//   }
// }



// // 'use strict'
 
// // const autocannon = require('autocannon')
 
// // autocannon({
// //   url: 'https://jsonplaceholder.typicode.com/posts',
// //   connections: 10, //default
// //   pipelining: 1, // default
// //   duration: 10 // default
// // }, console.log)




// // // 'use strict'


// // // const autocannon = require('autocannon')
 
// // // const instance = autocannon({
// // //   url: 'https://jsonplaceholder.typicode.com/posts',
// // //   setupClient: setupClient
// // // }, (err, result) => handleResults(result))
// // // // results passed to the callback are the same as those emitted from the done events
// // // instance.on('done', handleResults)
 
// // // instance.on('tick', () => console.log('ticking'))
 
// // // instance.on('response', handleResponse)
 
// // // function setupClient (client) {
// // //   client.on('body', console.log) // console.log a response body when its received
// // // }
 
// // // function handleResponse (client, statusCode, resBytes, responseTime) {
// // //   console.log(`Got response with code ${statusCode} in ${responseTime} milliseconds`)
// // //   console.log(`response: ${resBytes.toString()}`)
 
// // //   //update the body or headers
// // //   client.setHeaders({new: 'header'})
// // //   client.setBody('new body')
// // //   client.setHeadersAndBody({new: 'header'}, 'new body')
// // // }
 
// // // function handleResults(result) {
// // //   // ...
// // // }













// // // // 'use strict'
// // // // const http = require('http')
// // // // const autocannon = require('autocannon')

// // // // const server = http.createServer(handle)

// // // // server.listen(0, startBench)

// // // // function handle (req, res) {
// // // //   res.end('hello world')
// // // // }


// // // // function startBench () {
// // // //   autocannon({
// // // //     url: 'https://jsonplaceholder.typicode.com/posts',
// // // //     connections: 50, //default
// // // //     pipelining: 1, // default
// // // //     duration: 10, // default
// // // //     requests: [
// // // //       {
// // // //         method: 'GET', // this should be a post for logging in
// // // //         path: '/posts'
// // // //         // overwrite our default headers,
// // // //         // so we don't add an auth token
// // // //         // for this request
// // // //       }
// // // //     ]
// // // //   }, finishedBench)
// // // //   function finishedBench (err, res) {
// // // //     console.log('finished bench', err, res)
// // // //   }
// // // // }

 
// // // // // // async/await
// // // // // async function foo () {
// // // // //   const autocannon = require('autocannon')
// autocannon({
//   url: 'https://jsonplaceholder.typicode.com',
//   connections: 50, //default
//   pipelining: 1, // default
//   duration: 10, // default
//   requests: [
//     {
//       method: 'POST', // this should be a post for logging in
//       path: '/posts',
//       body: JSON.stringify(
//       { userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
//       }
//       )
//     }
//   ]
// }, finishedBench)

// // // // // function finishedBench (err, res) {
// // // // //   console.log('finished bench', err, res)
// // // // // }
// // // // // }