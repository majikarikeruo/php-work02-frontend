/** remix */
import { redirect } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";

/** Mantine */
import { Title, Container } from "@mantine/core";

/** components */
import HamsterEntryForm from "../components/HamsterEntryForm";

/** library */
import { db } from "../db.server";

export default function DashboardAdd({ chlildren }) {
  const { user } = useRouteLoaderData("routes/dashboards");
  console.log(user, chlildren);
  return (
    <div className="bg-stone-50">
      <div className="py-8">
        <Container>
          <Title order={3} className="mb-5 px-4 text-center">
            ペット情報追加
          </Title>
          <HamsterEntryForm user={user} />
        </Container>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const hamsterData = Object.fromEntries(formData);
  const birthday = new Date(hamsterData.birthday);
  hamsterData.birthday = birthday.toISOString();
  hamsterData.sexId = parseInt(hamsterData.sexId);
  hamsterData.kindId = parseInt(hamsterData.kindId);
  hamsterData.userId = parseInt(hamsterData.userId);

  console.log(hamsterData, 12);
  /** validation */

  try {
    const hamster = await db.hamster.create({
      data: {
        ...hamsterData,
      },
    });
    console.log(hamster);
  } catch (e) {
    console.log(e);
  }

  return redirect("/dashboards");
}
