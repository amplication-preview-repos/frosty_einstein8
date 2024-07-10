import * as graphql from "@nestjs/graphql";
import { BroadbandRechargeInput } from "../retailerServices/BroadbandRechargeInput";
import { DthRechargeInput } from "../retailerServices/DthRechargeInput";
import { EducationFeePaymentInput } from "../retailerServices/EducationFeePaymentInput";
import { ElectricityBillPaymentInput } from "../retailerServices/ElectricityBillPaymentInput";
import { FastagRechargeInput } from "../retailerServices/FastagRechargeInput";
import { GasServiceInput } from "../retailerServices/GasServiceInput";
import { InsuranceServiceInput } from "../retailerServices/InsuranceServiceInput";
import { KycSubmissionInput } from "../retailerServices/KycSubmissionInput";
import { LoanServiceInput } from "../retailerServices/LoanServiceInput";
import { MobileRechargeInput } from "../retailerServices/MobileRechargeInput";
import { RetailerServicesService } from "./retailerservices.service";

export class RetailerServicesResolver {
  constructor(protected readonly service: RetailerServicesService) {}

  @graphql.Mutation(() => String)
  async BroadbandRecharge(
    @graphql.Args()
    args: BroadbandRechargeInput
  ): Promise<string> {
    return this.service.BroadbandRecharge(args);
  }

  @graphql.Mutation(() => String)
  async DthRecharge(
    @graphql.Args()
    args: DthRechargeInput
  ): Promise<string> {
    return this.service.DthRecharge(args);
  }

  @graphql.Mutation(() => String)
  async EducationFeePayment(
    @graphql.Args()
    args: EducationFeePaymentInput
  ): Promise<string> {
    return this.service.EducationFeePayment(args);
  }

  @graphql.Mutation(() => String)
  async ElectricityBillPayment(
    @graphql.Args()
    args: ElectricityBillPaymentInput
  ): Promise<string> {
    return this.service.ElectricityBillPayment(args);
  }

  @graphql.Mutation(() => String)
  async FastagRecharge(
    @graphql.Args()
    args: FastagRechargeInput
  ): Promise<string> {
    return this.service.FastagRecharge(args);
  }

  @graphql.Mutation(() => String)
  async GasService(
    @graphql.Args()
    args: GasServiceInput
  ): Promise<string> {
    return this.service.GasService(args);
  }

  @graphql.Mutation(() => String)
  async InsuranceService(
    @graphql.Args()
    args: InsuranceServiceInput
  ): Promise<string> {
    return this.service.InsuranceService(args);
  }

  @graphql.Mutation(() => String)
  async KycSubmission(
    @graphql.Args()
    args: KycSubmissionInput
  ): Promise<string> {
    return this.service.KycSubmission(args);
  }

  @graphql.Mutation(() => String)
  async LoanService(
    @graphql.Args()
    args: LoanServiceInput
  ): Promise<string> {
    return this.service.LoanService(args);
  }

  @graphql.Mutation(() => String)
  async MobileRecharge(
    @graphql.Args()
    args: MobileRechargeInput
  ): Promise<string> {
    return this.service.MobileRecharge(args);
  }
}
