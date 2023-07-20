/** remix */
import { Outlet, useLoaderData } from "@remix-run/react";

/** services */
import { authenticator } from "../services/auth.server";

/** server */
import { db } from "../db.server";

/** components */
import { LayoutHeader } from "./layout/header";
import { LayoutFooter } from "./layout/footer";

/** loader */
export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const hamsters = await db.hamster.findMany({
    where: {
      userId: user.id,
    },
  });
  return { hamsters, user };
}

export default function Dashboards() {
  const { user, hamsters } = useLoaderData();
  console.log(user);

  return (
    <>
      <LayoutHeader user={user} hamsters={hamsters} />
      <Outlet />
      <LayoutFooter />
    </>
  );
}
