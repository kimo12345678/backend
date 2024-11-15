import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { User } from './user.type';

@Resolver(() => User)
export class UserResolver {
  private static userData = {
    firstName: "Zaria",
    fatherName: "Edward",
    grandfatherName: "Ernest",
    familyName: "Willie",
    localizedName: {
      firstName: "صفوان",
      fatherName: "حمدان",
      grandfatherName: "هشام",
      familyName: "عباس",
    },
    nationalId: {
      idNumber: "1c1f3fde-0581-4afb-8c7e-abacf3bc5875",
      expiryDate: "2024-07-24T22:45:29.864Z",
    },
    nationalities: [
      { country: { id: 1016, name: "Bolivia" }, countryId: 1016 },
      { country: { id: 1117, name: "Latvia" }, countryId: 1117 },
      { country: { id: 1225, name: "Virgin Islands, U.S." }, countryId: 1225 }
    ],
    maritalStatus: {
      id: "27",
      name: "Divorced",
    },
    dependants: 60
  };

  @Query(() => User)
  user(@Args('userId', { type: () => Int }) userId: number): User {
    // For now, return the static data based on the userId
    return UserResolver.userData;
  }
}
