import { Form } from "@remix-run/react";
import { redirect as redirector } from "@remix-run/node";

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
import config from "../../config";
// import { redirect } from "@remix-run/cloudflare";

/**
 * loader関数はサーバーサイドで実行される関数
 * その基本を理解しておく必要がある
 *
 *
 *
 */

/**
 * action関数はサーバサイドで実行される関数
 * 今回のこのファイルでいえば POSTリクエストを受け取っている場所
 * request オブジェクトが持つプロパティやメソッドはhttps://developer.mozilla.org/en-US/docs/Web/API/Requestで確認することができます。
 * action属性していない場合、
 *
 *
 */

export async function action({ request }) {
  const apiHost = config.API_URL;
  // e.preventDefault();

  const formData = await request.formData();
  const name = formData.get("name");
  const sex = formData.get("sex");
  const type_id = formData.get("type");
  const user_id = formData.get("user_id");
  const introduce = formData.get("introduce");
  const birthday = formData.get("birthday");

  const response = await fetch(`${apiHost}/api/hamsters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, sex, type_id, user_id, introduce, birthday }),
  });

  console.log(response);
  return response.redirect("/dashboards");
}

export default function ProfileDashboards() {
  // const data = action();
  // console.log(data);

  // const handleSubmit = async (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   const response = await fetch(`${apiHost}/api/hamsters`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   console.log(response);
  // };

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
                  <Input name="name" size={"md"} />
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
                  <Input name="birthday" size={"md"} />
                </Flex>
                <Flex
                  justify={"space-between"}
                  direction={"column"}
                  className="py-3 border-0"
                >
                  <Title order={5} className="mb-2 font-bold">
                    ペットの特徴メモ
                  </Title>
                  <Textarea minRows={10} name="introduce" />
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
