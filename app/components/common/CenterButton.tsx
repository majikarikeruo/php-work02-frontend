import { Button, Flex } from "@mantine/core";

export default function CenterButton({ text, url, variant = "" }) {
  return (
    <Flex className="mt-3" justify={"center"}>
      <Button
        component="a"
        href={url}
        color="primary"
        size="md"
        variant={variant}
        className="p-5 py-2 rounded font-bold w-full text-center"
      >
        {text}
      </Button>
    </Flex>
  );
}
