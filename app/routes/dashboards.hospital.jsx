import { Outlet } from "@remix-run/react";
import { useDisclosure } from "@mantine/hooks";

import {
  Title,
  Text,
  Anchor,
  AspectRatio,
  Input,
  Group,
  Modal,
  Button,
  Flex,
  Pagination,
} from "@mantine/core";

import {
  IconChevronRight,
  IconPlus,
  IconDeviceMobile,
  IconBuildingHospital,
  IconBrowser,
  IconStethoscope,
  IconSearch,
  IconBasketFilled,
} from "@tabler/icons-react";

export default function ProfileDashboards() {
  const ary = [1, 1, 1];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="pb-8">
      <div className="">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
            title="Google map"
            frameBorder="0"
          />
        </AspectRatio>
      </div>
      <Group className="p-4 mb-4">
        <Flex
          justify={"space-between"}
          align={"center"}
          className="w-full gap-0"
        >
          <Title order={4} className="mb-0 px-0 flex items-center">
            <IconStethoscope className="mr-2" />
            近くの動物病院一覧
          </Title>
          <Text
            className="flex items-center text-[14px] bg-[#339af0] p-2 py-1 rounded-md text-white"
            onClick={open}
          >
            <IconSearch className="mr-2" size={16} />
            病院検索する
          </Text>
        </Flex>
        <Text fz="sm">
          登録地・神奈川県藤沢市でハムスターの診療をして
          くれる病院一覧を表示しています。
        </Text>
      </Group>

      <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
        {ary.map((item, index) => {
          return (
            <Group
              className="flex items-center relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
              key={index}
            >
              <div className="w-full">
                <Title order={5} className="mb-4 flex items-center">
                  <IconBuildingHospital size={24} className="mr-3" />
                  田園調布動物病院
                </Title>
                <Text className="flex w-full mb-1" fz={"sm"}>
                  <span className="mr-3 inline-block w-20">営業時間</span>
                  <span className="block mr-2">AM 9:00-12:00</span>
                  <span className="block">PM 15:00-19:00</span>
                </Text>
                <Text className="flex w-full" fz={"sm"}>
                  <span className="mr-3 inline-block w-20">休業日</span>
                  <span className="block">木曜日</span>
                </Text>
              </div>
            </Group>
          );
        })}
      </Group>
      <Flex justify={"center"} className="mt-8" gap={8}>
        <Pagination total={5} />
      </Flex>
      <Flex justify={"center"}>
        <Anchor
          variant={"outline"}
          href="/dashboards"
          color="gray"
          className="p-5 py-1 border rounded-md border-gray-400 border-solid"
        >
          戻る
        </Anchor>
      </Flex>

      <Modal opened={opened} onClose={close} title="病院検索">
        {/* Modal content */}
        <Flex
          justify={"space-between"}
          align={"center"}
          className="py-3 border-0 border-b border-solid border-gray-200"
        >
          <Title order={5} className="font-bold">
            地名・場所名など
          </Title>
          <Input value={"2023/4/9"} />
        </Flex>
        <Flex
          justify={"space-between"}
          align={"center"}
          className="py-3 border-0 border-b border-solid border-gray-200"
        >
          <Title order={5} className="font-bold">
            キーワード
          </Title>
          <Input value={"150g"} />
        </Flex>
        <Flex justify={"center"} className="mt-4">
          <Button color="primary">検索する</Button>
        </Flex>
      </Modal>
    </div>
  );
}
