import { Title, Text, Avatar, Flex, Anchor, Group } from "@mantine/core";
import { constants } from "../utils/constant";
import { IconChevronRight } from "@tabler/icons-react";

export default function HamsterMedia({ hamster, showIntroduce = false }) {
  return (
    <>
      <Group className=" relative bg-white px-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300">
        <Anchor
          href={`/dashboards/${hamster.id}`}
          className="flex w-full text-black"
        >
          <div className="p-4 bg-white drop-shadow-xl">
            <Flex align={"center"}>
              <div className="mr-5">
                <Avatar
                  size={64}
                  className="rounded-full border border-solid border-gray-200"
                  src="https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
                />
              </div>
              <div>
                <Title order={4}>{hamster.name}</Title>
                <Text>
                  <span className="block">ゴールデンハムスター</span>
                  <span> {constants.sex[hamster.sex]}</span>
                  <span>{hamster.birthday}</span>
                </Text>
              </div>
            </Flex>
            {showIntroduce && (
              <Text className="mb-2 mt-5">{hamster.introduce}</Text>
            )}
          </div>
          <IconChevronRight
            size="1rem"
            color="black"
            className="absolute right-2 top-2/4 -translate-y-2/4"
          />
        </Anchor>
      </Group>
    </>
  );
}
