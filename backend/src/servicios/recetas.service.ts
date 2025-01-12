import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RecetasService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDatos() {
    return await this.prisma.receta.findMany({ orderBy: [{ id: 'desc' }] });
  }
}
