import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DistributorFunctionsService } from "./distributorfunctions.service";
import { TakeBackMoneyInput } from "../distributorFunctions/TakeBackMoneyInput";

@swagger.ApiTags("distributorFunctions")
@common.Controller("distributorFunctions")
export class DistributorFunctionsController {
  constructor(protected readonly service: DistributorFunctionsService) {}

  @common.Post("/distributor/add-money")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddMoney(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.AddMoney(body);
      }

  @common.Put("/distributor/passcode")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ChangePasscode(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.ChangePasscode(body);
      }

  @common.Post("/retailers")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateRetailer(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.CreateRetailer(body);
      }

  @common.Post("/distributor/credit-money")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreditMoney(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.CreditMoney(body);
      }

  @common.Put("/distributor/profile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EditProfile(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.EditProfile(body);
      }

  @common.Post("/retailers/:id/fund-transfer")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FundTransfer(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.FundTransfer(body);
      }

  @common.Post("/retailers/:id/kyc-verification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async KycVerification(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.KycVerification(body);
      }

  @common.Post("/distributor/transfer-money")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MoneyTransfer(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.MoneyTransfer(body);
      }

  @common.Get("/retailers/:id/history")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetailerHistory(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.RetailerHistory(body);
      }

  @common.Post("/retailers/:id/take-back-money")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TakeBackMoney(
    @common.Body()
    body: TakeBackMoneyInput
  ): Promise<string> {
        return this.service.TakeBackMoney(body);
      }
}
