import { Outlet } from "@remix-run/react";
import {
  Title,
  Text,
  Avatar,
  Container,
  Anchor,
  Button,
  Input,
  Group,
  Textarea,
  Flex,
  Pagination,
} from "@mantine/core";

import {
  IconCameraPlus,
  IconChevronRight,
  IconPlus,
  IconDeviceMobile,
  IconBrowser,
  IconSearch,
} from "@tabler/icons-react";
export default function ProfileDashboards() {
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Container>
          <Title order={3} className="mb-5 px-4 text-center">
            ペット情報編集
          </Title>
          <div className="mb-8">
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
            <Container className="px-0">
              <Flex
                justify={"space-between"}
                align={"center"}
                className="py-3 border-0 border-b border-solid border-gray-200"
              >
                <Title order={5} className="font-bold">
                  名前
                </Title>
                <Input value={"まさこ"} />
              </Flex>
              <Flex
                justify={"space-between"}
                align={"center"}
                className="py-3 border-0 border-b border-solid border-gray-200"
              >
                <Title order={5} className="font-bold">
                  性別
                </Title>
                <Input value={"オス"} />
              </Flex>
              <Flex
                justify={"space-between"}
                align={"center"}
                className="py-3 border-0 border-b border-solid border-gray-200"
              >
                <Title order={5} className="font-bold">
                  種類
                </Title>
                <Input value={"ゴールデンハムスター"} />
              </Flex>
              <Flex
                justify={"space-between"}
                align={"center"}
                className="py-3 border-0 border-b border-solid border-gray-200"
              >
                <Title order={5} className="font-bold">
                  生まれた日
                </Title>
                <Input value={"2020/02/01"} />
              </Flex>
              <Flex
                justify={"space-between"}
                align={"center"}
                className="py-3 border-0 border-b border-solid border-gray-200"
              >
                <Title order={5} className="font-bold">
                  旅立った日
                </Title>
                <Input value={"2022/02/01"} />
              </Flex>
              <Flex
                justify={"space-between"}
                direction={"column"}
                className="py-3 border-0"
              >
                <Title order={5} className="mb-2 font-bold">
                  ペットの特徴メモ
                </Title>
                <Textarea
                  value={
                    "3姉妹の長女として生まれる。けんぞうのことが好き！結構歳をとったけど元気です！"
                  }
                  minRows={10}
                />
              </Flex>
              <Flex justify={"center"} className="mt-4" gap={8}>
                <Anchor
                  variant={"outline"}
                  href="/dashboards/masako"
                  color="gray"
                  className="p-5 py-1 border rounded-md border-gray-400 border-solid"
                >
                  戻る
                </Anchor>
                <Button color="primary">ペット情報を編集</Button>
              </Flex>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}
