// 2nd party
const webserver = require('./src/node/www/webserver');
const logger = require('./src/node/logger');

(function boot()
{
  const requiredEnvs = [];
  const notAvailableEnvs = requiredEnvs.filter(key => process.env[key] == null);

  if (notAvailableEnvs.length > 0)
  {
    logger.error(`Missing env variables: ${notAvailableEnvs.join(', ')}`);
    process.exit();
  }

  webserver.listen(webserver.get('port'), () =>
  {
    logger.info(`App and running on port ${webserver.get('port')}`);
  });
})();