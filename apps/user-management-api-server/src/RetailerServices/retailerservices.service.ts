import { Injectable } from "@nestjs/common";
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

@Injectable()
export class RetailerServicesService {
  constructor() {}
  async BroadbandRecharge(args: BroadbandRechargeInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async DthRecharge(args: DthRechargeInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async EducationFeePayment(args: EducationFeePaymentInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ElectricityBillPayment(args: ElectricityBillPaymentInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async FastagRecharge(args: FastagRechargeInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async GasService(args: GasServiceInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async InsuranceService(args: InsuranceServiceInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async KycSubmission(args: KycSubmissionInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async LoanService(args: LoanServiceInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async MobileRecharge(args: MobileRechargeInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
