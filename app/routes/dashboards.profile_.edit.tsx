/* remix */
import { useState } from "react";
import { useLoaderData, Form } from "@remix-run/react";
import { redirect, createCookieSessionStorage } from "@remix-run/node";

import {
  Title,
  Anchor,
  Avatar,
  Container,
  NumberInput,
  Input,
  Textarea,
  Button,
  Flex,
  Text,
} from "@mantine/core";

import { IconCameraPlus } from "@tabler/icons-react";

/** services */
import { authenticator } from "../services/auth.server";
import { getSession, commitSession } from "../services/session.server";

/** server */
import { db } from "../db.server";

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

export default function ProfileEdit() {
  const { user } = useLoaderData();
  console.log(user, 1);

  const [postcode, setPostcode] = useState(null);
  const [address, setAddress] = useState(user ? user.address : "");

  const transformPostalCode = () => {
    const postalCode = String(postcode);
    const postalCodeRegex = /^\d{3}-?\d{4}$/;
    console.log(postcode);

    if (postalCodeRegex.test(postalCode)) {
      const postalCodeWithoutHyphen = postalCode.replace("-", "");
      fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCodeWithoutHyphen}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const { address1, address2, address3 } = data.results[0];
          const address = address1 + address2 + address3;
          setAddress(address);
        });
    }
  };

  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Title order={3} className="mb-5 px-4 text-center">
          飼い主情報編集
        </Title>
        <Form method="post">
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
            <div className="py-3 border-0 border-b border-solid border-gray-200">
              <Title order={5} className="font-bold mb-2">
                名前
              </Title>
              <Input defaultValue={user && user.name} name="name" />
            </div>
            <div className="py-3 border-0 border-b border-solid border-gray-200">
              <Title order={5} className="font-bold mb-2">
                住んでる地域
              </Title>
              <Text fz={"xs"} className="mb-4">
                郵便番号から住所の一部を補完入力すると、近くの病院を探すのに便利です。
              </Text>
              <div className="">
                <Flex>
                  <NumberInput
                    defaultValue={postcode}
                    hideControls
                    className="mb-2 w-20"
                    name="postal-code"
                    id="postal-code"
                    onChange={(e) => setPostcode(e)}
                  />
                  <Button
                    variant="outline"
                    className="ml-2"
                    onClick={(e) => transformPostalCode(e)}
                  >
                    住所補完
                  </Button>
                </Flex>

                <Input defaultValue={address} readOnly name="address" />
              </div>
            </div>
            <Flex
              justify={"space-between"}
              direction={"column"}
              className="py-3 border-0"
            >
              <Title order={5} className="font-bold mb-2">
                自己紹介
              </Title>
              <Textarea
                defaultValue={user && user.introduce}
                minRows={10}
                name="introduce"
              />
            </Flex>
            <Flex justify={"center"} className="mt-8" gap={8}>
              <Anchor
                variant={"outline"}
                href="/dashboards"
                color="gray"
                className="p-5 py-1 border rounded-md border-gray-400 border-solid"
              >
                戻る
              </Anchor>
              <input type="hidden" value={user.id} name="id" />

              <Button color="primary" type="submit">
                更新
              </Button>
            </Flex>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const profileData = Object.fromEntries(formData);
  delete profileData["postal-code"];
  profileData.id = parseInt(profileData.id);
  /** validation */

  try {
    const userData = await db.user.update({
      where: {
        id: profileData.id,
      },
      data: {
        ...profileData,
      },
    });

    console.log(userData, 12);
  } catch (e) {
    console.log(e);
  }

  /**
   * sessionに更新されたユーザー情報を保存する
   */
  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", profileData);

  return redirect(`/dashboards/profile`, {
    headers: { "set-cookie": await commitSession(session) },
  });
}
