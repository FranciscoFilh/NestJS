import { Module } from '@nestjs/common';
import { UserController } from './user.controle';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule {}