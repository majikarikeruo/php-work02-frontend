/** remix */

/** Mantine */
import {
  Header,
  Container,
  Title,
  Burger,
  Flex,
  Drawer,
  Navbar,
  Avatar,
  Text,
  Group,
} from "@mantine/core";

/** library */
import {
  IconPawFilled,
  IconHome2,
  IconUsers,
  IconBuildingHospital,
  IconBasketFilled,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import { constants } from "../../utils/constant";
import LogoutForm from "../../components/common/LogoutForm";

export function LayoutHeader({ user, hamsters }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedPet, { open: openPet, close: closePet }] = useDisclosure(false);

  return (
    <>
      <Header>
        <Container className="py-3">
          <Flex grow={1} align="center" justify={"space-between"}>
            <Burger className="black" size="sm" onClick={open} />
            <Title order={4}>ハムランド</Title>
            <IconPawFilled size={24} onClick={openPet} />
          </Flex>
        </Container>
      </Header>
      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        withCloseButton={false}
        className="p-0"
      >
        <Navbar width={{ sm: 300 }} className="p-0 border-0" padding={0}>
          <Navbar.Section className="border-0 border-b border-gray-200 border-solid pb-2 mb-3">
            <Flex align={"center"}>
              <Avatar
                size={48}
                className="rounded-full border border-solid border-gray-100 mr-3"
                src="https://kosugelian.net/images/stamp18.png"
              />
              <div>
                <Text fz={"md"} className="font-bold">
                  {user.name}
                </Text>
              </div>
            </Flex>
          </Navbar.Section>
          <Navbar.Section className="p-0">
            <a
              className="p-3 no-underline text-gray-800 text-sm inline-flex items-center"
              href="/dashboards"
            >
              <IconHome2 size="1rem" stroke={1.5} />
              <span className="ml-3">ダッシュボード</span>
            </a>
            <a
              className="p-3 no-underline text-gray-800 text-sm inline-flex items-center"
              href="/dashboards/profile"
            >
              <IconUsers size="1rem" stroke={1.5} />
              <span className="ml-3">プロフィール情報</span>
            </a>
            <a
              className="p-3 no-underline text-gray-800 text-sm inline-flex items-center"
              href="/dashboards/profile/edit"
            >
              <IconBuildingHospital size="1rem" stroke={1.5} />
              <span className="ml-3">病院検索</span>
            </a>
            <a
              className="p-3 no-underline text-gray-800 text-sm inline-flex items-center"
              href="/dashboards/profile/edit"
            >
              <IconBasketFilled size="1rem" stroke={1.5} />
              <span className="ml-3">ハムスターグッズ検索</span>
            </a>

            {/* テストログアウト */}
            <div className="mt-10">
              <LogoutForm user={user} />
            </div>
          </Navbar.Section>
        </Navbar>
      </Drawer>

      <Drawer
        opened={openedPet}
        onClose={closePet}
        position="right"
        withCloseButton={false}
        size="75%"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        className="p-0"
      >
        <Drawer.Title className=" pb-5 font-bold flex items-center border-0 border-b border-gray-200 border-solid">
          <IconPawFilled size="1.5rem" stroke={1.5} className="mr-3" />
          飼っているハムスター
        </Drawer.Title>

        <Drawer.Body className="p-0">
          <Group className="gap-0">
            {hamsters.map((hamster, index) => (
              <Flex
                align={"center"}
                key={index}
                className="gap-0 py-3 border-0 border-b border-gray-200 border-solid"
              >
                <div className="mr-5">
                  <Avatar
                    size={64}
                    className="rounded-full border border-solid border-gray-200"
                    src="https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
                  />
                </div>
                <div>
                  <Text fz={"md"} className="font-bold">
                    {hamster.name}
                  </Text>
                  <Text fz={"xs"}>{constants.kind[hamster.kindId]}</Text>
                </div>
              </Flex>
            ))}
          </Group>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
