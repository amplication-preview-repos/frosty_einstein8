import * as graphql from "@nestjs/graphql";
import { RetailerManagementResolverBase } from "./base/retailerManagement.resolver.base";
import { RetailerManagement } from "./base/RetailerManagement";
import { RetailerManagementService } from "./retailerManagement.service";

@graphql.Resolver(() => RetailerManagement)
export class RetailerManagementResolver extends RetailerManagementResolverBase {
  constructor(protected readonly service: RetailerManagementService) {
    super(service);
  }
}
