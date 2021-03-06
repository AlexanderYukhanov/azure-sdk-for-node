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

/**
 * The properties of a routing rule that your IoT hub uses to route messages to
 * endpoints.
 *
 */
class RouteProperties {
  /**
   * Create a RouteProperties.
   * @member {string} name The name of the route. The name can only include
   * alphanumeric characters, periods, underscores, hyphens, has a maximum
   * length of 64 characters, and must be unique.
   * @member {string} source The source that the routing rule is to be applied
   * to, such as DeviceMessages. Possible values include: 'Invalid',
   * 'DeviceMessages', 'TwinChangeEvents', 'DeviceLifecycleEvents',
   * 'DeviceJobLifecycleEvents'
   * @member {string} [condition] The condition that is evaluated to apply the
   * routing rule. If no condition is provided, it evaluates to true by
   * default. For grammar, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
   * @member {array} endpointNames The list of endpoints to which messages that
   * satisfy the condition are routed. Currently only one endpoint is allowed.
   * @member {boolean} isEnabled Used to specify whether a route is enabled.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RouteProperties
   *
   * @returns {object} metadata of RouteProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RouteProperties',
      type: {
        name: 'Composite',
        className: 'RouteProperties',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              Pattern: '^[A-Za-z0-9-._]{1,64}$'
            },
            type: {
              name: 'String'
            }
          },
          source: {
            required: true,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          condition: {
            required: false,
            serializedName: 'condition',
            type: {
              name: 'String'
            }
          },
          endpointNames: {
            required: true,
            serializedName: 'endpointNames',
            constraints: {
              MaxItems: 1,
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isEnabled: {
            required: true,
            serializedName: 'isEnabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = RouteProperties;
