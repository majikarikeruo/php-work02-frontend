export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  console.log(intent, 123);
  switch (intent) {
    case "createHamster": {
      // ユーザーの作成処理
    }
    case "getHamster": {
      // ユーザーの作成処理
    }
    case "deleteHamster": {
      // ユーザーの削除処理
    }
  }
};
