import { Outlet } from "@remix-run/react";

export default function ProfileDashboards() {
  return (
    <>
      <p>ダッシュボートハムスターまさこ日記</p>
      <Outlet />
    </>
  );
}
