/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class SqlManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The subscription ID that identifies an Azure subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  recoverableDatabases: operations.RecoverableDatabases;
  restorableDroppedDatabases: operations.RestorableDroppedDatabases;
  servers: operations.Servers;
  serverConnectionPolicies: operations.ServerConnectionPolicies;
  databaseThreatDetectionPolicies: operations.DatabaseThreatDetectionPolicies;
  dataMaskingPolicies: operations.DataMaskingPolicies;
  dataMaskingRules: operations.DataMaskingRules;
  firewallRules: operations.FirewallRules;
  geoBackupPolicies: operations.GeoBackupPolicies;
  databases: operations.Databases;
  elasticPools: operations.ElasticPools;
  recommendedElasticPools: operations.RecommendedElasticPools;
  replicationLinks: operations.ReplicationLinks;
  serverAzureADAdministrators: operations.ServerAzureADAdministrators;
  serverCommunicationLinks: operations.ServerCommunicationLinks;
  serviceObjectives: operations.ServiceObjectives;
  elasticPoolActivities: operations.ElasticPoolActivities;
  elasticPoolDatabaseActivities: operations.ElasticPoolDatabaseActivities;
  serviceTierAdvisors: operations.ServiceTierAdvisors;
  transparentDataEncryptions: operations.TransparentDataEncryptions;
  transparentDataEncryptionActivities: operations.TransparentDataEncryptionActivities;
  serverUsages: operations.ServerUsages;
  databaseUsages: operations.DatabaseUsages;
  databaseAutomaticTuningOperations: operations.DatabaseAutomaticTuningOperations;
  encryptionProtectors: operations.EncryptionProtectors;
  failoverGroups: operations.FailoverGroups;
  managedInstances: operations.ManagedInstances;
  operations: operations.Operations;
  serverKeys: operations.ServerKeys;
  syncAgents: operations.SyncAgents;
  syncGroups: operations.SyncGroups;
  syncMembers: operations.SyncMembers;
  subscriptionUsages: operations.SubscriptionUsages;
  virtualNetworkRules: operations.VirtualNetworkRules;
  extendedDatabaseBlobAuditingPolicies: operations.ExtendedDatabaseBlobAuditingPolicies;
  extendedServerBlobAuditingPolicies: operations.ExtendedServerBlobAuditingPolicies;
  serverBlobAuditingPolicies: operations.ServerBlobAuditingPolicies;
  databaseBlobAuditingPolicies: operations.DatabaseBlobAuditingPolicies;
  databaseVulnerabilityAssessmentRuleBaselines: operations.DatabaseVulnerabilityAssessmentRuleBaselines;
  databaseVulnerabilityAssessments: operations.DatabaseVulnerabilityAssessments;
  jobAgents: operations.JobAgents;
  jobCredentials: operations.JobCredentials;
  jobExecutions: operations.JobExecutions;
  jobs: operations.Jobs;
  jobStepExecutions: operations.JobStepExecutions;
  jobSteps: operations.JobSteps;
  jobTargetExecutions: operations.JobTargetExecutions;
  jobTargetGroups: operations.JobTargetGroups;
  jobVersions: operations.JobVersions;
  longTermRetentionBackups: operations.LongTermRetentionBackups;
  backupLongTermRetentionPolicies: operations.BackupLongTermRetentionPolicies;
  managedDatabases: operations.ManagedDatabases;
  serverAutomaticTuningOperations: operations.ServerAutomaticTuningOperations;
  serverDnsAliases: operations.ServerDnsAliases;
  serverSecurityAlertPolicies: operations.ServerSecurityAlertPolicies;
  restorePoints: operations.RestorePoints;
  databaseOperations: operations.DatabaseOperations;
  elasticPoolOperations: operations.ElasticPoolOperations;
  capabilities: operations.Capabilities;
  databaseVulnerabilityAssessmentScans: operations.DatabaseVulnerabilityAssessmentScans;
  instanceFailoverGroups: operations.InstanceFailoverGroups;
  backupShortTermRetentionPolicies: operations.BackupShortTermRetentionPolicies;
}

export { SqlManagementClient, models as SqlManagementModels };
