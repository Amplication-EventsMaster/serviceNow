/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumMembershipRole } from "./EnumMembershipRole";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MembershipUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  accepted?: boolean;

  @ApiProperty({
    required: false,
    enum: EnumMembershipRole,
  })
  @IsEnum(EnumMembershipRole)
  @IsOptional()
  @Field(() => EnumMembershipRole, {
    nullable: true,
  })
  role?: "MEMBER" | "ADMIN" | "OWNER";

  @ApiProperty({
    required: false,
    type: () => TeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamWhereUniqueInput, {
    nullable: true,
  })
  team?: TeamWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { MembershipUpdateInput as MembershipUpdateInput };
