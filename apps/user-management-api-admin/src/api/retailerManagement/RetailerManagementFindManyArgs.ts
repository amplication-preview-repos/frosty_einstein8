import { RetailerManagementWhereInput } from "./RetailerManagementWhereInput";
import { RetailerManagementOrderByInput } from "./RetailerManagementOrderByInput";

export type RetailerManagementFindManyArgs = {
  where?: RetailerManagementWhereInput;
  orderBy?: Array<RetailerManagementOrderByInput>;
  skip?: number;
  take?: number;
};
