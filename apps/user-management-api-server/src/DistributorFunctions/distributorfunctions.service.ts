import { Injectable } from "@nestjs/common";
import { AddMoneyInput } from "../distributorFunctions/AddMoneyInput";
import { ChangePasscodeInput } from "../distributorFunctions/ChangePasscodeInput";
import { CreateRetailerInput } from "../distributorFunctions/CreateRetailerInput";
import { CreditMoneyInput } from "../distributorFunctions/CreditMoneyInput";
import { EditProfileInput } from "../distributorFunctions/EditProfileInput";
import { FundTransferInput } from "../distributorFunctions/FundTransferInput";
import { KycVerificationInput } from "../distributorFunctions/KycVerificationInput";
import { MoneyTransferInput } from "../distributorFunctions/MoneyTransferInput";
import { RetailerHistoryInput } from "../distributorFunctions/RetailerHistoryInput";
import { TakeBackMoneyInput } from "../distributorFunctions/TakeBackMoneyInput";

@Injectable()
export class DistributorFunctionsService {
  constructor() {}
  async AddMoney(args: AddMoneyInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ChangePasscode(args: ChangePasscodeInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateRetailer(args: CreateRetailerInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreditMoney(args: CreditMoneyInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async EditProfile(args: EditProfileInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async FundTransfer(args: FundTransferInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async KycVerification(args: KycVerificationInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async MoneyTransfer(args: MoneyTransferInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetailerHistory(args: RetailerHistoryInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async TakeBackMoney(args: TakeBackMoneyInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
