import type { ActionArgs } from "@remix-run/node";
import { authenticator } from "../services/auth.server";

export async function action({ params, request }: ActionArgs) {
  if (typeof params.provider !== "string") {
    return new Error("Invalid Provider");
  }

  return (
    await authenticator.authenticate(params.provider, request),
    {
      successRedirect: "/dashboards",
      failureRedirect: "/",
    }
  );
}
