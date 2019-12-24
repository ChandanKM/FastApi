'use strict'
const autocannon = require('autocannon')
autocannon({
  url: 'http://202.66.172.230/LexygenPortal/',
  connections: 50, //default
  pipelining: 1, // default
  duration: 10 // default
}, console.log)
 
// async/await
async function foo () {
  const result = await autocannon({
    url: 'http://202.66.172.230/LexygenPortal/',
    connections: 50, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log(result)
}