import { Module } from "@nestjs/common";
import { DistributorFunctionsService } from "./distributorfunctions.service";
import { DistributorFunctionsController } from "./distributorfunctions.controller";
import { DistributorFunctionsResolver } from "./distributorfunctions.resolver";

@Module({
  controllers: [DistributorFunctionsController],
  providers: [DistributorFunctionsService, DistributorFunctionsResolver],
  exports: [DistributorFunctionsService],
})
export class DistributorFunctionsModule {}
