// 2nd party
const webserver = require('./src/node/www/webserver');
const logger = require('./src/node/logger');

const mongoose = require('mongoose');

(function boot()
{
  const requiredEnvs = ['MONGODB_URI'];
  const notAvailableEnvs = requiredEnvs.filter(key => process.env[key] == null);

  if (notAvailableEnvs.length > 0)
  {
    logger.error(`Missing env variables: ${notAvailableEnvs.join(', ')}`);
    process.exit();
  }

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, error =>
  {
    if (error != null)
    {
      logger.error({
        label: 'MongoDB',
        message: error.message
      });

      process.exit();
    }

    webserver.listen(webserver.get('port'), () =>
    {
      logger.info(`App and running on port ${webserver.get('port')}`);
    });
  });
})();