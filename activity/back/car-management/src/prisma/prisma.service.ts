import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrimaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }

    async nableShutdownHooks(app: INestApplication) {
        process.on ('beforeExit', async () => {
            await app.close()
        })
    }
}