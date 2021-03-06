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
 * The alert settings.
 *
 * @extends models['BaseModel']
 */
class AlertSettings extends models['BaseModel'] {
  /**
   * Create a AlertSettings.
   * @member {string} emailNotification Indicates whether email notification
   * enabled or not. Possible values include: 'Enabled', 'Disabled'
   * @member {string} [alertNotificationCulture] The alert notification
   * culture.
   * @member {string} [notificationToServiceOwners] The value indicating
   * whether alert notification enabled for admin or not. Possible values
   * include: 'Enabled', 'Disabled'
   * @member {array} [additionalRecipientEmailList] The alert notification
   * email list.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AlertSettings
   *
   * @returns {object} metadata of AlertSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertSettings',
      type: {
        name: 'Composite',
        className: 'AlertSettings',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'Series8000' ]
            }
          },
          emailNotification: {
            required: true,
            serializedName: 'properties.emailNotification',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          alertNotificationCulture: {
            required: false,
            serializedName: 'properties.alertNotificationCulture',
            type: {
              name: 'String'
            }
          },
          notificationToServiceOwners: {
            required: false,
            serializedName: 'properties.notificationToServiceOwners',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          additionalRecipientEmailList: {
            required: false,
            serializedName: 'properties.additionalRecipientEmailList',
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
          }
        }
      }
    };
  }
}

module.exports = AlertSettings;
