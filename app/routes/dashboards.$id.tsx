import { useDisclosure } from "@mantine/hooks";
import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";

import {
  Title,
  Text,
  Avatar,
  Tabs,
  Input,
  Button,
  Modal,
  Anchor,
  Flex,
  Pagination,
  Group,
} from "@mantine/core";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/** components */
import HamsterMedia from "../components/HamsterMedia";
import CenterButton from "../components/CenterButton";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const loader = async ({ params }) => {
  console.log(params);

  const res = await fetch(`http://localhost:8000/api/hamsters/${params.id}`);
  const data = await res.json();
  console.log(data, 12);

  return data;
};

export default function ProfileDashboards() {
  const ary = [1, 1, 1];
  const [opened, { open, close }] = useDisclosure(false);

  const hamster = useLoaderData();
  console.log(hamster);

  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Title order={3} className="mb-5 px-4 text-center">
          ペット情報
        </Title>
        <div className="mb-8">
          <HamsterMedia hamster={hamster} showIntroduce={true} />
          <CenterButton
            text={"ペットのプロフィールを編集"}
            url={"/dashboards/1/edit"}
          />
        </div>

        <Tabs defaultValue="daily">
          <Tabs.List>
            <Tabs.Tab value="daily" className="w-1/2 text-lg">
              世話の記録
            </Tabs.Tab>
            <Tabs.Tab value="weight" className="w-1/2 text-lg">
              体重
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="daily" pt="xs" className="p-0">
            <Group className="mb-4 border-t-0 border-x-0 border-b border-solid border-gray-300 gap-0">
              {ary.map((item, index) => {
                return (
                  <Group
                    className="gap-0 relative bg-white px-3 py-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
                    key={index}
                  >
                    <Flex align={"center"}>
                      <Avatar
                        size={64}
                        className="rounded-full border border-solid border-gray-200 mr-6"
                        src="https://kosugelian.net/images/stamp18.png"
                      />
                      <Group className="gap-0">
                        <Title order={4} className="mb-2">
                          餌やり
                        </Title>
                        <Text className="text-[14px] mb-2">
                          ハムスターフード、もやし、ウエハース、かぼちゃ、とうもろこし
                        </Text>
                        <Text>
                          <span className="inline-block mr-6 text-[14px] font-normal">
                            8月30日
                          </span>
                        </Text>
                      </Group>
                    </Flex>
                  </Group>
                );
              })}
            </Group>
            <Flex justify={"center"} className="mt-8" gap={8}>
              <Pagination total={5} />
            </Flex>
          </Tabs.Panel>

          {/* 体重 */}
          <Tabs.Panel value="weight" pt="xs" className="p-4">
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
        </Tabs>

        <Modal opened={opened} onClose={close} title="体重を記録する">
          {/* Modal content */}
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
              体重
            </Title>
            <Input value={"150g"} />
          </Flex>
          <Flex justify={"center"} className="mt-4">
            <Button color="primary">体重を入力する</Button>
          </Flex>
        </Modal>
      </div>
    </div>
  );
}
