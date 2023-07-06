import { Form } from "@remix-run/react";
import { useState } from "react";

import {
  Title,
  Avatar,
  Container,
  Anchor,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
} from "@mantine/core";

import { IconCameraPlus } from "@tabler/icons-react";

export default function HamsterEntryForm({ hamster }) {
  /** 文字型にしないとselectの初期値として設定できない */

  const [typeId, setTypeId] = useState(hamster.sex.toString());
  const [sex, setSex] = useState(hamster.type_id.toString());
  const [birthday, setBirthday] = useState(hamster.birthday.toString());
  const [introduce, setIntroduce] = useState(hamster.introduce.toString());

  return (
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
            <Input name="name" size={"md"} value={hamster.name} />
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
              defaultValue={sex}
              onChange={(e) => setSex(e.currentTarget.value)}
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
              defaultValue={typeId}
              onChange={(e) => setTypeId(e)}
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
            <Input
              name="birthday"
              size={"md"}
              value={birthday}
              onChange={(e) => setBirthday(e.currentTarget.value)}
            />
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
              minRows={10}
              name="introduce"
              value={introduce}
              onChange={(e) => setIntroduce(e.currentTarget.value)}
            />
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
            <input type="hidden" value={1} name="user_id" />
            {hamster.id && <input type="hidden" value={hamster.id} name="id" />}
            <Button color="primary" type="submit">
              ペット情報を追加
            </Button>
          </Flex>
        </Container>
      </div>
    </Form>
  );
}
