// generated with @7nohe/openapi-react-query-codegen@2.2.0
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

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
  NextRunAssetsData,
  NextRunAssetsError,
  StructureDataData,
  StructureDataError,
  WaitDagRunUntilFinishedData,
  WaitDagRunUntilFinishedError,
} from "../requests/types.gen";
import * as Common from "./common";

/**
 * Get Assets
 *
 * Get assets.
 */
export const useGetAssetsSuspense = <
  TData = NonNullable<Common.GetAssetsDefaultResponse>,
  TError = AxiosError<GetAssetsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetsKeyFn(clientOptions, queryKey),
    queryFn: () => getAssets({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Aliases
 *
 * Get asset aliases.
 */
export const useGetAssetAliasesSuspense = <
  TData = NonNullable<Common.GetAssetAliasesDefaultResponse>,
  TError = AxiosError<GetAssetAliasesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetAliasesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetAliasesKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetAliases({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Alias
 *
 * Get an asset alias.
 */
export const useGetAssetAliasSuspense = <
  TData = NonNullable<Common.GetAssetAliasDefaultResponse>,
  TError = AxiosError<GetAssetAliasError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetAliasData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetAliasKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetAlias({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Events
 *
 * Get asset events.
 */
export const useGetAssetEventsSuspense = <
  TData = NonNullable<Common.GetAssetEventsDefaultResponse>,
  TError = AxiosError<GetAssetEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetEventsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetEventsKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetEvents({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Asset Queued Events
 *
 * Get queued asset events for an asset.
 */
export const useGetAssetQueuedEventsSuspense = <
  TData = NonNullable<Common.GetAssetQueuedEventsDefaultResponse>,
  TError = AxiosError<GetAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetQueuedEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetAssetSuspense = <
  TData = NonNullable<Common.GetAssetDefaultResponse>,
  TError = AxiosError<GetAssetError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetKeyFn(clientOptions, queryKey),
    queryFn: () => getAsset({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Asset Queued Events
 *
 * Get queued asset events for a Dag.
 */
export const useGetDagAssetQueuedEventsSuspense = <
  TData = NonNullable<Common.GetDagAssetQueuedEventsDefaultResponse>,
  TError = AxiosError<GetDagAssetQueuedEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagAssetQueuedEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDagAssetQueuedEventSuspense = <
  TData = NonNullable<Common.GetDagAssetQueuedEventDefaultResponse>,
  TError = AxiosError<GetDagAssetQueuedEventError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagAssetQueuedEventData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagAssetQueuedEventKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getDagAssetQueuedEvent({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfills
 */
export const useListBackfillsSuspense = <
  TData = NonNullable<Common.ListBackfillsDefaultResponse>,
  TError = AxiosError<ListBackfillsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListBackfillsKeyFn(clientOptions, queryKey),
    queryFn: () => listBackfills({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Backfill
 */
export const useGetBackfillSuspense = <
  TData = NonNullable<Common.GetBackfillDefaultResponse>,
  TError = AxiosError<GetBackfillError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetBackfillData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetBackfillKeyFn(clientOptions, queryKey),
    queryFn: () => getBackfill({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfill Dag Runs
 *
 * List Dag runs associated with a backfill, including skipped slots.
 */
export const useListBackfillDagRunsSuspense = <
  TData = NonNullable<Common.ListBackfillDagRunsDefaultResponse>,
  TError = AxiosError<ListBackfillDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillDagRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetConnectionSuspense = <
  TData = NonNullable<Common.GetConnectionDefaultResponse>,
  TError = AxiosError<GetConnectionError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetConnectionKeyFn(clientOptions, queryKey),
    queryFn: () => getConnection({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Connection Test
 *
 * Poll for the status of an enqueued connection test by its token (passed as a header).
 */
export const useGetConnectionTestSuspense = <
  TData = NonNullable<Common.GetConnectionTestDefaultResponse>,
  TError = AxiosError<GetConnectionTestError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionTestData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetConnectionsSuspense = <
  TData = NonNullable<Common.GetConnectionsDefaultResponse>,
  TError = AxiosError<GetConnectionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConnectionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetConnectionsKeyFn(clientOptions, queryKey),
    queryFn: () => getConnections({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run
 */
export const useGetDagRunSuspense = <
  TData = NonNullable<Common.GetDagRunDefaultResponse>,
  TError = AxiosError<GetDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDagRunsSuspense = <
  TData = NonNullable<Common.GetDagRunsDefaultResponse>,
  TError = AxiosError<GetDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagRunsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagRuns({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Upstream Asset Events
 *
 * If dag run is asset-triggered, return the asset events that triggered it.
 */
export const useGetUpstreamAssetEventsSuspense = <
  TData = NonNullable<Common.GetUpstreamAssetEventsDefaultResponse>,
  TError = AxiosError<GetUpstreamAssetEventsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUpstreamAssetEventsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useWaitDagRunUntilFinishedSuspense = <
  TData = NonNullable<Common.WaitDagRunUntilFinishedDefaultResponse>,
  TError = AxiosError<WaitDagRunUntilFinishedError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<WaitDagRunUntilFinishedData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDagSourceSuspense = <
  TData = NonNullable<Common.GetDagSourceDefaultResponse>,
  TError = AxiosError<GetDagSourceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagSourceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagSourceKeyFn(clientOptions, queryKey),
    queryFn: () => getDagSource({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Stats
 *
 * Get Dag statistics.
 */
export const useGetDagStatsSuspense = <
  TData = NonNullable<Common.GetDagStatsDefaultResponse>,
  TError = AxiosError<GetDagStatsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagStatsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagStatsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagStats({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Config
 */
export const useGetConfigSuspense = <
  TData = NonNullable<Common.GetConfigDefaultResponse>,
  TError = AxiosError<GetConfigError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetConfigKeyFn(clientOptions, queryKey),
    queryFn: () => getConfig({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Config Value
 */
export const useGetConfigValueSuspense = <
  TData = NonNullable<Common.GetConfigValueDefaultResponse>,
  TError = AxiosError<GetConfigValueError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigValueData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetConfigValueKeyFn(clientOptions, queryKey),
    queryFn: () => getConfigValue({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Dag Warnings
 *
 * Get a list of Dag warnings.
 */
export const useListDagWarningsSuspense = <
  TData = NonNullable<Common.ListDagWarningsDefaultResponse>,
  TError = AxiosError<ListDagWarningsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListDagWarningsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListDagWarningsKeyFn(clientOptions, queryKey),
    queryFn: () => listDagWarnings({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dags
 *
 * Get all Dags.
 */
export const useGetDagsSuspense = <
  TData = NonNullable<Common.GetDagsDefaultResponse>,
  TError = AxiosError<GetDagsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagsKeyFn(clientOptions, queryKey),
    queryFn: () => getDags({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag
 *
 * Get basic information about a Dag.
 */
export const useGetDagSuspense = <
  TData = NonNullable<Common.GetDagDefaultResponse>,
  TError = AxiosError<GetDagError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagKeyFn(clientOptions, queryKey),
    queryFn: () => getDag({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Details
 *
 * Get details of Dag.
 */
export const useGetDagDetailsSuspense = <
  TData = NonNullable<Common.GetDagDetailsDefaultResponse>,
  TError = AxiosError<GetDagDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagDetailsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Event Log
 */
export const useGetEventLogSuspense = <
  TData = NonNullable<Common.GetEventLogDefaultResponse>,
  TError = AxiosError<GetEventLogError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetEventLogData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetEventLogKeyFn(clientOptions, queryKey),
    queryFn: () => getEventLog({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Event Logs
 *
 * Get all Event Logs.
 */
export const useGetEventLogsSuspense = <
  TData = NonNullable<Common.GetEventLogsDefaultResponse>,
  TError = AxiosError<GetEventLogsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetEventLogsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetEventLogsKeyFn(clientOptions, queryKey),
    queryFn: () => getEventLogs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Extra Links
 *
 * Get extra links for task instance.
 */
export const useGetExtraLinksSuspense = <
  TData = NonNullable<Common.GetExtraLinksDefaultResponse>,
  TError = AxiosError<GetExtraLinksError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetExtraLinksData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetExtraLinksKeyFn(clientOptions, queryKey),
    queryFn: () => getExtraLinks({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Import Error
 *
 * Get an import error.
 */
export const useGetImportErrorSuspense = <
  TData = NonNullable<Common.GetImportErrorDefaultResponse>,
  TError = AxiosError<GetImportErrorError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetImportErrorData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetImportErrorKeyFn(clientOptions, queryKey),
    queryFn: () => getImportError({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Import Errors
 *
 * Get all import errors.
 */
export const useGetImportErrorsSuspense = <
  TData = NonNullable<Common.GetImportErrorsDefaultResponse>,
  TError = AxiosError<GetImportErrorsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetImportErrorsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetImportErrorsKeyFn(clientOptions, queryKey),
    queryFn: () => getImportErrors({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Jobs
 *
 * Get all jobs.
 */
export const useGetJobsSuspense = <
  TData = NonNullable<Common.GetJobsDefaultResponse>,
  TError = AxiosError<GetJobsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetJobsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetJobsKeyFn(clientOptions, queryKey),
    queryFn: () => getJobs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Plugins
 */
export const useGetPluginsSuspense = <
  TData = NonNullable<Common.GetPluginsDefaultResponse>,
  TError = AxiosError<GetPluginsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPluginsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetPluginsKeyFn(clientOptions, queryKey),
    queryFn: () => getPlugins({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Import Errors
 */
export const useImportErrorsSuspense = <
  TData = NonNullable<Common.ImportErrorsDefaultResponse>,
  TError = AxiosError<ImportErrorsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ImportErrorsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseImportErrorsKeyFn(clientOptions, queryKey),
    queryFn: () => importErrors({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Pool
 *
 * Get a pool.
 */
export const useGetPoolSuspense = <
  TData = NonNullable<Common.GetPoolDefaultResponse>,
  TError = AxiosError<GetPoolError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPoolData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetPoolKeyFn(clientOptions, queryKey),
    queryFn: () => getPool({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Pools
 *
 * Get all pools entries.
 */
export const useGetPoolsSuspense = <
  TData = NonNullable<Common.GetPoolsDefaultResponse>,
  TError = AxiosError<GetPoolsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPoolsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetPoolsKeyFn(clientOptions, queryKey),
    queryFn: () => getPools({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Providers
 *
 * Get providers.
 */
export const useGetProvidersSuspense = <
  TData = NonNullable<Common.GetProvidersDefaultResponse>,
  TError = AxiosError<GetProvidersError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetProvidersData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetProvidersKeyFn(clientOptions, queryKey),
    queryFn: () => getProviders({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Asset State Store
 *
 * List all state store entries for an asset.
 */
export const useListAssetStateStoreSuspense = <
  TData = NonNullable<Common.ListAssetStateStoreDefaultResponse>,
  TError = AxiosError<ListAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListAssetStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetAssetStateStoreSuspense = <
  TData = NonNullable<Common.GetAssetStateStoreDefaultResponse>,
  TError = AxiosError<GetAssetStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useListTaskStateStoreSuspense = <
  TData = NonNullable<Common.ListTaskStateStoreDefaultResponse>,
  TError = AxiosError<ListTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListTaskStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTaskStateStoreSuspense = <
  TData = NonNullable<Common.GetTaskStateStoreDefaultResponse>,
  TError = AxiosError<GetTaskStateStoreError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskStateStoreData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetXcomEntrySuspense = <
  TData = NonNullable<Common.GetXcomEntryDefaultResponse>,
  TError = AxiosError<GetXcomEntryError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetXcomEntryData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetXcomEntriesSuspense = <
  TData = NonNullable<Common.GetXcomEntriesDefaultResponse>,
  TError = AxiosError<GetXcomEntriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetXcomEntriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetXcomEntriesKeyFn(clientOptions, queryKey),
    queryFn: () => getXcomEntries({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance
 *
 * Get task instance.
 */
export const useGetTaskInstanceSuspense = <
  TData = NonNullable<Common.GetTaskInstanceDefaultResponse>,
  TError = AxiosError<GetTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceKeyFn(clientOptions, queryKey),
    queryFn: () => getTaskInstance({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instances
 *
 * Get list of mapped task instances.
 */
export const useGetMappedTaskInstancesSuspense = <
  TData = NonNullable<Common.GetMappedTaskInstancesDefaultResponse>,
  TError = AxiosError<GetMappedTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstancesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTaskInstanceDependenciesByMapIndexSuspense = <
  TData = NonNullable<Common.GetTaskInstanceDependenciesByMapIndexDefaultResponse>,
  TError = AxiosError<GetTaskInstanceDependenciesByMapIndexError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceDependenciesByMapIndexData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTaskInstanceDependenciesSuspense = <
  TData = NonNullable<Common.GetTaskInstanceDependenciesDefaultResponse>,
  TError = AxiosError<GetTaskInstanceDependenciesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceDependenciesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTaskInstanceTriesSuspense = <
  TData = NonNullable<Common.GetTaskInstanceTriesDefaultResponse>,
  TError = AxiosError<GetTaskInstanceTriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceTriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceTriesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceTries({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instance Tries
 */
export const useGetMappedTaskInstanceTriesSuspense = <
  TData = NonNullable<Common.GetMappedTaskInstanceTriesDefaultResponse>,
  TError = AxiosError<GetMappedTaskInstanceTriesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceTriesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetMappedTaskInstanceSuspense = <
  TData = NonNullable<Common.GetMappedTaskInstanceDefaultResponse>,
  TError = AxiosError<GetMappedTaskInstanceError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTaskInstancesSuspense = <
  TData = NonNullable<Common.GetTaskInstancesDefaultResponse>,
  TError = AxiosError<GetTaskInstancesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstancesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstancesKeyFn(clientOptions, queryKey),
    queryFn: () => getTaskInstances({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task Instance Try Details
 *
 * Get task instance details by try number.
 */
export const useGetTaskInstanceTryDetailsSuspense = <
  TData = NonNullable<Common.GetTaskInstanceTryDetailsDefaultResponse>,
  TError = AxiosError<GetTaskInstanceTryDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskInstanceTryDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTaskInstanceTryDetailsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getTaskInstanceTryDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Mapped Task Instance Try Details
 */
export const useGetMappedTaskInstanceTryDetailsSuspense = <
  TData = NonNullable<Common.GetMappedTaskInstanceTryDetailsDefaultResponse>,
  TError = AxiosError<GetMappedTaskInstanceTryDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetMappedTaskInstanceTryDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetTasksSuspense = <
  TData = NonNullable<Common.GetTasksDefaultResponse>,
  TError = AxiosError<GetTasksError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTasksData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTasksKeyFn(clientOptions, queryKey),
    queryFn: () => getTasks({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Task
 *
 * Get simplified representation of a task.
 */
export const useGetTaskSuspense = <
  TData = NonNullable<Common.GetTaskDefaultResponse>,
  TError = AxiosError<GetTaskError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetTaskData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetTaskKeyFn(clientOptions, queryKey),
    queryFn: () => getTask({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Variable
 *
 * Get a variable entry.
 */
export const useGetVariableSuspense = <
  TData = NonNullable<Common.GetVariableDefaultResponse>,
  TError = AxiosError<GetVariableError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVariableData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetVariableKeyFn(clientOptions, queryKey),
    queryFn: () => getVariable({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Variables
 *
 * Get all Variables entries.
 */
export const useGetVariablesSuspense = <
  TData = NonNullable<Common.GetVariablesDefaultResponse>,
  TError = AxiosError<GetVariablesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVariablesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetVariablesKeyFn(clientOptions, queryKey),
    queryFn: () => getVariables({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Log
 *
 * Get logs for a specific task instance.
 */
export const useGetLogSuspense = <
  TData = NonNullable<Common.GetLogDefaultResponse>,
  TError = AxiosError<GetLogError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetLogData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetLogKeyFn(clientOptions, queryKey),
    queryFn: () => getLog({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get External Log Url
 *
 * Get external log URL for a specific task instance.
 */
export const useGetExternalLogUrlSuspense = <
  TData = NonNullable<Common.GetExternalLogUrlDefaultResponse>,
  TError = AxiosError<GetExternalLogUrlError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetExternalLogUrlData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDagTagsSuspense = <
  TData = NonNullable<Common.GetDagTagsDefaultResponse>,
  TError = AxiosError<GetDagTagsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagTagsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagTagsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagTags({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Version
 *
 * Get one Dag Version.
 */
export const useGetDagVersionSuspense = <
  TData = NonNullable<Common.GetDagVersionDefaultResponse>,
  TError = AxiosError<GetDagVersionError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagVersionData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDagVersionsSuspense = <
  TData = NonNullable<Common.GetDagVersionsDefaultResponse>,
  TError = AxiosError<GetDagVersionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagVersionsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagVersionsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagVersions({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Hitl Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const useGetHitlDetailSuspense = <
  TData = NonNullable<Common.GetHitlDetailDefaultResponse>,
  TError = AxiosError<GetHitlDetailError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetHitlDetailKeyFn(clientOptions, queryKey),
    queryFn: () => getHitlDetail({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Hitl Detail Try Detail
 *
 * Get a Human-in-the-loop detail of a specific task instance.
 */
export const useGetHitlDetailTryDetailSuspense = <
  TData = NonNullable<Common.GetHitlDetailTryDetailDefaultResponse>,
  TError = AxiosError<GetHitlDetailTryDetailError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailTryDetailData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetHitlDetailsSuspense = <
  TData = NonNullable<Common.GetHitlDetailsDefaultResponse>,
  TError = AxiosError<GetHitlDetailsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHitlDetailsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetHitlDetailsKeyFn(clientOptions, queryKey),
    queryFn: () => getHitlDetails({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Health
 */
export const useGetHealthSuspense = <
  TData = NonNullable<Common.GetHealthDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetHealthData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetHealthKeyFn(clientOptions, queryKey),
    queryFn: () => getHealth({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Version
 *
 * Get version information.
 */
export const useGetVersionSuspense = <
  TData = NonNullable<Common.GetVersionDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetVersionData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetVersionKeyFn(clientOptions, queryKey),
    queryFn: () => getVersion({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Login
 *
 * Redirect to the login URL depending on the AuthManager configured.
 */
export const useLoginSuspense = <
  TData = NonNullable<Common.LoginDefaultResponse>,
  TError = AxiosError<LoginError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<LoginData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseLoginKeyFn(clientOptions, queryKey),
    queryFn: () => login({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Logout
 *
 * Logout the user.
 */
export const useLogoutSuspense = <
  TData = NonNullable<Common.LogoutDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<LogoutData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseLogoutKeyFn(clientOptions, queryKey),
    queryFn: () => logout({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Auth Menus
 */
export const useGetAuthMenusSuspense = <
  TData = NonNullable<Common.GetAuthMenusDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAuthMenusData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAuthMenusKeyFn(clientOptions, queryKey),
    queryFn: () => getAuthMenus({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Current User Info
 *
 * Convienently get the current authenticated user information.
 */
export const useGetCurrentUserInfoSuspense = <
  TData = NonNullable<Common.GetCurrentUserInfoDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCurrentUserInfoData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetAssetsUiSuspense = <
  TData = NonNullable<Common.GetAssetsUiDefaultResponse>,
  TError = AxiosError<GetAssetsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetAssetsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetAssetsUiKeyFn(clientOptions, queryKey),
    queryFn: () => getAssetsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Next Run Assets
 */
export const useNextRunAssetsSuspense = <
  TData = NonNullable<Common.NextRunAssetsDefaultResponse>,
  TError = AxiosError<NextRunAssetsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<NextRunAssetsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseNextRunAssetsKeyFn(clientOptions, queryKey),
    queryFn: () => nextRunAssets({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run Stats
 *
 * Get duration statistics for a DAG based on its historical completed runs.
 */
export const useGetDagRunStatsSuspense = <
  TData = NonNullable<Common.GetDagRunStatsDefaultResponse>,
  TError = AxiosError<GetDagRunStatsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunStatsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagRunStatsKeyFn(clientOptions, queryKey),
    queryFn: () => getDagRunStats({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Partitioned Dag Runs
 *
 * Return PartitionedDagRuns. Filter by dag_id and/or has_created_dag_run_id.
 */
export const useGetPartitionedDagRunsSuspense = <
  TData = NonNullable<Common.GetPartitionedDagRunsDefaultResponse>,
  TError = AxiosError<GetPartitionedDagRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPartitionedDagRunsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetPendingPartitionedDagRunSuspense = <
  TData = NonNullable<Common.GetPendingPartitionedDagRunDefaultResponse>,
  TError = AxiosError<GetPendingPartitionedDagRunError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPendingPartitionedDagRunData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetConfigsSuspense = <
  TData = NonNullable<Common.GetConfigsDefaultResponse>,
  TError = AxiosError<GetConfigsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetConfigsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetConfigsKeyFn(clientOptions, queryKey),
    queryFn: () => getConfigs({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Hook Meta Data
 *
 * Retrieve information about available connection types (hook classes) and their parameters.
 */
export const useHookMetaDataSuspense = <
  TData = NonNullable<Common.HookMetaDataDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<HookMetaDataData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseHookMetaDataKeyFn(clientOptions, queryKey),
    queryFn: () => hookMetaData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dags
 *
 * Get Dags with recent DagRun.
 */
export const useGetDagsUiSuspense = <
  TData = NonNullable<Common.GetDagsUiDefaultResponse>,
  TError = AxiosError<GetDagsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagsUiKeyFn(clientOptions, queryKey),
    queryFn: () => getDagsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Timetable Types
 *
 * Get timetable types used by readable Dags.
 */
export const useGetDagTimetableTypesUiSuspense = <
  TData = NonNullable<Common.GetDagTimetableTypesUiDefaultResponse>,
  TError = AxiosError<GetDagTimetableTypesUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagTimetableTypesUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetLatestRunInfoSuspense = <
  TData = NonNullable<Common.GetLatestRunInfoDefaultResponse>,
  TError = AxiosError<GetLatestRunInfoError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetLatestRunInfoData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetLatestRunInfoKeyFn(clientOptions, queryKey),
    queryFn: () => getLatestRunInfo({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Run State Counts
 *
 * Return per-Dag DagRun state counts (zero-filled) for the Dag list page.
 */
export const useGetDagRunStateCountsUiSuspense = <
  TData = NonNullable<Common.GetDagRunStateCountsUiDefaultResponse>,
  TError = AxiosError<GetDagRunStateCountsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagRunStateCountsUiData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDependenciesSuspense = <
  TData = NonNullable<Common.GetDependenciesDefaultResponse>,
  TError = AxiosError<GetDependenciesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDependenciesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDependenciesKeyFn(clientOptions, queryKey),
    queryFn: () => getDependencies({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Historical Metrics
 *
 * Return cluster activity historical metrics.
 */
export const useHistoricalMetricsSuspense = <
  TData = NonNullable<Common.HistoricalMetricsDefaultResponse>,
  TError = AxiosError<HistoricalMetricsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<HistoricalMetricsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useDagStatsSuspense = <
  TData = NonNullable<Common.DagStatsDefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DagStatsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetDeadlinesSuspense = <
  TData = NonNullable<Common.GetDeadlinesDefaultResponse>,
  TError = AxiosError<GetDeadlinesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDeadlinesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDeadlinesKeyFn(clientOptions, queryKey),
    queryFn: () => getDeadlines({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Deadline Alerts
 *
 * Get all deadline alerts defined on a Dag.
 */
export const useGetDagDeadlineAlertsSuspense = <
  TData = NonNullable<Common.GetDagDeadlineAlertsDefaultResponse>,
  TError = AxiosError<GetDagDeadlineAlertsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagDeadlineAlertsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useStructureDataSuspense = <
  TData = NonNullable<Common.StructureDataDefaultResponse>,
  TError = AxiosError<StructureDataError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<StructureDataData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseStructureDataKeyFn(clientOptions, queryKey),
    queryFn: () => structureData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Backfills Ui
 */
export const useListBackfillsUiSuspense = <
  TData = NonNullable<Common.ListBackfillsUiDefaultResponse>,
  TError = AxiosError<ListBackfillsUiError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListBackfillsUiData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListBackfillsUiKeyFn(clientOptions, queryKey),
    queryFn: () => listBackfillsUi({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Dag Structure
 *
 * Return dag structure for grid view.
 */
export const useGetDagStructureSuspense = <
  TData = NonNullable<Common.GetDagStructureDefaultResponse>,
  TError = AxiosError<GetDagStructureError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetDagStructureData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetDagStructureKeyFn(clientOptions, queryKey),
    queryFn: () => getDagStructure({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Grid Runs
 *
 * Get info about a run for the grid.
 */
export const useGetGridRunsSuspense = <
  TData = NonNullable<Common.GetGridRunsDefaultResponse>,
  TError = AxiosError<GetGridRunsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGridRunsData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetGridTiSummariesStreamSuspense = <
  TData = NonNullable<Common.GetGridTiSummariesStreamDefaultResponse>,
  TError = AxiosError<GetGridTiSummariesStreamError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGridTiSummariesStreamData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
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
export const useGetGanttDataSuspense = <
  TData = NonNullable<Common.GetGanttDataDefaultResponse>,
  TError = AxiosError<GetGanttDataError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetGanttDataData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetGanttDataKeyFn(clientOptions, queryKey),
    queryFn: () => getGanttData({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Calendar
 *
 * Get calendar data for a Dag including historical and planned Dag runs.
 */
export const useGetCalendarSuspense = <
  TData = NonNullable<Common.GetCalendarDefaultResponse>,
  TError = AxiosError<GetCalendarError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCalendarData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetCalendarKeyFn(clientOptions, queryKey),
    queryFn: () => getCalendar({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Calendar Deadlines
 *
 * Get aggregated deadline counts for a Dag, bucketed by deadline_time and missed status.
 */
export const useGetCalendarDeadlinesSuspense = <
  TData = NonNullable<Common.GetCalendarDeadlinesDefaultResponse>,
  TError = AxiosError<GetCalendarDeadlinesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetCalendarDeadlinesData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetCalendarDeadlinesKeyFn(clientOptions, queryKey),
    queryFn: () =>
      getCalendarDeadlines({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * List Teams
 */
export const useListTeamsSuspense = <
  TData = NonNullable<Common.ListTeamsDefaultResponse>,
  TError = AxiosError<ListTeamsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ListTeamsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListTeamsKeyFn(clientOptions, queryKey),
    queryFn: () => listTeams({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Providers
 *
 * Retrieve providers from fab
 */
export const useGetProviders1Suspense = <
  TData = NonNullable<Common.GetProviders1DefaultResponse>,
  TError = AxiosError<GetProviders1Error>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetProviders1Data, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetProviders1KeyFn(clientOptions, queryKey),
    queryFn: () => getProviders1({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Logout
 *
 * Clear session cookies and redirect to the login page.
 */
export const useLogout1Suspense = <
  TData = NonNullable<Common.Logout1DefaultResponse>,
  TError = AxiosError<unknown>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<Logout1Data, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseLogout1KeyFn(clientOptions, queryKey),
    queryFn: () => logout1({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Roles
 *
 * List roles with pagination and ordering.
 */
export const useGetRolesSuspense = <
  TData = NonNullable<Common.GetRolesDefaultResponse>,
  TError = AxiosError<GetRolesError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetRolesData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetRolesKeyFn(clientOptions, queryKey),
    queryFn: () => getRoles({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Role
 *
 * Get an existing role.
 */
export const useGetRoleSuspense = <
  TData = NonNullable<Common.GetRoleDefaultResponse>,
  TError = AxiosError<GetRoleError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetRoleData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetRoleKeyFn(clientOptions, queryKey),
    queryFn: () => getRole({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Permissions
 *
 * List all action-resource (permission) pairs.
 */
export const useGetPermissionsSuspense = <
  TData = NonNullable<Common.GetPermissionsDefaultResponse>,
  TError = AxiosError<GetPermissionsError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetPermissionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetPermissionsKeyFn(clientOptions, queryKey),
    queryFn: () => getPermissions({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get Users
 *
 * List users with pagination and ordering.
 */
export const useGetUsersSuspense = <
  TData = NonNullable<Common.GetUsersDefaultResponse>,
  TError = AxiosError<GetUsersError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUsersData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetUsersKeyFn(clientOptions, queryKey),
    queryFn: () => getUsers({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
/**
 * Get User
 *
 * Get a user by username.
 */
export const useGetUserSuspense = <
  TData = NonNullable<Common.GetUserDefaultResponse>,
  TError = AxiosError<GetUserError>,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<GetUserData, true>,
  queryKey?: TQueryKey,
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGetUserKeyFn(clientOptions, queryKey),
    queryFn: () => getUser({ ...clientOptions }).then((response) => response.data as TData) as TData,
    ...options,
  });
