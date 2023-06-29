import { Outlet } from "@remix-run/react";
import {
  Title,
  Anchor,
  Avatar,
  Container,
  Input,
  Textarea,
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
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              名前
            </Title>
            <Input value={"こすげたつや"} />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              住んでる地域
            </Title>
            <Input value={"神奈川県藤沢市"} />
          </Flex>
          <Flex
            justify={"space-between"}
            direction={"column"}
            className="py-3 border-0"
          >
            <Title order={5} className="font-bold mb-2">
              自己紹介
            </Title>
            <Textarea
              value={
                "神奈川県藤沢市から参りました小菅です。よろしくお願いいたします！好きなサッカーチームはサガン鳥栖です！まさことけんぞうがかかかわいいです！！"
              }
              minRows={10}
            />
          </Flex>
          <Flex justify={"center"} className="mt-8" gap={8}>
            <Anchor
              variant={"outline"}
              href="/dashboards"
              color="gray"
              className="p-5 py-1 border rounded-md border-gray-400 border-solid"
            >
              戻る
            </Anchor>
            <Button color="primary">プロフィールを編集</Button>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
