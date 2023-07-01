import { Outlet } from "@remix-run/react";
import { useDisclosure } from "@mantine/hooks";

import {
  Title,
  Text,
  Anchor,
  AspectRatio,
  Input,
  Group,
  Container,
  Button,
  Flex,
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
    <div className="w-full">
      <Title order={4} className="p-4 flex items-center">
        <IconBuildingHospital size={30} className="mr-3" />
        田園調布動物病院
      </Title>
      <div className="">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
            title="Google map"
            frameBorder="0"
          />
        </AspectRatio>
      </div>
      <Container>
        <Flex
          justify={"space-between"}
          className="py-4 border-0 border-b border-solid border-gray-200"
        >
          <Title order={5} className="mb-2 font-bold">
            営業時間
          </Title>
          <Text>
            <span className="block mr-2">AM 9:00-12:00</span>
            <span className="block">PM 15:00-19:00</span>
          </Text>
        </Flex>
        <Flex
          justify={"space-between"}
          className="py-4 border-0 border-b border-solid border-gray-200 mb-5"
        >
          <Title order={5} className="mb-2 font-bold">
            休業日
          </Title>
          <Text>木曜日</Text>
        </Flex>

        <Flex justify={"center"} className="mt-8" gap={8}>
          <Button variant={"outline"} color="gray">
            病院検索へ戻る
          </Button>
          <Anchor
            href="/dashboards/profile/edit"
            color="primary"
            className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
          >
            プロフィールを編集する
          </Anchor>
        </Flex>
      </Container>
    </div>
  );
}
