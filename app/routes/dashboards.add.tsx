import { Form } from "@remix-run/react";
import {
  Title,
  Avatar,
  Container,
  Anchor,
  Button,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
} from "@mantine/core";

import {
  IconCameraPlus,
  IconChevronRight,
  IconPlus,
  IconDeviceMobile,
  IconBrowser,
  IconSearch,
} from "@tabler/icons-react";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const sex = formData.get("sex");
  const type = formData.get("type");
  const introduce = formData.get("introduce");
  const birthday = formData.get("birthday");
  console.log(sex, name, type, introduce, birthday);
  return null;
}

export default function ProfileDashboards() {
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Container>
          <Title order={3} className="mb-5 px-4 text-center">
            ペット情報追加
          </Title>
          <Form method="post">
            <div className="mb-8">
              <Flex justify={"center"} className="mb-8 ">
                <div className="relative">
                  <Avatar
                    size={120}
                    className="rounded-full border border-solid border-gray-200"
                    src=""
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
                  <Input value={""} name="name" />
                </Flex>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  className="py-3 border-0 border-b border-solid border-gray-200"
                >
                  <Title order={5} className="font-bold">
                    性別
                  </Title>
                  <Select
                    name="sex"
                    placeholder="選択してください"
                    data={[
                      { value: "1", label: "オス" },
                      { value: "2", label: "メス" },
                    ]}
                  />
                </Flex>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  className="py-3 border-0 border-b border-solid border-gray-200"
                >
                  <Title order={5} className="font-bold">
                    種類
                  </Title>
                  <Select
                    name="type"
                    placeholder="選択してください"
                    data={[
                      { value: "1", label: "ゴールデンハムスター" },
                      { value: "2", label: "ジャンガリアンハムスター" },
                    ]}
                  />
                </Flex>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  className="py-3 border-0 border-b border-solid border-gray-200"
                >
                  <Title order={5} className="font-bold">
                    生まれた日
                  </Title>
                  <Input value={""} name="birthday" />
                </Flex>
                <Flex
                  justify={"space-between"}
                  direction={"column"}
                  className="py-3 border-0"
                >
                  <Title order={5} className="mb-2 font-bold">
                    ペットの特徴メモ
                  </Title>
                  <Textarea value={""} minRows={10} name="introduce" />
                </Flex>
                <Flex justify={"center"} className="mt-4" gap={8}>
                  <Anchor
                    variant={"outline"}
                    href="/dashboards"
                    color="gray"
                    className="p-5 py-1 border rounded-md border-gray-400 border-solid"
                  >
                    戻る
                  </Anchor>
                  <Button color="primary" type="submit">
                    ペット情報を追加
                  </Button>
                </Flex>
              </Container>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}
