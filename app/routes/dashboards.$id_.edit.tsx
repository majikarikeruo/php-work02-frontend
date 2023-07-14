/* remix */
import { redirect } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";

/* mantine */
import { Title, Container } from "@mantine/core";

/** server */
import { db } from "../db.server";

/* components */
import HamsterEntryForm from "../components/HamsterEntryForm";

export const loader = async ({ params }) => {
  const hamster = await db.hamster.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return hamster;
};

export default function ProfileDashboards() {
  const hamster = useLoaderData();
  const { user } = useRouteLoaderData("routes/dashboards");

  return (
    <div className="py-8 bg-stone-50">
      <Container>
        <Title order={3} className="mb-5 px-4 text-center">
          ペット情報編集
        </Title>
        <HamsterEntryForm hamster={hamster} user={user} />
      </Container>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const hamsterData = Object.fromEntries(formData);
  const birthday = new Date(hamsterData.birthday);
  hamsterData.birthday = birthday.toISOString();
  hamsterData.id = parseInt(hamsterData.id);
  hamsterData.sexId = parseInt(hamsterData.sexId);
  hamsterData.kindId = parseInt(hamsterData.kindId);
  hamsterData.userId = parseInt(hamsterData.userId);
  /** validation */

  try {
    const hamster = await db.hamster.update({
      where: {
        id: hamsterData.id,
      },
      data: {
        ...hamsterData,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return redirect(`/dashboards/${hamsterData.id}`);
}
