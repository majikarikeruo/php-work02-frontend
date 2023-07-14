import { Button, Flex } from "@mantine/core";

export default function CenterButton({ text, url, variant = "filled" }) {
  return (
    <Flex className="mt-3" justify={"center"}>
      <Button
        component="a"
        href={url}
        color="primary"
        size="md"
        variant={variant}
        className="p-5 py-2 rounded font-bold w-full text-center shadow-lg"
      >
        {text}
      </Button>
    </Flex>
  );
}
