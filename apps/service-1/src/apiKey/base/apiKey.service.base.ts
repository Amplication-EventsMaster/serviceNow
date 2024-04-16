/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ApiKey as PrismaApiKey,
  AppModel as PrismaAppModel,
  User as PrismaUser,
} from "@prisma/client";

export class ApiKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ApiKeyCountArgs, "select">): Promise<number> {
    return this.prisma.apiKey.count(args);
  }

  async apiKeys<T extends Prisma.ApiKeyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApiKeyFindManyArgs>
  ): Promise<PrismaApiKey[]> {
    return this.prisma.apiKey.findMany<Prisma.ApiKeyFindManyArgs>(args);
  }
  async apiKey<T extends Prisma.ApiKeyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApiKeyFindUniqueArgs>
  ): Promise<PrismaApiKey | null> {
    return this.prisma.apiKey.findUnique(args);
  }
  async createApiKey<T extends Prisma.ApiKeyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApiKeyCreateArgs>
  ): Promise<PrismaApiKey> {
    return this.prisma.apiKey.create<T>(args);
  }
  async updateApiKey<T extends Prisma.ApiKeyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApiKeyUpdateArgs>
  ): Promise<PrismaApiKey> {
    return this.prisma.apiKey.update<T>(args);
  }
  async deleteApiKey<T extends Prisma.ApiKeyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApiKeyDeleteArgs>
  ): Promise<PrismaApiKey> {
    return this.prisma.apiKey.delete(args);
  }

  async getAppField(parentId: string): Promise<PrismaAppModel | null> {
    return this.prisma.apiKey
      .findUnique({
        where: { id: parentId },
      })
      .appField();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.apiKey
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}