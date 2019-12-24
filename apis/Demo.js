
module.exports = function (fastify, opts, next) 
{
  fastify.register(require('./our-db-connector'), {
    url: 'mongodb://localhost:27017/'
  })
  fastify.register(require('./our-first-route'))

  fastify.listen(4200, function (err, address) {
    if (err) {
      console.log(err)
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })

  next()
}