import { Title } from "@mantine/core";

export default function SectionHeading({ text, icon: Icon }) {
  return (
    <>
      <Title order={5} className="text-gray-700 mb-2 px-4 flex items-center">
        {Icon && <Icon className="mr-3" size={20} />}
        {text}
      </Title>
    </>
  );
}
