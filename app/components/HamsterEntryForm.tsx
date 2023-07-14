/* remix */
import { Form } from "@remix-run/react";

/* mantine */
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

/* library */
import { IconCameraPlus } from "@tabler/icons-react";

export default function HamsterEntryForm({ user, hamster }) {
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
            <Input
              name="name"
              size={"md"}
              defaultValue={hamster && hamster.name}
            />
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
              name="sexId"
              placeholder="選択してください"
              defaultValue={hamster && String(hamster.sexId)}
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
              name="kindId"
              placeholder="選択してください"
              defaultValue={hamster && String(hamster.kindId)}
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
              defaultValue={hamster && hamster.birthday}
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
              defaultValue={hamster && hamster.introduce}
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
            <input type="hidden" value={user.id} name="userId" />
            {hamster && hamster.id && (
              <input type="hidden" value={hamster.id} name="id" />
            )}
            <Button color="primary" type="submit">
              ペット情報を
              {hamster && hamster.id ? "更新" : "追加"}
            </Button>
          </Flex>
        </Container>
      </div>
    </Form>
  );
}
