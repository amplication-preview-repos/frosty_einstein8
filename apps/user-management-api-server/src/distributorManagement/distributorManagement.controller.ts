import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DistributorManagementService } from "./distributorManagement.service";
import { DistributorManagementControllerBase } from "./base/distributorManagement.controller.base";

@swagger.ApiTags("distributorManagements")
@common.Controller("distributorManagements")
export class DistributorManagementController extends DistributorManagementControllerBase {
  constructor(protected readonly service: DistributorManagementService) {
    super(service);
  }
}
