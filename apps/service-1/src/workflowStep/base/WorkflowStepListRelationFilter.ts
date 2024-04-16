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
import { WorkflowStepWhereInput } from "./WorkflowStepWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkflowStepListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkflowStepWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepWhereInput)
  @IsOptional()
  @Field(() => WorkflowStepWhereInput, {
    nullable: true,
  })
  every?: WorkflowStepWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowStepWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepWhereInput)
  @IsOptional()
  @Field(() => WorkflowStepWhereInput, {
    nullable: true,
  })
  some?: WorkflowStepWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowStepWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepWhereInput)
  @IsOptional()
  @Field(() => WorkflowStepWhereInput, {
    nullable: true,
  })
  none?: WorkflowStepWhereInput;
}
export { WorkflowStepListRelationFilter as WorkflowStepListRelationFilter };