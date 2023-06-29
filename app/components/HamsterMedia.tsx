import { Title, Text, Avatar, Flex } from "@mantine/core";
import { constants } from "../utils/constant";

export default function HamsterMedia({ hamster, showIntroduce = false }) {
  console.log(hamster);
  return (
    <>
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
    </>
  );
}
