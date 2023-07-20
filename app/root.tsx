import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { StylesPlaceholder } from "@mantine/remix";

import stylesheet from "~/tailwind.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

createEmotionCache({ key: "mantine" });

/**
 * StylesPlaceholderこれ入れたらちらつきなくなった
 * https://mantine.dev/guides/remix/
 */

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <StylesPlaceholder />

          <Meta />
          <Links />
        </head>
        <body>
          <Scripts />

          <Outlet />

          <ScrollRestoration />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
