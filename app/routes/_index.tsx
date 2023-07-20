import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboards",
  });
}

export default function Index() {
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-10 mt-32">
      <h1 className="text-4xl font-semibold text-center">ログイン</h1>

      <Form method="POST" action="/auth/github" className="mt-8">
        <button
          type="submit"
          className="w-full flex items-center justify-center text-transform gap-2 border-0 rounded-lg bg-blue-500 px-8 py-3 text-center text-lg font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 md:text-lg"
        >
          Login with github
        </button>
      </Form>
    </div>
  );
}
