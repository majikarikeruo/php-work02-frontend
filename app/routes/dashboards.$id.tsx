import { useDisclosure } from "@mantine/hooks";
import { useLoaderData } from "@remix-run/react";
import { constants } from "../utils/constant";

import {
  Title,
  Text,
  Avatar,
  Tabs,
  Input,
  Button,
  Modal,
  Flex,
  Pagination,
  Group,
  Textarea,
  Paper,
} from "@mantine/core";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

/** components */
import PetDeleteDialog from "../components/pet/PetDeleteDialog";
import CenterButton from "../components/common/CenterButton";
import { redirect } from "@remix-run/node";

/** server */
import { db } from "../db.server";

export const loader = async ({ params }) => {
  const hamster = await db.hamster.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return hamster;
};

export default function DashboardsId() {
  // const [opened, { open, close }] = useDisclosure(false);
  // const [openedDialy, { open: openDialy, close: closeDialy }] =
  //   useDisclosure(false);

  const [
    openedDeleteDialog,
    { open: openDeleteDialog, close: closeDeleteDialog },
  ] = useDisclosure(false);

  const hamster = useLoaderData();

  return (
    <div className="bg-stone-50">
      <div className="py-8 pt-4">
        <div className="mb-8 mx-3">
          <Paper
            radius="md"
            className="px-4"
            withBorder
            p="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Avatar
              src="https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
              size={120}
              radius={120}
              mx="auto"
            />
            <Title order={3} ta="center" fz="lg" weight={700} mt="md">
              {hamster.name}
            </Title>
            <Text mt="md" mb="lg">
              <span className="block">ゴールデンハムスター</span>
              <span> {constants.sex[hamster.sex]}</span>
              <span>{hamster.birthday}</span>
            </Text>
            <Button fullWidth size="md" mt="md" onClick={""}>
              お世話の記録をする
            </Button>
            <CenterButton
              text={"プロフィールを編集"}
              url={`/dashboards/${hamster.id}/edit`}
              variant={"outline"}
            />
            <Button
              fullWidth
              variant="outline"
              size="md"
              mt="md"
              color="red"
              onClick={openDeleteDialog}
            >
              ペット情報を削除
            </Button>
          </Paper>
        </div>

        {/* <Modal opened={openedDialy} onClose={closeDialy} size="md">
          お世話の記録をつける
          <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              日付
            </Title>
            <Input value={"2023/4/9"} />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              日記の種類
            </Title>
            <Input value={""} />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              日記の内容
            </Title>
            <Textarea value={""} />
          </Flex>
          <Flex justify={"center"} className="mt-4">
            <Button color="primary">お世話記録を投稿する</Button>
          </Flex>
        </Modal> */}

        <PetDeleteDialog
          hamster={hamster}
          opened={openedDeleteDialog}
          onClose={closeDeleteDialog}
          size="md"
        />

        {/* <Tabs defaultValue="daily"> */}
        {/* TabsList */}
        {/* <Tabs.List>
            <Tabs.Tab value="daily" className="w-1/2 text-base">
              世話の記録
            </Tabs.Tab>
            <Tabs.Tab value="weight" className="w-1/2 text-base">
              体重
            </Tabs.Tab>
          </Tabs.List> */}
        {/* // TabsList */}

        {/* <Tabs.Panel value="daily" pt="xs" className="p-0">
            <Group className="mb-4 border-t-0 border-x-0 border-b border-solid border-gray-300 gap-0">
              {ary.map((item, index) => {
                return (
                  <Group
                    className="gap-0 relative bg-white px-3 py-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
                    key={index}
                    noWrap
                  >
                    <Avatar
                      size={64}
                      className="rounded-full border border-solid border-gray-200 mr-6"
                      src="https://kosugelian.net/images/stamp18.png"
                    />
                    <div>
                      <Title order={4} className="mb-2">
                        餌やり
                      </Title>
                      <Text fz="sm" className="mb-2">
                        ハムスターフード、もやし、ウエハース、かぼちゃ、とうもろこし
                      </Text>
                      <Text fz="xs">8月30日</Text>
                    </div>
                  </Group>
                );
              })}
            </Group>
            <Flex justify={"center"} className="mt-8" gap={8}>
              <Pagination total={5} />
            </Flex>
          </Tabs.Panel> */}

        {/* 体重 */}
        {/* <Tabs.Panel value="weight" pt="xs" className="p-4">
            <Title order={6} className="mb-6">
              2023年4月
            </Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            <Flex justify={"center"} className="mt-8" gap={8}>
              <Button onClick={open}>体重を記録する</Button>
            </Flex>
          </Tabs.Panel>
        </Tabs> */}
        {/* <Modal opened={opened} onClose={close} title="体重を記録する"> */}
        {/* Modal content */}
        {/* <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              日付
            </Title>
            <Input value={"2023/4/9"} />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
            className="py-3 border-0 border-b border-solid border-gray-200"
          >
            <Title order={5} className="font-bold">
              体重
            </Title>
            <Input value={"150g"} />
          </Flex>
          <Flex justify={"center"} className="mt-4">
            <Button color="primary">体重を入力する</Button>
          </Flex>
        </Modal> */}
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = parseInt(formData.get("id"));

  const res = await db.hamster.delete({
    where: {
      id,
    },
  });

  return redirect(`/dashboards`);
}
