import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Nationality } from './nationality.type'; // Import the Nationality class
@ObjectType()
export class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}
@ObjectType()
export class ContactInfo {
  @Field()
  email: string;

  @Field()
  mobile: string;
}

@ObjectType()
export class EmergencyContact {
  @Field()
  name: string;

  @Field()
  relation: string;

  @Field()
  phone: string;
}

@ObjectType()
export class Address {
  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field()
  building: string;

  @Field()
  street: string;

  @Field()
  floorNo: string;

  @Field()
  apartment: string;
}

@ObjectType()
export class DrivingLicense {
  @Field()
  hasLicense: boolean;

  @Field()
  type: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class MaritalStatus {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field()
  dependants: number;
  @Field(() => ContactInfo, { nullable: true })
  contactInfo?: ContactInfo;

  @Field(() => EmergencyContact, { nullable: true })
  emergencyContact?: EmergencyContact;

  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field(() => DrivingLicense, { nullable: true })
  drivingLicense?: DrivingLicense;
}
