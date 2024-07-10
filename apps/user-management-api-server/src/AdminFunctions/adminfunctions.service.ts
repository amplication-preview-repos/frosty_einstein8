import { Injectable } from "@nestjs/common";
import { KycApprovalInput } from "../adminFunctions/KycApprovalInput";
import { ServiceControlInput } from "../adminFunctions/ServiceControlInput";
import { CreateUserInput } from "../adminFunctions/CreateUserInput";
import { ComplaintHandlingInput } from "../adminFunctions/ComplaintHandlingInput";
import { CommissionSettingsInput } from "../adminFunctions/CommissionSettingsInput";

@Injectable()
export class AdminFunctionsService {
  constructor() {}
  async ApproveKyc(args: KycApprovalInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async BlockUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async BusinessAnalysis(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ControlService(args: ServiceControlInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateUser(args: CreateUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetUserDetails(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetUserList(args: string): Promise<string[]> {
    throw new Error("Not implemented");
  }
  async HandleComplaint(args: ComplaintHandlingInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SetCommission(args: CommissionSettingsInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateUser(args: CreateUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
