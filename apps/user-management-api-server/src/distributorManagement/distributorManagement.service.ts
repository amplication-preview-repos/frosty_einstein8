import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DistributorManagementServiceBase } from "./base/distributorManagement.service.base";

@Injectable()
export class DistributorManagementService extends DistributorManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
