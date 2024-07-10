import { RetailerManagement as TRetailerManagement } from "../api/retailerManagement/RetailerManagement";

export const RETAILERMANAGEMENT_TITLE_FIELD = "id";

export const RetailerManagementTitle = (
  record: TRetailerManagement
): string => {
  return record.id?.toString() || String(record.id);
};
