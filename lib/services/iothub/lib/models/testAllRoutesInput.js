/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Input for testing all routes
 *
 */
class TestAllRoutesInput {
  /**
   * Create a TestAllRoutesInput.
   * @member {string} [routingSource] Routing source. Possible values include:
   * 'Invalid', 'DeviceMessages', 'TwinChangeEvents', 'DeviceLifecycleEvents',
   * 'DeviceJobLifecycleEvents'
   * @member {object} [message] Routing message
   * @member {string} [message.body] Body of routing message
   * @member {object} [message.appProperties] App properties
   * @member {object} [message.systemProperties] System properties
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestAllRoutesInput
   *
   * @returns {object} metadata of TestAllRoutesInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestAllRoutesInput',
      type: {
        name: 'Composite',
        className: 'TestAllRoutesInput',
        modelProperties: {
          routingSource: {
            required: false,
            serializedName: 'routingSource',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'Composite',
              className: 'RoutingMessage'
            }
          }
        }
      }
    };
  }
}

module.exports = TestAllRoutesInput;
