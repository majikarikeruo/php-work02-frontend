import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 *
 * Userモデルのデータ
 */
const hospitalData: Prisma.HospitalCreateInput[] = [
  {
    name: "ヴァンケット動物病院",
    zipcode: "1540005",
    address: "東京都世田谷区三宿1-3-23 クラールハイト三宿Ⅰ B1F",
    phone: "0357875947",
    website: "https://banquet-tokyo.jp",
  },
  {
    name: "アリイ動物病院",
    zipcode: "2510057",
    address: "神奈川県藤沢市城南２丁目１−１ 藤沢城南ビル 1F",
    phone: "0466419581",
    website: "https://www.alii-animal-hospital.com",
  },
  {
    name: "田園調布動物病院",
    zipcode: "1450071",
    address: "東京都大田区田園調布2-1-3",
    phone: "0354837676",
    website: "https://dec-ah.com/",
  },
];

export default hospitalData;
