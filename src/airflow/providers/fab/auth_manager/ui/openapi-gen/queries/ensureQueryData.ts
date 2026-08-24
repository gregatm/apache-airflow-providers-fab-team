// generated with @7nohe/openapi-react-query-codegen@2.2.0
import { type QueryClient } from "@tanstack/react-query";

import type { Options } from "../requests/sdk.gen";
import {
  dagStats,
  getAsset,
  getAssetAlias,
  getAssetAliases,
  getAssetEvents,
  getAssetQueuedEvents,
  getAssets,
  getAssetStateStore,
  getAssetsUi,
  getAuthMenus,
  getBackfill,
  getCalendar,
  getCalendarDeadlines,
  getConfig,
  getConfigs,
  getConfigValue,
  getConnection,
  getConnections,
  getConnectionTest,
  getCurrentUserInfo,
  getDag,
  getDagAssetQueuedEvent,
  getDagAssetQueuedEvents,
  getDagDeadlineAlerts,
  getDagDetails,
  getDagRun,
  getDagRuns,
  getDagRunStateCountsUi,
  getDagRunStats,
  getDags,
  getDagSource,
  getDagStats,
  getDagStructure,
  getDagsUi,
  getDagTags,
  getDagTimetableTypesUi,
  getDagVersion,
  getDagVersions,
  getDeadlines,
  getDependencies,
  getEventLog,
  getEventLogs,
  getExternalLogUrl,
  getExtraLinks,
  getGanttData,
  getGridRuns,
  getGridTiSummariesStream,
  getHealth,
  getHitlDetail,
  getHitlDetails,
  getHitlDetailTryDetail,
  getImportError,
  getImportErrors,
  getJobs,
  getLatestRunInfo,
  getLog,
  getMappedTaskInstance,
  getMappedTaskInstances,
  getMappedTaskInstanceTries,
  getMappedTaskInstanceTryDetails,
  getPartitionedDagRuns,
  getPendingPartitionedDagRun,
  getPermissions,
  getPlugins,
  getPool,
  getPools,
  getProviders,
  getProviders1,
  getRole,
  getRoles,
  getTask,
  getTaskInstance,
  getTaskInstanceDependencies,
  getTaskInstanceDependenciesByMapIndex,
  getTaskInstances,
  getTaskInstanceTries,
  getTaskInstanceTryDetails,
  getTasks,
  getTaskStateStore,
  getUpstreamAssetEvents,
  getUser,
  getUsers,
  getVariable,
  getVariables,
  getVersion,
  getXcomEntries,
  getXcomEntry,
  historicalMetrics,
  hookMetaData,
  importErrors,
  listAssetStateStore,
  listBackfillDagRuns,
  listBackfills,
  listBackfillsUi,
  listDagWarnings,
  listTaskStateStore,
  listTeams,
  login,
  logout,
  logout1,
  nextRunAssets,
  structureData,
  waitDagRunUntilFinished,
} from "../requests/sdk.gen";
import {
  DagStatsData,
  GetAssetAliasData,
  GetAssetAliasesData,
  GetAssetData,
  GetAssetEventsData,
  GetAssetQueuedEventsData,
  GetAssetsData,
  GetAssetStateStoreData,
  GetAssetsUiData,
  GetAuthMenusData,
  GetBackfillData,
  GetCalendarData,
  GetCalendarDeadlinesData,
  GetConfigData,
  GetConfigsData,
  GetConfigValueData,
  GetConnectionData,
  GetConnectionsData,
  GetConnectionTestData,
  GetCurrentUserInfoData,
  GetDagAssetQueuedEventData,
  GetDagAssetQueuedEventsData,
  GetDagData,
  GetDagDeadlineAlertsData,
  GetDagDetailsData,
  GetDagRunData,
  GetDagRunsData,
  GetDagRunStateCountsUiData,
  GetDagRunStatsData,
  GetDagsData,
  GetDagSourceData,
  GetDagStatsData,
  GetDagStructureData,
  GetDagsUiData,
  GetDagTagsData,
  GetDagTimetableTypesUiData,
  GetDagVersionData,
  GetDagVersionsData,
  GetDeadlinesData,
  GetDependenciesData,
  GetEventLogData,
  GetEventLogsData,
  GetExternalLogUrlData,
  GetExtraLinksData,
  GetGanttDataData,
  GetGridRunsData,
  GetGridTiSummariesStreamData,
  GetHealthData,
  GetHitlDetailData,
  GetHitlDetailsData,
  GetHitlDetailTryDetailData,
  GetImportErrorData,
  GetImportErrorsData,
  GetJobsData,
  GetLatestRunInfoData,
  GetLogData,
  GetMappedTaskInstanceData,
  GetMappedTaskInstancesData,
  GetMappedTaskInstanceTriesData,
  GetMappedTaskInstanceTryDetailsData,
  GetPartitionedDagRunsData,
  GetPendingPartitionedDagRunData,
  GetPermissionsData,
  GetPluginsData,
  GetPoolData,
  GetPoolsData,
  GetProviders1Data,
  GetProvidersData,
  GetRoleData,
  GetRolesData,
  GetTaskData,
  GetTaskInstanceData,
  GetTaskInstanceDependenciesByMapIndexData,
  GetTaskInstanceDependenciesData,
  GetTaskInstancesData,
  GetTaskInstanceTriesData,
  GetTaskInstanceTryDetailsData,
  GetTasksData,
  GetTaskStateStoreData,
  GetUpstreamAssetEventsData,
  GetUserData,
  GetUsersData,
  GetVariableData,
  GetVariablesData,
  GetVersionData,
  GetXcomEntriesData,
  GetXcomEntryData,
  HistoricalMetricsData,
  HookMetaDataData,
  ImportErrorsData,
  ListAssetStateStoreData,
  ListBackfillDagRunsData,
  ListBackfillsData,
  ListBackfillsUiData,
  ListDagWarningsData,
  ListTaskStateStoreData,
  ListTeamsData,
  LoginData,
  Logout1Data,
  LogoutData,
  NextRunAssetsData,
  StructureDataData,
  WaitDagRunUntilFinishedData,
} from "../requests/types.gen";
import * as Common from "./common";

/**
 * Get Assets
 *
 * Get assets.
 */
export const ensureUseGetAssetsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetsKeyFn(clientOptions),
    queryFn: () => getAssets({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset Aliases
 *
 * Get asset aliases.
 */
export const ensureUseGetAssetAliasesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetAliasesData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetAliasesKeyFn(clientOptions),
    queryFn: () => getAssetAliases({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset Alias
 *
 * Get an asset alias.
 */
export const ensureUseGetAssetAliasData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetAliasData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetAliasKeyFn(clientOptions),
    queryFn: () => getAssetAlias({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset Events
 *
 * Get asset events.
 */
export const ensureUseGetAssetEventsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetEventsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetEventsKeyFn(clientOptions),
    queryFn: () => getAssetEvents({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset Queued Events
 *
 * Get queued asset events for an asset.
 */
export const ensureUseGetAssetQueuedEventsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetQueuedEventsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetQueuedEventsKeyFn(clientOptions),
    queryFn: () => getAssetQueuedEvents({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset
 *
 * Get an asset.
 */
export const ensureUseGetAssetData = (queryClient: QueryClient, clientOptions: Options<GetAssetData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetKeyFn(clientOptions),
    queryFn: () => getAsset({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Asset Queued Events
 *
 * Get queued asset events for a Dag.
 */
export const ensureUseGetDagAssetQueuedEventsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagAssetQueuedEventsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagAssetQueuedEventsKeyFn(clientOptions),
    queryFn: () => getDagAssetQueuedEvents({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Asset Queued Event
 *
 * Get a queued asset event for a Dag.
 */
export const ensureUseGetDagAssetQueuedEventData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagAssetQueuedEventData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagAssetQueuedEventKeyFn(clientOptions),
    queryFn: () => getDagAssetQueuedEvent({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Backfills
 */
export const ensureUseListBackfillsData = (
  queryClient: QueryClient,
  clientOptions: Options<ListBackfillsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListBackfillsKeyFn(clientOptions),
    queryFn: () => listBackfills({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Backfill
 */
export const ensureUseGetBackfillData = (
  queryClient: QueryClient,
  clientOptions: Options<GetBackfillData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetBackfillKeyFn(clientOptions),
    queryFn: () => getBackfill({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Backfill Dag Runs
 *
 * List Dag runs associated with a backfill, including skipped slots.
 */
export const ensureUseListBackfillDagRunsData = (
  queryClient: QueryClient,
  clientOptions: Options<ListBackfillDagRunsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListBackfillDagRunsKeyFn(clientOptions),
    queryFn: () => listBackfillDagRuns({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Connection
 *
 * Get a connection entry.
 */
export const ensureUseGetConnectionData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConnectionData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConnectionKeyFn(clientOptions),
    queryFn: () => getConnection({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Connection Test
 *
 * Poll for the status of an enqueued connection test by its token (passed as a header).
 */
export const ensureUseGetConnectionTestData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConnectionTestData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConnectionTestKeyFn(clientOptions),
    queryFn: () => getConnectionTest({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Connections
 *
 * Get all connection entries.
 */
export const ensureUseGetConnectionsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConnectionsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConnectionsKeyFn(clientOptions),
    queryFn: () => getConnections({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Run
 */
export const ensureUseGetDagRunData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagRunData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagRunKeyFn(clientOptions),
    queryFn: () => getDagRun({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Runs
 *
 * Get all Dag Runs.
 *
 * This endpoint allows specifying `~` as the dag_id to retrieve Dag Runs for all Dags.
 *
 * Supports two pagination modes:
 *
 * **Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.
 *
 * **Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).
 * When `cursor` is provided, `offset` is ignored and `total_entries` is not returned.
 * ``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is ``null``
 * on the first page.
 */
export const ensureUseGetDagRunsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagRunsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagRunsKeyFn(clientOptions),
    queryFn: () => getDagRuns({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Upstream Asset Events
 *
 * If dag run is asset-triggered, return the asset events that triggered it.
 */
export const ensureUseGetUpstreamAssetEventsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetUpstreamAssetEventsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetUpstreamAssetEventsKeyFn(clientOptions),
    queryFn: () => getUpstreamAssetEvents({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Experimental: Wait for a dag run to complete, and return task results if requested.
 *
 * 🚧 This is an experimental endpoint and may change or be removed without notice.Successful response are streamed as newline-delimited JSON (NDJSON). Each line is a JSON object representing the Dag run state.
 */
export const ensureUseWaitDagRunUntilFinishedData = (
  queryClient: QueryClient,
  clientOptions: Options<WaitDagRunUntilFinishedData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseWaitDagRunUntilFinishedKeyFn(clientOptions),
    queryFn: () => waitDagRunUntilFinished({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Source
 *
 * Get source code using file token.
 */
export const ensureUseGetDagSourceData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagSourceData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagSourceKeyFn(clientOptions),
    queryFn: () => getDagSource({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Stats
 *
 * Get Dag statistics.
 */
export const ensureUseGetDagStatsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagStatsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagStatsKeyFn(clientOptions),
    queryFn: () => getDagStats({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Config
 */
export const ensureUseGetConfigData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConfigData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConfigKeyFn(clientOptions),
    queryFn: () => getConfig({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Config Value
 */
export const ensureUseGetConfigValueData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConfigValueData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConfigValueKeyFn(clientOptions),
    queryFn: () => getConfigValue({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Dag Warnings
 *
 * Get a list of Dag warnings.
 */
export const ensureUseListDagWarningsData = (
  queryClient: QueryClient,
  clientOptions: Options<ListDagWarningsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListDagWarningsKeyFn(clientOptions),
    queryFn: () => listDagWarnings({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dags
 *
 * Get all Dags.
 */
export const ensureUseGetDagsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagsKeyFn(clientOptions),
    queryFn: () => getDags({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag
 *
 * Get basic information about a Dag.
 */
export const ensureUseGetDagData = (queryClient: QueryClient, clientOptions: Options<GetDagData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagKeyFn(clientOptions),
    queryFn: () => getDag({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Details
 *
 * Get details of Dag.
 */
export const ensureUseGetDagDetailsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagDetailsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagDetailsKeyFn(clientOptions),
    queryFn: () => getDagDetails({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Event Log
 */
export const ensureUseGetEventLogData = (
  queryClient: QueryClient,
  clientOptions: Options<GetEventLogData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetEventLogKeyFn(clientOptions),
    queryFn: () => getEventLog({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Event Logs
 *
 * Get all Event Logs.
 */
export const ensureUseGetEventLogsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetEventLogsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetEventLogsKeyFn(clientOptions),
    queryFn: () => getEventLogs({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Extra Links
 *
 * Get extra links for task instance.
 */
export const ensureUseGetExtraLinksData = (
  queryClient: QueryClient,
  clientOptions: Options<GetExtraLinksData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetExtraLinksKeyFn(clientOptions),
    queryFn: () => getExtraLinks({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Import Error
 *
 * Get an import error.
 */
export const ensureUseGetImportErrorData = (
  queryClient: QueryClient,
  clientOptions: Options<GetImportErrorData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetImportErrorKeyFn(clientOptions),
    queryFn: () => getImportError({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Import Errors
 *
 * Get all import errors.
 */
export const ensureUseGetImportErrorsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetImportErrorsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetImportErrorsKeyFn(clientOptions),
    queryFn: () => getImportErrors({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Jobs
 *
 * Get all jobs.
 */
export const ensureUseGetJobsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetJobsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetJobsKeyFn(clientOptions),
    queryFn: () => getJobs({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Plugins
 */
export const ensureUseGetPluginsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetPluginsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPluginsKeyFn(clientOptions),
    queryFn: () => getPlugins({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Import Errors
 */
export const ensureUseImportErrorsData = (
  queryClient: QueryClient,
  clientOptions: Options<ImportErrorsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseImportErrorsKeyFn(clientOptions),
    queryFn: () => importErrors({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Pool
 *
 * Get a pool.
 */
export const ensureUseGetPoolData = (queryClient: QueryClient, clientOptions: Options<GetPoolData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPoolKeyFn(clientOptions),
    queryFn: () => getPool({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Pools
 *
 * Get all pools entries.
 */
export const ensureUseGetPoolsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetPoolsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPoolsKeyFn(clientOptions),
    queryFn: () => getPools({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Providers
 *
 * Get providers.
 */
export const ensureUseGetProvidersData = (
  queryClient: QueryClient,
  clientOptions: Options<GetProvidersData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetProvidersKeyFn(clientOptions),
    queryFn: () => getProviders({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Asset State Store
 *
 * List all state store entries for an asset.
 */
export const ensureUseListAssetStateStoreData = (
  queryClient: QueryClient,
  clientOptions: Options<ListAssetStateStoreData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListAssetStateStoreKeyFn(clientOptions),
    queryFn: () => listAssetStateStore({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Asset State Store
 *
 * Get a single asset state store entry.
 */
export const ensureUseGetAssetStateStoreData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetStateStoreData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetStateStoreKeyFn(clientOptions),
    queryFn: () => getAssetStateStore({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Task State Store
 *
 * List all task state store entries for a task instance.
 */
export const ensureUseListTaskStateStoreData = (
  queryClient: QueryClient,
  clientOptions: Options<ListTaskStateStoreData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListTaskStateStoreKeyFn(clientOptions),
    queryFn: () => listTaskStateStore({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task State Store
 *
 * Get a single task state store entry.
 */
export const ensureUseGetTaskStateStoreData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskStateStoreData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskStateStoreKeyFn(clientOptions),
    queryFn: () => getTaskStateStore({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Xcom Entry
 *
 * Get an XCom entry.
 */
export const ensureUseGetXcomEntryData = (
  queryClient: QueryClient,
  clientOptions: Options<GetXcomEntryData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetXcomEntryKeyFn(clientOptions),
    queryFn: () => getXcomEntry({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Xcom Entries
 *
 * Get all XCom entries.
 *
 * This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCom entries for all Dags.
 */
export const ensureUseGetXcomEntriesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetXcomEntriesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetXcomEntriesKeyFn(clientOptions),
    queryFn: () => getXcomEntries({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instance
 *
 * Get task instance.
 */
export const ensureUseGetTaskInstanceData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstanceData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstanceKeyFn(clientOptions),
    queryFn: () => getTaskInstance({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Mapped Task Instances
 *
 * Get list of mapped task instances.
 */
export const ensureUseGetMappedTaskInstancesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetMappedTaskInstancesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetMappedTaskInstancesKeyFn(clientOptions),
    queryFn: () => getMappedTaskInstances({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instance Dependencies
 *
 * Get dependencies blocking task from getting scheduled.
 */
export const ensureUseGetTaskInstanceDependenciesByMapIndexData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstanceDependenciesByMapIndexData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstanceDependenciesByMapIndexKeyFn(clientOptions),
    queryFn: () =>
      getTaskInstanceDependenciesByMapIndex({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instance Dependencies
 *
 * Get dependencies blocking task from getting scheduled.
 */
export const ensureUseGetTaskInstanceDependenciesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstanceDependenciesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstanceDependenciesKeyFn(clientOptions),
    queryFn: () => getTaskInstanceDependencies({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instance Tries
 *
 * Get list of task instances history.
 */
export const ensureUseGetTaskInstanceTriesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstanceTriesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstanceTriesKeyFn(clientOptions),
    queryFn: () => getTaskInstanceTries({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Mapped Task Instance Tries
 */
export const ensureUseGetMappedTaskInstanceTriesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetMappedTaskInstanceTriesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetMappedTaskInstanceTriesKeyFn(clientOptions),
    queryFn: () => getMappedTaskInstanceTries({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Mapped Task Instance
 *
 * Get task instance.
 */
export const ensureUseGetMappedTaskInstanceData = (
  queryClient: QueryClient,
  clientOptions: Options<GetMappedTaskInstanceData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetMappedTaskInstanceKeyFn(clientOptions),
    queryFn: () => getMappedTaskInstance({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instances
 *
 * Get list of task instances.
 *
 * This endpoint allows specifying `~` as the dag_id, dag_run_id
 * to retrieve task instances for all Dags and Dag runs.
 *
 * Supports two pagination modes:
 *
 * **Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.
 *
 * **Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).
 * When `cursor` is provided, `offset` is ignored and `total_entries` is not returned.
 * ``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is ``null``
 * on the first page.
 */
export const ensureUseGetTaskInstancesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstancesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstancesKeyFn(clientOptions),
    queryFn: () => getTaskInstances({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task Instance Try Details
 *
 * Get task instance details by try number.
 */
export const ensureUseGetTaskInstanceTryDetailsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetTaskInstanceTryDetailsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskInstanceTryDetailsKeyFn(clientOptions),
    queryFn: () => getTaskInstanceTryDetails({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Mapped Task Instance Try Details
 */
export const ensureUseGetMappedTaskInstanceTryDetailsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetMappedTaskInstanceTryDetailsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetMappedTaskInstanceTryDetailsKeyFn(clientOptions),
    queryFn: () => getMappedTaskInstanceTryDetails({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Tasks
 *
 * Get tasks for Dag.
 */
export const ensureUseGetTasksData = (queryClient: QueryClient, clientOptions: Options<GetTasksData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTasksKeyFn(clientOptions),
    queryFn: () => getTasks({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Task
 *
 * Get simplified representation of a task.
 */
export const ensureUseGetTaskData = (queryClient: QueryClient, clientOptions: Options<GetTaskData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetTaskKeyFn(clientOptions),
    queryFn: () => getTask({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Variable
 *
 * Get a variable entry.
 */
export const ensureUseGetVariableData = (
  queryClient: QueryClient,
  clientOptions: Options<GetVariableData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetVariableKeyFn(clientOptions),
    queryFn: () => getVariable({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Variables
 *
 * Get all Variables entries.
 */
export const ensureUseGetVariablesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetVariablesData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetVariablesKeyFn(clientOptions),
    queryFn: () => getVariables({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Log
 *
 * Get logs for a specific task instance.
 */
export const ensureUseGetLogData = (queryClient: QueryClient, clientOptions: Options<GetLogData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetLogKeyFn(clientOptions),
    queryFn: () => getLog({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get External Log Url
 *
 * Get external log URL for a specific task instance.
 */
export const ensureUseGetExternalLogUrlData = (
  queryClient: QueryClient,
  clientOptions: Options<GetExternalLogUrlData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetExternalLogUrlKeyFn(clientOptions),
    queryFn: () => getExternalLogUrl({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Tags
 *
 * Get all Dag tags.
 */
export const ensureUseGetDagTagsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagTagsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagTagsKeyFn(clientOptions),
    queryFn: () => getDagTags({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Version
 *
 * Get one Dag Version.
 */
export const ensureUseGetDagVersionData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagVersionData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagVersionKeyFn(clientOptions),
    queryFn: () => getDagVersion({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Versions
 *
 * Get all Dag Versions.
 *
 * This endpoint allows specifying `~` as the dag_id to retrieve Dag Versions for all Dags.
 */
export const ensureUseGetDagVersionsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagVersionsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagVersionsKeyFn(clientOptions),
    queryFn: () => getDagVersions({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Hitl Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const ensureUseGetHitlDetailData = (
  queryClient: QueryClient,
  clientOptions: Options<GetHitlDetailData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetHitlDetailKeyFn(clientOptions),
    queryFn: () => getHitlDetail({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Hitl Detail Try Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const ensureUseGetHitlDetailTryDetailData = (
  queryClient: QueryClient,
  clientOptions: Options<GetHitlDetailTryDetailData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetHitlDetailTryDetailKeyFn(clientOptions),
    queryFn: () => getHitlDetailTryDetail({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Hitl Details
 *
 * Get Human-in-the-loop details.
 */
export const ensureUseGetHitlDetailsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetHitlDetailsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetHitlDetailsKeyFn(clientOptions),
    queryFn: () => getHitlDetails({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Health
 */
export const ensureUseGetHealthData = (
  queryClient: QueryClient,
  clientOptions: Options<GetHealthData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetHealthKeyFn(clientOptions),
    queryFn: () => getHealth({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Version
 *
 * Get version information.
 */
export const ensureUseGetVersionData = (
  queryClient: QueryClient,
  clientOptions: Options<GetVersionData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetVersionKeyFn(clientOptions),
    queryFn: () => getVersion({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Login
 *
 * Redirect to the login URL depending on the AuthManager configured.
 */
export const ensureUseLoginData = (queryClient: QueryClient, clientOptions: Options<LoginData, true> = {}) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseLoginKeyFn(clientOptions),
    queryFn: () => login({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Logout
 *
 * Logout the user.
 */
export const ensureUseLogoutData = (
  queryClient: QueryClient,
  clientOptions: Options<LogoutData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseLogoutKeyFn(clientOptions),
    queryFn: () => logout({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Auth Menus
 */
export const ensureUseGetAuthMenusData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAuthMenusData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAuthMenusKeyFn(clientOptions),
    queryFn: () => getAuthMenus({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Current User Info
 *
 * Convienently get the current authenticated user information.
 */
export const ensureUseGetCurrentUserInfoData = (
  queryClient: QueryClient,
  clientOptions: Options<GetCurrentUserInfoData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetCurrentUserInfoKeyFn(clientOptions),
    queryFn: () => getCurrentUserInfo({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Assets
 *
 * Get assets. Like the public endpoint, but also supports sorting by group and last asset event timestamp.
 */
export const ensureUseGetAssetsUiData = (
  queryClient: QueryClient,
  clientOptions: Options<GetAssetsUiData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetAssetsUiKeyFn(clientOptions),
    queryFn: () => getAssetsUi({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Next Run Assets
 */
export const ensureUseNextRunAssetsData = (
  queryClient: QueryClient,
  clientOptions: Options<NextRunAssetsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseNextRunAssetsKeyFn(clientOptions),
    queryFn: () => nextRunAssets({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Run Stats
 *
 * Get duration statistics for a DAG based on its historical completed runs.
 */
export const ensureUseGetDagRunStatsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagRunStatsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagRunStatsKeyFn(clientOptions),
    queryFn: () => getDagRunStats({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Partitioned Dag Runs
 *
 * Return PartitionedDagRuns. Filter by dag_id and/or has_created_dag_run_id.
 */
export const ensureUseGetPartitionedDagRunsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetPartitionedDagRunsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPartitionedDagRunsKeyFn(clientOptions),
    queryFn: () => getPartitionedDagRuns({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Pending Partitioned Dag Run
 *
 * Return full details for pending PartitionedDagRun.
 */
export const ensureUseGetPendingPartitionedDagRunData = (
  queryClient: QueryClient,
  clientOptions: Options<GetPendingPartitionedDagRunData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPendingPartitionedDagRunKeyFn(clientOptions),
    queryFn: () => getPendingPartitionedDagRun({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Configs
 *
 * Get configs for UI.
 */
export const ensureUseGetConfigsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetConfigsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetConfigsKeyFn(clientOptions),
    queryFn: () => getConfigs({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Hook Meta Data
 *
 * Retrieve information about available connection types (hook classes) and their parameters.
 */
export const ensureUseHookMetaDataData = (
  queryClient: QueryClient,
  clientOptions: Options<HookMetaDataData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseHookMetaDataKeyFn(clientOptions),
    queryFn: () => hookMetaData({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dags
 *
 * Get Dags with recent DagRun.
 */
export const ensureUseGetDagsUiData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagsUiData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagsUiKeyFn(clientOptions),
    queryFn: () => getDagsUi({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Timetable Types
 *
 * Get timetable types used by readable Dags.
 */
export const ensureUseGetDagTimetableTypesUiData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagTimetableTypesUiData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagTimetableTypesUiKeyFn(clientOptions),
    queryFn: () => getDagTimetableTypesUi({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Latest Run Info
 *
 * Get latest run.
 */
export const ensureUseGetLatestRunInfoData = (
  queryClient: QueryClient,
  clientOptions: Options<GetLatestRunInfoData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetLatestRunInfoKeyFn(clientOptions),
    queryFn: () => getLatestRunInfo({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Run State Counts
 *
 * Return per-Dag DagRun state counts (zero-filled) for the Dag list page.
 */
export const ensureUseGetDagRunStateCountsUiData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagRunStateCountsUiData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagRunStateCountsUiKeyFn(clientOptions),
    queryFn: () => getDagRunStateCountsUi({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dependencies
 *
 * Dependencies graph.
 */
export const ensureUseGetDependenciesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDependenciesData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDependenciesKeyFn(clientOptions),
    queryFn: () => getDependencies({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Historical Metrics
 *
 * Return cluster activity historical metrics.
 */
export const ensureUseHistoricalMetricsData = (
  queryClient: QueryClient,
  clientOptions: Options<HistoricalMetricsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseHistoricalMetricsKeyFn(clientOptions),
    queryFn: () => historicalMetrics({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Dag Stats
 *
 * Return basic Dag stats with counts of Dags in various states.
 */
export const ensureUseDagStatsData = (
  queryClient: QueryClient,
  clientOptions: Options<DagStatsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseDagStatsKeyFn(clientOptions),
    queryFn: () => dagStats({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Deadlines
 *
 * Get deadlines for a Dag run.
 *
 * This endpoint allows specifying `~` as the dag_id and dag_run_id to retrieve Deadlines for all
 * Dags and Dag runs.
 */
export const ensureUseGetDeadlinesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDeadlinesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDeadlinesKeyFn(clientOptions),
    queryFn: () => getDeadlines({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Deadline Alerts
 *
 * Get all deadline alerts defined on a Dag.
 */
export const ensureUseGetDagDeadlineAlertsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagDeadlineAlertsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagDeadlineAlertsKeyFn(clientOptions),
    queryFn: () => getDagDeadlineAlerts({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Structure Data
 *
 * Get Structure Data.
 */
export const ensureUseStructureDataData = (
  queryClient: QueryClient,
  clientOptions: Options<StructureDataData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseStructureDataKeyFn(clientOptions),
    queryFn: () => structureData({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Backfills Ui
 */
export const ensureUseListBackfillsUiData = (
  queryClient: QueryClient,
  clientOptions: Options<ListBackfillsUiData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListBackfillsUiKeyFn(clientOptions),
    queryFn: () => listBackfillsUi({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Dag Structure
 *
 * Return dag structure for grid view.
 */
export const ensureUseGetDagStructureData = (
  queryClient: QueryClient,
  clientOptions: Options<GetDagStructureData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetDagStructureKeyFn(clientOptions),
    queryFn: () => getDagStructure({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Grid Runs
 *
 * Get info about a run for the grid.
 */
export const ensureUseGetGridRunsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetGridRunsData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetGridRunsKeyFn(clientOptions),
    queryFn: () => getGridRuns({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Grid Ti Summaries Stream
 *
 * Stream TI summaries for multiple Dag runs as NDJSON (one JSON line per run).
 *
 * Each line is a serialized ``GridTISummaries`` object emitted as soon as that
 * run's task instances have been processed, so the client can render columns
 * progressively without waiting for all runs to complete.
 *
 * The serialized Dag structure is served from the app-wide ``DBDagBag`` cache
 * (keyed by ``dag_version_id``), which avoids repeated deserialization across
 * runs of the same version *and* across requests.
 */
export const ensureUseGetGridTiSummariesStreamData = (
  queryClient: QueryClient,
  clientOptions: Options<GetGridTiSummariesStreamData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetGridTiSummariesStreamKeyFn(clientOptions),
    queryFn: () => getGridTiSummariesStream({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Gantt Data
 *
 * Get all task instance tries for Gantt chart.
 */
export const ensureUseGetGanttDataData = (
  queryClient: QueryClient,
  clientOptions: Options<GetGanttDataData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetGanttDataKeyFn(clientOptions),
    queryFn: () => getGanttData({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Calendar
 *
 * Get calendar data for a Dag including historical and planned Dag runs.
 */
export const ensureUseGetCalendarData = (
  queryClient: QueryClient,
  clientOptions: Options<GetCalendarData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetCalendarKeyFn(clientOptions),
    queryFn: () => getCalendar({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Calendar Deadlines
 *
 * Get aggregated deadline counts for a Dag, bucketed by deadline_time and missed status.
 */
export const ensureUseGetCalendarDeadlinesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetCalendarDeadlinesData, true>,
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetCalendarDeadlinesKeyFn(clientOptions),
    queryFn: () => getCalendarDeadlines({ ...clientOptions }).then((response) => response.data),
  });
/**
 * List Teams
 */
export const ensureUseListTeamsData = (
  queryClient: QueryClient,
  clientOptions: Options<ListTeamsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseListTeamsKeyFn(clientOptions),
    queryFn: () => listTeams({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Providers
 *
 * Retrieve providers from fab
 */
export const ensureUseGetProviders1Data = (
  queryClient: QueryClient,
  clientOptions: Options<GetProviders1Data, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetProviders1KeyFn(clientOptions),
    queryFn: () => getProviders1({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Logout
 *
 * Clear session cookies and redirect to the login page.
 */
export const ensureUseLogout1Data = (
  queryClient: QueryClient,
  clientOptions: Options<Logout1Data, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseLogout1KeyFn(clientOptions),
    queryFn: () => logout1({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Roles
 *
 * List roles with pagination and ordering.
 */
export const ensureUseGetRolesData = (
  queryClient: QueryClient,
  clientOptions: Options<GetRolesData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetRolesKeyFn(clientOptions),
    queryFn: () => getRoles({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Role
 *
 * Get an existing role.
 */
export const ensureUseGetRoleData = (queryClient: QueryClient, clientOptions: Options<GetRoleData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetRoleKeyFn(clientOptions),
    queryFn: () => getRole({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Permissions
 *
 * List all action-resource (permission) pairs.
 */
export const ensureUseGetPermissionsData = (
  queryClient: QueryClient,
  clientOptions: Options<GetPermissionsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetPermissionsKeyFn(clientOptions),
    queryFn: () => getPermissions({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get Users
 *
 * List users with pagination and ordering.
 */
export const ensureUseGetUsersData = (
  queryClient: QueryClient,
  clientOptions: Options<GetUsersData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetUsersKeyFn(clientOptions),
    queryFn: () => getUsers({ ...clientOptions }).then((response) => response.data),
  });
/**
 * Get User
 *
 * Get a user by username.
 */
export const ensureUseGetUserData = (queryClient: QueryClient, clientOptions: Options<GetUserData, true>) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseGetUserKeyFn(clientOptions),
    queryFn: () => getUser({ ...clientOptions }).then((response) => response.data),
  });
