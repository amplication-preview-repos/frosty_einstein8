import * as graphql from "@nestjs/graphql";
import { LoginUserInput } from "../authentication/LoginUserInput";
import { LogoutUserInput } from "../authentication/LogoutUserInput";
import { RegisterUserInput } from "../authentication/RegisterUserInput";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => String)
  async LoginUser(
    @graphql.Args()
    args: LoginUserInput
  ): Promise<string> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => String)
  async LogoutUser(
    @graphql.Args()
    args: LogoutUserInput
  ): Promise<string> {
    return this.service.LogoutUser(args);
  }

  @graphql.Mutation(() => String)
  async RegisterUser(
    @graphql.Args()
    args: RegisterUserInput
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }
}
