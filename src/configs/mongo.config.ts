import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = (
  ConfigService: ConfigService,
): MongooseModuleOptions => {
  return {
    uri: getMongoString(ConfigService),
    ...getMongoOptions(),
  };
};

const getMongoString = (ConfigService: ConfigService) =>
  'mongodb://' +
  ConfigService.get('MONGO_LOGIN') +
  ':' +
  ConfigService.get('MONGO_PASSWORD') +
  '@' +
  ConfigService.get('MONGO_HOST') +
  ':' +
  ConfigService.get('MONGO_PORT') +
  '/' +
  ConfigService.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({
  //useless
});
