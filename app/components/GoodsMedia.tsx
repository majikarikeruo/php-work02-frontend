import { Title, Avatar, Group, Button } from "@mantine/core";

export default function GoodsMedia({}) {
  return (
    <>
      <Group className="flex relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300">
        <Avatar size={56} className="rounded-full" src="hamster-car.jpg" />
        <div>
          <Title order={5} className="mb-4">
            GEX ジェックスごきげん快適マット
          </Title>

          <Button variant="outline" color="yellow" className="mr-3 px-3">
            Amazonで購入
          </Button>
          <Button
            variant="outline"
            className="text-[#BE0000] border-[#BE0000] px-3"
          >
            楽天市場で購入
          </Button>
        </div>
      </Group>
    </>
  );
}
