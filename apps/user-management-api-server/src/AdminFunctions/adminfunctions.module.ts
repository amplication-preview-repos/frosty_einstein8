import { Module } from "@nestjs/common";
import { AdminFunctionsService } from "./adminfunctions.service";
import { AdminFunctionsController } from "./adminfunctions.controller";
import { AdminFunctionsResolver } from "./adminfunctions.resolver";

@Module({
  controllers: [AdminFunctionsController],
  providers: [AdminFunctionsService, AdminFunctionsResolver],
  exports: [AdminFunctionsService],
})
export class AdminFunctionsModule {}
