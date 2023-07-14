import { Input, Button, Flex } from "@mantine/core";

export default function ProfileDashboards() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 検索処理を実行する
  };

  return (
    <>
      <p>えさのページ</p>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input placeholder="キーワードを入力" value={""} onChange="" />
          <Button type="submit">検索</Button>
          <Button type="button" color="white">
            詳細検索
          </Button>
        </Flex>
      </form>
    </>
  );
}
