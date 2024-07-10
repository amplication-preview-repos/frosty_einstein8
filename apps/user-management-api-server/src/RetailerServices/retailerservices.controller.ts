import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RetailerServicesService } from "./retailerservices.service";
import { MobileRechargeInput } from "../retailerServices/MobileRechargeInput";

@swagger.ApiTags("retailerServices")
@common.Controller("retailerServices")
export class RetailerServicesController {
  constructor(protected readonly service: RetailerServicesService) {}

  @common.Post("/services/broadband")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BroadbandRecharge(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.BroadbandRecharge(body);
      }

  @common.Post("/services/dth")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DthRecharge(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.DthRecharge(body);
      }

  @common.Post("/services/education")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EducationFeePayment(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.EducationFeePayment(body);
      }

  @common.Post("/services/electricity")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ElectricityBillPayment(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.ElectricityBillPayment(body);
      }

  @common.Post("/services/fastag")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FastagRecharge(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.FastagRecharge(body);
      }

  @common.Post("/services/gas")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GasService(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.GasService(body);
      }

  @common.Post("/services/insurance")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InsuranceService(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.InsuranceService(body);
      }

  @common.Post("/services/kyc")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async KycSubmission(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.KycSubmission(body);
      }

  @common.Post("/services/loan")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoanService(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.LoanService(body);
      }

  @common.Post("/services/mobile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MobileRecharge(
    @common.Body()
    body: MobileRechargeInput
  ): Promise<string> {
        return this.service.MobileRecharge(body);
      }
}
