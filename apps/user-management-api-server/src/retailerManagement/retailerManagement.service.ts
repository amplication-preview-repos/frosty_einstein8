import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetailerManagementServiceBase } from "./base/retailerManagement.service.base";

@Injectable()
export class RetailerManagementService extends RetailerManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
