import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminFunctionsService } from "./adminfunctions.service";
import { CreateUserInput } from "../adminFunctions/CreateUserInput";

@swagger.ApiTags("adminFunctions")
@common.Controller("adminFunctions")
export class AdminFunctionsController {
  constructor(protected readonly service: AdminFunctionsService) {}

  @common.Put("/kyc-verifications/:id/approve")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApproveKyc(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.ApproveKyc(body);
      }

  @common.Put("/users/:id/block")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BlockUser(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.BlockUser(body);
      }

  @common.Get("/business-analysis")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BusinessAnalysis(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.BusinessAnalysis(body);
      }

  @common.Put("/services/control")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ControlService(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.ControlService(body);
      }

  @common.Post("/users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
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
    body: CreateUserInput
  ): Promise<string> {
        return this.service.DeleteUser(body);
      }

  @common.Get("/users/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserDetails(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.GetUserDetails(body);
      }

  @common.Get("/users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserList(
    @common.Body()
    body: CreateUserInput
  ): Promise<string[]> {
        return this.service.GetUserList(body);
      }

  @common.Put("/complaints/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleComplaint(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.HandleComplaint(body);
      }

  @common.Post("/admin/commission-settings")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SetCommission(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.SetCommission(body);
      }

  @common.Put("/users/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateUser(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.UpdateUser(body);
      }
}
