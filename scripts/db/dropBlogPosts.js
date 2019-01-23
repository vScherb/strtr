const db = require.main.require('../../src/node/db');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, async (error) =>
{
  if (error != null)
  {
    console.log('[ERROR]', error.message);
  }
  else
  {
    const result = await db.BlogPost.deleteMany();
    console.log(`[DONE] Deleted ${result.n} blog posts.`);
  }

  process.exit();
});