import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { RegisterUserInput } from "../authentication/RegisterUserInput";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Post("/users")
  @swagger.ApiOkResponse({
    type: RegisterUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: RegisterUserInput
  ): Promise<RegisterUserInput> {
        return this.service.CreateUser(body);
      }

  @common.Delete("/users/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteUser(
    @common.Body()
    body: RegisterUserInput
  ): Promise<string> {
        return this.service.DeleteUser(body);
      }

  @common.Get("/users/:id")
  @swagger.ApiOkResponse({
    type: RegisterUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserById(
    @common.Body()
    body: RegisterUserInput
  ): Promise<RegisterUserInput> {
        return this.service.GetUserById(body);
      }

  @common.Get("/users")
  @swagger.ApiOkResponse({
    type: RegisterUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUsers(
    @common.Body()
    body: RegisterUserInput
  ): Promise<RegisterUserInput[]> {
        return this.service.GetUsers(body);
      }

  @common.Put("/users/:id")
  @swagger.ApiOkResponse({
    type: RegisterUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateUser(
    @common.Body()
    body: RegisterUserInput
  ): Promise<RegisterUserInput> {
        return this.service.UpdateUser(body);
      }
}
