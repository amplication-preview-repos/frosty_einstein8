import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RetailerManagementService } from "./retailerManagement.service";
import { RetailerManagementControllerBase } from "./base/retailerManagement.controller.base";

@swagger.ApiTags("retailerManagements")
@common.Controller("retailerManagements")
export class RetailerManagementController extends RetailerManagementControllerBase {
  constructor(protected readonly service: RetailerManagementService) {
    super(service);
  }
}
