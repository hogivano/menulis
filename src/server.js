const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./utils/db-connection'));
fastify.register(require('./utils/routes'));

// using async await server
// const start = async () => {
//   try {
//     await fastify.listen(3000);
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// };

// start();

// using standart run serve
fastify.listen(3000, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});
