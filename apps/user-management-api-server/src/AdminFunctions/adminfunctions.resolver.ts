import * as graphql from "@nestjs/graphql";
import { KycApprovalInput } from "../adminFunctions/KycApprovalInput";
import { ServiceControlInput } from "../adminFunctions/ServiceControlInput";
import { CreateUserInput } from "../adminFunctions/CreateUserInput";
import { ComplaintHandlingInput } from "../adminFunctions/ComplaintHandlingInput";
import { CommissionSettingsInput } from "../adminFunctions/CommissionSettingsInput";
import { AdminFunctionsService } from "./adminfunctions.service";

export class AdminFunctionsResolver {
  constructor(protected readonly service: AdminFunctionsService) {}

  @graphql.Mutation(() => String)
  async ApproveKyc(
    @graphql.Args()
    args: KycApprovalInput
  ): Promise<string> {
    return this.service.ApproveKyc(args);
  }

  @graphql.Mutation(() => String)
  async BlockUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.BlockUser(args);
  }

  @graphql.Query(() => String)
  async BusinessAnalysis(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.BusinessAnalysis(args);
  }

  @graphql.Mutation(() => String)
  async ControlService(
    @graphql.Args()
    args: ServiceControlInput
  ): Promise<string> {
    return this.service.ControlService(args);
  }

  @graphql.Mutation(() => String)
  async CreateUser(
    @graphql.Args()
    args: CreateUserInput
  ): Promise<string> {
    return this.service.CreateUser(args);
  }

  @graphql.Mutation(() => String)
  async DeleteUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteUser(args);
  }

  @graphql.Query(() => String)
  async GetUserDetails(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetUserDetails(args);
  }

  @graphql.Query(() => [String])
  async GetUserList(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.GetUserList(args);
  }

  @graphql.Mutation(() => String)
  async HandleComplaint(
    @graphql.Args()
    args: ComplaintHandlingInput
  ): Promise<string> {
    return this.service.HandleComplaint(args);
  }

  @graphql.Mutation(() => String)
  async SetCommission(
    @graphql.Args()
    args: CommissionSettingsInput
  ): Promise<string> {
    return this.service.SetCommission(args);
  }

  @graphql.Mutation(() => String)
  async UpdateUser(
    @graphql.Args()
    args: CreateUserInput
  ): Promise<string> {
    return this.service.UpdateUser(args);
  }
}
