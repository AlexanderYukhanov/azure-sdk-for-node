/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * @summary Execute an Analytics query
 *
 * Executes an Analytics query for data.
 * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an
 * example for using POST with an Analytics query.
 *
 * @param {string} workspaceId ID of the workspace. This is Workspace ID from
 * the Properties blade in the Azure portal.
 *
 * @param {object} body The Analytics query. Learn more about the [Analytics
 * query
 * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 *
 * @param {string} body.query The query to execute.
 *
 * @param {string} [body.timespan] Optional. The timespan over which to query
 * data. This is an ISO8601 time period value.  This timespan is applied in
 * addition to any that are specified in the query expression.
 *
 * @param {array} [body.workspaces] A list of workspaces that are included in
 * the query.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link QueryResults} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _query(workspaceId, body, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (workspaceId === null || workspaceId === undefined || typeof workspaceId.valueOf() !== 'string') {
      throw new Error('workspaceId cannot be null or undefined and it must be of type string.');
    }
    if (body === null || body === undefined) {
      throw new Error('body cannot be null or undefined.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'workspaces/{workspaceId}/query';
  requestUrl = requestUrl.replace('{workspaceId}', encodeURIComponent(workspaceId));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      let requestModelMapper = new client.models['QueryBody']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(body, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['QueryResults']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a LogAnalyticsClient. */
class LogAnalyticsClient extends ServiceClient {
  /**
   * Create a LogAnalyticsClient.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://api.loganalytics.io/v1';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.models = models;
    this._query = _query;
    msRest.addSerializationMixin(this);
  }

  /**
   * @summary Execute an Analytics query
   *
   * Executes an Analytics query for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an
   * example for using POST with an Analytics query.
   *
   * @param {string} workspaceId ID of the workspace. This is Workspace ID from
   * the Properties blade in the Azure portal.
   *
   * @param {object} body The Analytics query. Learn more about the [Analytics
   * query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   *
   * @param {string} body.query The query to execute.
   *
   * @param {string} [body.timespan] Optional. The timespan over which to query
   * data. This is an ISO8601 time period value.  This timespan is applied in
   * addition to any that are specified in the query expression.
   *
   * @param {array} [body.workspaces] A list of workspaces that are included in
   * the query.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<QueryResults>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  queryWithHttpOperationResponse(workspaceId, body, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._query(workspaceId, body, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Execute an Analytics query
   *
   * Executes an Analytics query for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an
   * example for using POST with an Analytics query.
   *
   * @param {string} workspaceId ID of the workspace. This is Workspace ID from
   * the Properties blade in the Azure portal.
   *
   * @param {object} body The Analytics query. Learn more about the [Analytics
   * query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   *
   * @param {string} body.query The query to execute.
   *
   * @param {string} [body.timespan] Optional. The timespan over which to query
   * data. This is an ISO8601 time period value.  This timespan is applied in
   * addition to any that are specified in the query expression.
   *
   * @param {array} [body.workspaces] A list of workspaces that are included in
   * the query.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {QueryResults} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link QueryResults} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  query(workspaceId, body, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._query(workspaceId, body, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._query(workspaceId, body, options, optionalCallback);
    }
  }

}

module.exports = LogAnalyticsClient;
module.exports['default'] = LogAnalyticsClient;
module.exports.LogAnalyticsClient = LogAnalyticsClient;
module.exports.LogAnalyticsModels = models;
