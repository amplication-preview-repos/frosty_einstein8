import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class KycVerificationInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    retailerID!: string;

    @Field(() => GraphQLJSON)
    kycDetails!: InputJsonValue;
}

export { KycVerificationInput as KycVerificationInput };