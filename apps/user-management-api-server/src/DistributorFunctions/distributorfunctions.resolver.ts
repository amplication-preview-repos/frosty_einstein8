import * as graphql from "@nestjs/graphql";
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
import { DistributorFunctionsService } from "./distributorfunctions.service";

export class DistributorFunctionsResolver {
  constructor(protected readonly service: DistributorFunctionsService) {}

  @graphql.Mutation(() => String)
  async AddMoney(
    @graphql.Args()
    args: AddMoneyInput
  ): Promise<string> {
    return this.service.AddMoney(args);
  }

  @graphql.Mutation(() => String)
  async ChangePasscode(
    @graphql.Args()
    args: ChangePasscodeInput
  ): Promise<string> {
    return this.service.ChangePasscode(args);
  }

  @graphql.Mutation(() => String)
  async CreateRetailer(
    @graphql.Args()
    args: CreateRetailerInput
  ): Promise<string> {
    return this.service.CreateRetailer(args);
  }

  @graphql.Mutation(() => String)
  async CreditMoney(
    @graphql.Args()
    args: CreditMoneyInput
  ): Promise<string> {
    return this.service.CreditMoney(args);
  }

  @graphql.Mutation(() => String)
  async EditProfile(
    @graphql.Args()
    args: EditProfileInput
  ): Promise<string> {
    return this.service.EditProfile(args);
  }

  @graphql.Mutation(() => String)
  async FundTransfer(
    @graphql.Args()
    args: FundTransferInput
  ): Promise<string> {
    return this.service.FundTransfer(args);
  }

  @graphql.Mutation(() => String)
  async KycVerification(
    @graphql.Args()
    args: KycVerificationInput
  ): Promise<string> {
    return this.service.KycVerification(args);
  }

  @graphql.Mutation(() => String)
  async MoneyTransfer(
    @graphql.Args()
    args: MoneyTransferInput
  ): Promise<string> {
    return this.service.MoneyTransfer(args);
  }

  @graphql.Query(() => String)
  async RetailerHistory(
    @graphql.Args()
    args: RetailerHistoryInput
  ): Promise<string> {
    return this.service.RetailerHistory(args);
  }

  @graphql.Mutation(() => String)
  async TakeBackMoney(
    @graphql.Args()
    args: TakeBackMoneyInput
  ): Promise<string> {
    return this.service.TakeBackMoney(args);
  }
}
