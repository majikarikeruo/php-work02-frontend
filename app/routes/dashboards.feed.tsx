import { Outlet } from "@remix-run/react";

export default function ProfileDashboards() {
  return (
    <>
      <p>ダッシュボートプロフィール</p>
      <Outlet />
    </>
  );
}
