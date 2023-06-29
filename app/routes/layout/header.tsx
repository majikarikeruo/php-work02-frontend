import {
  Header,
  Container,
  Title,
  Burger,
  Flex,
  Drawer,
  Navbar,
  Avatar,
  NavLink,
} from "@mantine/core";
import { IconPawFilled, IconHome2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export function LayoutHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [openedPet, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header>
        <Container className="py-3">
          <Flex grow={1} align="center" justify={"space-between"}>
            <Burger className="black" size="sm" onClick={open} />
            <Title order={4}>ハムランド</Title>
            <IconPawFilled size={24} onClick={open} />
          </Flex>
        </Container>
      </Header>
      <Drawer
        opened={opened}
        onClose={close}
        title="こすげたつや"
        size="75%"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        className="p-0"
      >
        <Navbar height={800} width={{ sm: 300 }} className="p-0" padding={0}>
          <Navbar.Section className="p-0">
            <a
              className="py-3 no-underline block text-blue-400"
              href="/dashboards"
            >
              <IconHome2 size="1rem" stroke={1.5} />
              <span>ダッシュボード</span>
            </a>
            <a
              className="py-3 no-underline block text-blue-400"
              href="/dashboards/profile"
            >
              <IconHome2 size="1rem" stroke={1.5} />
              <span>プロフィール情報</span>
            </a>
            <a
              className="py-3 no-underline block text-blue-400"
              href="/dashboards/profile/edit"
            >
              <IconHome2 size="1rem" stroke={1.5} />
              <span>プロフィール情報編集</span>
            </a>
          </Navbar.Section>

          <Navbar.Section className="border-0 border-t border-gray-200 border-solid p-2">
            <Avatar
              size={64}
              className="rounded-full border border-solid border-gray-100"
              src="https://kosugelian.net/images/stamp18.png"
            />
          </Navbar.Section>
        </Navbar>
      </Drawer>

      {/* <Drawer
        opened={openedPet}
        position="right"
        title="こすげたつや"
        size="75%"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <Anchor className="block" href="/dashboards/masako">
          ペット情報
        </Anchor>
        <Anchor className="block" href="/dashboards/masako/edit">
          ペット情報編集
        </Anchor>
      </Drawer> */}
    </>
  );
}
