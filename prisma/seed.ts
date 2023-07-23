import { PrismaClient, Prisma } from "@prisma/client";

import hospitalData from "./seed/hospital";

const prisma = new PrismaClient();

const transfer = async () => {
  const hospitals = [];
  for (const u of hospitalData) {
    const hospital = prisma.hospital.create({
      data: u,
    });
    hospitals.push(hospital);
  }
  return await prisma.$transaction(hospitals);
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
