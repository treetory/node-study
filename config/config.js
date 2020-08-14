const config = {
  token : "SrCw2GagtTH7M5ES3LCSExZmBc10JkzC",
  parse : {
    PARSE_SERVER_PROTOCOL: 'http',
    //PARSE_SERVER_HOST: '192.168.1.167',
    PARSE_SERVER_HOST: 'localhost',
    PARSE_SERVER_PORT: '1337',
    //PARSE_SERVER_APPLICATION_NAME: 'treetory-parse-server',
    //PARSE_SERVER_APPLICATION_ID: 'treetory-parse',
    PARSE_SERVER_APPLICATION_NAME: 'parse-server',
    PARSE_SERVER_APPLICATION_ID: 'parse',
    PARSE_SERVER_MASTER_KEY: '0y7IkSnuTbSx6T23aZsbYl2qCIeOY1KY',
    PARSE_SERVER_READ_ONLY_MASTER_KEY: 'PhRucZMnanNkmbnRAJ4t37GYYM4nujkK'
  },
  log : {
    path: './log/'
  }
};

module.exports = config;
