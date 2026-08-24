// generated with @7nohe/openapi-react-query-codegen@2.2.0
import { UseQueryResult } from "@tanstack/react-query";

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

export type GetAssetsDefaultResponse = Awaited<ReturnType<typeof getAssets>>["data"];
export type GetAssetsQueryResult<TData = GetAssetsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetAssetsKey = "GetAssets";
export const UseGetAssetsKeyFn = (
  clientOptions: Options<GetAssetsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetAssetsKey, ...(queryKey ?? [clientOptions])];
export type GetAssetAliasesDefaultResponse = Awaited<ReturnType<typeof getAssetAliases>>["data"];
export type GetAssetAliasesQueryResult<
  TData = GetAssetAliasesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetAliasesKey = "GetAssetAliases";
export const UseGetAssetAliasesKeyFn = (
  clientOptions: Options<GetAssetAliasesData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetAssetAliasesKey, ...(queryKey ?? [clientOptions])];
export type GetAssetAliasDefaultResponse = Awaited<ReturnType<typeof getAssetAlias>>["data"];
export type GetAssetAliasQueryResult<TData = GetAssetAliasDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetAssetAliasKey = "GetAssetAlias";
export const UseGetAssetAliasKeyFn = (
  clientOptions: Options<GetAssetAliasData, true>,
  queryKey?: Array<unknown>,
) => [useGetAssetAliasKey, ...(queryKey ?? [clientOptions])];
export type GetAssetEventsDefaultResponse = Awaited<ReturnType<typeof getAssetEvents>>["data"];
export type GetAssetEventsQueryResult<
  TData = GetAssetEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetEventsKey = "GetAssetEvents";
export const UseGetAssetEventsKeyFn = (
  clientOptions: Options<GetAssetEventsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetAssetEventsKey, ...(queryKey ?? [clientOptions])];
export type GetAssetQueuedEventsDefaultResponse = Awaited<ReturnType<typeof getAssetQueuedEvents>>["data"];
export type GetAssetQueuedEventsQueryResult<
  TData = GetAssetQueuedEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetQueuedEventsKey = "GetAssetQueuedEvents";
export const UseGetAssetQueuedEventsKeyFn = (
  clientOptions: Options<GetAssetQueuedEventsData, true>,
  queryKey?: Array<unknown>,
) => [useGetAssetQueuedEventsKey, ...(queryKey ?? [clientOptions])];
export type GetAssetDefaultResponse = Awaited<ReturnType<typeof getAsset>>["data"];
export type GetAssetQueryResult<TData = GetAssetDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetAssetKey = "GetAsset";
export const UseGetAssetKeyFn = (clientOptions: Options<GetAssetData, true>, queryKey?: Array<unknown>) => [
  useGetAssetKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetDagAssetQueuedEventsDefaultResponse = Awaited<
  ReturnType<typeof getDagAssetQueuedEvents>
>["data"];
export type GetDagAssetQueuedEventsQueryResult<
  TData = GetDagAssetQueuedEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagAssetQueuedEventsKey = "GetDagAssetQueuedEvents";
export const UseGetDagAssetQueuedEventsKeyFn = (
  clientOptions: Options<GetDagAssetQueuedEventsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagAssetQueuedEventsKey, ...(queryKey ?? [clientOptions])];
export type GetDagAssetQueuedEventDefaultResponse = Awaited<
  ReturnType<typeof getDagAssetQueuedEvent>
>["data"];
export type GetDagAssetQueuedEventQueryResult<
  TData = GetDagAssetQueuedEventDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagAssetQueuedEventKey = "GetDagAssetQueuedEvent";
export const UseGetDagAssetQueuedEventKeyFn = (
  clientOptions: Options<GetDagAssetQueuedEventData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagAssetQueuedEventKey, ...(queryKey ?? [clientOptions])];
export type ListBackfillsDefaultResponse = Awaited<ReturnType<typeof listBackfills>>["data"];
export type ListBackfillsQueryResult<TData = ListBackfillsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useListBackfillsKey = "ListBackfills";
export const UseListBackfillsKeyFn = (
  clientOptions: Options<ListBackfillsData, true>,
  queryKey?: Array<unknown>,
) => [useListBackfillsKey, ...(queryKey ?? [clientOptions])];
export type GetBackfillDefaultResponse = Awaited<ReturnType<typeof getBackfill>>["data"];
export type GetBackfillQueryResult<TData = GetBackfillDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetBackfillKey = "GetBackfill";
export const UseGetBackfillKeyFn = (
  clientOptions: Options<GetBackfillData, true>,
  queryKey?: Array<unknown>,
) => [useGetBackfillKey, ...(queryKey ?? [clientOptions])];
export type ListBackfillDagRunsDefaultResponse = Awaited<ReturnType<typeof listBackfillDagRuns>>["data"];
export type ListBackfillDagRunsQueryResult<
  TData = ListBackfillDagRunsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListBackfillDagRunsKey = "ListBackfillDagRuns";
export const UseListBackfillDagRunsKeyFn = (
  clientOptions: Options<ListBackfillDagRunsData, true>,
  queryKey?: Array<unknown>,
) => [useListBackfillDagRunsKey, ...(queryKey ?? [clientOptions])];
export type GetConnectionDefaultResponse = Awaited<ReturnType<typeof getConnection>>["data"];
export type GetConnectionQueryResult<TData = GetConnectionDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetConnectionKey = "GetConnection";
export const UseGetConnectionKeyFn = (
  clientOptions: Options<GetConnectionData, true>,
  queryKey?: Array<unknown>,
) => [useGetConnectionKey, ...(queryKey ?? [clientOptions])];
export type GetConnectionTestDefaultResponse = Awaited<ReturnType<typeof getConnectionTest>>["data"];
export type GetConnectionTestQueryResult<
  TData = GetConnectionTestDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetConnectionTestKey = "GetConnectionTest";
export const UseGetConnectionTestKeyFn = (
  clientOptions: Options<GetConnectionTestData, true>,
  queryKey?: Array<unknown>,
) => [useGetConnectionTestKey, ...(queryKey ?? [clientOptions])];
export type GetConnectionsDefaultResponse = Awaited<ReturnType<typeof getConnections>>["data"];
export type GetConnectionsQueryResult<
  TData = GetConnectionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetConnectionsKey = "GetConnections";
export const UseGetConnectionsKeyFn = (
  clientOptions: Options<GetConnectionsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetConnectionsKey, ...(queryKey ?? [clientOptions])];
export type GetDagRunDefaultResponse = Awaited<ReturnType<typeof getDagRun>>["data"];
export type GetDagRunQueryResult<TData = GetDagRunDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagRunKey = "GetDagRun";
export const UseGetDagRunKeyFn = (clientOptions: Options<GetDagRunData, true>, queryKey?: Array<unknown>) => [
  useGetDagRunKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetDagRunsDefaultResponse = Awaited<ReturnType<typeof getDagRuns>>["data"];
export type GetDagRunsQueryResult<TData = GetDagRunsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagRunsKey = "GetDagRuns";
export const UseGetDagRunsKeyFn = (
  clientOptions: Options<GetDagRunsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagRunsKey, ...(queryKey ?? [clientOptions])];
export type GetUpstreamAssetEventsDefaultResponse = Awaited<
  ReturnType<typeof getUpstreamAssetEvents>
>["data"];
export type GetUpstreamAssetEventsQueryResult<
  TData = GetUpstreamAssetEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetUpstreamAssetEventsKey = "GetUpstreamAssetEvents";
export const UseGetUpstreamAssetEventsKeyFn = (
  clientOptions: Options<GetUpstreamAssetEventsData, true>,
  queryKey?: Array<unknown>,
) => [useGetUpstreamAssetEventsKey, ...(queryKey ?? [clientOptions])];
export type WaitDagRunUntilFinishedDefaultResponse = Awaited<
  ReturnType<typeof waitDagRunUntilFinished>
>["data"];
export type WaitDagRunUntilFinishedQueryResult<
  TData = WaitDagRunUntilFinishedDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useWaitDagRunUntilFinishedKey = "WaitDagRunUntilFinished";
export const UseWaitDagRunUntilFinishedKeyFn = (
  clientOptions: Options<WaitDagRunUntilFinishedData, true>,
  queryKey?: Array<unknown>,
) => [useWaitDagRunUntilFinishedKey, ...(queryKey ?? [clientOptions])];
export type GetDagSourceDefaultResponse = Awaited<ReturnType<typeof getDagSource>>["data"];
export type GetDagSourceQueryResult<TData = GetDagSourceDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagSourceKey = "GetDagSource";
export const UseGetDagSourceKeyFn = (
  clientOptions: Options<GetDagSourceData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagSourceKey, ...(queryKey ?? [clientOptions])];
export type GetDagStatsDefaultResponse = Awaited<ReturnType<typeof getDagStats>>["data"];
export type GetDagStatsQueryResult<TData = GetDagStatsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagStatsKey = "GetDagStats";
export const UseGetDagStatsKeyFn = (
  clientOptions: Options<GetDagStatsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDagStatsKey, ...(queryKey ?? [clientOptions])];
export type GetConfigDefaultResponse = Awaited<ReturnType<typeof getConfig>>["data"];
export type GetConfigQueryResult<TData = GetConfigDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetConfigKey = "GetConfig";
export const UseGetConfigKeyFn = (
  clientOptions: Options<GetConfigData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetConfigKey, ...(queryKey ?? [clientOptions])];
export type GetConfigValueDefaultResponse = Awaited<ReturnType<typeof getConfigValue>>["data"];
export type GetConfigValueQueryResult<
  TData = GetConfigValueDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetConfigValueKey = "GetConfigValue";
export const UseGetConfigValueKeyFn = (
  clientOptions: Options<GetConfigValueData, true>,
  queryKey?: Array<unknown>,
) => [useGetConfigValueKey, ...(queryKey ?? [clientOptions])];
export type ListDagWarningsDefaultResponse = Awaited<ReturnType<typeof listDagWarnings>>["data"];
export type ListDagWarningsQueryResult<
  TData = ListDagWarningsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListDagWarningsKey = "ListDagWarnings";
export const UseListDagWarningsKeyFn = (
  clientOptions: Options<ListDagWarningsData, true> = {},
  queryKey?: Array<unknown>,
) => [useListDagWarningsKey, ...(queryKey ?? [clientOptions])];
export type GetDagsDefaultResponse = Awaited<ReturnType<typeof getDags>>["data"];
export type GetDagsQueryResult<TData = GetDagsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagsKey = "GetDags";
export const UseGetDagsKeyFn = (
  clientOptions: Options<GetDagsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDagsKey, ...(queryKey ?? [clientOptions])];
export type GetDagDefaultResponse = Awaited<ReturnType<typeof getDag>>["data"];
export type GetDagQueryResult<TData = GetDagDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagKey = "GetDag";
export const UseGetDagKeyFn = (clientOptions: Options<GetDagData, true>, queryKey?: Array<unknown>) => [
  useGetDagKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetDagDetailsDefaultResponse = Awaited<ReturnType<typeof getDagDetails>>["data"];
export type GetDagDetailsQueryResult<TData = GetDagDetailsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagDetailsKey = "GetDagDetails";
export const UseGetDagDetailsKeyFn = (
  clientOptions: Options<GetDagDetailsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagDetailsKey, ...(queryKey ?? [clientOptions])];
export type GetEventLogDefaultResponse = Awaited<ReturnType<typeof getEventLog>>["data"];
export type GetEventLogQueryResult<TData = GetEventLogDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetEventLogKey = "GetEventLog";
export const UseGetEventLogKeyFn = (
  clientOptions: Options<GetEventLogData, true>,
  queryKey?: Array<unknown>,
) => [useGetEventLogKey, ...(queryKey ?? [clientOptions])];
export type GetEventLogsDefaultResponse = Awaited<ReturnType<typeof getEventLogs>>["data"];
export type GetEventLogsQueryResult<TData = GetEventLogsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetEventLogsKey = "GetEventLogs";
export const UseGetEventLogsKeyFn = (
  clientOptions: Options<GetEventLogsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetEventLogsKey, ...(queryKey ?? [clientOptions])];
export type GetExtraLinksDefaultResponse = Awaited<ReturnType<typeof getExtraLinks>>["data"];
export type GetExtraLinksQueryResult<TData = GetExtraLinksDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetExtraLinksKey = "GetExtraLinks";
export const UseGetExtraLinksKeyFn = (
  clientOptions: Options<GetExtraLinksData, true>,
  queryKey?: Array<unknown>,
) => [useGetExtraLinksKey, ...(queryKey ?? [clientOptions])];
export type GetImportErrorDefaultResponse = Awaited<ReturnType<typeof getImportError>>["data"];
export type GetImportErrorQueryResult<
  TData = GetImportErrorDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetImportErrorKey = "GetImportError";
export const UseGetImportErrorKeyFn = (
  clientOptions: Options<GetImportErrorData, true>,
  queryKey?: Array<unknown>,
) => [useGetImportErrorKey, ...(queryKey ?? [clientOptions])];
export type GetImportErrorsDefaultResponse = Awaited<ReturnType<typeof getImportErrors>>["data"];
export type GetImportErrorsQueryResult<
  TData = GetImportErrorsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetImportErrorsKey = "GetImportErrors";
export const UseGetImportErrorsKeyFn = (
  clientOptions: Options<GetImportErrorsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetImportErrorsKey, ...(queryKey ?? [clientOptions])];
export type GetJobsDefaultResponse = Awaited<ReturnType<typeof getJobs>>["data"];
export type GetJobsQueryResult<TData = GetJobsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetJobsKey = "GetJobs";
export const UseGetJobsKeyFn = (
  clientOptions: Options<GetJobsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetJobsKey, ...(queryKey ?? [clientOptions])];
export type GetPluginsDefaultResponse = Awaited<ReturnType<typeof getPlugins>>["data"];
export type GetPluginsQueryResult<TData = GetPluginsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetPluginsKey = "GetPlugins";
export const UseGetPluginsKeyFn = (
  clientOptions: Options<GetPluginsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetPluginsKey, ...(queryKey ?? [clientOptions])];
export type ImportErrorsDefaultResponse = Awaited<ReturnType<typeof importErrors>>["data"];
export type ImportErrorsQueryResult<TData = ImportErrorsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useImportErrorsKey = "ImportErrors";
export const UseImportErrorsKeyFn = (
  clientOptions: Options<ImportErrorsData, true> = {},
  queryKey?: Array<unknown>,
) => [useImportErrorsKey, ...(queryKey ?? [clientOptions])];
export type GetPoolDefaultResponse = Awaited<ReturnType<typeof getPool>>["data"];
export type GetPoolQueryResult<TData = GetPoolDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetPoolKey = "GetPool";
export const UseGetPoolKeyFn = (clientOptions: Options<GetPoolData, true>, queryKey?: Array<unknown>) => [
  useGetPoolKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetPoolsDefaultResponse = Awaited<ReturnType<typeof getPools>>["data"];
export type GetPoolsQueryResult<TData = GetPoolsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetPoolsKey = "GetPools";
export const UseGetPoolsKeyFn = (
  clientOptions: Options<GetPoolsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetPoolsKey, ...(queryKey ?? [clientOptions])];
export type GetProvidersDefaultResponse = Awaited<ReturnType<typeof getProviders>>["data"];
export type GetProvidersQueryResult<TData = GetProvidersDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetProvidersKey = "GetProviders";
export const UseGetProvidersKeyFn = (
  clientOptions: Options<GetProvidersData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetProvidersKey, ...(queryKey ?? [clientOptions])];
export type ListAssetStateStoreDefaultResponse = Awaited<ReturnType<typeof listAssetStateStore>>["data"];
export type ListAssetStateStoreQueryResult<
  TData = ListAssetStateStoreDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListAssetStateStoreKey = "ListAssetStateStore";
export const UseListAssetStateStoreKeyFn = (
  clientOptions: Options<ListAssetStateStoreData, true>,
  queryKey?: Array<unknown>,
) => [useListAssetStateStoreKey, ...(queryKey ?? [clientOptions])];
export type GetAssetStateStoreDefaultResponse = Awaited<ReturnType<typeof getAssetStateStore>>["data"];
export type GetAssetStateStoreQueryResult<
  TData = GetAssetStateStoreDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetStateStoreKey = "GetAssetStateStore";
export const UseGetAssetStateStoreKeyFn = (
  clientOptions: Options<GetAssetStateStoreData, true>,
  queryKey?: Array<unknown>,
) => [useGetAssetStateStoreKey, ...(queryKey ?? [clientOptions])];
export type ListTaskStateStoreDefaultResponse = Awaited<ReturnType<typeof listTaskStateStore>>["data"];
export type ListTaskStateStoreQueryResult<
  TData = ListTaskStateStoreDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListTaskStateStoreKey = "ListTaskStateStore";
export const UseListTaskStateStoreKeyFn = (
  clientOptions: Options<ListTaskStateStoreData, true>,
  queryKey?: Array<unknown>,
) => [useListTaskStateStoreKey, ...(queryKey ?? [clientOptions])];
export type GetTaskStateStoreDefaultResponse = Awaited<ReturnType<typeof getTaskStateStore>>["data"];
export type GetTaskStateStoreQueryResult<
  TData = GetTaskStateStoreDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskStateStoreKey = "GetTaskStateStore";
export const UseGetTaskStateStoreKeyFn = (
  clientOptions: Options<GetTaskStateStoreData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskStateStoreKey, ...(queryKey ?? [clientOptions])];
export type GetXcomEntryDefaultResponse = Awaited<ReturnType<typeof getXcomEntry>>["data"];
export type GetXcomEntryQueryResult<TData = GetXcomEntryDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetXcomEntryKey = "GetXcomEntry";
export const UseGetXcomEntryKeyFn = (
  clientOptions: Options<GetXcomEntryData, true>,
  queryKey?: Array<unknown>,
) => [useGetXcomEntryKey, ...(queryKey ?? [clientOptions])];
export type GetXcomEntriesDefaultResponse = Awaited<ReturnType<typeof getXcomEntries>>["data"];
export type GetXcomEntriesQueryResult<
  TData = GetXcomEntriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetXcomEntriesKey = "GetXcomEntries";
export const UseGetXcomEntriesKeyFn = (
  clientOptions: Options<GetXcomEntriesData, true>,
  queryKey?: Array<unknown>,
) => [useGetXcomEntriesKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstanceDefaultResponse = Awaited<ReturnType<typeof getTaskInstance>>["data"];
export type GetTaskInstanceQueryResult<
  TData = GetTaskInstanceDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstanceKey = "GetTaskInstance";
export const UseGetTaskInstanceKeyFn = (
  clientOptions: Options<GetTaskInstanceData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstanceKey, ...(queryKey ?? [clientOptions])];
export type GetMappedTaskInstancesDefaultResponse = Awaited<
  ReturnType<typeof getMappedTaskInstances>
>["data"];
export type GetMappedTaskInstancesQueryResult<
  TData = GetMappedTaskInstancesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMappedTaskInstancesKey = "GetMappedTaskInstances";
export const UseGetMappedTaskInstancesKeyFn = (
  clientOptions: Options<GetMappedTaskInstancesData, true>,
  queryKey?: Array<unknown>,
) => [useGetMappedTaskInstancesKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstanceDependenciesByMapIndexDefaultResponse = Awaited<
  ReturnType<typeof getTaskInstanceDependenciesByMapIndex>
>["data"];
export type GetTaskInstanceDependenciesByMapIndexQueryResult<
  TData = GetTaskInstanceDependenciesByMapIndexDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstanceDependenciesByMapIndexKey = "GetTaskInstanceDependenciesByMapIndex";
export const UseGetTaskInstanceDependenciesByMapIndexKeyFn = (
  clientOptions: Options<GetTaskInstanceDependenciesByMapIndexData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstanceDependenciesByMapIndexKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstanceDependenciesDefaultResponse = Awaited<
  ReturnType<typeof getTaskInstanceDependencies>
>["data"];
export type GetTaskInstanceDependenciesQueryResult<
  TData = GetTaskInstanceDependenciesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstanceDependenciesKey = "GetTaskInstanceDependencies";
export const UseGetTaskInstanceDependenciesKeyFn = (
  clientOptions: Options<GetTaskInstanceDependenciesData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstanceDependenciesKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstanceTriesDefaultResponse = Awaited<ReturnType<typeof getTaskInstanceTries>>["data"];
export type GetTaskInstanceTriesQueryResult<
  TData = GetTaskInstanceTriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstanceTriesKey = "GetTaskInstanceTries";
export const UseGetTaskInstanceTriesKeyFn = (
  clientOptions: Options<GetTaskInstanceTriesData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstanceTriesKey, ...(queryKey ?? [clientOptions])];
export type GetMappedTaskInstanceTriesDefaultResponse = Awaited<
  ReturnType<typeof getMappedTaskInstanceTries>
>["data"];
export type GetMappedTaskInstanceTriesQueryResult<
  TData = GetMappedTaskInstanceTriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMappedTaskInstanceTriesKey = "GetMappedTaskInstanceTries";
export const UseGetMappedTaskInstanceTriesKeyFn = (
  clientOptions: Options<GetMappedTaskInstanceTriesData, true>,
  queryKey?: Array<unknown>,
) => [useGetMappedTaskInstanceTriesKey, ...(queryKey ?? [clientOptions])];
export type GetMappedTaskInstanceDefaultResponse = Awaited<ReturnType<typeof getMappedTaskInstance>>["data"];
export type GetMappedTaskInstanceQueryResult<
  TData = GetMappedTaskInstanceDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMappedTaskInstanceKey = "GetMappedTaskInstance";
export const UseGetMappedTaskInstanceKeyFn = (
  clientOptions: Options<GetMappedTaskInstanceData, true>,
  queryKey?: Array<unknown>,
) => [useGetMappedTaskInstanceKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstancesDefaultResponse = Awaited<ReturnType<typeof getTaskInstances>>["data"];
export type GetTaskInstancesQueryResult<
  TData = GetTaskInstancesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstancesKey = "GetTaskInstances";
export const UseGetTaskInstancesKeyFn = (
  clientOptions: Options<GetTaskInstancesData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstancesKey, ...(queryKey ?? [clientOptions])];
export type GetTaskInstanceTryDetailsDefaultResponse = Awaited<
  ReturnType<typeof getTaskInstanceTryDetails>
>["data"];
export type GetTaskInstanceTryDetailsQueryResult<
  TData = GetTaskInstanceTryDetailsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTaskInstanceTryDetailsKey = "GetTaskInstanceTryDetails";
export const UseGetTaskInstanceTryDetailsKeyFn = (
  clientOptions: Options<GetTaskInstanceTryDetailsData, true>,
  queryKey?: Array<unknown>,
) => [useGetTaskInstanceTryDetailsKey, ...(queryKey ?? [clientOptions])];
export type GetMappedTaskInstanceTryDetailsDefaultResponse = Awaited<
  ReturnType<typeof getMappedTaskInstanceTryDetails>
>["data"];
export type GetMappedTaskInstanceTryDetailsQueryResult<
  TData = GetMappedTaskInstanceTryDetailsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMappedTaskInstanceTryDetailsKey = "GetMappedTaskInstanceTryDetails";
export const UseGetMappedTaskInstanceTryDetailsKeyFn = (
  clientOptions: Options<GetMappedTaskInstanceTryDetailsData, true>,
  queryKey?: Array<unknown>,
) => [useGetMappedTaskInstanceTryDetailsKey, ...(queryKey ?? [clientOptions])];
export type GetTasksDefaultResponse = Awaited<ReturnType<typeof getTasks>>["data"];
export type GetTasksQueryResult<TData = GetTasksDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetTasksKey = "GetTasks";
export const UseGetTasksKeyFn = (clientOptions: Options<GetTasksData, true>, queryKey?: Array<unknown>) => [
  useGetTasksKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetTaskDefaultResponse = Awaited<ReturnType<typeof getTask>>["data"];
export type GetTaskQueryResult<TData = GetTaskDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetTaskKey = "GetTask";
export const UseGetTaskKeyFn = (clientOptions: Options<GetTaskData, true>, queryKey?: Array<unknown>) => [
  useGetTaskKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetVariableDefaultResponse = Awaited<ReturnType<typeof getVariable>>["data"];
export type GetVariableQueryResult<TData = GetVariableDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetVariableKey = "GetVariable";
export const UseGetVariableKeyFn = (
  clientOptions: Options<GetVariableData, true>,
  queryKey?: Array<unknown>,
) => [useGetVariableKey, ...(queryKey ?? [clientOptions])];
export type GetVariablesDefaultResponse = Awaited<ReturnType<typeof getVariables>>["data"];
export type GetVariablesQueryResult<TData = GetVariablesDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetVariablesKey = "GetVariables";
export const UseGetVariablesKeyFn = (
  clientOptions: Options<GetVariablesData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetVariablesKey, ...(queryKey ?? [clientOptions])];
export type GetLogDefaultResponse = Awaited<ReturnType<typeof getLog>>["data"];
export type GetLogQueryResult<TData = GetLogDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetLogKey = "GetLog";
export const UseGetLogKeyFn = (clientOptions: Options<GetLogData, true>, queryKey?: Array<unknown>) => [
  useGetLogKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetExternalLogUrlDefaultResponse = Awaited<ReturnType<typeof getExternalLogUrl>>["data"];
export type GetExternalLogUrlQueryResult<
  TData = GetExternalLogUrlDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetExternalLogUrlKey = "GetExternalLogUrl";
export const UseGetExternalLogUrlKeyFn = (
  clientOptions: Options<GetExternalLogUrlData, true>,
  queryKey?: Array<unknown>,
) => [useGetExternalLogUrlKey, ...(queryKey ?? [clientOptions])];
export type GetDagTagsDefaultResponse = Awaited<ReturnType<typeof getDagTags>>["data"];
export type GetDagTagsQueryResult<TData = GetDagTagsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagTagsKey = "GetDagTags";
export const UseGetDagTagsKeyFn = (
  clientOptions: Options<GetDagTagsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDagTagsKey, ...(queryKey ?? [clientOptions])];
export type GetDagVersionDefaultResponse = Awaited<ReturnType<typeof getDagVersion>>["data"];
export type GetDagVersionQueryResult<TData = GetDagVersionDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagVersionKey = "GetDagVersion";
export const UseGetDagVersionKeyFn = (
  clientOptions: Options<GetDagVersionData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagVersionKey, ...(queryKey ?? [clientOptions])];
export type GetDagVersionsDefaultResponse = Awaited<ReturnType<typeof getDagVersions>>["data"];
export type GetDagVersionsQueryResult<
  TData = GetDagVersionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagVersionsKey = "GetDagVersions";
export const UseGetDagVersionsKeyFn = (
  clientOptions: Options<GetDagVersionsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagVersionsKey, ...(queryKey ?? [clientOptions])];
export type GetHitlDetailDefaultResponse = Awaited<ReturnType<typeof getHitlDetail>>["data"];
export type GetHitlDetailQueryResult<TData = GetHitlDetailDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetHitlDetailKey = "GetHitlDetail";
export const UseGetHitlDetailKeyFn = (
  clientOptions: Options<GetHitlDetailData, true>,
  queryKey?: Array<unknown>,
) => [useGetHitlDetailKey, ...(queryKey ?? [clientOptions])];
export type GetHitlDetailTryDetailDefaultResponse = Awaited<
  ReturnType<typeof getHitlDetailTryDetail>
>["data"];
export type GetHitlDetailTryDetailQueryResult<
  TData = GetHitlDetailTryDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetHitlDetailTryDetailKey = "GetHitlDetailTryDetail";
export const UseGetHitlDetailTryDetailKeyFn = (
  clientOptions: Options<GetHitlDetailTryDetailData, true>,
  queryKey?: Array<unknown>,
) => [useGetHitlDetailTryDetailKey, ...(queryKey ?? [clientOptions])];
export type GetHitlDetailsDefaultResponse = Awaited<ReturnType<typeof getHitlDetails>>["data"];
export type GetHitlDetailsQueryResult<
  TData = GetHitlDetailsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetHitlDetailsKey = "GetHitlDetails";
export const UseGetHitlDetailsKeyFn = (
  clientOptions: Options<GetHitlDetailsData, true>,
  queryKey?: Array<unknown>,
) => [useGetHitlDetailsKey, ...(queryKey ?? [clientOptions])];
export type GetHealthDefaultResponse = Awaited<ReturnType<typeof getHealth>>["data"];
export type GetHealthQueryResult<TData = GetHealthDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetHealthKey = "GetHealth";
export const UseGetHealthKeyFn = (
  clientOptions: Options<GetHealthData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetHealthKey, ...(queryKey ?? [clientOptions])];
export type GetVersionDefaultResponse = Awaited<ReturnType<typeof getVersion>>["data"];
export type GetVersionQueryResult<TData = GetVersionDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetVersionKey = "GetVersion";
export const UseGetVersionKeyFn = (
  clientOptions: Options<GetVersionData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetVersionKey, ...(queryKey ?? [clientOptions])];
export type LoginDefaultResponse = Awaited<ReturnType<typeof login>>["data"];
export type LoginQueryResult<TData = LoginDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLoginKey = "Login";
export const UseLoginKeyFn = (clientOptions: Options<LoginData, true> = {}, queryKey?: Array<unknown>) => [
  useLoginKey,
  ...(queryKey ?? [clientOptions]),
];
export type LogoutDefaultResponse = Awaited<ReturnType<typeof logout>>["data"];
export type LogoutQueryResult<TData = LogoutDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useLogoutKey = "Logout";
export const UseLogoutKeyFn = (clientOptions: Options<LogoutData, true> = {}, queryKey?: Array<unknown>) => [
  useLogoutKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetAuthMenusDefaultResponse = Awaited<ReturnType<typeof getAuthMenus>>["data"];
export type GetAuthMenusQueryResult<TData = GetAuthMenusDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetAuthMenusKey = "GetAuthMenus";
export const UseGetAuthMenusKeyFn = (
  clientOptions: Options<GetAuthMenusData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetAuthMenusKey, ...(queryKey ?? [clientOptions])];
export type GetCurrentUserInfoDefaultResponse = Awaited<ReturnType<typeof getCurrentUserInfo>>["data"];
export type GetCurrentUserInfoQueryResult<
  TData = GetCurrentUserInfoDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetCurrentUserInfoKey = "GetCurrentUserInfo";
export const UseGetCurrentUserInfoKeyFn = (
  clientOptions: Options<GetCurrentUserInfoData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetCurrentUserInfoKey, ...(queryKey ?? [clientOptions])];
export type GetAssetsUiDefaultResponse = Awaited<ReturnType<typeof getAssetsUi>>["data"];
export type GetAssetsUiQueryResult<TData = GetAssetsUiDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetAssetsUiKey = "GetAssetsUi";
export const UseGetAssetsUiKeyFn = (
  clientOptions: Options<GetAssetsUiData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetAssetsUiKey, ...(queryKey ?? [clientOptions])];
export type NextRunAssetsDefaultResponse = Awaited<ReturnType<typeof nextRunAssets>>["data"];
export type NextRunAssetsQueryResult<TData = NextRunAssetsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useNextRunAssetsKey = "NextRunAssets";
export const UseNextRunAssetsKeyFn = (
  clientOptions: Options<NextRunAssetsData, true>,
  queryKey?: Array<unknown>,
) => [useNextRunAssetsKey, ...(queryKey ?? [clientOptions])];
export type GetDagRunStatsDefaultResponse = Awaited<ReturnType<typeof getDagRunStats>>["data"];
export type GetDagRunStatsQueryResult<
  TData = GetDagRunStatsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagRunStatsKey = "GetDagRunStats";
export const UseGetDagRunStatsKeyFn = (
  clientOptions: Options<GetDagRunStatsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagRunStatsKey, ...(queryKey ?? [clientOptions])];
export type GetPartitionedDagRunsDefaultResponse = Awaited<ReturnType<typeof getPartitionedDagRuns>>["data"];
export type GetPartitionedDagRunsQueryResult<
  TData = GetPartitionedDagRunsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPartitionedDagRunsKey = "GetPartitionedDagRuns";
export const UseGetPartitionedDagRunsKeyFn = (
  clientOptions: Options<GetPartitionedDagRunsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetPartitionedDagRunsKey, ...(queryKey ?? [clientOptions])];
export type GetPendingPartitionedDagRunDefaultResponse = Awaited<
  ReturnType<typeof getPendingPartitionedDagRun>
>["data"];
export type GetPendingPartitionedDagRunQueryResult<
  TData = GetPendingPartitionedDagRunDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPendingPartitionedDagRunKey = "GetPendingPartitionedDagRun";
export const UseGetPendingPartitionedDagRunKeyFn = (
  clientOptions: Options<GetPendingPartitionedDagRunData, true>,
  queryKey?: Array<unknown>,
) => [useGetPendingPartitionedDagRunKey, ...(queryKey ?? [clientOptions])];
export type GetConfigsDefaultResponse = Awaited<ReturnType<typeof getConfigs>>["data"];
export type GetConfigsQueryResult<TData = GetConfigsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetConfigsKey = "GetConfigs";
export const UseGetConfigsKeyFn = (
  clientOptions: Options<GetConfigsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetConfigsKey, ...(queryKey ?? [clientOptions])];
export type HookMetaDataDefaultResponse = Awaited<ReturnType<typeof hookMetaData>>["data"];
export type HookMetaDataQueryResult<TData = HookMetaDataDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useHookMetaDataKey = "HookMetaData";
export const UseHookMetaDataKeyFn = (
  clientOptions: Options<HookMetaDataData, true> = {},
  queryKey?: Array<unknown>,
) => [useHookMetaDataKey, ...(queryKey ?? [clientOptions])];
export type GetDagsUiDefaultResponse = Awaited<ReturnType<typeof getDagsUi>>["data"];
export type GetDagsUiQueryResult<TData = GetDagsUiDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDagsUiKey = "GetDagsUi";
export const UseGetDagsUiKeyFn = (
  clientOptions: Options<GetDagsUiData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDagsUiKey, ...(queryKey ?? [clientOptions])];
export type GetDagTimetableTypesUiDefaultResponse = Awaited<
  ReturnType<typeof getDagTimetableTypesUi>
>["data"];
export type GetDagTimetableTypesUiQueryResult<
  TData = GetDagTimetableTypesUiDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagTimetableTypesUiKey = "GetDagTimetableTypesUi";
export const UseGetDagTimetableTypesUiKeyFn = (
  clientOptions: Options<GetDagTimetableTypesUiData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDagTimetableTypesUiKey, ...(queryKey ?? [clientOptions])];
export type GetLatestRunInfoDefaultResponse = Awaited<ReturnType<typeof getLatestRunInfo>>["data"];
export type GetLatestRunInfoQueryResult<
  TData = GetLatestRunInfoDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLatestRunInfoKey = "GetLatestRunInfo";
export const UseGetLatestRunInfoKeyFn = (
  clientOptions: Options<GetLatestRunInfoData, true>,
  queryKey?: Array<unknown>,
) => [useGetLatestRunInfoKey, ...(queryKey ?? [clientOptions])];
export type GetDagRunStateCountsUiDefaultResponse = Awaited<
  ReturnType<typeof getDagRunStateCountsUi>
>["data"];
export type GetDagRunStateCountsUiQueryResult<
  TData = GetDagRunStateCountsUiDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagRunStateCountsUiKey = "GetDagRunStateCountsUi";
export const UseGetDagRunStateCountsUiKeyFn = (
  clientOptions: Options<GetDagRunStateCountsUiData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagRunStateCountsUiKey, ...(queryKey ?? [clientOptions])];
export type GetDependenciesDefaultResponse = Awaited<ReturnType<typeof getDependencies>>["data"];
export type GetDependenciesQueryResult<
  TData = GetDependenciesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDependenciesKey = "GetDependencies";
export const UseGetDependenciesKeyFn = (
  clientOptions: Options<GetDependenciesData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetDependenciesKey, ...(queryKey ?? [clientOptions])];
export type HistoricalMetricsDefaultResponse = Awaited<ReturnType<typeof historicalMetrics>>["data"];
export type HistoricalMetricsQueryResult<
  TData = HistoricalMetricsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useHistoricalMetricsKey = "HistoricalMetrics";
export const UseHistoricalMetricsKeyFn = (
  clientOptions: Options<HistoricalMetricsData, true>,
  queryKey?: Array<unknown>,
) => [useHistoricalMetricsKey, ...(queryKey ?? [clientOptions])];
export type DagStatsDefaultResponse = Awaited<ReturnType<typeof dagStats>>["data"];
export type DagStatsQueryResult<TData = DagStatsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useDagStatsKey = "DagStats";
export const UseDagStatsKeyFn = (
  clientOptions: Options<DagStatsData, true> = {},
  queryKey?: Array<unknown>,
) => [useDagStatsKey, ...(queryKey ?? [clientOptions])];
export type GetDeadlinesDefaultResponse = Awaited<ReturnType<typeof getDeadlines>>["data"];
export type GetDeadlinesQueryResult<TData = GetDeadlinesDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetDeadlinesKey = "GetDeadlines";
export const UseGetDeadlinesKeyFn = (
  clientOptions: Options<GetDeadlinesData, true>,
  queryKey?: Array<unknown>,
) => [useGetDeadlinesKey, ...(queryKey ?? [clientOptions])];
export type GetDagDeadlineAlertsDefaultResponse = Awaited<ReturnType<typeof getDagDeadlineAlerts>>["data"];
export type GetDagDeadlineAlertsQueryResult<
  TData = GetDagDeadlineAlertsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagDeadlineAlertsKey = "GetDagDeadlineAlerts";
export const UseGetDagDeadlineAlertsKeyFn = (
  clientOptions: Options<GetDagDeadlineAlertsData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagDeadlineAlertsKey, ...(queryKey ?? [clientOptions])];
export type StructureDataDefaultResponse = Awaited<ReturnType<typeof structureData>>["data"];
export type StructureDataQueryResult<TData = StructureDataDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useStructureDataKey = "StructureData";
export const UseStructureDataKeyFn = (
  clientOptions: Options<StructureDataData, true>,
  queryKey?: Array<unknown>,
) => [useStructureDataKey, ...(queryKey ?? [clientOptions])];
export type ListBackfillsUiDefaultResponse = Awaited<ReturnType<typeof listBackfillsUi>>["data"];
export type ListBackfillsUiQueryResult<
  TData = ListBackfillsUiDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListBackfillsUiKey = "ListBackfillsUi";
export const UseListBackfillsUiKeyFn = (
  clientOptions: Options<ListBackfillsUiData, true> = {},
  queryKey?: Array<unknown>,
) => [useListBackfillsUiKey, ...(queryKey ?? [clientOptions])];
export type GetDagStructureDefaultResponse = Awaited<ReturnType<typeof getDagStructure>>["data"];
export type GetDagStructureQueryResult<
  TData = GetDagStructureDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDagStructureKey = "GetDagStructure";
export const UseGetDagStructureKeyFn = (
  clientOptions: Options<GetDagStructureData, true>,
  queryKey?: Array<unknown>,
) => [useGetDagStructureKey, ...(queryKey ?? [clientOptions])];
export type GetGridRunsDefaultResponse = Awaited<ReturnType<typeof getGridRuns>>["data"];
export type GetGridRunsQueryResult<TData = GetGridRunsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetGridRunsKey = "GetGridRuns";
export const UseGetGridRunsKeyFn = (
  clientOptions: Options<GetGridRunsData, true>,
  queryKey?: Array<unknown>,
) => [useGetGridRunsKey, ...(queryKey ?? [clientOptions])];
export type GetGridTiSummariesStreamDefaultResponse = Awaited<
  ReturnType<typeof getGridTiSummariesStream>
>["data"];
export type GetGridTiSummariesStreamQueryResult<
  TData = GetGridTiSummariesStreamDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetGridTiSummariesStreamKey = "GetGridTiSummariesStream";
export const UseGetGridTiSummariesStreamKeyFn = (
  clientOptions: Options<GetGridTiSummariesStreamData, true>,
  queryKey?: Array<unknown>,
) => [useGetGridTiSummariesStreamKey, ...(queryKey ?? [clientOptions])];
export type GetGanttDataDefaultResponse = Awaited<ReturnType<typeof getGanttData>>["data"];
export type GetGanttDataQueryResult<TData = GetGanttDataDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetGanttDataKey = "GetGanttData";
export const UseGetGanttDataKeyFn = (
  clientOptions: Options<GetGanttDataData, true>,
  queryKey?: Array<unknown>,
) => [useGetGanttDataKey, ...(queryKey ?? [clientOptions])];
export type GetCalendarDefaultResponse = Awaited<ReturnType<typeof getCalendar>>["data"];
export type GetCalendarQueryResult<TData = GetCalendarDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetCalendarKey = "GetCalendar";
export const UseGetCalendarKeyFn = (
  clientOptions: Options<GetCalendarData, true>,
  queryKey?: Array<unknown>,
) => [useGetCalendarKey, ...(queryKey ?? [clientOptions])];
export type GetCalendarDeadlinesDefaultResponse = Awaited<ReturnType<typeof getCalendarDeadlines>>["data"];
export type GetCalendarDeadlinesQueryResult<
  TData = GetCalendarDeadlinesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetCalendarDeadlinesKey = "GetCalendarDeadlines";
export const UseGetCalendarDeadlinesKeyFn = (
  clientOptions: Options<GetCalendarDeadlinesData, true>,
  queryKey?: Array<unknown>,
) => [useGetCalendarDeadlinesKey, ...(queryKey ?? [clientOptions])];
export type ListTeamsDefaultResponse = Awaited<ReturnType<typeof listTeams>>["data"];
export type ListTeamsQueryResult<TData = ListTeamsDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useListTeamsKey = "ListTeams";
export const UseListTeamsKeyFn = (
  clientOptions: Options<ListTeamsData, true> = {},
  queryKey?: Array<unknown>,
) => [useListTeamsKey, ...(queryKey ?? [clientOptions])];
export type GetProviders1DefaultResponse = Awaited<ReturnType<typeof getProviders1>>["data"];
export type GetProviders1QueryResult<TData = GetProviders1DefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetProviders1Key = "GetProviders1";
export const UseGetProviders1KeyFn = (
  clientOptions: Options<GetProviders1Data, true> = {},
  queryKey?: Array<unknown>,
) => [useGetProviders1Key, ...(queryKey ?? [clientOptions])];
export type Logout1DefaultResponse = Awaited<ReturnType<typeof logout1>>["data"];
export type Logout1QueryResult<TData = Logout1DefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useLogout1Key = "Logout1";
export const UseLogout1KeyFn = (
  clientOptions: Options<Logout1Data, true> = {},
  queryKey?: Array<unknown>,
) => [useLogout1Key, ...(queryKey ?? [clientOptions])];
export type GetRolesDefaultResponse = Awaited<ReturnType<typeof getRoles>>["data"];
export type GetRolesQueryResult<TData = GetRolesDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetRolesKey = "GetRoles";
export const UseGetRolesKeyFn = (
  clientOptions: Options<GetRolesData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetRolesKey, ...(queryKey ?? [clientOptions])];
export type GetRoleDefaultResponse = Awaited<ReturnType<typeof getRole>>["data"];
export type GetRoleQueryResult<TData = GetRoleDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetRoleKey = "GetRole";
export const UseGetRoleKeyFn = (clientOptions: Options<GetRoleData, true>, queryKey?: Array<unknown>) => [
  useGetRoleKey,
  ...(queryKey ?? [clientOptions]),
];
export type GetPermissionsDefaultResponse = Awaited<ReturnType<typeof getPermissions>>["data"];
export type GetPermissionsQueryResult<
  TData = GetPermissionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPermissionsKey = "GetPermissions";
export const UseGetPermissionsKeyFn = (
  clientOptions: Options<GetPermissionsData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetPermissionsKey, ...(queryKey ?? [clientOptions])];
export type GetUsersDefaultResponse = Awaited<ReturnType<typeof getUsers>>["data"];
export type GetUsersQueryResult<TData = GetUsersDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetUsersKey = "GetUsers";
export const UseGetUsersKeyFn = (
  clientOptions: Options<GetUsersData, true> = {},
  queryKey?: Array<unknown>,
) => [useGetUsersKey, ...(queryKey ?? [clientOptions])];
export type GetUserDefaultResponse = Awaited<ReturnType<typeof getUser>>["data"];
export type GetUserQueryResult<TData = GetUserDefaultResponse, TError = unknown> = UseQueryResult<
  TData,
  TError
>;
export const useGetUserKey = "GetUser";
export const UseGetUserKeyFn = (clientOptions: Options<GetUserData, true>, queryKey?: Array<unknown>) => [
  useGetUserKey,
  ...(queryKey ?? [clientOptions]),
];
export type CreateAssetEventMutationResult = Awaited<ReturnType<typeof createAssetEvent>>;
export const useCreateAssetEventKey = "CreateAssetEvent";
export const UseCreateAssetEventKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateAssetEventKey,
  ...(mutationKey ?? []),
];
export type MaterializeAssetMutationResult = Awaited<ReturnType<typeof materializeAsset>>;
export const useMaterializeAssetKey = "MaterializeAsset";
export const UseMaterializeAssetKeyFn = (mutationKey?: Array<unknown>) => [
  useMaterializeAssetKey,
  ...(mutationKey ?? []),
];
export type CreateBackfillMutationResult = Awaited<ReturnType<typeof createBackfill>>;
export const useCreateBackfillKey = "CreateBackfill";
export const UseCreateBackfillKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateBackfillKey,
  ...(mutationKey ?? []),
];
export type CreateBackfillDryRunMutationResult = Awaited<ReturnType<typeof createBackfillDryRun>>;
export const useCreateBackfillDryRunKey = "CreateBackfillDryRun";
export const UseCreateBackfillDryRunKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateBackfillDryRunKey,
  ...(mutationKey ?? []),
];
export type EnqueueConnectionTestMutationResult = Awaited<ReturnType<typeof enqueueConnectionTest>>;
export const useEnqueueConnectionTestKey = "EnqueueConnectionTest";
export const UseEnqueueConnectionTestKeyFn = (mutationKey?: Array<unknown>) => [
  useEnqueueConnectionTestKey,
  ...(mutationKey ?? []),
];
export type PostConnectionMutationResult = Awaited<ReturnType<typeof postConnection>>;
export const usePostConnectionKey = "PostConnection";
export const UsePostConnectionKeyFn = (mutationKey?: Array<unknown>) => [
  usePostConnectionKey,
  ...(mutationKey ?? []),
];
export type TestConnectionMutationResult = Awaited<ReturnType<typeof testConnection>>;
export const useTestConnectionKey = "TestConnection";
export const UseTestConnectionKeyFn = (mutationKey?: Array<unknown>) => [
  useTestConnectionKey,
  ...(mutationKey ?? []),
];
export type CreateDefaultConnectionsMutationResult = Awaited<ReturnType<typeof createDefaultConnections>>;
export const useCreateDefaultConnectionsKey = "CreateDefaultConnections";
export const UseCreateDefaultConnectionsKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateDefaultConnectionsKey,
  ...(mutationKey ?? []),
];
export type TriggerDagRunMutationResult = Awaited<ReturnType<typeof triggerDagRun>>;
export const useTriggerDagRunKey = "TriggerDagRun";
export const UseTriggerDagRunKeyFn = (mutationKey?: Array<unknown>) => [
  useTriggerDagRunKey,
  ...(mutationKey ?? []),
];
export type ClearDagRunMutationResult = Awaited<ReturnType<typeof clearDagRun>>;
export const useClearDagRunKey = "ClearDagRun";
export const UseClearDagRunKeyFn = (mutationKey?: Array<unknown>) => [
  useClearDagRunKey,
  ...(mutationKey ?? []),
];
export type GetListDagRunsBatchMutationResult = Awaited<ReturnType<typeof getListDagRunsBatch>>;
export const useGetListDagRunsBatchKey = "GetListDagRunsBatch";
export const UseGetListDagRunsBatchKeyFn = (mutationKey?: Array<unknown>) => [
  useGetListDagRunsBatchKey,
  ...(mutationKey ?? []),
];
export type ClearDagRunsMutationResult = Awaited<ReturnType<typeof clearDagRuns>>;
export const useClearDagRunsKey = "ClearDagRuns";
export const UseClearDagRunsKeyFn = (mutationKey?: Array<unknown>) => [
  useClearDagRunsKey,
  ...(mutationKey ?? []),
];
export type ClearDagRunPartitionsMutationResult = Awaited<ReturnType<typeof clearDagRunPartitions>>;
export const useClearDagRunPartitionsKey = "ClearDagRunPartitions";
export const UseClearDagRunPartitionsKeyFn = (mutationKey?: Array<unknown>) => [
  useClearDagRunPartitionsKey,
  ...(mutationKey ?? []),
];
export type FavoriteDagMutationResult = Awaited<ReturnType<typeof favoriteDag>>;
export const useFavoriteDagKey = "FavoriteDag";
export const UseFavoriteDagKeyFn = (mutationKey?: Array<unknown>) => [
  useFavoriteDagKey,
  ...(mutationKey ?? []),
];
export type UnfavoriteDagMutationResult = Awaited<ReturnType<typeof unfavoriteDag>>;
export const useUnfavoriteDagKey = "UnfavoriteDag";
export const UseUnfavoriteDagKeyFn = (mutationKey?: Array<unknown>) => [
  useUnfavoriteDagKey,
  ...(mutationKey ?? []),
];
export type PostPoolMutationResult = Awaited<ReturnType<typeof postPool>>;
export const usePostPoolKey = "PostPool";
export const UsePostPoolKeyFn = (mutationKey?: Array<unknown>) => [usePostPoolKey, ...(mutationKey ?? [])];
export type CreateXcomEntryMutationResult = Awaited<ReturnType<typeof createXcomEntry>>;
export const useCreateXcomEntryKey = "CreateXcomEntry";
export const UseCreateXcomEntryKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateXcomEntryKey,
  ...(mutationKey ?? []),
];
export type GetTaskInstancesBatchMutationResult = Awaited<ReturnType<typeof getTaskInstancesBatch>>;
export const useGetTaskInstancesBatchKey = "GetTaskInstancesBatch";
export const UseGetTaskInstancesBatchKeyFn = (mutationKey?: Array<unknown>) => [
  useGetTaskInstancesBatchKey,
  ...(mutationKey ?? []),
];
export type PostClearTaskInstancesMutationResult = Awaited<ReturnType<typeof postClearTaskInstances>>;
export const usePostClearTaskInstancesKey = "PostClearTaskInstances";
export const UsePostClearTaskInstancesKeyFn = (mutationKey?: Array<unknown>) => [
  usePostClearTaskInstancesKey,
  ...(mutationKey ?? []),
];
export type PostVariableMutationResult = Awaited<ReturnType<typeof postVariable>>;
export const usePostVariableKey = "PostVariable";
export const UsePostVariableKeyFn = (mutationKey?: Array<unknown>) => [
  usePostVariableKey,
  ...(mutationKey ?? []),
];
export type GenerateTokenMutationResult = Awaited<ReturnType<typeof generateToken>>;
export const useGenerateTokenKey = "GenerateToken";
export const UseGenerateTokenKeyFn = (mutationKey?: Array<unknown>) => [
  useGenerateTokenKey,
  ...(mutationKey ?? []),
];
export type CreateTokenMutationResult = Awaited<ReturnType<typeof createToken>>;
export const useCreateTokenKey = "CreateToken";
export const UseCreateTokenKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateTokenKey,
  ...(mutationKey ?? []),
];
export type CreateTokenCliMutationResult = Awaited<ReturnType<typeof createTokenCli>>;
export const useCreateTokenCliKey = "CreateTokenCli";
export const UseCreateTokenCliKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateTokenCliKey,
  ...(mutationKey ?? []),
];
export type CreateRoleMutationResult = Awaited<ReturnType<typeof createRole>>;
export const useCreateRoleKey = "CreateRole";
export const UseCreateRoleKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateRoleKey,
  ...(mutationKey ?? []),
];
export type CreateUserMutationResult = Awaited<ReturnType<typeof createUser>>;
export const useCreateUserKey = "CreateUser";
export const UseCreateUserKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateUserKey,
  ...(mutationKey ?? []),
];
export type CreateTeamMutationResult = Awaited<ReturnType<typeof createTeam>>;
export const useCreateTeamKey = "CreateTeam";
export const UseCreateTeamKeyFn = (mutationKey?: Array<unknown>) => [
  useCreateTeamKey,
  ...(mutationKey ?? []),
];
export type PauseBackfillMutationResult = Awaited<ReturnType<typeof pauseBackfill>>;
export const usePauseBackfillKey = "PauseBackfill";
export const UsePauseBackfillKeyFn = (mutationKey?: Array<unknown>) => [
  usePauseBackfillKey,
  ...(mutationKey ?? []),
];
export type UnpauseBackfillMutationResult = Awaited<ReturnType<typeof unpauseBackfill>>;
export const useUnpauseBackfillKey = "UnpauseBackfill";
export const UseUnpauseBackfillKeyFn = (mutationKey?: Array<unknown>) => [
  useUnpauseBackfillKey,
  ...(mutationKey ?? []),
];
export type CancelBackfillMutationResult = Awaited<ReturnType<typeof cancelBackfill>>;
export const useCancelBackfillKey = "CancelBackfill";
export const UseCancelBackfillKeyFn = (mutationKey?: Array<unknown>) => [
  useCancelBackfillKey,
  ...(mutationKey ?? []),
];
export type SetAssetStateStoreMutationResult = Awaited<ReturnType<typeof setAssetStateStore>>;
export const useSetAssetStateStoreKey = "SetAssetStateStore";
export const UseSetAssetStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useSetAssetStateStoreKey,
  ...(mutationKey ?? []),
];
export type SetTaskStateStoreMutationResult = Awaited<ReturnType<typeof setTaskStateStore>>;
export const useSetTaskStateStoreKey = "SetTaskStateStore";
export const UseSetTaskStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useSetTaskStateStoreKey,
  ...(mutationKey ?? []),
];
export type ReparseDagFileMutationResult = Awaited<ReturnType<typeof reparseDagFile>>;
export const useReparseDagFileKey = "ReparseDagFile";
export const UseReparseDagFileKeyFn = (mutationKey?: Array<unknown>) => [
  useReparseDagFileKey,
  ...(mutationKey ?? []),
];
export type PatchConnectionMutationResult = Awaited<ReturnType<typeof patchConnection>>;
export const usePatchConnectionKey = "PatchConnection";
export const UsePatchConnectionKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchConnectionKey,
  ...(mutationKey ?? []),
];
export type BulkConnectionsMutationResult = Awaited<ReturnType<typeof bulkConnections>>;
export const useBulkConnectionsKey = "BulkConnections";
export const UseBulkConnectionsKeyFn = (mutationKey?: Array<unknown>) => [
  useBulkConnectionsKey,
  ...(mutationKey ?? []),
];
export type PatchDagRunMutationResult = Awaited<ReturnType<typeof patchDagRun>>;
export const usePatchDagRunKey = "PatchDagRun";
export const UsePatchDagRunKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchDagRunKey,
  ...(mutationKey ?? []),
];
export type BulkDagRunsMutationResult = Awaited<ReturnType<typeof bulkDagRuns>>;
export const useBulkDagRunsKey = "BulkDagRuns";
export const UseBulkDagRunsKeyFn = (mutationKey?: Array<unknown>) => [
  useBulkDagRunsKey,
  ...(mutationKey ?? []),
];
export type PatchDagsMutationResult = Awaited<ReturnType<typeof patchDags>>;
export const usePatchDagsKey = "PatchDags";
export const UsePatchDagsKeyFn = (mutationKey?: Array<unknown>) => [usePatchDagsKey, ...(mutationKey ?? [])];
export type PatchDagMutationResult = Awaited<ReturnType<typeof patchDag>>;
export const usePatchDagKey = "PatchDag";
export const UsePatchDagKeyFn = (mutationKey?: Array<unknown>) => [usePatchDagKey, ...(mutationKey ?? [])];
export type PatchPoolMutationResult = Awaited<ReturnType<typeof patchPool>>;
export const usePatchPoolKey = "PatchPool";
export const UsePatchPoolKeyFn = (mutationKey?: Array<unknown>) => [usePatchPoolKey, ...(mutationKey ?? [])];
export type BulkPoolsMutationResult = Awaited<ReturnType<typeof bulkPools>>;
export const useBulkPoolsKey = "BulkPools";
export const UseBulkPoolsKeyFn = (mutationKey?: Array<unknown>) => [useBulkPoolsKey, ...(mutationKey ?? [])];
export type PatchTaskStateStoreMutationResult = Awaited<ReturnType<typeof patchTaskStateStore>>;
export const usePatchTaskStateStoreKey = "PatchTaskStateStore";
export const UsePatchTaskStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskStateStoreKey,
  ...(mutationKey ?? []),
];
export type UpdateXcomEntryMutationResult = Awaited<ReturnType<typeof updateXcomEntry>>;
export const useUpdateXcomEntryKey = "UpdateXcomEntry";
export const UseUpdateXcomEntryKeyFn = (mutationKey?: Array<unknown>) => [
  useUpdateXcomEntryKey,
  ...(mutationKey ?? []),
];
export type PatchTaskInstanceMutationResult = Awaited<ReturnType<typeof patchTaskInstance>>;
export const usePatchTaskInstanceKey = "PatchTaskInstance";
export const UsePatchTaskInstanceKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskInstanceKey,
  ...(mutationKey ?? []),
];
export type PatchTaskInstanceByMapIndexMutationResult = Awaited<
  ReturnType<typeof patchTaskInstanceByMapIndex>
>;
export const usePatchTaskInstanceByMapIndexKey = "PatchTaskInstanceByMapIndex";
export const UsePatchTaskInstanceByMapIndexKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskInstanceByMapIndexKey,
  ...(mutationKey ?? []),
];
export type BulkTaskInstancesMutationResult = Awaited<ReturnType<typeof bulkTaskInstances>>;
export const useBulkTaskInstancesKey = "BulkTaskInstances";
export const UseBulkTaskInstancesKeyFn = (mutationKey?: Array<unknown>) => [
  useBulkTaskInstancesKey,
  ...(mutationKey ?? []),
];
export type PatchTaskGroupInstancesMutationResult = Awaited<ReturnType<typeof patchTaskGroupInstances>>;
export const usePatchTaskGroupInstancesKey = "PatchTaskGroupInstances";
export const UsePatchTaskGroupInstancesKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskGroupInstancesKey,
  ...(mutationKey ?? []),
];
export type PatchTaskGroupInstancesDryRunMutationResult = Awaited<
  ReturnType<typeof patchTaskGroupInstancesDryRun>
>;
export const usePatchTaskGroupInstancesDryRunKey = "PatchTaskGroupInstancesDryRun";
export const UsePatchTaskGroupInstancesDryRunKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskGroupInstancesDryRunKey,
  ...(mutationKey ?? []),
];
export type PatchTaskInstanceDryRunByMapIndexMutationResult = Awaited<
  ReturnType<typeof patchTaskInstanceDryRunByMapIndex>
>;
export const usePatchTaskInstanceDryRunByMapIndexKey = "PatchTaskInstanceDryRunByMapIndex";
export const UsePatchTaskInstanceDryRunByMapIndexKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskInstanceDryRunByMapIndexKey,
  ...(mutationKey ?? []),
];
export type PatchTaskInstanceDryRunMutationResult = Awaited<ReturnType<typeof patchTaskInstanceDryRun>>;
export const usePatchTaskInstanceDryRunKey = "PatchTaskInstanceDryRun";
export const UsePatchTaskInstanceDryRunKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchTaskInstanceDryRunKey,
  ...(mutationKey ?? []),
];
export type PatchVariableMutationResult = Awaited<ReturnType<typeof patchVariable>>;
export const usePatchVariableKey = "PatchVariable";
export const UsePatchVariableKeyFn = (mutationKey?: Array<unknown>) => [
  usePatchVariableKey,
  ...(mutationKey ?? []),
];
export type BulkVariablesMutationResult = Awaited<ReturnType<typeof bulkVariables>>;
export const useBulkVariablesKey = "BulkVariables";
export const UseBulkVariablesKeyFn = (mutationKey?: Array<unknown>) => [
  useBulkVariablesKey,
  ...(mutationKey ?? []),
];
export type UpdateHitlDetailMutationResult = Awaited<ReturnType<typeof updateHitlDetail>>;
export const useUpdateHitlDetailKey = "UpdateHitlDetail";
export const UseUpdateHitlDetailKeyFn = (mutationKey?: Array<unknown>) => [
  useUpdateHitlDetailKey,
  ...(mutationKey ?? []),
];
export type PatchRoleMutationResult = Awaited<ReturnType<typeof patchRole>>;
export const usePatchRoleKey = "PatchRole";
export const UsePatchRoleKeyFn = (mutationKey?: Array<unknown>) => [usePatchRoleKey, ...(mutationKey ?? [])];
export type UpdateUserMutationResult = Awaited<ReturnType<typeof updateUser>>;
export const useUpdateUserKey = "UpdateUser";
export const UseUpdateUserKeyFn = (mutationKey?: Array<unknown>) => [
  useUpdateUserKey,
  ...(mutationKey ?? []),
];
export type DeleteAssetQueuedEventsMutationResult = Awaited<ReturnType<typeof deleteAssetQueuedEvents>>;
export const useDeleteAssetQueuedEventsKey = "DeleteAssetQueuedEvents";
export const UseDeleteAssetQueuedEventsKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteAssetQueuedEventsKey,
  ...(mutationKey ?? []),
];
export type DeleteDagAssetQueuedEventsMutationResult = Awaited<ReturnType<typeof deleteDagAssetQueuedEvents>>;
export const useDeleteDagAssetQueuedEventsKey = "DeleteDagAssetQueuedEvents";
export const UseDeleteDagAssetQueuedEventsKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteDagAssetQueuedEventsKey,
  ...(mutationKey ?? []),
];
export type DeleteDagAssetQueuedEventMutationResult = Awaited<ReturnType<typeof deleteDagAssetQueuedEvent>>;
export const useDeleteDagAssetQueuedEventKey = "DeleteDagAssetQueuedEvent";
export const UseDeleteDagAssetQueuedEventKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteDagAssetQueuedEventKey,
  ...(mutationKey ?? []),
];
export type DeleteConnectionMutationResult = Awaited<ReturnType<typeof deleteConnection>>;
export const useDeleteConnectionKey = "DeleteConnection";
export const UseDeleteConnectionKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteConnectionKey,
  ...(mutationKey ?? []),
];
export type DeleteDagRunMutationResult = Awaited<ReturnType<typeof deleteDagRun>>;
export const useDeleteDagRunKey = "DeleteDagRun";
export const UseDeleteDagRunKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteDagRunKey,
  ...(mutationKey ?? []),
];
export type DeleteDagMutationResult = Awaited<ReturnType<typeof deleteDag>>;
export const useDeleteDagKey = "DeleteDag";
export const UseDeleteDagKeyFn = (mutationKey?: Array<unknown>) => [useDeleteDagKey, ...(mutationKey ?? [])];
export type DeletePoolMutationResult = Awaited<ReturnType<typeof deletePool>>;
export const useDeletePoolKey = "DeletePool";
export const UseDeletePoolKeyFn = (mutationKey?: Array<unknown>) => [
  useDeletePoolKey,
  ...(mutationKey ?? []),
];
export type ClearAssetStateStoreMutationResult = Awaited<ReturnType<typeof clearAssetStateStore>>;
export const useClearAssetStateStoreKey = "ClearAssetStateStore";
export const UseClearAssetStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useClearAssetStateStoreKey,
  ...(mutationKey ?? []),
];
export type DeleteAssetStateStoreMutationResult = Awaited<ReturnType<typeof deleteAssetStateStore>>;
export const useDeleteAssetStateStoreKey = "DeleteAssetStateStore";
export const UseDeleteAssetStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteAssetStateStoreKey,
  ...(mutationKey ?? []),
];
export type ClearTaskStateStoreMutationResult = Awaited<ReturnType<typeof clearTaskStateStore>>;
export const useClearTaskStateStoreKey = "ClearTaskStateStore";
export const UseClearTaskStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useClearTaskStateStoreKey,
  ...(mutationKey ?? []),
];
export type DeleteTaskStateStoreMutationResult = Awaited<ReturnType<typeof deleteTaskStateStore>>;
export const useDeleteTaskStateStoreKey = "DeleteTaskStateStore";
export const UseDeleteTaskStateStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteTaskStateStoreKey,
  ...(mutationKey ?? []),
];
export type DeleteXcomEntryMutationResult = Awaited<ReturnType<typeof deleteXcomEntry>>;
export const useDeleteXcomEntryKey = "DeleteXcomEntry";
export const UseDeleteXcomEntryKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteXcomEntryKey,
  ...(mutationKey ?? []),
];
export type DeleteTaskInstanceMutationResult = Awaited<ReturnType<typeof deleteTaskInstance>>;
export const useDeleteTaskInstanceKey = "DeleteTaskInstance";
export const UseDeleteTaskInstanceKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteTaskInstanceKey,
  ...(mutationKey ?? []),
];
export type DeleteVariableMutationResult = Awaited<ReturnType<typeof deleteVariable>>;
export const useDeleteVariableKey = "DeleteVariable";
export const UseDeleteVariableKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteVariableKey,
  ...(mutationKey ?? []),
];
export type DeleteRoleMutationResult = Awaited<ReturnType<typeof deleteRole>>;
export const useDeleteRoleKey = "DeleteRole";
export const UseDeleteRoleKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteRoleKey,
  ...(mutationKey ?? []),
];
export type DeleteUserMutationResult = Awaited<ReturnType<typeof deleteUser>>;
export const useDeleteUserKey = "DeleteUser";
export const UseDeleteUserKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteUserKey,
  ...(mutationKey ?? []),
];
export type DeleteTeamMutationResult = Awaited<ReturnType<typeof deleteTeam>>;
export const useDeleteTeamKey = "DeleteTeam";
export const UseDeleteTeamKeyFn = (mutationKey?: Array<unknown>) => [
  useDeleteTeamKey,
  ...(mutationKey ?? []),
];
