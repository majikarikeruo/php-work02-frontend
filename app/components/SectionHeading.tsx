import { Title } from "@mantine/core";

export default function SectionHeading({ text, icon: Icon }) {
  return (
    <>
      <Title order={4} className="mb-2 px-4 flex items-center">
        {Icon && <Icon className="mr-3" />}
        {text}
      </Title>
    </>
  );
}
