import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // Add this line to specify the Apollo driver
      autoSchemaFile: true,   // Automatically generate the schema file
      playground: true,      // Enable GraphQL Playground for testing queries
    }),
    UserModule,
  ],
  providers: [UsersService],
})
export class AppModule {}
