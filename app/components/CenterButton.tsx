import { Anchor, Flex } from "@mantine/core";

export default function CenterButton({ text, url }) {
  return (
    <Flex className="mt-3 p-2" justify={"center"}>
      <Anchor
        href={url}
        color="primary"
        className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
      >
        {text}
      </Anchor>
    </Flex>
  );
}
