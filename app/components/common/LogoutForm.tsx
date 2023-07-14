import { Form } from "@remix-run/react";

const LogoutForm = ({ user }) => {
  return (
    <>
      {user && (
        <Form method="POST" action="/logout" className="flex items-center">
          {user.username}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 border-0 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100  md:text-base"
          >
            ログアウト
          </button>
        </Form>
      )}
    </>
  );
};

export default LogoutForm;
