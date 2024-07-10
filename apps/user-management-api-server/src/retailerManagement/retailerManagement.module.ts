import { Module } from "@nestjs/common";
import { RetailerManagementModuleBase } from "./base/retailerManagement.module.base";
import { RetailerManagementService } from "./retailerManagement.service";
import { RetailerManagementController } from "./retailerManagement.controller";
import { RetailerManagementResolver } from "./retailerManagement.resolver";

@Module({
  imports: [RetailerManagementModuleBase],
  controllers: [RetailerManagementController],
  providers: [RetailerManagementService, RetailerManagementResolver],
  exports: [RetailerManagementService],
})
export class RetailerManagementModule {}
