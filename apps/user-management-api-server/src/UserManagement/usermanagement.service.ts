import { Injectable } from "@nestjs/common";
import { RegisterUserInput } from "../authentication/RegisterUserInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async CreateUser(args: RegisterUserInput): Promise<RegisterUserInput> {
    throw new Error("Not implemented");
  }
  async DeleteUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetUserById(args: string): Promise<RegisterUserInput> {
    throw new Error("Not implemented");
  }
  async GetUsers(args: string): Promise<RegisterUserInput[]> {
    throw new Error("Not implemented");
  }
  async UpdateUser(args: RegisterUserInput): Promise<RegisterUserInput> {
    throw new Error("Not implemented");
  }
}
