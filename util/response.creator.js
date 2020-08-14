class ResponseUtil {

  /**
   * status: success || fail || expired
   * code ...
   * messege ...
   * result Object
   * @param _status
   * @param _code
   * @param _message
   * @param _obj
   * @returns {*}
   */
  createResponseMessage(_status, _code, _message, _obj) {
    if(_status === "success" || _status === "fail" || _status === "expired") {
      return {
        status: _status,
        code: _code,
        message: _message,
        result: _obj
      };
    } else {
      return false;
    }
  };

  responseSuccess(message, result, res) {
    const response = ["success", 200, message, result];

    res.send(this.createResponseMessage(...response));
  };

  responseError(error, res) {
    const response = (error.constructor.name === "ParseError") ? ["fail", 400, error.message] : ["fail", 400, error.message];

    res.status(400);
    res.send(this.createResponseMessage(...response));
  };

}

const resUtil = new ResponseUtil();
module.exports = resUtil;
