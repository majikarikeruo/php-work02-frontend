/* remix */
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/* mantine */
import { Title, Container } from "@mantine/core";

/* components */
import HamsterEntryForm from "../components/HamsterEntryForm";

/*****************************************v
 * loader関数はサーバーサイドで実行される関数
 * その基本を理解しておく必要がある
 ****************************************/
export const loader = async ({ params }) => {
  const res = await fetch(`${process.env.API_HOST}api/hamsters/${params.id}`);
  const data = await res.json();

  return data;
};

/*****************************************v
 * action関数はサーバサイドで実行される関数
 * 今回のこのファイルでいえば POSTリクエストを受け取っている場所
 * request オブジェクトが持つプロパティやメソッドはhttps://developer.mozilla.org/en-US/docs/Web/API/Requestで確認することができます。
 * action属性していない場合、同一ファイルの
 ****************************************/

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const sex = formData.get("sex");
  const type_id = formData.get("type");
  const id = formData.get("id");
  const user_id = formData.get("user_id");
  const introduce = formData.get("introduce");
  const birthday = formData.get("birthday");

  const response = await fetch(`${process.env.API_HOST}api/hamsters/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      sex,
      type_id,
      user_id,
      id,
      introduce,
      birthday,
    }),
  });
  return redirect(`/dashboards/${id}`);
}

export default function ProfileDashboards() {
  const hamster = useLoaderData();

  return (
    <div className="py-8 bg-stone-50">
      <Container>
        <Title order={3} className="mb-5 px-4 text-center">
          ペット情報編集
        </Title>
        <HamsterEntryForm hamster={hamster} />
      </Container>
    </div>
  );
}
