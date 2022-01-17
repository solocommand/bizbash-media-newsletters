const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://bizbash.serve.email-x.parameter1.com');

config
  .setAdUnits('', [
    {

    },
  ]);

module.exports = config;
