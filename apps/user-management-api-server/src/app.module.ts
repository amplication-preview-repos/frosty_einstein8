import { Module } from "@nestjs/common";
import { ServiceModule } from "./service/service.module";
import { TransactionModule } from "./transaction/transaction.module";
import { ProfileModule } from "./profile/profile.module";
import { ReportModule } from "./report/report.module";
import { DistributorManagementModule } from "./distributorManagement/distributorManagement.module";
import { RetailerManagementModule } from "./retailerManagement/retailerManagement.module";
import { UserModule } from "./user/user.module";
import { AdminFunctionsModule } from "./AdminFunctions/adminfunctions.module";
import { AuthenticationModule } from "./Authentication/authentication.module";
import { DistributorFunctionsModule } from "./DistributorFunctions/distributorfunctions.module";
import { RetailerServicesModule } from "./RetailerServices/retailerservices.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ServiceModule,
    TransactionModule,
    ProfileModule,
    ReportModule,
    DistributorManagementModule,
    RetailerManagementModule,
    UserModule,
    AdminFunctionsModule,
    AuthenticationModule,
    DistributorFunctionsModule,
    RetailerServicesModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
