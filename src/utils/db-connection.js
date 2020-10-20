/* eslint-disable require-jsdoc */
const fastifyPlugin = require('fastify-plugin');

async function dbConnection(fastify, options) {
  fastify.register(require('fastify-mongodb'), {
    url: 'mongodb+srv://menulis:0InSGYnZxoraRapX@cluster1.pnhrq.gcp.mongodb.net/menulis_id?retryWrites=true&w=majority',
  });
}

module.exports = fastifyPlugin(dbConnection);
