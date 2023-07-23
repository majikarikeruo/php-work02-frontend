/** remix */
import { useRouteLoaderData } from "@remix-run/react";

/** Mantine */
import { Container, Group } from "@mantine/core";

/** library */
import { IconStethoscope, IconBasketFilled } from "@tabler/icons-react";

/** components */
import HamsterMedia from "../components/HamsterMedia";
import CenterButton from "../components/common/CenterButton";
import SectionHeading from "../components/SectionHeading";
import GoodsMedia from "../components/GoodsMedia";
import HospitalMedia from "../components/HospitalMedia";
import NoResult from "../components/common/NoResult";

/*****************************************v
 * loader関数はサーバーサイドで実行される関数
 * その基本を理解しておく必要がある
 ****************************************/

export default function DashboardsIndex() {
  const { hamsters } = useRouteLoaderData("routes/dashboards");

  return (
    <>
      <div className="bg-stone-50">
        {/* ペット情報*/}
        <div className="py-8">
          <SectionHeading text={"ペット情報"} icon={""} />

          <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
            {hamsters.length > 0 ? (
              hamsters.map((hamster, index) => (
                <HamsterMedia hamster={hamster} key={index} />
              ))
            ) : (
              <NoResult msg={"ペットが登録されていません"} />
            )}
          </Group>

          <Container>
            <CenterButton
              text={"ペットを追加する"}
              url={"/dashboards/add"}
              variant={"filled"}
            />
          </Container>
        </div>
        {/* ペット情報*/}

        {/* 病院情報*/}
        <div className="py-8">
          <SectionHeading text={"病院情報"} icon={IconStethoscope} />

          <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
            {[1, 2, 3].length > 0 ? (
              [1, 2, 3].map((item, index) => <HospitalMedia key={index} />)
            ) : (
              <NoResult msg={"病院が登録されていません"} />
            )}
          </Group>
          <Container>
            <CenterButton text={"病院を探す"} url={"/dashboards/hospital"} />{" "}
          </Container>
        </div>
        {/* // 病院情報 */}

        {/* 良く購入する商品
      <div className="py-8">
        <SectionHeading text={"よく購入する商品"} icon={IconBasketFilled} />

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {ary.map((item, index) => (
            <GoodsMedia key={index} />
          ))}
        </Group>

        <Container>
          <CenterButton text={"ハムスターグッズを探す"} url={""} />{" "}
        </Container>
      </div> */}
        {/* // 良く購入する商品 */}
      </div>
    </>
  );
}
