import { Title, Text, Avatar, Flex, Anchor, Group } from "@mantine/core";
import { constants } from "../utils/constant";
import { IconChevronRight } from "@tabler/icons-react";

export default function HamsterMedia({ hamster, showIntroduce = false }) {
  return (
    <>
      <Anchor
        href={`/dashboards/${hamster.id}`}
        className="flex w-full text-black relative bg-white p-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
      >
        <Group className="">
          <Avatar
            size={64}
            className="rounded-full border border-solid border-gray-200"
            src="https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
          />
          <div className="flex-1">
            <Text size="lg" weight={500}>
              {hamster.name}
            </Text>
            <Text color="dimmed" size="xs">
              <span className="block">ゴールデンハムスター</span>
              <span> {constants.sex[hamster.sex]}</span>
              <span>{hamster.birthday}</span>
            </Text>
          </div>
          <IconChevronRight
            size="1rem"
            color="black"
            className="absolute right-2 top-2/4 -translate-y-2/4"
          />
        </Group>
      </Anchor>
    </>
  );
}
