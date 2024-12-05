import * as graphql from "@nestjs/graphql";
import { DistributorManagementResolverBase } from "./base/distributorManagement.resolver.base";
import { DistributorManagement } from "./base/DistributorManagement";
import { DistributorManagementService } from "./distributorManagement.service";

@graphql.Resolver(() => DistributorManagement)
export class DistributorManagementResolver extends DistributorManagementResolverBase {
  constructor(protected readonly service: DistributorManagementService) {
    super(service);
  }
}
