import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <>
      <Form method="post">
        <label htmlFor="" className="block">
          Email
        </label>
        <input type="email" name="email" required />
        <label htmlFor="" className="block">
          パスワード
        </label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <button>ログイン</button>
      </Form>
    </>
  );
}
