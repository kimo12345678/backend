import { InputType, Field } from '@nestjs/graphql';
import { MaritalStatus } from 'src/user/user.type';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  postalCode?: string;

  @Field({ nullable: true })
  building?: string;

  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  floorNo?: string;

  @Field({ nullable: true })
  apartment?: string;
  
  @Field({ nullable: true })
  hasLicense?: boolean;

  @Field({ nullable: true })
  licenseType?: string;



  @Field({ nullable: true })
  dependants?: number;
}
