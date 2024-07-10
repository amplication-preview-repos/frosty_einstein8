import * as graphql from "@nestjs/graphql";
import { RegisterUserInput } from "../authentication/RegisterUserInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => RegisterUserInput)
  async CreateUser(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<RegisterUserInput> {
    return this.service.CreateUser(args);
  }

  @graphql.Mutation(() => String)
  async DeleteUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteUser(args);
  }

  @graphql.Query(() => RegisterUserInput)
  async GetUserById(
    @graphql.Args()
    args: string
  ): Promise<RegisterUserInput> {
    return this.service.GetUserById(args);
  }

  @graphql.Query(() => [RegisterUserInput])
  async GetUsers(
    @graphql.Args()
    args: string
  ): Promise<RegisterUserInput[]> {
    return this.service.GetUsers(args);
  }

  @graphql.Mutation(() => RegisterUserInput)
  async UpdateUser(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<RegisterUserInput> {
    return this.service.UpdateUser(args);
  }
}
