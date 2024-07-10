import { Module } from "@nestjs/common";
import { DistributorManagementModuleBase } from "./base/distributorManagement.module.base";
import { DistributorManagementService } from "./distributorManagement.service";
import { DistributorManagementController } from "./distributorManagement.controller";
import { DistributorManagementResolver } from "./distributorManagement.resolver";

@Module({
  imports: [DistributorManagementModuleBase],
  controllers: [DistributorManagementController],
  providers: [DistributorManagementService, DistributorManagementResolver],
  exports: [DistributorManagementService],
})
export class DistributorManagementModule {}
