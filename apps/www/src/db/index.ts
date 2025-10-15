import { db } from "@gnd/db";

export { type Prisma } from "@gnd/db";

// export const Prisma = BasePrisma;

export * from "@gnd/db";
export const prisma = db;
