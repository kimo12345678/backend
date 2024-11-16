Here's a `README.md` that provides an overview of your NestJS GraphQL API with the user update functionality, including the different types and modules involved:

---

# User Management API with GraphQL

This project implements a NestJS GraphQL API for managing user information. It allows users to query and update their details, including contact information, address, marital status, nationality, driving license, and more.

## Prerequisites

- Node.js (v16 or above)
- npm or yarn
- NestJS
- GraphQL

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-repository.git
```
```
cd backend
```

### 2. Install dependencies
```bash
npm install
# or using yarn
yarn install
```

### 3. Run the application
```bash
npm run start
# or using yarn
yarn start
```

Your application should be running on `http://localhost:4000/graphql`.

## GraphQL Schema

The API allows you to interact with the following types:

### User Types

- **User**: Represents the user with their personal details, including name, national ID, contact info, emergency contact, and more.
- **LocalizedName**: Represents the localized version of the user's name (e.g., Arabic or other languages).
- **ContactInfo**: Contains the user's email and mobile number.
- **EmergencyContact**: Contains the emergency contact details (name, relation, phone).
- **Address**: Contains the address details of the user (city, street, postal code, etc.).
- **DrivingLicense**: Contains driving license details (whether the user has a license, type, and expiry date).
- **NationalId**: Contains the user's national ID and its expiry date.
- **MaritalStatus**: Represents the user's marital status (e.g., single, married, divorced).
- **Nationality**: Represents the user's nationality with the corresponding country.

### Queries and Mutations

#### 1. `user(userId: number): User`

This query fetches the details of a user by their `userId`.

**Example:**
```graphql
query {
  user(userId: 1) {
    firstName
    familyName
    contactInfo {
      email
      mobile
    }
    address {
      city
      street
    }
  }
}
```



### Types and Input Types

#### **UpdateUserInput**

The input type for updating a user includes the following fields (all are optional):

- `firstName`
- `fatherName`
- `grandfatherName`
- `familyName`
- `email`
- `mobile`
- `city`
- `postalCode`
- `building`
- `street`
- `floorNo`
- `apartment`
- `hasLicense`
- `licenseType`
- `dependants`

#### **User**

The `User` type includes the following fields:

- `firstName`
- `fatherName`
- `grandfatherName`
- `familyName`
- `localizedName` (localized names in different languages)
- `nationalId` (national ID details)
- `nationalities` (array of nationality information)
- `maritalStatus` (marital status details)
- `dependants` (number of dependants)
- `contactInfo` (email and mobile number)
- `emergencyContact` (emergency contact details)
- `address` (address details)
- `drivingLicense` (driving license details)

### Example Response for `user` Query
```json
{
  "data": {
    "user": {
      "firstName": "Zaria",
      "fatherName": "Edward",
      "grandfatherName": "Ernest",
      "familyName": "Willie",
      "localizedName": {
        "firstName": "صفوان",
        "fatherName": "حمدان",
        "grandfatherName": "هشام",
        "familyName": "عباس"
      },
      "nationalId": {
        "idNumber": "1c1f3fde-0581-4afb-8c7e-abacf3bc5875",
        "expiryDate": "2024-07-24T22:45:29.864Z"
      },
      "nationalities": [
        {
          "country": { "id": 1016, "name": "Bolivia" },
          "countryId": 1016
        }
      ],
      "maritalStatus": {
        "id": "27",
        "name": "Divorced"
      },
      "dependants": 60,
      "contactInfo": {
        "email": "zaria@example.com",
        "mobile": "+123456789"
      },
      "emergencyContact": {
        "name": "Lily Ernest",
        "relation": "Sister",
        "phone": "+987654321"
      },
      "address": {
        "country": "USA",
        "city": "New York",
        "postalCode": "10001",
        "building": "123",
        "street": "5th Avenue",
        "floorNo": "2",
        "apartment": "4B"
      },
      "drivingLicense": {
        "hasLicense": true,
        "type": "Class A",
        "expiryDate": "2025-12-15T00:00:00.000Z"
      }
    }
  }
}
```

---

