import { redirect } from "@remix-run/node";

import { Title, Container } from "@mantine/core";

import HamsterEntryForm from "../components/HamsterEntryForm";

/**
 * action関数はサーバサイドで実行される関数
 * 今回のこのファイルでいえば POSTリクエストを受け取っている場所
 * request オブジェクトが持つプロパティやメソッドはhttps://developer.mozilla.org/en-US/docs/Web/API/Requestで確認することができます。
 * action属性していない場合、同一ファイルの
 */

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const sex = formData.get("sex");
  const type_id = formData.get("type");
  const user_id = formData.get("user_id");
  const introduce = formData.get("introduce");
  const birthday = formData.get("birthday");

  // const response = await fetch(`${process.env.API_HOST}api/hamsters`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name, sex, type_id, user_id, introduce, birthday }),
  // });

  return redirect("/dashboards");
}

export default function ProfileDashboards() {
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Container>
          <Title order={3} className="mb-5 px-4 text-center">
            ペット情報追加
          </Title>
          <HamsterEntryForm />
        </Container>
      </div>
    </div>
  );
}
