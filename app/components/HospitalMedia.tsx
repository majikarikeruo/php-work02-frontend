import { Group, Title, Text, ActionIcon, Flex, Button } from "@mantine/core";
import {
  IconDeviceMobile,
  IconBuildingHospital,
  IconBrowser,
  IconHeart,
} from "@tabler/icons-react";

export default function HospitalMedia() {
  return (
    <>
      <Group className="flex gap-3 items-start w-full bg-white px-3 py-4 border-x-0 border-t border-b-0 border-solid border-gray-200">
        <div className="grow">
          <Flex justify={"space-between"}>
            <Title order={5} className="mb-5 flex items-center">
              <IconBuildingHospital size={24} color="gray" className="mr-3" />
              田園調布動物病院
            </Title>
            <ActionIcon color="#FF0000">
              <IconHeart color="#FF0000" />
            </ActionIcon>
          </Flex>

          <Flex justify={"flex-start"} gap={10}>
            <Button
              component="a"
              href={"090-0000-0000"}
              color="primary"
              size="xs"
              variant={"outline"}
              className="basis-1/2 grow-0 text-whte"
              fz={"sm"}
            >
              <IconDeviceMobile className="mr-1 align-middle" size={16} />
              090-0000-0000
            </Button>
            <Button
              component="a"
              href={"https://www.tamagawaah.com/"}
              color="primary"
              size="xs"
              variant={"outline"}
              className="basis-1/2 grow-0 text-whte"
              fz={"sm"}
            >
              <IconBrowser className="mr-1 align-middle" size={16} />
              Webサイト
            </Button>
          </Flex>
        </div>
      </Group>
    </>
  );
}
