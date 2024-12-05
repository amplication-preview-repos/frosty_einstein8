import { Injectable } from "@nestjs/common";
import { LoginUserInput } from "../authentication/LoginUserInput";
import { LogoutUserInput } from "../authentication/LogoutUserInput";
import { RegisterUserInput } from "../authentication/RegisterUserInput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async LoginUser(args: LoginUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async LogoutUser(args: LogoutUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: RegisterUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
