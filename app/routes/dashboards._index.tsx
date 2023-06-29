import { Outlet } from "@remix-run/react";
import {
  Title,
  Text,
  Avatar,
  Anchor,
  Group,
  Anchor,
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
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Title order={4} className="mb-2 px-4">
          ペット情報
        </Title>

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {ary.map((item, index) => {
            return (
              <Group
                className=" relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
                key={index}
              >
                <Anchor href="/dashboards/masako" className="flex w-full">
                  <Avatar
                    size={56}
                    className="rounded-full"
                    src="https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
                  />
                  <div className="ml-4 text-black grow">
                    <Title order={6} className="mb-2">
                      ハムスターまさこ
                    </Title>
                    <Text>
                      <span className="inline-block mr-3">オス</span>
                      <span>1歳3ヶ月</span>
                    </Text>
                  </div>
                  <IconChevronRight
                    size="1rem"
                    color="black"
                    className="absolute right-2 top-2/4 -translate-y-2/4"
                  />
                </Anchor>
              </Group>
            );
          })}
        </Group>
        <Flex justify={"center"}>
          <Anchor
            href="/dashboards/add"
            color="primary"
            className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
          >
            ペットを追加する
            <IconPlus size={16} className="ml-4" />
          </Anchor>
        </Flex>
      </div>

      {/* 病院情報*/}
      <div className="py-8">
        <Title order={4} className="mb-2 px-4 flex items-center">
          <IconStethoscope className="mr-3" />
          病院情報
        </Title>

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
                  <Text className="flex w-full">
                    <div className="grow  inline-flex items-center text-sm ">
                      <IconDeviceMobile className="mr-2" />
                      電話する
                    </div>
                    <div className="grow inline-flex items-center text-sm ">
                      <IconBrowser className="mr-2" />
                      公式Webサイトへ
                    </div>
                  </Text>
                </div>
              </Group>
            );
          })}
        </Group>
        <Flex justify={"center"}>
          <Anchor
            href="/dashboards/hospital"
            color="primary"
            className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
          >
            病院を探す
            <IconSearch size={16} className="ml-4" />
          </Anchor>
        </Flex>
      </div>
      {/* // 病院情報 */}

      {/* 良く購入する商品*/}
      <div className="py-8">
        <Title order={4} className="mb-2 px-4 flex items-center">
          <IconBasketFilled className="mr-3" />
          よく購入する商品
        </Title>

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {ary.map((item, index) => {
            return (
              <Group
                className="flex relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
                key={index}
              >
                <Avatar
                  size={56}
                  className="rounded-full"
                  src="hamster-car.jpg"
                />
                <div>
                  <Title order={5} className="mb-4">
                    GEX ジェックスごきげん快適マット
                  </Title>

                  <Button
                    variant="outline"
                    color="yellow"
                    className="mr-3 px-3"
                  >
                    Amazonで購入
                  </Button>
                  <Button
                    variant="outline"
                    className="text-[#BE0000] border-[#BE0000] px-3"
                  >
                    楽天市場で購入
                  </Button>
                </div>
                <IconChevronRight
                  size="1rem"
                  color="black"
                  className="absolute right-1 top-2/4 -translate-y-2/4"
                />
              </Group>
            );
          })}
        </Group>
        <Flex justify={"center"}>
          <Button color="primary">
            ハムスターグッズを探す
            <IconSearch size={16} className="ml-4" />
          </Button>
        </Flex>
      </div>
      {/* // 良く購入する商品 */}
    </div>
  );
}
