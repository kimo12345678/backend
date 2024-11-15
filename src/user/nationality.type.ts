// src/user/nationality.type.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from './country.type'; // Import the Country class

@ObjectType()
export class Nationality {
  @Field(() => Country)  // Define the `country` field as a `Country` object
  country: Country;

  @Field(() => Int)
  countryId: number;
}
