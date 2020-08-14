var config = require('../config/config');
var parse = require('parse/node');

class ParseMapper {
  constructor() {
    try {

      this.url =
           config.parse.PARSE_SERVER_PROTOCOL
          +'://'
          +config.parse.PARSE_SERVER_HOST
          +':'
          +config.parse.PARSE_SERVER_PORT
          +'/parse';
      parse.initialize(config.parse.PARSE_SERVER_APPLICATION_ID,config.parse.PARSE_SERVER_MASTER_KEY);
      parse.serverURL = this.url;

      //this.logger = logger;
      this.opticalFlowObj = parse.Object.extend('opticalFlow');
      this.sdkScreenSizeObj = parse.Object.extend('screenSize');

    } catch (error) {
      //this.logger.error(JSON.stringify(error));
      console.warn(error);
      throw error;
    }
  }

  /**
   *
   * @returns {*}
   * @param result
   */
  createOpticalFlowRow(fileName, result) {
    return new Promise((resolve, reject) => {
      try {
        result.forEach(data => {
          let _data = data;
          if (data['fileName'] === undefined) {
            _data.fileName = fileName;
          } else {
            _data.fileName = data['fileName'];
          }
          this.addOpticalFlowRow(_data);
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };

  /**
   *
   * @param data
   * @returns {Promise<unknown>}
   */
  addOpticalFlowRow(data) {
    return new Promise((resolve, reject) => {
      const obj = new this.opticalFlowObj();
      for (let key in data) {
        obj.set(key, data[key]);
      }
      obj.save().then(result => resolve(result)).catch(err => reject(err));
    });
  }

  /**
   *
   * @param data
   * @returns {Promise<unknown>}
   */
  addScreenSizeRow(data) {
    return new Promise((resolve, reject) => {
      const obj = new this.sdkScreenSizeObj();
      for (let key in data) {
        obj.set(key, data[key]);
      }
      obj.save()
      .then(result => {
        resolve(result);
      }).catch(err => {
        reject(err)
      });

    });
  }

}

const mapper = new ParseMapper();
module.exports = mapper;
