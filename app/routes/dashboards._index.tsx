import { useLoaderData } from "@remix-run/react";
import { Anchor, Group } from "@mantine/core";
import {
  IconChevronRight,
  IconStethoscope,
  IconBasketFilled,
} from "@tabler/icons-react";

/** components */
import HamsterMedia from "../components/HamsterMedia";
import CenterButton from "../components/CenterButton";
import SectionHeading from "../components/SectionHeading";
import GoodsMedia from "../components/GoodsMedia";
import HospitalMedia from "../components/HospitalMedia";

export const loader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/api/hamsters`);
  const data = await res.json();

  return data;
};

export default function ProfileDashboards() {
  const ary = [1, 1, 1];

  const hamsters = useLoaderData();
  return (
    <div className="bg-stone-50">
      {/* ペット情報*/}
      <div className="py-8">
        <SectionHeading text={"ペット情報"} icon={""} />

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {hamsters.map((hamster, index) => {
            return (
              <Group
                className=" relative bg-white px-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300"
                key={index}
              >
                <Anchor
                  href={`/dashboards/${hamster.id}`}
                  className="flex w-full text-black"
                >
                  <HamsterMedia hamster={hamster} />

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

        <CenterButton text={"ペットを追加する"} url={"/dashboards/add"} />
      </div>
      {/* ペット情報*/}

      {/* 病院情報*/}
      <div className="py-8">
        <SectionHeading text={"病院情報"} icon={IconStethoscope} />

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {ary.map((item, index) => {
            return <HospitalMedia key={index} />;
          })}
        </Group>

        <CenterButton text={"病院を探す"} url={"/dashboards/hospital"} />
      </div>
      {/* // 病院情報 */}

      {/* 良く購入する商品*/}
      <div className="py-8">
        <SectionHeading text={"よく購入する商品"} icon={IconBasketFilled} />

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {ary.map((item, index) => {
            return <GoodsMedia key={index} />;
          })}
        </Group>
        <CenterButton text={"ハムスターグッズを探す"} url={""} />
      </div>
      {/* // 良く購入する商品 */}
    </div>
  );
}
