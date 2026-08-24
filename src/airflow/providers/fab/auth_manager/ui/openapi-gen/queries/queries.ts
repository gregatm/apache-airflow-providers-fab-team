// generated with @7nohe/openapi-react-query-codegen@2.2.0
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import type { Options } from "../requests/sdk.gen";
import {
  bulkConnections,
  bulkDagRuns,
  bulkPools,
  bulkTaskInstances,
  bulkVariables,
  cancelBackfill,
  clearAssetStateStore,
  clearDagRun,
  clearDagRunPartitions,
  clearDagRuns,
  clearTaskStateStore,
  createAssetEvent,
  createBackfill,
  createBackfillDryRun,
  createDefaultConnections,
  createRole,
  createTeam,
  createToken,
  createTokenCli,
  createUser,
  createXcomEntry,
  dagStats,
  deleteAssetQueuedEvents,
  deleteAssetStateStore,
  deleteConnection,
  deleteDag,
  deleteDagAssetQueuedEvent,
  deleteDagAssetQueuedEvents,
  deleteDagRun,
  deletePool,
  deleteRole,
  deleteTaskInstance,
  deleteTaskStateStore,
  deleteTeam,
  deleteUser,
  deleteVariable,
  deleteXcomEntry,
  enqueueConnectionTest,
  favoriteDag,
  generateToken,
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
  getListDagRunsBatch,
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
  getTaskInstancesBatch,
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
  materializeAsset,
  nextRunAssets,
  patchConnection,
  patchDag,
  patchDagRun,
  patchDags,
  patchPool,
  patchRole,
  patchTaskGroupInstances,
  patchTaskGroupInstancesDryRun,
  patchTaskInstance,
  patchTaskInstanceByMapIndex,
  patchTaskInstanceDryRun,
  patchTaskInstanceDryRunByMapIndex,
  patchTaskStateStore,
  patchVariable,
  pauseBackfill,
  postClearTaskInstances,
  postConnection,
  postPool,
  postVariable,
  reparseDagFile,
  setAssetStateStore,
  setTaskStateStore,
  structureData,
  testConnection,
  triggerDagRun,
  unfavoriteDag,
  unpauseBackfill,
  updateHitlDetail,
  updateUser,
  updateXcomEntry,
  waitDagRunUntilFinished,
} from "../requests/sdk.gen";
import {
  BulkConnectionsData,
  BulkConnectionsError,
  BulkDagRunsData,
  BulkDagRunsError,
  BulkPoolsData,
  BulkPoolsError,
  BulkTaskInstancesData,
  BulkTaskInstancesError,
  BulkVariablesData,
  BulkVariablesError,
  CancelBackfillData,
  CancelBackfillError,
  ClearAssetStateStoreData,
  ClearAssetStateStoreError,
  ClearDagRunData,
  ClearDagRunError,
  ClearDagRunPartitionsData,
  ClearDagRunPartitionsError,
  ClearDagRunsData,
  ClearDagRunsError,
  ClearTaskStateStoreData,
  ClearTaskStateStoreError,
  CreateAssetEventData,
  CreateAssetEventError,
  CreateBackfillData,
  CreateBackfillDryRunData,
  CreateBackfillDryRunError,
  CreateBackfillError,
  CreateDefaultConnectionsData,
  CreateDefaultConnectionsError,
  CreateRoleData,
  CreateRoleError,
  CreateTeamData,
  CreateTeamError,
  CreateTokenCliData,
  CreateTokenCliError,
  CreateTokenData,
  CreateTokenError,
  CreateUserData,
  CreateUserError,
  CreateXcomEntryData,
  CreateXcomEntryError,
  DagStatsData,
  DeleteAssetQueuedEventsData,
  DeleteAssetQueuedEventsError,
  DeleteAssetStateStoreData,
  DeleteAssetStateStoreError,
  DeleteConnectionData,
  DeleteConnectionError,
  DeleteDagAssetQueuedEventData,
  DeleteDagAssetQueuedEventError,
  DeleteDagAssetQueuedEventsData,
  DeleteDagAssetQueuedEventsError,
  DeleteDagData,
  DeleteDagError,
  DeleteDagRunData,
  DeleteDagRunError,
  DeletePoolData,
  DeletePoolError,
  DeleteRoleData,
  DeleteRoleError,
  DeleteTaskInstanceData,
  DeleteTaskInstanceError,
  DeleteTaskStateStoreData,
  DeleteTaskStateStoreError,
  DeleteTeamData,
  DeleteTeamError,
  DeleteUserData,
  DeleteUserError,
  DeleteVariableData,
  DeleteVariableError,
  DeleteXcomEntryData,
  DeleteXcomEntryError,
  EnqueueConnectionTestData,
  EnqueueConnectionTestError,
  FavoriteDagData,
  FavoriteDagError,
  GenerateTokenData,
  GenerateTokenError,
  GetAssetAliasData,
  GetAssetAliasError,
  GetAssetAliasesData,
  GetAssetAliasesError,
  GetAssetData,
  GetAssetError,
  GetAssetEventsData,
  GetAssetEventsError,
  GetAssetQueuedEventsData,
  GetAssetQueuedEventsError,
  GetAssetsData,
  GetAssetsError,
  GetAssetStateStoreData,
  GetAssetStateStoreError,
  GetAssetsUiData,
  GetAssetsUiError,
  GetAuthMenusData,
  GetBackfillData,
  GetBackfillError,
  GetCalendarData,
  GetCalendarDeadlinesData,
  GetCalendarDeadlinesError,
  GetCalendarError,
  GetConfigData,
  GetConfigError,
  GetConfigsData,
  GetConfigsError,
  GetConfigValueData,
  GetConfigValueError,
  GetConnectionData,
  GetConnectionError,
  GetConnectionsData,
  GetConnectionsError,
  GetConnectionTestData,
  GetConnectionTestError,
  GetCurrentUserInfoData,
  GetDagAssetQueuedEventData,
  GetDagAssetQueuedEventError,
  GetDagAssetQueuedEventsData,
  GetDagAssetQueuedEventsError,
  GetDagData,
  GetDagDeadlineAlertsData,
  GetDagDeadlineAlertsError,
  GetDagDetailsData,
  GetDagDetailsError,
  GetDagError,
  GetDagRunData,
  GetDagRunError,
  GetDagRunsData,
  GetDagRunsError,
  GetDagRunStateCountsUiData,
  GetDagRunStateCountsUiError,
  GetDagRunStatsData,
  GetDagRunStatsError,
  GetDagsData,
  GetDagsError,
  GetDagSourceData,
  GetDagSourceError,
  GetDagStatsData,
  GetDagStatsError,
  GetDagStructureData,
  GetDagStructureError,
  GetDagsUiData,
  GetDagsUiError,
  GetDagTagsData,
  GetDagTagsError,
  GetDagTimetableTypesUiData,
  GetDagTimetableTypesUiError,
  GetDagVersionData,
  GetDagVersionError,
  GetDagVersionsData,
  GetDagVersionsError,
  GetDeadlinesData,
  GetDeadlinesError,
  GetDependenciesData,
  GetDependenciesError,
  GetEventLogData,
  GetEventLogError,
  GetEventLogsData,
  GetEventLogsError,
  GetExternalLogUrlData,
  GetExternalLogUrlError,
  GetExtraLinksData,
  GetExtraLinksError,
  GetGanttDataData,
  GetGanttDataError,
  GetGridRunsData,
  GetGridRunsError,
  GetGridTiSummariesStreamData,
  GetGridTiSummariesStreamError,
  GetHealthData,
  GetHitlDetailData,
  GetHitlDetailError,
  GetHitlDetailsData,
  GetHitlDetailsError,
  GetHitlDetailTryDetailData,
  GetHitlDetailTryDetailError,
  GetImportErrorData,
  GetImportErrorError,
  GetImportErrorsData,
  GetImportErrorsError,
  GetJobsData,
  GetJobsError,
  GetLatestRunInfoData,
  GetLatestRunInfoError,
  GetListDagRunsBatchData,
  GetListDagRunsBatchError,
  GetLogData,
  GetLogError,
  GetMappedTaskInstanceData,
  GetMappedTaskInstanceError,
  GetMappedTaskInstancesData,
  GetMappedTaskInstancesError,
  GetMappedTaskInstanceTriesData,
  GetMappedTaskInstanceTriesError,
  GetMappedTaskInstanceTryDetailsData,
  GetMappedTaskInstanceTryDetailsError,
  GetPartitionedDagRunsData,
  GetPartitionedDagRunsError,
  GetPendingPartitionedDagRunData,
  GetPendingPartitionedDagRunError,
  GetPermissionsData,
  GetPermissionsError,
  GetPluginsData,
  GetPluginsError,
  GetPoolData,
  GetPoolError,
  GetPoolsData,
  GetPoolsError,
  GetProviders1Data,
  GetProviders1Error,
  GetProvidersData,
  GetProvidersError,
  GetRoleData,
  GetRoleError,
  GetRolesData,
  GetRolesError,
  GetTaskData,
  GetTaskError,
  GetTaskInstanceData,
  GetTaskInstanceDependenciesByMapIndexData,
  GetTaskInstanceDependenciesByMapIndexError,
  GetTaskInstanceDependenciesData,
  GetTaskInstanceDependenciesError,
  GetTaskInstanceError,
  GetTaskInstancesBatchData,
  GetTaskInstancesBatchError,
  GetTaskInstancesData,
  GetTaskInstancesError,
  GetTaskInstanceTriesData,
  GetTaskInstanceTriesError,
  GetTaskInstanceTryDetailsData,
  GetTaskInstanceTryDetailsError,
  GetTasksData,
  GetTasksError,
  GetTaskStateStoreData,
  GetTaskStateStoreError,
  GetUpstreamAssetEventsData,
  GetUpstreamAssetEventsError,
  GetUserData,
  GetUserError,
  GetUsersData,
  GetUsersError,
  GetVariableData,
  GetVariableError,
  GetVariablesData,
  GetVariablesError,
  GetVersionData,
  GetXcomEntriesData,
  GetXcomEntriesError,
  GetXcomEntryData,
  GetXcomEntryError,
  HistoricalMetricsData,
  HistoricalMetricsError,
  HookMetaDataData,
  ImportErrorsData,
  ImportErrorsError,
  ListAssetStateStoreData,
  ListAssetStateStoreError,
  ListBackfillDagRunsData,
  ListBackfillDagRunsError,
  ListBackfillsData,
  ListBackfillsError,
  ListBackfillsUiData,
  ListBackfillsUiError,
  ListDagWarningsData,
  ListDagWarningsError,
  ListTaskStateStoreData,
  ListTaskStateStoreError,
  ListTeamsData,
  ListTeamsError,
  LoginData,
  LoginError,
  Logout1Data,
  LogoutData,
  MaterializeAssetData,
  MaterializeAssetError,
  NextRunAssetsData,
  NextRunAssetsError,
  PatchConnectionData,
  PatchConnectionError,
  PatchDagData,
  PatchDagError,
  PatchDagRunData,
  PatchDagRunError,
  PatchDagsData,
  PatchDagsError,
  PatchPoolData,
  PatchPoolError,
  PatchRoleData,
  PatchRoleError,
  PatchTaskGroupInstancesData,
  PatchTaskGroupInstancesDryRunData,
  PatchTaskGroupInstancesDryRunError,
  PatchTaskGroupInstancesError,
  PatchTaskInstanceByMapIndexData,
  PatchTaskInstanceByMapIndexError,
  PatchTaskInstanceData,
  PatchTaskInstanceDryRunByMapIndexData,
  PatchTaskInstanceDryRunByMapIndexError,
  PatchTaskInstanceDryRunData,
  PatchTaskInstanceDryRunError,
  PatchTaskInstanceError,
  PatchTaskStateStoreData,
  PatchTaskStateStoreError,
  PatchVariableData,
  PatchVariableError,
  PauseBackfillData,
  PauseBackfillError,
  PostClearTaskInstancesData,
  PostClearTaskInstancesError,
  PostConnectionData,
  PostConnectionError,
  PostPoolData,
  PostPoolError,
  PostVariableData,
  PostVariableError,
  ReparseDagFileData,
  ReparseDagFileError,
  SetAssetStateStoreData,
  SetAssetStateStoreError,
  SetTaskStateStoreData,
  SetTaskStateStoreError,
  StructureDataData,
  StructureDataError,
  TestConnectionData,
  TestConnectionError,
  TriggerDagRunData,
  TriggerDagRunError,
  UnfavoriteDagData,
  UnfavoriteDagError,
  UnpauseBackfillData,
  UnpauseBackfillError,
  UpdateHitlDetailData,
  UpdateHitlDetailError,
  UpdateUserData,
  UpdateUserError,
  UpdateXcomEntryData,
  UpdateXcomEntryError,
  WaitDagRunUntilFinishedData,
  WaitDagRunUntilFinishedError,
} from "../requests/types.gen";
import * as Common from "./common";

/**
 * Get Assets
 *
 * Get assets.
 */
export const useGetAssets = <
  TData = Common.GetAssetsDefaultResponse,
  TError = AxiosError<GetAssetsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetsKeyFn(clientOptions, queryKey),
    queryFn: () => getAssets({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Aliases
 *
 * Get asset aliases.
 */
export const useGetAssetAliases = <
  TData = Common.GetAssetAliasesDefaultResponse,
  TError = AxiosError<GetAssetAliasesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetAliasesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetAliasesKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetAliases({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Alias
 *
 * Get an asset alias.
 */
export const useGetAssetAlias = <
  TData = Common.GetAssetAliasDefaultResponse,
  TError = AxiosError<GetAssetAliasError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetAliasData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetAliasKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetAlias({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Events
 *
 * Get asset events.
 */
export const useGetAssetEvents = <
  TData = Common.GetAssetEventsDefaultResponse,
  TError = AxiosError<GetAssetEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetEventsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetEventsKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetEvents({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Queued Events
 *
 * Get queued asset events for an asset.
 */
export const useGetAssetQueuedEvents = <
  TData = Common.GetAssetQueuedEventsDefaultResponse,
  TError = AxiosError<GetAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetQueuedEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetQueuedEventsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getAssetQueuedEvents({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset
 *
 * Get an asset.
 */
export const useGetAsset = <
  TData = Common.GetAssetDefaultResponse,
  TError = AxiosError<GetAssetError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetKeyFn(clientOptions, queryKey),
    queryFn: () => getAsset({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Asset Queued Events
 *
 * Get queued asset events for a Dag.
 */
export const useGetDagAssetQueuedEvents = <
  TData = Common.GetDagAssetQueuedEventsDefaultResponse,
  TError = AxiosError<GetDagAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagAssetQueuedEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagAssetQueuedEventsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagAssetQueuedEvents({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Asset Queued Event
 *
 * Get a queued asset event for a Dag.
 */
export const useGetDagAssetQueuedEvent = <
  TData = Common.GetDagAssetQueuedEventDefaultResponse,
  TError = AxiosError<GetDagAssetQueuedEventError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagAssetQueuedEventData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagAssetQueuedEventKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagAssetQueuedEvent({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfills
 */
export const useListBackfills = <
  TData = Common.ListBackfillsDefaultResponse,
  TError = AxiosError<ListBackfillsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListBackfillsKeyFn(clientOptions, queryKey),
    queryFn: () => listBackfills({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Backfill
 */
export const useGetBackfill = <
  TData = Common.GetBackfillDefaultResponse,
  TError = AxiosError<GetBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetBackfillData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetBackfillKeyFn(clientOptions, queryKey),
    queryFn: () => getBackfill({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfill Dag Runs
 *
 * List Dag runs associated with a backfill, including skipped slots.
 */
export const useListBackfillDagRuns = <
  TData = Common.ListBackfillDagRunsDefaultResponse,
  TError = AxiosError<ListBackfillDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillDagRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListBackfillDagRunsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      listBackfillDagRuns({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Connection
 *
 * Get a connection entry.
 */
export const useGetConnection = <
  TData = Common.GetConnectionDefaultResponse,
  TError = AxiosError<GetConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConnectionKeyFn(clientOptions, queryKey),
    queryFn: () => getConnection({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Connection Test
 *
 * Poll for the status of an enqueued connection test by its token (passed as a header).
 */
export const useGetConnectionTest = <
  TData = Common.GetConnectionTestDefaultResponse,
  TError = AxiosError<GetConnectionTestError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionTestData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConnectionTestKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getConnectionTest({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Connections
 *
 * Get all connection entries.
 */
export const useGetConnections = <
  TData = Common.GetConnectionsDefaultResponse,
  TError = AxiosError<GetConnectionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConnectionsKeyFn(clientOptions, queryKey),
    queryFn: () => getConnections({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run
 */
export const useGetDagRun = <
  TData = Common.GetDagRunDefaultResponse,
  TError = AxiosError<GetDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagRunKeyFn(clientOptions, queryKey),
    queryFn: () => getDagRun({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
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
export const useGetDagRuns = <
  TData = Common.GetDagRunsDefaultResponse,
  TError = AxiosError<GetDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagRunsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagRuns({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Upstream Asset Events
 *
 * If dag run is asset-triggered, return the asset events that triggered it.
 */
export const useGetUpstreamAssetEvents = <
  TData = Common.GetUpstreamAssetEventsDefaultResponse,
  TError = AxiosError<GetUpstreamAssetEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUpstreamAssetEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetUpstreamAssetEventsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getUpstreamAssetEvents({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Experimental: Wait for a dag run to complete, and return task results if requested.
 *
 * 🚧 This is an experimental endpoint and may change or be removed without notice.Successful response are streamed as newline-delimited JSON (NDJSON). Each line is a JSON object representing the Dag run state.
 */
export const useWaitDagRunUntilFinished = <
  TData = Common.WaitDagRunUntilFinishedDefaultResponse,
  TError = AxiosError<WaitDagRunUntilFinishedError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<WaitDagRunUntilFinishedData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseWaitDagRunUntilFinishedKeyFn(clientOptions, queryKey),
    queryFn: () =>
      waitDagRunUntilFinished({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Source
 *
 * Get source code using file token.
 */
export const useGetDagSource = <
  TData = Common.GetDagSourceDefaultResponse,
  TError = AxiosError<GetDagSourceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagSourceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagSourceKeyFn(clientOptions, queryKey),
    queryFn: () => getDagSource({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Stats
 *
 * Get Dag statistics.
 */
export const useGetDagStats = <
  TData = Common.GetDagStatsDefaultResponse,
  TError = AxiosError<GetDagStatsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagStatsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagStatsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagStats({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Config
 */
export const useGetConfig = <
  TData = Common.GetConfigDefaultResponse,
  TError = AxiosError<GetConfigError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConfigKeyFn(clientOptions, queryKey),
    queryFn: () => getConfig({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Config Value
 */
export const useGetConfigValue = <
  TData = Common.GetConfigValueDefaultResponse,
  TError = AxiosError<GetConfigValueError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigValueData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConfigValueKeyFn(clientOptions, queryKey),
    queryFn: () => getConfigValue({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Dag Warnings
 *
 * Get a list of Dag warnings.
 */
export const useListDagWarnings = <
  TData = Common.ListDagWarningsDefaultResponse,
  TError = AxiosError<ListDagWarningsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListDagWarningsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListDagWarningsKeyFn(clientOptions, queryKey),
    queryFn: () => listDagWarnings({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dags
 *
 * Get all Dags.
 */
export const useGetDags = <
  TData = Common.GetDagsDefaultResponse,
  TError = AxiosError<GetDagsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagsKeyFn(clientOptions, queryKey),
    queryFn: () => getDags({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag
 *
 * Get basic information about a Dag.
 */
export const useGetDag = <
  TData = Common.GetDagDefaultResponse,
  TError = AxiosError<GetDagError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagKeyFn(clientOptions, queryKey),
    queryFn: () => getDag({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Details
 *
 * Get details of Dag.
 */
export const useGetDagDetails = <
  TData = Common.GetDagDetailsDefaultResponse,
  TError = AxiosError<GetDagDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagDetailsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Event Log
 */
export const useGetEventLog = <
  TData = Common.GetEventLogDefaultResponse,
  TError = AxiosError<GetEventLogError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetEventLogData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetEventLogKeyFn(clientOptions, queryKey),
    queryFn: () => getEventLog({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Event Logs
 *
 * Get all Event Logs.
 */
export const useGetEventLogs = <
  TData = Common.GetEventLogsDefaultResponse,
  TError = AxiosError<GetEventLogsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetEventLogsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetEventLogsKeyFn(clientOptions, queryKey),
    queryFn: () => getEventLogs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Extra Links
 *
 * Get extra links for task instance.
 */
export const useGetExtraLinks = <
  TData = Common.GetExtraLinksDefaultResponse,
  TError = AxiosError<GetExtraLinksError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetExtraLinksData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetExtraLinksKeyFn(clientOptions, queryKey),
    queryFn: () => getExtraLinks({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Import Error
 *
 * Get an import error.
 */
export const useGetImportError = <
  TData = Common.GetImportErrorDefaultResponse,
  TError = AxiosError<GetImportErrorError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetImportErrorData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetImportErrorKeyFn(clientOptions, queryKey),
    queryFn: () => getImportError({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Import Errors
 *
 * Get all import errors.
 */
export const useGetImportErrors = <
  TData = Common.GetImportErrorsDefaultResponse,
  TError = AxiosError<GetImportErrorsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetImportErrorsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetImportErrorsKeyFn(clientOptions, queryKey),
    queryFn: () => getImportErrors({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Jobs
 *
 * Get all jobs.
 */
export const useGetJobs = <
  TData = Common.GetJobsDefaultResponse,
  TError = AxiosError<GetJobsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetJobsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetJobsKeyFn(clientOptions, queryKey),
    queryFn: () => getJobs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Plugins
 */
export const useGetPlugins = <
  TData = Common.GetPluginsDefaultResponse,
  TError = AxiosError<GetPluginsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPluginsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPluginsKeyFn(clientOptions, queryKey),
    queryFn: () => getPlugins({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Import Errors
 */
export const useImportErrors = <
  TData = Common.ImportErrorsDefaultResponse,
  TError = AxiosError<ImportErrorsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ImportErrorsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseImportErrorsKeyFn(clientOptions, queryKey),
    queryFn: () => importErrors({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Pool
 *
 * Get a pool.
 */
export const useGetPool = <
  TData = Common.GetPoolDefaultResponse,
  TError = AxiosError<GetPoolError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPoolData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPoolKeyFn(clientOptions, queryKey),
    queryFn: () => getPool({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Pools
 *
 * Get all pools entries.
 */
export const useGetPools = <
  TData = Common.GetPoolsDefaultResponse,
  TError = AxiosError<GetPoolsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPoolsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPoolsKeyFn(clientOptions, queryKey),
    queryFn: () => getPools({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Providers
 *
 * Get providers.
 */
export const useGetProviders = <
  TData = Common.GetProvidersDefaultResponse,
  TError = AxiosError<GetProvidersError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetProvidersData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetProvidersKeyFn(clientOptions, queryKey),
    queryFn: () => getProviders({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Asset State Store
 *
 * List all state store entries for an asset.
 */
export const useListAssetStateStore = <
  TData = Common.ListAssetStateStoreDefaultResponse,
  TError = AxiosError<ListAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListAssetStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListAssetStateStoreKeyFn(clientOptions, queryKey),
    queryFn: () =>
      listAssetStateStore({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset State Store
 *
 * Get a single asset state store entry.
 */
export const useGetAssetStateStore = <
  TData = Common.GetAssetStateStoreDefaultResponse,
  TError = AxiosError<GetAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetStateStoreKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getAssetStateStore({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Task State Store
 *
 * List all task state store entries for a task instance.
 */
export const useListTaskStateStore = <
  TData = Common.ListTaskStateStoreDefaultResponse,
  TError = AxiosError<ListTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListTaskStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListTaskStateStoreKeyFn(clientOptions, queryKey),
    queryFn: () =>
      listTaskStateStore({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task State Store
 *
 * Get a single task state store entry.
 */
export const useGetTaskStateStore = <
  TData = Common.GetTaskStateStoreDefaultResponse,
  TError = AxiosError<GetTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskStateStoreKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskStateStore({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Xcom Entry
 *
 * Get an XCom entry.
 */
export const useGetXcomEntry = <
  TData = Common.GetXcomEntryDefaultResponse,
  TError = AxiosError<GetXcomEntryError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetXcomEntryData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetXcomEntryKeyFn(clientOptions, queryKey),
    queryFn: () => getXcomEntry({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Xcom Entries
 *
 * Get all XCom entries.
 *
 * This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCom entries for all Dags.
 */
export const useGetXcomEntries = <
  TData = Common.GetXcomEntriesDefaultResponse,
  TError = AxiosError<GetXcomEntriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetXcomEntriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetXcomEntriesKeyFn(clientOptions, queryKey),
    queryFn: () => getXcomEntries({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance
 *
 * Get task instance.
 */
export const useGetTaskInstance = <
  TData = Common.GetTaskInstanceDefaultResponse,
  TError = AxiosError<GetTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceKeyFn(clientOptions, queryKey),
    queryFn: () => getTaskInstance({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instances
 *
 * Get list of mapped task instances.
 */
export const useGetMappedTaskInstances = <
  TData = Common.GetMappedTaskInstancesDefaultResponse,
  TError = AxiosError<GetMappedTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstancesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetMappedTaskInstancesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getMappedTaskInstances({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance Dependencies
 *
 * Get dependencies blocking task from getting scheduled.
 */
export const useGetTaskInstanceDependenciesByMapIndex = <
  TData = Common.GetTaskInstanceDependenciesByMapIndexDefaultResponse,
  TError = AxiosError<GetTaskInstanceDependenciesByMapIndexError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceDependenciesByMapIndexData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceDependenciesByMapIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceDependenciesByMapIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
/**
 * Get Task Instance Dependencies
 *
 * Get dependencies blocking task from getting scheduled.
 */
export const useGetTaskInstanceDependencies = <
  TData = Common.GetTaskInstanceDependenciesDefaultResponse,
  TError = AxiosError<GetTaskInstanceDependenciesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceDependenciesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceDependenciesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceDependencies({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance Tries
 *
 * Get list of task instances history.
 */
export const useGetTaskInstanceTries = <
  TData = Common.GetTaskInstanceTriesDefaultResponse,
  TError = AxiosError<GetTaskInstanceTriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceTriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceTriesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceTries({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instance Tries
 */
export const useGetMappedTaskInstanceTries = <
  TData = Common.GetMappedTaskInstanceTriesDefaultResponse,
  TError = AxiosError<GetMappedTaskInstanceTriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceTriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetMappedTaskInstanceTriesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getMappedTaskInstanceTries({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instance
 *
 * Get task instance.
 */
export const useGetMappedTaskInstance = <
  TData = Common.GetMappedTaskInstanceDefaultResponse,
  TError = AxiosError<GetMappedTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetMappedTaskInstanceKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getMappedTaskInstance({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
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
export const useGetTaskInstances = <
  TData = Common.GetTaskInstancesDefaultResponse,
  TError = AxiosError<GetTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstancesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstancesKeyFn(clientOptions, queryKey),
    queryFn: () => getTaskInstances({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance Try Details
 *
 * Get task instance details by try number.
 */
export const useGetTaskInstanceTryDetails = <
  TData = Common.GetTaskInstanceTryDetailsDefaultResponse,
  TError = AxiosError<GetTaskInstanceTryDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceTryDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceTryDetailsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceTryDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instance Try Details
 */
export const useGetMappedTaskInstanceTryDetails = <
  TData = Common.GetMappedTaskInstanceTryDetailsDefaultResponse,
  TError = AxiosError<GetMappedTaskInstanceTryDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceTryDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetMappedTaskInstanceTryDetailsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getMappedTaskInstanceTryDetails({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
/**
 * Get Tasks
 *
 * Get tasks for Dag.
 */
export const useGetTasks = <
  TData = Common.GetTasksDefaultResponse,
  TError = AxiosError<GetTasksError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTasksData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTasksKeyFn(clientOptions, queryKey),
    queryFn: () => getTasks({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task
 *
 * Get simplified representation of a task.
 */
export const useGetTask = <
  TData = Common.GetTaskDefaultResponse,
  TError = AxiosError<GetTaskError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetTaskKeyFn(clientOptions, queryKey),
    queryFn: () => getTask({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Variable
 *
 * Get a variable entry.
 */
export const useGetVariable = <
  TData = Common.GetVariableDefaultResponse,
  TError = AxiosError<GetVariableError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVariableData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetVariableKeyFn(clientOptions, queryKey),
    queryFn: () => getVariable({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Variables
 *
 * Get all Variables entries.
 */
export const useGetVariables = <
  TData = Common.GetVariablesDefaultResponse,
  TError = AxiosError<GetVariablesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVariablesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetVariablesKeyFn(clientOptions, queryKey),
    queryFn: () => getVariables({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Log
 *
 * Get logs for a specific task instance.
 */
export const useGetLog = <
  TData = Common.GetLogDefaultResponse,
  TError = AxiosError<GetLogError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetLogData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetLogKeyFn(clientOptions, queryKey),
    queryFn: () => getLog({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get External Log Url
 *
 * Get external log URL for a specific task instance.
 */
export const useGetExternalLogUrl = <
  TData = Common.GetExternalLogUrlDefaultResponse,
  TError = AxiosError<GetExternalLogUrlError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetExternalLogUrlData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetExternalLogUrlKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getExternalLogUrl({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Tags
 *
 * Get all Dag tags.
 */
export const useGetDagTags = <
  TData = Common.GetDagTagsDefaultResponse,
  TError = AxiosError<GetDagTagsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagTagsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagTagsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagTags({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Version
 *
 * Get one Dag Version.
 */
export const useGetDagVersion = <
  TData = Common.GetDagVersionDefaultResponse,
  TError = AxiosError<GetDagVersionError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagVersionData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagVersionKeyFn(clientOptions, queryKey),
    queryFn: () => getDagVersion({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Versions
 *
 * Get all Dag Versions.
 *
 * This endpoint allows specifying `~` as the dag_id to retrieve Dag Versions for all Dags.
 */
export const useGetDagVersions = <
  TData = Common.GetDagVersionsDefaultResponse,
  TError = AxiosError<GetDagVersionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagVersionsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagVersionsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagVersions({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Hitl Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const useGetHitlDetail = <
  TData = Common.GetHitlDetailDefaultResponse,
  TError = AxiosError<GetHitlDetailError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetHitlDetailKeyFn(clientOptions, queryKey),
    queryFn: () => getHitlDetail({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Hitl Detail Try Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const useGetHitlDetailTryDetail = <
  TData = Common.GetHitlDetailTryDetailDefaultResponse,
  TError = AxiosError<GetHitlDetailTryDetailError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailTryDetailData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetHitlDetailTryDetailKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getHitlDetailTryDetail({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Hitl Details
 *
 * Get Human-in-the-loop details.
 */
export const useGetHitlDetails = <
  TData = Common.GetHitlDetailsDefaultResponse,
  TError = AxiosError<GetHitlDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetHitlDetailsKeyFn(clientOptions, queryKey),
    queryFn: () => getHitlDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Health
 */
export const useGetHealth = <
  TData = Common.GetHealthDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHealthData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetHealthKeyFn(clientOptions, queryKey),
    queryFn: () => getHealth({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Version
 *
 * Get version information.
 */
export const useGetVersion = <
  TData = Common.GetVersionDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVersionData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetVersionKeyFn(clientOptions, queryKey),
    queryFn: () => getVersion({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Login
 *
 * Redirect to the login URL depending on the AuthManager configured.
 */
export const useLogin = <
  TData = Common.LoginDefaultResponse,
  TError = AxiosError<LoginError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<LoginData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseLoginKeyFn(clientOptions, queryKey),
    queryFn: () => login({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Logout
 *
 * Logout the user.
 */
export const useLogout = <
  TData = Common.LogoutDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<LogoutData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseLogoutKeyFn(clientOptions, queryKey),
    queryFn: () => logout({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Auth Menus
 */
export const useGetAuthMenus = <
  TData = Common.GetAuthMenusDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAuthMenusData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAuthMenusKeyFn(clientOptions, queryKey),
    queryFn: () => getAuthMenus({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Current User Info
 *
 * Convienently get the current authenticated user information.
 */
export const useGetCurrentUserInfo = <
  TData = Common.GetCurrentUserInfoDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCurrentUserInfoData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetCurrentUserInfoKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getCurrentUserInfo({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Assets
 *
 * Get assets. Like the public endpoint, but also supports sorting by group and last asset event timestamp.
 */
export const useGetAssetsUi = <
  TData = Common.GetAssetsUiDefaultResponse,
  TError = AxiosError<GetAssetsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetAssetsUiKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Next Run Assets
 */
export const useNextRunAssets = <
  TData = Common.NextRunAssetsDefaultResponse,
  TError = AxiosError<NextRunAssetsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<NextRunAssetsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseNextRunAssetsKeyFn(clientOptions, queryKey),
    queryFn: () => nextRunAssets({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run Stats
 *
 * Get duration statistics for a DAG based on its historical completed runs.
 */
export const useGetDagRunStats = <
  TData = Common.GetDagRunStatsDefaultResponse,
  TError = AxiosError<GetDagRunStatsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunStatsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagRunStatsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagRunStats({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Partitioned Dag Runs
 *
 * Return PartitionedDagRuns. Filter by dag_id and/or has_created_dag_run_id.
 */
export const useGetPartitionedDagRuns = <
  TData = Common.GetPartitionedDagRunsDefaultResponse,
  TError = AxiosError<GetPartitionedDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPartitionedDagRunsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPartitionedDagRunsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getPartitionedDagRuns({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Pending Partitioned Dag Run
 *
 * Return full details for pending PartitionedDagRun.
 */
export const useGetPendingPartitionedDagRun = <
  TData = Common.GetPendingPartitionedDagRunDefaultResponse,
  TError = AxiosError<GetPendingPartitionedDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPendingPartitionedDagRunData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPendingPartitionedDagRunKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getPendingPartitionedDagRun({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Configs
 *
 * Get configs for UI.
 */
export const useGetConfigs = <
  TData = Common.GetConfigsDefaultResponse,
  TError = AxiosError<GetConfigsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetConfigsKeyFn(clientOptions, queryKey),
    queryFn: () => getConfigs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Hook Meta Data
 *
 * Retrieve information about available connection types (hook classes) and their parameters.
 */
export const useHookMetaData = <
  TData = Common.HookMetaDataDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<HookMetaDataData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseHookMetaDataKeyFn(clientOptions, queryKey),
    queryFn: () => hookMetaData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dags
 *
 * Get Dags with recent DagRun.
 */
export const useGetDagsUi = <
  TData = Common.GetDagsUiDefaultResponse,
  TError = AxiosError<GetDagsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagsUiKeyFn(clientOptions, queryKey),
    queryFn: () => getDagsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Timetable Types
 *
 * Get timetable types used by readable Dags.
 */
export const useGetDagTimetableTypesUi = <
  TData = Common.GetDagTimetableTypesUiDefaultResponse,
  TError = AxiosError<GetDagTimetableTypesUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagTimetableTypesUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagTimetableTypesUiKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagTimetableTypesUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Latest Run Info
 *
 * Get latest run.
 */
export const useGetLatestRunInfo = <
  TData = Common.GetLatestRunInfoDefaultResponse,
  TError = AxiosError<GetLatestRunInfoError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetLatestRunInfoData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetLatestRunInfoKeyFn(clientOptions, queryKey),
    queryFn: () => getLatestRunInfo({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run State Counts
 *
 * Return per-Dag DagRun state counts (zero-filled) for the Dag list page.
 */
export const useGetDagRunStateCountsUi = <
  TData = Common.GetDagRunStateCountsUiDefaultResponse,
  TError = AxiosError<GetDagRunStateCountsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunStateCountsUiData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagRunStateCountsUiKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagRunStateCountsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dependencies
 *
 * Dependencies graph.
 */
export const useGetDependencies = <
  TData = Common.GetDependenciesDefaultResponse,
  TError = AxiosError<GetDependenciesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDependenciesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDependenciesKeyFn(clientOptions, queryKey),
    queryFn: () => getDependencies({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Historical Metrics
 *
 * Return cluster activity historical metrics.
 */
export const useHistoricalMetrics = <
  TData = Common.HistoricalMetricsDefaultResponse,
  TError = AxiosError<HistoricalMetricsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<HistoricalMetricsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseHistoricalMetricsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      historicalMetrics({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Dag Stats
 *
 * Return basic Dag stats with counts of Dags in various states.
 */
export const useDagStats = <
  TData = Common.DagStatsDefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DagStatsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDagStatsKeyFn(clientOptions, queryKey),
    queryFn: () => dagStats({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Deadlines
 *
 * Get deadlines for a Dag run.
 *
 * This endpoint allows specifying `~` as the dag_id and dag_run_id to retrieve Deadlines for all
 * Dags and Dag runs.
 */
export const useGetDeadlines = <
  TData = Common.GetDeadlinesDefaultResponse,
  TError = AxiosError<GetDeadlinesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDeadlinesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDeadlinesKeyFn(clientOptions, queryKey),
    queryFn: () => getDeadlines({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Deadline Alerts
 *
 * Get all deadline alerts defined on a Dag.
 */
export const useGetDagDeadlineAlerts = <
  TData = Common.GetDagDeadlineAlertsDefaultResponse,
  TError = AxiosError<GetDagDeadlineAlertsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagDeadlineAlertsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagDeadlineAlertsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagDeadlineAlerts({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Structure Data
 *
 * Get Structure Data.
 */
export const useStructureData = <
  TData = Common.StructureDataDefaultResponse,
  TError = AxiosError<StructureDataError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<StructureDataData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseStructureDataKeyFn(clientOptions, queryKey),
    queryFn: () => structureData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfills Ui
 */
export const useListBackfillsUi = <
  TData = Common.ListBackfillsUiDefaultResponse,
  TError = AxiosError<ListBackfillsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListBackfillsUiKeyFn(clientOptions, queryKey),
    queryFn: () => listBackfillsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Structure
 *
 * Return dag structure for grid view.
 */
export const useGetDagStructure = <
  TData = Common.GetDagStructureDefaultResponse,
  TError = AxiosError<GetDagStructureError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagStructureData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetDagStructureKeyFn(clientOptions, queryKey),
    queryFn: () => getDagStructure({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Grid Runs
 *
 * Get info about a run for the grid.
 */
export const useGetGridRuns = <
  TData = Common.GetGridRunsDefaultResponse,
  TError = AxiosError<GetGridRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGridRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetGridRunsKeyFn(clientOptions, queryKey),
    queryFn: () => getGridRuns({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
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
export const useGetGridTiSummariesStream = <
  TData = Common.GetGridTiSummariesStreamDefaultResponse,
  TError = AxiosError<GetGridTiSummariesStreamError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGridTiSummariesStreamData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetGridTiSummariesStreamKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getGridTiSummariesStream({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Gantt Data
 *
 * Get all task instance tries for Gantt chart.
 */
export const useGetGanttData = <
  TData = Common.GetGanttDataDefaultResponse,
  TError = AxiosError<GetGanttDataError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGanttDataData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetGanttDataKeyFn(clientOptions, queryKey),
    queryFn: () => getGanttData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Calendar
 *
 * Get calendar data for a Dag including historical and planned Dag runs.
 */
export const useGetCalendar = <
  TData = Common.GetCalendarDefaultResponse,
  TError = AxiosError<GetCalendarError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCalendarData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetCalendarKeyFn(clientOptions, queryKey),
    queryFn: () => getCalendar({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Calendar Deadlines
 *
 * Get aggregated deadline counts for a Dag, bucketed by deadline_time and missed status.
 */
export const useGetCalendarDeadlines = <
  TData = Common.GetCalendarDeadlinesDefaultResponse,
  TError = AxiosError<GetCalendarDeadlinesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCalendarDeadlinesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetCalendarDeadlinesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getCalendarDeadlines({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Teams
 */
export const useListTeams = <
  TData = Common.ListTeamsDefaultResponse,
  TError = AxiosError<ListTeamsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListTeamsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListTeamsKeyFn(clientOptions, queryKey),
    queryFn: () => listTeams({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Providers
 *
 * Retrieve providers from fab
 */
export const useGetProviders1 = <
  TData = Common.GetProviders1DefaultResponse,
  TError = AxiosError<GetProviders1Error>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetProviders1Data, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetProviders1KeyFn(clientOptions, queryKey),
    queryFn: () => getProviders1({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Logout
 *
 * Clear session cookies and redirect to the login page.
 */
export const useLogout1 = <
  TData = Common.Logout1DefaultResponse,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<Logout1Data, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseLogout1KeyFn(clientOptions, queryKey),
    queryFn: () => logout1({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Roles
 *
 * List roles with pagination and ordering.
 */
export const useGetRoles = <
  TData = Common.GetRolesDefaultResponse,
  TError = AxiosError<GetRolesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetRolesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetRolesKeyFn(clientOptions, queryKey),
    queryFn: () => getRoles({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Role
 *
 * Get an existing role.
 */
export const useGetRole = <
  TData = Common.GetRoleDefaultResponse,
  TError = AxiosError<GetRoleError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetRoleData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetRoleKeyFn(clientOptions, queryKey),
    queryFn: () => getRole({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Permissions
 *
 * List all action-resource (permission) pairs.
 */
export const useGetPermissions = <
  TData = Common.GetPermissionsDefaultResponse,
  TError = AxiosError<GetPermissionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPermissionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetPermissionsKeyFn(clientOptions, queryKey),
    queryFn: () => getPermissions({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Users
 *
 * List users with pagination and ordering.
 */
export const useGetUsers = <
  TData = Common.GetUsersDefaultResponse,
  TError = AxiosError<GetUsersError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUsersData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetUsersKeyFn(clientOptions, queryKey),
    queryFn: () => getUsers({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get User
 *
 * Get a user by username.
 */
export const useGetUser = <
  TData = Common.GetUserDefaultResponse,
  TError = AxiosError<GetUserError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUserData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseGetUserKeyFn(clientOptions, queryKey),
    queryFn: () => getUser({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Create Asset Event
 *
 * Create asset events.
 */
export const useCreateAssetEvent = <
  TData = Common.CreateAssetEventMutationResult,
  TError = AxiosError<CreateAssetEventError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateAssetEventData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateAssetEventData, true>, TContext>({
    mutationKey: Common.UseCreateAssetEventKeyFn(mutationKey),
    mutationFn: (clientOptions) => createAssetEvent(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Materialize Asset
 *
 * Materialize an asset by triggering a Dag run that produces it.
 */
export const useMaterializeAsset = <
  TData = Common.MaterializeAssetMutationResult,
  TError = AxiosError<MaterializeAssetError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<MaterializeAssetData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<MaterializeAssetData, true>, TContext>({
    mutationKey: Common.UseMaterializeAssetKeyFn(mutationKey),
    mutationFn: (clientOptions) => materializeAsset(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Backfill
 */
export const useCreateBackfill = <
  TData = Common.CreateBackfillMutationResult,
  TError = AxiosError<CreateBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateBackfillData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateBackfillData, true>, TContext>({
    mutationKey: Common.UseCreateBackfillKeyFn(mutationKey),
    mutationFn: (clientOptions) => createBackfill(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Backfill Dry Run
 */
export const useCreateBackfillDryRun = <
  TData = Common.CreateBackfillDryRunMutationResult,
  TError = AxiosError<CreateBackfillDryRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateBackfillDryRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateBackfillDryRunData, true>, TContext>({
    mutationKey: Common.UseCreateBackfillDryRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => createBackfillDryRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Enqueue Connection Test
 *
 * Enqueue a connection test for deferred execution on a worker; returns a polling token.
 */
export const useEnqueueConnectionTest = <
  TData = Common.EnqueueConnectionTestMutationResult,
  TError = AxiosError<EnqueueConnectionTestError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<EnqueueConnectionTestData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<EnqueueConnectionTestData, true>, TContext>({
    mutationKey: Common.UseEnqueueConnectionTestKeyFn(mutationKey),
    mutationFn: (clientOptions) => enqueueConnectionTest(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Post Connection
 *
 * Create connection entry.
 */
export const usePostConnection = <
  TData = Common.PostConnectionMutationResult,
  TError = AxiosError<PostConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PostConnectionData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PostConnectionData, true>, TContext>({
    mutationKey: Common.UsePostConnectionKeyFn(mutationKey),
    mutationFn: (clientOptions) => postConnection(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Test Connection
 *
 * Test an API connection.
 *
 * This method first creates an in-memory transient conn_id & exports that to an env var,
 * as some hook classes tries to find out the `conn` from their __init__ method & errors out if not found.
 * It also deletes the conn id env connection after the test.
 */
export const useTestConnection = <
  TData = Common.TestConnectionMutationResult,
  TError = AxiosError<TestConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<TestConnectionData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<TestConnectionData, true>, TContext>({
    mutationKey: Common.UseTestConnectionKeyFn(mutationKey),
    mutationFn: (clientOptions) => testConnection(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Default Connections
 *
 * Create default connections.
 */
export const useCreateDefaultConnections = <
  TData = Common.CreateDefaultConnectionsMutationResult,
  TError = AxiosError<CreateDefaultConnectionsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateDefaultConnectionsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateDefaultConnectionsData, true>, TContext>({
    mutationKey: Common.UseCreateDefaultConnectionsKeyFn(mutationKey),
    mutationFn: (clientOptions) => createDefaultConnections(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Trigger Dag Run
 *
 * Trigger a Dag.
 */
export const useTriggerDagRun = <
  TData = Common.TriggerDagRunMutationResult,
  TError = AxiosError<TriggerDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<TriggerDagRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<TriggerDagRunData, true>, TContext>({
    mutationKey: Common.UseTriggerDagRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => triggerDagRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Clear Dag Run
 */
export const useClearDagRun = <
  TData = Common.ClearDagRunMutationResult,
  TError = AxiosError<ClearDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ClearDagRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ClearDagRunData, true>, TContext>({
    mutationKey: Common.UseClearDagRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => clearDagRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Get List Dag Runs Batch
 *
 * Get a list of Dag Runs.
 */
export const useGetListDagRunsBatch = <
  TData = Common.GetListDagRunsBatchMutationResult,
  TError = AxiosError<GetListDagRunsBatchError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<GetListDagRunsBatchData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<GetListDagRunsBatchData, true>, TContext>({
    mutationKey: Common.UseGetListDagRunsBatchKeyFn(mutationKey),
    mutationFn: (clientOptions) => getListDagRunsBatch(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Clear Dag Runs
 *
 * Clear multiple Dag Runs in a single request.
 */
export const useClearDagRuns = <
  TData = Common.ClearDagRunsMutationResult,
  TError = AxiosError<ClearDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ClearDagRunsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ClearDagRunsData, true>, TContext>({
    mutationKey: Common.UseClearDagRunsKeyFn(mutationKey),
    mutationFn: (clientOptions) => clearDagRuns(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Clear Dag Run Partitions
 *
 * Reset partition_key and partition_date fields on matching Dag Runs.
 */
export const useClearDagRunPartitions = <
  TData = Common.ClearDagRunPartitionsMutationResult,
  TError = AxiosError<ClearDagRunPartitionsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ClearDagRunPartitionsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ClearDagRunPartitionsData, true>, TContext>({
    mutationKey: Common.UseClearDagRunPartitionsKeyFn(mutationKey),
    mutationFn: (clientOptions) => clearDagRunPartitions(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Favorite Dag
 *
 * Mark the Dag as favorite.
 */
export const useFavoriteDag = <
  TData = Common.FavoriteDagMutationResult,
  TError = AxiosError<FavoriteDagError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<FavoriteDagData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<FavoriteDagData, true>, TContext>({
    mutationKey: Common.UseFavoriteDagKeyFn(mutationKey),
    mutationFn: (clientOptions) => favoriteDag(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Unfavorite Dag
 *
 * Unmark the Dag as favorite.
 */
export const useUnfavoriteDag = <
  TData = Common.UnfavoriteDagMutationResult,
  TError = AxiosError<UnfavoriteDagError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<UnfavoriteDagData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<UnfavoriteDagData, true>, TContext>({
    mutationKey: Common.UseUnfavoriteDagKeyFn(mutationKey),
    mutationFn: (clientOptions) => unfavoriteDag(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Post Pool
 *
 * Create a Pool.
 */
export const usePostPool = <
  TData = Common.PostPoolMutationResult,
  TError = AxiosError<PostPoolError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PostPoolData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PostPoolData, true>, TContext>({
    mutationKey: Common.UsePostPoolKeyFn(mutationKey),
    mutationFn: (clientOptions) => postPool(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Xcom Entry
 *
 * Create an XCom entry.
 */
export const useCreateXcomEntry = <
  TData = Common.CreateXcomEntryMutationResult,
  TError = AxiosError<CreateXcomEntryError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateXcomEntryData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateXcomEntryData, true>, TContext>({
    mutationKey: Common.UseCreateXcomEntryKeyFn(mutationKey),
    mutationFn: (clientOptions) => createXcomEntry(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Get Task Instances Batch
 *
 * Get list of task instances.
 */
export const useGetTaskInstancesBatch = <
  TData = Common.GetTaskInstancesBatchMutationResult,
  TError = AxiosError<GetTaskInstancesBatchError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<GetTaskInstancesBatchData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<GetTaskInstancesBatchData, true>, TContext>({
    mutationKey: Common.UseGetTaskInstancesBatchKeyFn(mutationKey),
    mutationFn: (clientOptions) => getTaskInstancesBatch(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Post Clear Task Instances
 *
 * Clear task instances.
 */
export const usePostClearTaskInstances = <
  TData = Common.PostClearTaskInstancesMutationResult,
  TError = AxiosError<PostClearTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PostClearTaskInstancesData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PostClearTaskInstancesData, true>, TContext>({
    mutationKey: Common.UsePostClearTaskInstancesKeyFn(mutationKey),
    mutationFn: (clientOptions) => postClearTaskInstances(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Post Variable
 *
 * Create a variable.
 */
export const usePostVariable = <
  TData = Common.PostVariableMutationResult,
  TError = AxiosError<PostVariableError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PostVariableData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PostVariableData, true>, TContext>({
    mutationKey: Common.UsePostVariableKeyFn(mutationKey),
    mutationFn: (clientOptions) => postVariable(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Generate Token
 *
 * Generate a JWT token for the authenticated user.
 */
export const useGenerateToken = <
  TData = Common.GenerateTokenMutationResult,
  TError = AxiosError<GenerateTokenError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<GenerateTokenData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<GenerateTokenData, true>, TContext>({
    mutationKey: Common.UseGenerateTokenKeyFn(mutationKey),
    mutationFn: (clientOptions) => generateToken(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Token
 *
 * Generate a new API token.
 */
export const useCreateToken = <
  TData = Common.CreateTokenMutationResult,
  TError = AxiosError<CreateTokenError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateTokenData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateTokenData, true>, TContext>({
    mutationKey: Common.UseCreateTokenKeyFn(mutationKey),
    mutationFn: (clientOptions) => createToken(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Token Cli
 *
 * Generate a new CLI API token.
 */
export const useCreateTokenCli = <
  TData = Common.CreateTokenCliMutationResult,
  TError = AxiosError<CreateTokenCliError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateTokenCliData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateTokenCliData, true>, TContext>({
    mutationKey: Common.UseCreateTokenCliKeyFn(mutationKey),
    mutationFn: (clientOptions) => createTokenCli(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Role
 *
 * Create a new role (actions can be empty).
 */
export const useCreateRole = <
  TData = Common.CreateRoleMutationResult,
  TError = AxiosError<CreateRoleError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateRoleData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateRoleData, true>, TContext>({
    mutationKey: Common.UseCreateRoleKeyFn(mutationKey),
    mutationFn: (clientOptions) => createRole(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create User
 */
export const useCreateUser = <
  TData = Common.CreateUserMutationResult,
  TError = AxiosError<CreateUserError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateUserData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateUserData, true>, TContext>({
    mutationKey: Common.UseCreateUserKeyFn(mutationKey),
    mutationFn: (clientOptions) => createUser(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Create Team
 */
export const useCreateTeam = <
  TData = Common.CreateTeamMutationResult,
  TError = AxiosError<CreateTeamError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CreateTeamData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CreateTeamData, true>, TContext>({
    mutationKey: Common.UseCreateTeamKeyFn(mutationKey),
    mutationFn: (clientOptions) => createTeam(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Pause Backfill
 */
export const usePauseBackfill = <
  TData = Common.PauseBackfillMutationResult,
  TError = AxiosError<PauseBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PauseBackfillData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PauseBackfillData, true>, TContext>({
    mutationKey: Common.UsePauseBackfillKeyFn(mutationKey),
    mutationFn: (clientOptions) => pauseBackfill(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Unpause Backfill
 */
export const useUnpauseBackfill = <
  TData = Common.UnpauseBackfillMutationResult,
  TError = AxiosError<UnpauseBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<UnpauseBackfillData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<UnpauseBackfillData, true>, TContext>({
    mutationKey: Common.UseUnpauseBackfillKeyFn(mutationKey),
    mutationFn: (clientOptions) => unpauseBackfill(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Cancel Backfill
 */
export const useCancelBackfill = <
  TData = Common.CancelBackfillMutationResult,
  TError = AxiosError<CancelBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<CancelBackfillData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<CancelBackfillData, true>, TContext>({
    mutationKey: Common.UseCancelBackfillKeyFn(mutationKey),
    mutationFn: (clientOptions) => cancelBackfill(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Set Asset State Store
 *
 * Set an asset state store value. Creates or overwrites the key.
 */
export const useSetAssetStateStore = <
  TData = Common.SetAssetStateStoreMutationResult,
  TError = AxiosError<SetAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<SetAssetStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<SetAssetStateStoreData, true>, TContext>({
    mutationKey: Common.UseSetAssetStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => setAssetStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Set Task State Store
 *
 * Set a task state store value. Creates or overwrites the key.
 */
export const useSetTaskStateStore = <
  TData = Common.SetTaskStateStoreMutationResult,
  TError = AxiosError<SetTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<SetTaskStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<SetTaskStateStoreData, true>, TContext>({
    mutationKey: Common.UseSetTaskStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => setTaskStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Reparse Dag File
 *
 * Request re-parsing a Dag file.
 */
export const useReparseDagFile = <
  TData = Common.ReparseDagFileMutationResult,
  TError = AxiosError<ReparseDagFileError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ReparseDagFileData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ReparseDagFileData, true>, TContext>({
    mutationKey: Common.UseReparseDagFileKeyFn(mutationKey),
    mutationFn: (clientOptions) => reparseDagFile(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Connection
 *
 * Update a connection entry.
 */
export const usePatchConnection = <
  TData = Common.PatchConnectionMutationResult,
  TError = AxiosError<PatchConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchConnectionData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchConnectionData, true>, TContext>({
    mutationKey: Common.UsePatchConnectionKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchConnection(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Bulk Connections
 *
 * Bulk create, update, and delete connections.
 */
export const useBulkConnections = <
  TData = Common.BulkConnectionsMutationResult,
  TError = AxiosError<BulkConnectionsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<BulkConnectionsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<BulkConnectionsData, true>, TContext>({
    mutationKey: Common.UseBulkConnectionsKeyFn(mutationKey),
    mutationFn: (clientOptions) => bulkConnections(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Dag Run
 *
 * Modify a Dag Run.
 */
export const usePatchDagRun = <
  TData = Common.PatchDagRunMutationResult,
  TError = AxiosError<PatchDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchDagRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchDagRunData, true>, TContext>({
    mutationKey: Common.UsePatchDagRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchDagRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Bulk Dag Runs
 *
 * Bulk update or delete Dag Runs.
 */
export const useBulkDagRuns = <
  TData = Common.BulkDagRunsMutationResult,
  TError = AxiosError<BulkDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<BulkDagRunsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<BulkDagRunsData, true>, TContext>({
    mutationKey: Common.UseBulkDagRunsKeyFn(mutationKey),
    mutationFn: (clientOptions) => bulkDagRuns(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Dags
 *
 * Patch multiple Dags.
 *
 * If neither `dag_id_pattern` nor `dag_id_prefix_pattern` is provided, no Dags will be
 * matched regardless of other filters. To match all Dags, pass a wildcard value such as
 * `~` or `%` for `dag_id_pattern`.
 */
export const usePatchDags = <
  TData = Common.PatchDagsMutationResult,
  TError = AxiosError<PatchDagsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchDagsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchDagsData, true>, TContext>({
    mutationKey: Common.UsePatchDagsKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchDags(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Dag
 *
 * Patch the specific Dag.
 */
export const usePatchDag = <
  TData = Common.PatchDagMutationResult,
  TError = AxiosError<PatchDagError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchDagData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchDagData, true>, TContext>({
    mutationKey: Common.UsePatchDagKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchDag(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Pool
 *
 * Update a Pool.
 */
export const usePatchPool = <
  TData = Common.PatchPoolMutationResult,
  TError = AxiosError<PatchPoolError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchPoolData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchPoolData, true>, TContext>({
    mutationKey: Common.UsePatchPoolKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchPool(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Bulk Pools
 *
 * Bulk create, update, and delete pools.
 */
export const useBulkPools = <
  TData = Common.BulkPoolsMutationResult,
  TError = AxiosError<BulkPoolsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<BulkPoolsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<BulkPoolsData, true>, TContext>({
    mutationKey: Common.UseBulkPoolsKeyFn(mutationKey),
    mutationFn: (clientOptions) => bulkPools(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task State Store
 *
 * Update the value of an existing task state store key.
 */
export const usePatchTaskStateStore = <
  TData = Common.PatchTaskStateStoreMutationResult,
  TError = AxiosError<PatchTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskStateStoreData, true>, TContext>({
    mutationKey: Common.UsePatchTaskStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Update Xcom Entry
 *
 * Update an existing XCom entry.
 */
export const useUpdateXcomEntry = <
  TData = Common.UpdateXcomEntryMutationResult,
  TError = AxiosError<UpdateXcomEntryError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<UpdateXcomEntryData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<UpdateXcomEntryData, true>, TContext>({
    mutationKey: Common.UseUpdateXcomEntryKeyFn(mutationKey),
    mutationFn: (clientOptions) => updateXcomEntry(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Instance
 *
 * Update a task instance.
 */
export const usePatchTaskInstance = <
  TData = Common.PatchTaskInstanceMutationResult,
  TError = AxiosError<PatchTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskInstanceData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskInstanceData, true>, TContext>({
    mutationKey: Common.UsePatchTaskInstanceKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskInstance(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Instance
 *
 * Update a task instance.
 */
export const usePatchTaskInstanceByMapIndex = <
  TData = Common.PatchTaskInstanceByMapIndexMutationResult,
  TError = AxiosError<PatchTaskInstanceByMapIndexError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskInstanceByMapIndexData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskInstanceByMapIndexData, true>, TContext>({
    mutationKey: Common.UsePatchTaskInstanceByMapIndexKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskInstanceByMapIndex(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Bulk Task Instances
 *
 * Bulk update, and delete task instances.
 */
export const useBulkTaskInstances = <
  TData = Common.BulkTaskInstancesMutationResult,
  TError = AxiosError<BulkTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<BulkTaskInstancesData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<BulkTaskInstancesData, true>, TContext>({
    mutationKey: Common.UseBulkTaskInstancesKeyFn(mutationKey),
    mutationFn: (clientOptions) => bulkTaskInstances(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Group Instances
 *
 * Update the state of all task instances in a task group.
 */
export const usePatchTaskGroupInstances = <
  TData = Common.PatchTaskGroupInstancesMutationResult,
  TError = AxiosError<PatchTaskGroupInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskGroupInstancesData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskGroupInstancesData, true>, TContext>({
    mutationKey: Common.UsePatchTaskGroupInstancesKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskGroupInstances(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Group Instances Dry Run
 *
 * Dry-run of updating the state of all task instances in a task group.
 */
export const usePatchTaskGroupInstancesDryRun = <
  TData = Common.PatchTaskGroupInstancesDryRunMutationResult,
  TError = AxiosError<PatchTaskGroupInstancesDryRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskGroupInstancesDryRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskGroupInstancesDryRunData, true>, TContext>({
    mutationKey: Common.UsePatchTaskGroupInstancesDryRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskGroupInstancesDryRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Instance Dry Run
 *
 * Update a task instance dry_run mode.
 */
export const usePatchTaskInstanceDryRunByMapIndex = <
  TData = Common.PatchTaskInstanceDryRunByMapIndexMutationResult,
  TError = AxiosError<PatchTaskInstanceDryRunByMapIndexError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskInstanceDryRunByMapIndexData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskInstanceDryRunByMapIndexData, true>, TContext>({
    mutationKey: Common.UsePatchTaskInstanceDryRunByMapIndexKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      patchTaskInstanceDryRunByMapIndex(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Task Instance Dry Run
 *
 * Update a task instance dry_run mode.
 */
export const usePatchTaskInstanceDryRun = <
  TData = Common.PatchTaskInstanceDryRunMutationResult,
  TError = AxiosError<PatchTaskInstanceDryRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchTaskInstanceDryRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchTaskInstanceDryRunData, true>, TContext>({
    mutationKey: Common.UsePatchTaskInstanceDryRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchTaskInstanceDryRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Variable
 *
 * Update a variable by key.
 */
export const usePatchVariable = <
  TData = Common.PatchVariableMutationResult,
  TError = AxiosError<PatchVariableError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchVariableData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchVariableData, true>, TContext>({
    mutationKey: Common.UsePatchVariableKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchVariable(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Bulk Variables
 *
 * Bulk create, update, and delete variables.
 */
export const useBulkVariables = <
  TData = Common.BulkVariablesMutationResult,
  TError = AxiosError<BulkVariablesError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<BulkVariablesData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<BulkVariablesData, true>, TContext>({
    mutationKey: Common.UseBulkVariablesKeyFn(mutationKey),
    mutationFn: (clientOptions) => bulkVariables(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Update Hitl Detail
 *
 * Update a Human-in-the-loop detail.
 */
export const useUpdateHitlDetail = <
  TData = Common.UpdateHitlDetailMutationResult,
  TError = AxiosError<UpdateHitlDetailError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<UpdateHitlDetailData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<UpdateHitlDetailData, true>, TContext>({
    mutationKey: Common.UseUpdateHitlDetailKeyFn(mutationKey),
    mutationFn: (clientOptions) => updateHitlDetail(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Patch Role
 *
 * Update an existing role.
 */
export const usePatchRole = <
  TData = Common.PatchRoleMutationResult,
  TError = AxiosError<PatchRoleError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<PatchRoleData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<PatchRoleData, true>, TContext>({
    mutationKey: Common.UsePatchRoleKeyFn(mutationKey),
    mutationFn: (clientOptions) => patchRole(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Update User
 *
 * Update an existing user.
 */
export const useUpdateUser = <
  TData = Common.UpdateUserMutationResult,
  TError = AxiosError<UpdateUserError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<UpdateUserData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<UpdateUserData, true>, TContext>({
    mutationKey: Common.UseUpdateUserKeyFn(mutationKey),
    mutationFn: (clientOptions) => updateUser(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Asset Queued Events
 *
 * Delete queued asset events for an asset.
 */
export const useDeleteAssetQueuedEvents = <
  TData = Common.DeleteAssetQueuedEventsMutationResult,
  TError = AxiosError<DeleteAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteAssetQueuedEventsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteAssetQueuedEventsData, true>, TContext>({
    mutationKey: Common.UseDeleteAssetQueuedEventsKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteAssetQueuedEvents(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Dag Asset Queued Events
 */
export const useDeleteDagAssetQueuedEvents = <
  TData = Common.DeleteDagAssetQueuedEventsMutationResult,
  TError = AxiosError<DeleteDagAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteDagAssetQueuedEventsData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteDagAssetQueuedEventsData, true>, TContext>({
    mutationKey: Common.UseDeleteDagAssetQueuedEventsKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteDagAssetQueuedEvents(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Dag Asset Queued Event
 *
 * Delete a queued asset event for a Dag.
 */
export const useDeleteDagAssetQueuedEvent = <
  TData = Common.DeleteDagAssetQueuedEventMutationResult,
  TError = AxiosError<DeleteDagAssetQueuedEventError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteDagAssetQueuedEventData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteDagAssetQueuedEventData, true>, TContext>({
    mutationKey: Common.UseDeleteDagAssetQueuedEventKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteDagAssetQueuedEvent(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Connection
 *
 * Delete a connection entry.
 */
export const useDeleteConnection = <
  TData = Common.DeleteConnectionMutationResult,
  TError = AxiosError<DeleteConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteConnectionData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteConnectionData, true>, TContext>({
    mutationKey: Common.UseDeleteConnectionKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteConnection(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Dag Run
 *
 * Delete a Dag Run entry.
 */
export const useDeleteDagRun = <
  TData = Common.DeleteDagRunMutationResult,
  TError = AxiosError<DeleteDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteDagRunData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteDagRunData, true>, TContext>({
    mutationKey: Common.UseDeleteDagRunKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteDagRun(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Dag
 *
 * Delete the specific Dag.
 */
export const useDeleteDag = <
  TData = Common.DeleteDagMutationResult,
  TError = AxiosError<DeleteDagError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteDagData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteDagData, true>, TContext>({
    mutationKey: Common.UseDeleteDagKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteDag(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Pool
 *
 * Delete a pool entry.
 */
export const useDeletePool = <
  TData = Common.DeletePoolMutationResult,
  TError = AxiosError<DeletePoolError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeletePoolData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeletePoolData, true>, TContext>({
    mutationKey: Common.UseDeletePoolKeyFn(mutationKey),
    mutationFn: (clientOptions) => deletePool(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Clear Asset State Store
 *
 * Delete all state store keys for an asset.
 */
export const useClearAssetStateStore = <
  TData = Common.ClearAssetStateStoreMutationResult,
  TError = AxiosError<ClearAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ClearAssetStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ClearAssetStateStoreData, true>, TContext>({
    mutationKey: Common.UseClearAssetStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => clearAssetStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Asset State Store
 *
 * Delete a single asset state store key. No-op if the key does not exist.
 */
export const useDeleteAssetStateStore = <
  TData = Common.DeleteAssetStateStoreMutationResult,
  TError = AxiosError<DeleteAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteAssetStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteAssetStateStoreData, true>, TContext>({
    mutationKey: Common.UseDeleteAssetStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteAssetStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Clear Task State Store
 *
 * Delete all task state store keys for a task instance.
 *
 * When ``all_map_indices=true``, state store is cleared for every map index of the task and
 * the ``map_index`` parameter is ignored.
 */
export const useClearTaskStateStore = <
  TData = Common.ClearTaskStateStoreMutationResult,
  TError = AxiosError<ClearTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ClearTaskStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ClearTaskStateStoreData, true>, TContext>({
    mutationKey: Common.UseClearTaskStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => clearTaskStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Task State Store
 *
 * Delete a single task state store key. No-op if the key does not exist.
 */
export const useDeleteTaskStateStore = <
  TData = Common.DeleteTaskStateStoreMutationResult,
  TError = AxiosError<DeleteTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteTaskStateStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteTaskStateStoreData, true>, TContext>({
    mutationKey: Common.UseDeleteTaskStateStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteTaskStateStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Xcom Entry
 *
 * Delete an XCom entry.
 */
export const useDeleteXcomEntry = <
  TData = Common.DeleteXcomEntryMutationResult,
  TError = AxiosError<DeleteXcomEntryError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteXcomEntryData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteXcomEntryData, true>, TContext>({
    mutationKey: Common.UseDeleteXcomEntryKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteXcomEntry(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Task Instance
 *
 * Delete a task instance.
 */
export const useDeleteTaskInstance = <
  TData = Common.DeleteTaskInstanceMutationResult,
  TError = AxiosError<DeleteTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteTaskInstanceData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteTaskInstanceData, true>, TContext>({
    mutationKey: Common.UseDeleteTaskInstanceKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteTaskInstance(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Variable
 *
 * Delete a variable entry.
 */
export const useDeleteVariable = <
  TData = Common.DeleteVariableMutationResult,
  TError = AxiosError<DeleteVariableError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteVariableData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteVariableData, true>, TContext>({
    mutationKey: Common.UseDeleteVariableKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteVariable(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Role
 *
 * Delete an existing role.
 */
export const useDeleteRole = <
  TData = Common.DeleteRoleMutationResult,
  TError = AxiosError<DeleteRoleError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteRoleData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteRoleData, true>, TContext>({
    mutationKey: Common.UseDeleteRoleKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteRole(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete User
 *
 * Delete a user by username.
 */
export const useDeleteUser = <
  TData = Common.DeleteUserMutationResult,
  TError = AxiosError<DeleteUserError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteUserData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteUserData, true>, TContext>({
    mutationKey: Common.UseDeleteUserKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteUser(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
/**
 * Delete Team
 *
 * Delete a user by username.
 */
export const useDeleteTeam = <
  TData = Common.DeleteTeamMutationResult,
  TError = AxiosError<DeleteTeamError>,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<DeleteTeamData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DeleteTeamData, true>, TContext>({
    mutationKey: Common.UseDeleteTeamKeyFn(mutationKey),
    mutationFn: (clientOptions) => deleteTeam(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
