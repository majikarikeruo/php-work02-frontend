import { Group, Title, Text } from "@mantine/core";
import {
  IconDeviceMobile,
  IconBuildingHospital,
  IconBrowser,
} from "@tabler/icons-react";

export default function HospitalMedia() {
  return (
    <>
      <Group className="flex items-center relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300">
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
    </>
  );
}
