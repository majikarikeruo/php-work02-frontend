import { useLoaderData } from "@remix-run/react";
import {
  Title,
  Text,
  Avatar,
  Container,
  Anchor,
  Button,
  Flex,
} from "@mantine/core";

/** services */
import { authenticator } from "../services/auth.server";

/** server */
import { db } from "../db.server";

import { IconCameraPlus } from "@tabler/icons-react";

/** loader */
export async function loader({ request }: LoaderArgs) {
  const authUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const user = await db.user.findUnique({
    where: {
      id: authUser.id,
    },
  });

  return { user };
}

export default function ProfileDashboards() {
  const { user } = useLoaderData();
  console.log(user, 2);

  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Title order={3} className="mb-5 px-4 text-center">
          飼い主情報編集
        </Title>
        <Flex justify={"center"} className="mb-8 ">
          <div className="relative">
            <Avatar
              size={120}
              className="rounded-full border border-solid border-gray-200"
              src="https://kosugelian.net/images/stamp18.png"
            />
            <IconCameraPlus className="absolute bottom-0 right-0" />
          </div>
        </Flex>
        <Container>
          <Flex
            justify={"space-between"}
            className="border-0 border-b border-solid border-gray-200 mb-5"
          >
            <Title order={5} className="mb-2 font-bold">
              名前
            </Title>
            <Text>{user.name}</Text>
          </Flex>
          <Flex
            justify={"space-between"}
            className="border-0 border-b border-solid border-gray-200 mb-5"
          >
            <Title order={5} className="mb-2 font-bold">
              住んでる地域
            </Title>
            <Text>{user.address}</Text>
          </Flex>
          <Flex
            justify={"space-between"}
            direction={"column"}
            className="border-0"
          >
            <Title order={5} className="mb-2 font-bold">
              自己紹介
            </Title>
            <Text>{user.introduce}</Text>
          </Flex>
          <Flex justify={"center"} className="mt-8" gap={8}>
            <Button variant={"outline"} color="gray">
              Homeへ戻る
            </Button>
            <Anchor
              href="/dashboards/profile/edit"
              color="primary"
              className="bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold"
            >
              プロフィールを編集
            </Anchor>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
