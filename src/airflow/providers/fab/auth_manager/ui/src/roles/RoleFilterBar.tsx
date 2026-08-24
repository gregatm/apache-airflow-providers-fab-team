import { FilterBar } from "src/components/FilterBar"
import { SearchParamsKeys } from "src/constants/searchParams";
import { FilterableSearchParamsKeys, useFiltersHandler } from "src/utils";

export const RoleFilterBar = () => {

  const searchParamsKeys: Array<FilterableSearchParamsKeys> = [SearchParamsKeys.TEAMS];
  const { filterConfigs, handleFiltersChange, initialValues } = useFiltersHandler(searchParamsKeys);

  const onFiltersChange = () => {};

  return (
    <FilterBar configs={filterConfigs} initialValues={initialValues} onFiltersChange={handleFiltersChange} />
  )
}
