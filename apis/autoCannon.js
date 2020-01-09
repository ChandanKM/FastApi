'use strict'
const autocannon = require('autocannon')
autocannon({
  url: 'https://jsonplaceholder.typicode.com/posts',
  connections: 50, //default
  pipelining: 1, // default
  duration: 10, // default
  method:'POST',
  title:'Demo Title',
  body:"{'userId': 1,'id': 1,'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit','body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'}"
}, console.log)
 
// async/await
async function foo () {
  const autocannon = require('autocannon')
autocannon({
  url: 'https://jsonplaceholder.typicode.com/posts',
  connections: 50, //default
  pipelining: 1, // default
  duration: 10, // default
  method:'POST',
  title:'Demo Title',
  requests:{
    userId:1,
    id:1,
    title:'Title',
    body:'body'
  }
}, console.log)
}