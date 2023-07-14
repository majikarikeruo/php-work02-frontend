import { Outlet } from "@remix-run/react";

export default function ProfileDashboards() {
  return (
    <>
      <p>ダッシュボートハムスターまさこ日記日付別</p>
      <Outlet />
    </>
  );
}
