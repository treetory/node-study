var mapper = require('../mapper/parse.mapper');
var resUtil = require('../util/response.creator');

class StoreController {
  constructor() {
    this.mapper = mapper;
    //this.logger = logger;
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  createOpticalFlowTestRecord(req, res, next) {
    const {fileName, result} = req.body;

    storeController.mapper.createOpticalFlowRow(fileName, result)
    .then(() => {
      const message = 'OpticalFlow Test Record is created successfully.';
      resUtil.responseSuccess(message, null, res);
    })
    .catch((error) => {
      // this.logger.error(error);
      resUtil.responseError(error, res)
    })
  };

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  addScreenSizeRow(req, res, next) {
    let data = req.body;
    data.userAgent = req.headers['user-agent'];
    storeController.mapper.addScreenSizeRow(data)
    .then(() => {
      const message = 'ScreenSize Test Record is created successfully.';
      resUtil.responseSuccess(message, null, res);
    })
    .catch(error => {
      resUtil.responseError(error, res)
    });
  };

  getModelName(req, res, next) {
    const cookie = req.headers.cookie;
    const userAgent = req.headers['user-agent'];

    console.warn(cookie, userAgent);

    resUtil.responseSuccess({ result: 'OK' }, null, res);
  };

  logging(req, res, next) {

    console.warn(req.body);

    resUtil.responseSuccess({ result: 'OK' }, null, res);
  }

}

const storeController = new StoreController();

module.exports = storeController;
