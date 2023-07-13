/** remix */
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { authenticator } from "../services/auth.server";

/** Mantine */
import { Container, Group } from "@mantine/core";

/** library */
import { IconStethoscope, IconBasketFilled } from "@tabler/icons-react";

/** components */
import LogoutForm from "../components/common/LogoutForm";
import HamsterMedia from "../components/HamsterMedia";
import CenterButton from "../components/common/CenterButton";
import SectionHeading from "../components/SectionHeading";
import GoodsMedia from "../components/GoodsMedia";
import HospitalMedia from "../components/HospitalMedia";

/*****************************************v
 * loader関数はサーバーサイドで実行される関数
 * その基本を理解しておく必要がある
 ****************************************/
export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const hamsters = [
    {
      id: 1,
      name: "ハム太郎",
    },
  ];

  return { hamsters, user };
}

export default function ProfileDashboards() {
  const ary = [1, 1, 1];
  const { hamsters, user } = useLoaderData();
  console.log(user);

  return (
    <div className="bg-stone-50">
      {/* ペット情報*/}
      <div className="py-8">
        <SectionHeading text={"ペット情報"} icon={""} />

        {/* テストログアウト */}
        <LogoutForm user={user} />

        <Group className="gap-0 border-0 border-b border-solid border-gray-300 mb-3">
          {hamsters.map((hamster, index) => (
            <HamsterMedia hamster={hamster} key={index} />
          ))}
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
          {ary.map((item, index) => (
            <HospitalMedia key={index} />
          ))}
        </Group>
        <Container>
          <CenterButton text={"病院を探す"} url={"/dashboards/hospital"} />{" "}
        </Container>
      </div>
      {/* // 病院情報 */}

      {/* 良く購入する商品*/}
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
      </div>
      {/* // 良く購入する商品 */}
    </div>
  );
}