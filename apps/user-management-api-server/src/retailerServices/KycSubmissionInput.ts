import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class KycSubmissionInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userID!: string;

    @Field(() => GraphQLJSON)
    kycDetails!: InputJsonValue;
}

export { KycSubmissionInput as KycSubmissionInput };