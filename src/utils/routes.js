/* eslint-disable require-jsdoc */
async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('posts');

  fastify.get('/', async (request, reply) => {
    return {data: 'Hello World'};
  });

  fastify.get('/posts', async (request, reply) => {
    const result = await collection.find().toArray();

    if (result.length == 0) {
      throw new Error('no document found');
    }

    return result;
  });
}

module.exports = routes;
