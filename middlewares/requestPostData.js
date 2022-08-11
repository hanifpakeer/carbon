/**
 * This middle ware should be used whenever we hit a post request
*/

// Our ideology is that unifrom post request whenever a post request
// comes it should be enclosed in data: {}
// This is extracted from req.body and created as req.postData
// The first argument gets data necessary to complete the request if it is not present then
// return request back to the client

const globalConstants = require('../global_variables/constants');

const NO_PARAMS = 'Parameters not found';
const PARAMS_NOT_PRESENT = 'Parameters are not sufficient';
const ERROR_GETTING_DATA = 'Error happened while parsing post data';

function getPostData(reqDataParamCheck) {
  return (req, res, next) => {
    const responseIfSomethingWrong = {};
    try {
      if (!req.body.data) { // Parameters are not there
        responseIfSomethingWrong.error = NO_PARAMS;
        return res.status(globalConstants.BAD_REQUEST).send(responseIfSomethingWrong);
      }
      if (!reqDataParamCheck) { // No validation of incoming parameters
        req.postData = req.body.data;
        return next();
      }
      // Validate parameters
      const incomingParameters = req.body.data;
      req.postData = {}; // This can be deleted at the end if it is not needed
      if (Object.prototype.hasOwnProperty.call(reqDataParamCheck, 'required')) {
        const requiredParameters = Object.values(reqDataParamCheck.required);
        for (let i = 0; i < requiredParameters.length; i += 1) {
          if (!Object.prototype.hasOwnProperty.call(
            incomingParameters,
            requiredParameters[i],
          )) {
          // Required parameters for that post request is not there so return with error
            responseIfSomethingWrong.error = PARAMS_NOT_PRESENT;
            return res.status(globalConstants.BAD_REQUEST).send(responseIfSomethingWrong);
          }
          req.postData[requiredParameters[i]] = req.body.data[requiredParameters[i]];
        }
      }
      if (Object.prototype.hasOwnProperty.call(reqDataParamCheck, 'optional')) {
        const optionalParameters = Object.values(reqDataParamCheck.optional);
        for (let i = 0; i < optionalParameters.length; i += 1) {
          if (!Object.prototype.hasOwnProperty.call(
            incomingParameters,
            optionalParameters[i],
          )) {
          // Optional parameters for that post request is not there so return with error
          // Let us check and log the optional parameters so that we know how API is used
          } else {
            req.postData[optionalParameters[i]] = req.body.data[optionalParameters[i]];
          }
        }
      }
      if (Object.keys(req.postData).length < 1) { // I don't want to send empty postData
        delete req.postData;
      }
      return next();
    } catch (err) {
      // log the error
      return res.status(globalConstants.INTERNAL_SERVER_ERROR).send(ERROR_GETTING_DATA);
    }
  };
}

module.exports.getPostData = getPostData;
