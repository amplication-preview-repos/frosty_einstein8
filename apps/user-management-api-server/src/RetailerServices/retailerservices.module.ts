import { Module } from "@nestjs/common";
import { RetailerServicesService } from "./retailerservices.service";
import { RetailerServicesController } from "./retailerservices.controller";
import { RetailerServicesResolver } from "./retailerservices.resolver";

@Module({
  controllers: [RetailerServicesController],
  providers: [RetailerServicesService, RetailerServicesResolver],
  exports: [RetailerServicesService],
})
export class RetailerServicesModule {}
