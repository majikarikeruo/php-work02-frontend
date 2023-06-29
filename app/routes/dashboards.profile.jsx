import { Outlet } from "@remix-run/react";
import {
  Title,
  Text,
  Avatar,
  Container,
  Anchor,
  ThemeIcon,
  Button,
  Flex,
} from "@mantine/core";

import { IconCameraPlus } from "@tabler/icons-react";

export default function ProfileDashboards() {
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Title order={3} className="mb-5 px-4 text-center">
          飼い主情報編集
        </Title>
        <Flex justify={"center"} className="mb-8 ">
          <div className="relative">
            <Avatar
              size={120}
              className="rounded-full border border-solid border-gray-200"
              src="https://kosugelian.net/images/stamp18.png"
            />
            <IconCameraPlus className="absolute bottom-0 right-0" />
          </div>
        </Flex>
        <Container>
          <Flex
            justify={"space-between"}
            className="border-0 border-b border-solid border-gray-200 mb-5"
          >
            <Title order={5} className="mb-2 font-bold">
              名前
            </Title>
            <Text>こすげたつや</Text>
          </Flex>
          <Flex
            justify={"space-between"}
            className="border-0 border-b border-solid border-gray-200 mb-5"
          >
            <Title order={5} className="mb-2 font-bold">
              住んでる地域
            </Title>
            <Text>神奈川県藤沢市</Text>
          </Flex>
          <Flex
            justify={"space-between"}
            direction={"column"}
            className="border-0"
          >
            <Title order={5} className="mb-2 font-bold">
              自己紹介
            </Title>
            <Text>
              神奈川県藤沢市から参りました小菅です。よろしくお願いいたします！好きなサッカーチームはサガン鳥栖です！まさことけんぞうがかかかわいいです！！
            </Text>
          </Flex>
          <Flex justify={"center"} className="mt-8" gap={8}>
            <Button variant={"outline"} color="gray">
              Homeへ戻る
            </Button>
            <Anchor
              href="/dashboards/profile/edit"
              color="primary"
              className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
            >
              プロフィールを編集する
            </Anchor>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
