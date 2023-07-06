import { Modal, Button, Text, Flex } from "@mantine/core";
import { Form } from "@remix-run/react";

export default function PetDeleteDialog({ hamster, opened, onClose }) {
  /** 削除処理 */

  return (
    <Modal opened={opened} onClose={onClose} title="削除の確認">
      <Text size="sm">選択したハムスターを本当に削除しますか？</Text>
      <Flex mt={"lg"} justify={"center"} gap={"md"} className="mt-6">
        <Button
          onClick={onClose}
          variant="outline"
          color="dark"
          className="basis-1/2"
        >
          キャンセル
        </Button>
        <Form method="DELETE">
          <input type="hidden" value={hamster.id} name="id" />
          <Button color="red" className="basis-1/2" type="submit">
            削除
          </Button>
        </Form>
      </Flex>
    </Modal>
  );
}
