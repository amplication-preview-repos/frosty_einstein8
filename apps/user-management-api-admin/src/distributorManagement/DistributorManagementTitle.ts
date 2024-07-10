import { DistributorManagement as TDistributorManagement } from "../api/distributorManagement/DistributorManagement";

export const DISTRIBUTORMANAGEMENT_TITLE_FIELD = "id";

export const DistributorManagementTitle = (
  record: TDistributorManagement
): string => {
  return record.id?.toString() || String(record.id);
};
