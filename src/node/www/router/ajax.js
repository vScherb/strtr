// 2nd party
const db = require.main.require('./src/node/db');

// globals
const router = require('express').Router();

router.get('/posts', async (request, response) =>
{
  const posts = await db.BlogPost.find().sort([['created', -1]]).lean();

  response.send(posts);
});

router.get('/posts/:id', async (request, response) =>
{
  const { id } = request.params;

  const post = await db.BlogPost.findOne({
    id
  }).lean();

  if (post == null)
  {
    response.status(404).end();
  }
  else
  {
    response.send(post);
  }
});

router.post('/posts/by-tags', async (request, response) =>
{
  const { tags } = request.body;

  const query = tags.map(tag => ({ tags: tag }));

  const results = await db.BlogPost.find({
    $and: query
  }).sort([['created', -1]]).lean();

  response.send(results);
});

router.post('/posts/:id', async (request, response) =>
{
  const { id } = request.params;
  const { post } = request.body;

  await db.BlogPost.updateOne({ id }, post);

  response.end();
});

router.put('/posts', async (request, response) =>
{
  const { post } = request.body;

  await db.BlogPost.create(post);

  response.status(201).end();
});

module.exports = router;