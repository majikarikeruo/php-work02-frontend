var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZMNKCWIB.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "ja", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.$id.diary.$date.jsx
var dashboards_id_diary_date_exports = {};
__export(dashboards_id_diary_date_exports, {
  default: () => ProfileDashboards
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function ProfileDashboards() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C8\u30CF\u30E0\u30B9\u30BF\u30FC\u307E\u3055\u3053\u65E5\u8A18\u65E5\u4ED8\u5225" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.$date.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.$date.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id.diary.$date.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.hospital_.$id.jsx
var dashboards_hospital_id_exports = {};
__export(dashboards_hospital_id_exports, {
  default: () => ProfileDashboards2
});
var import_react4 = require("@remix-run/react"), import_hooks = require("@mantine/hooks"), import_core = require("@mantine/core"), import_icons_react = require("@tabler/icons-react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ProfileDashboards2() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Title, { order: 4, className: "p-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons_react.IconBuildingHospital, { size: 30, className: "mr-3" }, void 0, !1, {
        fileName: "app/routes/dashboards.hospital_.$id.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      "\u7530\u5712\u8ABF\u5E03\u52D5\u7269\u75C5\u9662"
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.hospital_.$id.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.AspectRatio, { ratio: 16 / 9, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",
        title: "Google map",
        frameBorder: "0"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboards.hospital_.$id.jsx",
        lineNumber: 39,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital_.$id.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital_.$id.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_core.Flex,
        {
          justify: "space-between",
          className: "py-4 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Title, { order: 5, className: "mb-2 font-bold", children: "\u55B6\u696D\u6642\u9593" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Text, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block mr-2", children: "AM 9:00-12:00" }, void 0, !1, {
                fileName: "app/routes/dashboards.hospital_.$id.jsx",
                lineNumber: 55,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block", children: "PM 15:00-19:00" }, void 0, !1, {
                fileName: "app/routes/dashboards.hospital_.$id.jsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.hospital_.$id.jsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_core.Flex,
        {
          justify: "space-between",
          className: "py-4 border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Title, { order: 5, className: "mb-2 font-bold", children: "\u4F11\u696D\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Text, { children: "\u6728\u66DC\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.hospital_.$id.jsx",
          lineNumber: 59,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core.Button, { variant: "outline", color: "gray", children: "\u75C5\u9662\u691C\u7D22\u3078\u623B\u308B" }, void 0, !1, {
          fileName: "app/routes/dashboards.hospital_.$id.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_core.Anchor,
          {
            href: "/dashboards/profile/edit",
            color: "primary",
            className: "bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold",
            children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6\u3059\u308B"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboards.hospital_.$id.jsx",
            lineNumber: 73,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.hospital_.$id.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.hospital_.$id.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.hospital_.$id.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.profile_.edit.jsx
var dashboards_profile_edit_exports = {};
__export(dashboards_profile_edit_exports, {
  default: () => ProfileDashboards3
});
var import_react5 = require("@remix-run/react"), import_core2 = require("@mantine/core"), import_icons_react2 = require("@tabler/icons-react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProfileDashboards3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_core2.Avatar,
        {
          size: 120,
          className: "rounded-full border border-solid border-gray-200",
          src: "https://kosugelian.net/images/stamp18.png"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons_react2.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
        fileName: "app/routes/dashboards.profile_.edit.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_core2.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 5, className: "font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Input, { value: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 41,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_core2.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 5, className: "font-bold", children: "\u4F4F\u3093\u3067\u308B\u5730\u57DF" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Input, { value: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 51,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_core2.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "py-3 border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 5, className: "font-bold mb-2", children: "\u81EA\u5DF1\u7D39\u4ECB" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_core2.Textarea,
              {
                value: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02\u304B\u3089\u53C2\u308A\u307E\u3057\u305F\u5C0F\u83C5\u3067\u3059\u3002\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\uFF01\u597D\u304D\u306A\u30B5\u30C3\u30AB\u30FC\u30C1\u30FC\u30E0\u306F\u30B5\u30AC\u30F3\u9CE5\u6816\u3067\u3059\uFF01\u307E\u3055\u3053\u3068\u3051\u3093\u305E\u3046\u304C\u304B\u304B\u304B\u308F\u3044\u3044\u3067\u3059\uFF01\uFF01",
                minRows: 10
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboards.profile_.edit.jsx",
                lineNumber: 61,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_core2.Anchor,
          {
            variant: "outline",
            href: "/dashboards",
            color: "gray",
            className: "p-5 py-1 border rounded-md border-gray-400 border-solid",
            children: "\u623B\u308B"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Button, { color: "primary", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6" }, void 0, !1, {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.profile_.edit.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.profile_.edit.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.profile_.edit.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$provider.callback.tsx
var auth_provider_callback_exports = {};
__export(auth_provider_callback_exports, {
  loader: () => loader
});

// app/services/auth.server.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_socials = require("remix-auth-socials");

// app/db.server.ts
var import_client = require("@prisma/client"), db = new import_client.PrismaClient();
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/services/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    // replace this with an actual secret
    secure: !1
    // enable this in prod only
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  throwOnError: !0
}), getCallback = (provider) => `http://localhost:3000/auth/${provider}/callback`;
authenticator.use(
  new import_remix_auth_socials.GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: getCallback(import_remix_auth_socials.SocialsProvider.GITHUB)
    },
    async ({ profile }) => {
      let user = await db.user.findUnique({
        where: {
          email: profile.emails[0].value
        }
      });
      if (!user && (user = await db.user.create({
        data: {
          email: profile.emails[0].value,
          name: profile._json.login
        }
      }), !user))
        throw new Error("Unable to create the user");
      return user;
    }
  )
);

// app/routes/auth.$provider.callback.tsx
async function loader({ params, request }) {
  if (typeof params.provider != "string")
    throw new Error("invalid provder");
  return await authenticator.authenticate(params.provider, request, {
    successRedirect: "/dashboards",
    failureRedirect: "/"
  });
}

// app/routes/dashboards.$id.diary.jsx
var dashboards_id_diary_exports = {};
__export(dashboards_id_diary_exports, {
  default: () => ProfileDashboards4
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProfileDashboards4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C8\u30CF\u30E0\u30B9\u30BF\u30FC\u307E\u3055\u3053\u65E5\u8A18" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id.diary.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.$id_.edit.jsx
var dashboards_id_edit_exports = {};
__export(dashboards_id_edit_exports, {
  action: () => action,
  default: () => ProfileDashboards5,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_core4 = require("@mantine/core");

// app/components/HamsterEntryForm.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_core3 = require("@mantine/core"), import_icons_react3 = require("@tabler/icons-react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function HamsterEntryForm({ hamster }) {
  let [name, setName] = (0, import_react8.useState)(hamster ? hamster.name : ""), [typeId, setTypeId] = (0, import_react8.useState)(
    hamster ? hamster.type_id.toString() : ""
  ), [sex, setSex] = (0, import_react8.useState)(hamster ? hamster.sex.toString() : ""), [birthday, setBirthday] = (0, import_react8.useState)(hamster ? hamster.birthday : ""), [introduce, setIntroduce] = (0, import_react8.useState)(hamster ? hamster.introduce : "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Avatar,
        {
          size: 120,
          className: "rounded-full border border-solid border-gray-200",
          src: ""
        },
        void 0,
        !1,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
        fileName: "app/components/HamsterEntryForm.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Container, { className: "px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Title, { order: 5, className: "font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Input,
              {
                name: "name",
                size: "md",
                value: name,
                onChange: (e) => setName(e.currentTarget.value)
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 50,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Title, { order: 5, className: "font-bold", children: "\u6027\u5225" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Select,
              {
                name: "sex",
                placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
                defaultValue: sex,
                onChange: (e) => setSex(e.currentTarget.value),
                data: [
                  { value: "1", label: "\u30AA\u30B9" },
                  { value: "2", label: "\u30E1\u30B9" }
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 65,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Title, { order: 5, className: "font-bold", children: "\u7A2E\u985E" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Select,
              {
                name: "type",
                placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
                defaultValue: typeId,
                onChange: (e) => setTypeId(e),
                data: [
                  { value: "1", label: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" },
                  { value: "2", label: "\u30B8\u30E3\u30F3\u30AC\u30EA\u30A2\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 84,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 76,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Title, { order: 5, className: "font-bold", children: "\u751F\u307E\u308C\u305F\u65E5" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Input,
              {
                name: "birthday",
                size: "md",
                value: birthday,
                onChange: (e) => setBirthday(e.currentTarget.value)
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 103,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core3.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "py-3 border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Title, { order: 5, className: "mb-2 font-bold", children: "\u30DA\u30C3\u30C8\u306E\u7279\u5FB4\u30E1\u30E2" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Textarea,
              {
                minRows: 10,
                name: "introduce",
                value: introduce,
                onChange: (e) => setIntroduce(e.currentTarget.value)
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 118,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 110,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Flex, { justify: "center", className: "mt-4", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_core3.Anchor,
          {
            variant: "outline",
            href: "/dashboards",
            color: "gray",
            className: "p-5 py-1 border rounded-md border-gray-400 border-solid",
            children: "\u623B\u308B"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HamsterEntryForm.tsx",
            lineNumber: 126,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", value: 1, name: "user_id" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        hamster && hamster.id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Button, { color: "primary", type: "submit", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u3092\u8FFD\u52A0" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/HamsterEntryForm.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HamsterEntryForm.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HamsterEntryForm.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.$id_.edit.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => data;
async function action({ request }) {
  let formData = await request.formData(), name = formData.get("name"), sex = formData.get("sex"), type_id = formData.get("type"), id = formData.get("id"), user_id = formData.get("user_id"), introduce = formData.get("introduce"), birthday = formData.get("birthday");
  return (0, import_node3.redirect)(`/dashboards/${id}`);
}
function ProfileDashboards5() {
  let hamster = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-8 bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core4.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core4.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id_.edit.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(HamsterEntryForm, { hamster }, void 0, !1, {
      fileName: "app/routes/dashboards.$id_.edit.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id_.edit.jsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.$id_.edit.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.hospital.jsx
var dashboards_hospital_exports = {};
__export(dashboards_hospital_exports, {
  default: () => ProfileDashboards6
});
var import_react10 = require("@remix-run/react"), import_hooks2 = require("@mantine/hooks"), import_core5 = require("@mantine/core"), import_icons_react4 = require("@tabler/icons-react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ProfileDashboards6() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks2.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.AspectRatio, { ratio: 16 / 9, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",
        title: "Google map",
        frameBorder: "0"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 36,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Group, { className: "p-4 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "w-full gap-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Title, { order: 4, className: "mb-0 px-0 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_icons_react4.IconStethoscope, { className: "mr-2" }, void 0, !1, {
                fileName: "app/routes/dashboards.hospital.jsx",
                lineNumber: 50,
                columnNumber: 13
              }, this),
              "\u8FD1\u304F\u306E\u52D5\u7269\u75C5\u9662\u4E00\u89A7"
            ] }, void 0, !0, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_core5.Text,
              {
                className: "flex items-center text-[14px] bg-[#339af0] p-2 py-1 rounded-md text-white",
                onClick: open,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_icons_react4.IconSearch, { className: "mr-2", size: 16 }, void 0, !1, {
                    fileName: "app/routes/dashboards.hospital.jsx",
                    lineNumber: 57,
                    columnNumber: 13
                  }, this),
                  "\u75C5\u9662\u691C\u7D22\u3059\u308B"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboards.hospital.jsx",
                lineNumber: 53,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.hospital.jsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Text, { fz: "sm", children: "\u767B\u9332\u5730\u30FB\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02\u3067\u30CF\u30E0\u30B9\u30BF\u30FC\u306E\u8A3A\u7642\u3092\u3057\u3066 \u304F\u308C\u308B\u75C5\u9662\u4E00\u89A7\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_core5.Group,
      {
        className: "flex items-center relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Title, { order: 5, className: "mb-4 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_icons_react4.IconBuildingHospital, { size: 24, className: "mr-3" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            "\u7530\u5712\u8ABF\u5E03\u52D5\u7269\u75C5\u9662"
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.hospital.jsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Text, { className: "flex w-full mb-1", fz: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "mr-3 inline-block w-20", children: "\u55B6\u696D\u6642\u9593" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "block mr-2", children: "AM 9:00-12:00" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "block", children: "PM 15:00-19:00" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.hospital.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Text, { className: "flex w-full", fz: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "mr-3 inline-block w-20", children: "\u4F11\u696D\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "block", children: "\u6728\u66DC\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 86,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.hospital.jsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboards.hospital.jsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      },
      index,
      !1,
      {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 70,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Pagination, { total: 5 }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Flex, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_core5.Anchor,
      {
        variant: "outline",
        href: "/dashboards",
        color: "gray",
        className: "p-5 py-1 border rounded-md border-gray-400 border-solid",
        children: "\u623B\u308B"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 97,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Modal, { opened, onClose: close, title: "\u75C5\u9662\u691C\u7D22", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Title, { order: 5, className: "font-bold", children: "\u5730\u540D\u30FB\u5834\u6240\u540D\u306A\u3069" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 114,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Input, { value: "2023/4/9" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.hospital.jsx",
          lineNumber: 109,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Title, { order: 5, className: "font-bold", children: "\u30AD\u30FC\u30EF\u30FC\u30C9" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 124,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Input, { value: "150g" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 127,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.hospital.jsx",
          lineNumber: 119,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_core5.Button, { color: "primary", children: "\u691C\u7D22\u3059\u308B" }, void 0, !1, {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.hospital.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.profile.jsx
var dashboards_profile_exports = {};
__export(dashboards_profile_exports, {
  default: () => ProfileDashboards7
});
var import_react11 = require("@remix-run/react"), import_core6 = require("@mantine/core"), import_icons_react5 = require("@tabler/icons-react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ProfileDashboards7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Avatar,
        {
          size: 120,
          className: "rounded-full border border-solid border-gray-200",
          src: "https://kosugelian.net/images/stamp18.png"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_icons_react5.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
        fileName: "app/routes/dashboards.profile.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          className: "border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "mb-2 font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          className: "border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "mb-2 font-bold", children: "\u4F4F\u3093\u3067\u308B\u5730\u57DF" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "mb-2 font-bold", children: "\u81EA\u5DF1\u7D39\u4ECB" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02\u304B\u3089\u53C2\u308A\u307E\u3057\u305F\u5C0F\u83C5\u3067\u3059\u3002\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\uFF01\u597D\u304D\u306A\u30B5\u30C3\u30AB\u30FC\u30C1\u30FC\u30E0\u306F\u30B5\u30AC\u30F3\u9CE5\u6816\u3067\u3059\uFF01\u307E\u3055\u3053\u3068\u3051\u3093\u305E\u3046\u304C\u304B\u304B\u304B\u308F\u3044\u3044\u3067\u3059\uFF01\uFF01" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 59,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Button, { variant: "outline", color: "gray", children: "Home\u3078\u623B\u308B" }, void 0, !1, {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_core6.Anchor,
          {
            href: "/dashboards/profile/edit",
            color: "primary",
            className: "bg-[#339AF0] text-white p-4 py-2 rounded-sm font-bold",
            children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6\u3059\u308B"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboards.profile.jsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.profile.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.profile.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.profile.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards._index.tsx
var dashboards_index_exports = {};
__export(dashboards_index_exports, {
  default: () => ProfileDashboards8,
  loader: () => loader3
});
var import_react13 = require("@remix-run/react");
var import_core12 = require("@mantine/core"), import_icons_react8 = require("@tabler/icons-react");

// app/components/common/LogoutForm.tsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), LogoutForm = ({ user }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Form, { method: "POST", action: "/logout", className: "flex items-center", children: [
  user.username,
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "button",
    {
      type: "submit",
      className: "w-full flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 md:text-base",
      children: "Logout"
    },
    void 0,
    !1,
    {
      fileName: "app/components/common/LogoutForm.tsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/common/LogoutForm.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react12.Form, { method: "POST", action: "/auth/github", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "button",
  {
    type: "submit",
    className: "w-full flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base",
    children: "Login"
  },
  void 0,
  !1,
  {
    fileName: "app/components/common/LogoutForm.tsx",
    lineNumber: 18,
    columnNumber: 11
  },
  this
) }, void 0, !1, {
  fileName: "app/components/common/LogoutForm.tsx",
  lineNumber: 17,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/common/LogoutForm.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), LogoutForm_default = LogoutForm;

// app/components/HamsterMedia.tsx
var import_core7 = require("@mantine/core");

// app/utils/constant.js
var constants = {
  // The name of the app.
  sex: {
    1: "\u30AA\u30B9",
    2: "\u30E1\u30B9"
  }
};

// app/components/HamsterMedia.tsx
var import_icons_react6 = require("@tabler/icons-react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function HamsterMedia({ hamster, showIntroduce = !1 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_core7.Anchor,
    {
      href: `/dashboards/${hamster.id}`,
      className: "flex w-full text-black relative bg-white p-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Group, { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_core7.Avatar,
          {
            size: 64,
            className: "rounded-full border border-solid border-gray-200",
            src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 13,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Text, { size: "lg", weight: 500, children: hamster.name }, void 0, !1, {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Text, { color: "dimmed", size: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
              " ",
              constants.sex[hamster.sex]
            ] }, void 0, !0, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 24,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 25,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/HamsterMedia.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_icons_react6.IconChevronRight,
          {
            size: "1rem",
            color: "black",
            className: "absolute right-2 top-2/4 -translate-y-2/4"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 28,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/HamsterMedia.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/HamsterMedia.tsx",
      lineNumber: 8,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/HamsterMedia.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/common/CenterButton.tsx
var import_core8 = require("@mantine/core"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function CenterButton({ text, url, variant = "filled" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Flex, { className: "mt-3", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_core8.Button,
    {
      component: "a",
      href: url,
      color: "primary",
      size: "md",
      variant,
      className: "p-5 py-2 rounded font-bold w-full text-center shadow-lg",
      children: text
    },
    void 0,
    !1,
    {
      fileName: "app/components/common/CenterButton.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/common/CenterButton.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/SectionHeading.tsx
var import_core9 = require("@mantine/core"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function SectionHeading({ text, icon: Icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core9.Title, { order: 5, className: "text-gray-700 mb-2 px-4 flex items-center", children: [
    Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Icon, { className: "mr-3", size: 20 }, void 0, !1, {
      fileName: "app/components/SectionHeading.tsx",
      lineNumber: 7,
      columnNumber: 18
    }, this),
    text
  ] }, void 0, !0, {
    fileName: "app/components/SectionHeading.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SectionHeading.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/GoodsMedia.tsx
var import_core10 = require("@mantine/core"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function GoodsMedia({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core10.Group, { className: "flex relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core10.Avatar, { size: 56, className: "rounded-full", src: "hamster-car.jpg" }, void 0, !1, {
      fileName: "app/components/GoodsMedia.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core10.Title, { order: 5, className: "mb-4", children: "GEX \u30B8\u30A7\u30C3\u30AF\u30B9\u3054\u304D\u3052\u3093\u5FEB\u9069\u30DE\u30C3\u30C8" }, void 0, !1, {
        fileName: "app/components/GoodsMedia.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core10.Button, { variant: "outline", color: "yellow", className: "mr-3 px-3", children: "Amazon\u3067\u8CFC\u5165" }, void 0, !1, {
        fileName: "app/components/GoodsMedia.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_core10.Button,
        {
          variant: "outline",
          className: "text-[#BE0000] border-[#BE0000] px-3",
          children: "\u697D\u5929\u5E02\u5834\u3067\u8CFC\u5165"
        },
        void 0,
        !1,
        {
          fileName: "app/components/GoodsMedia.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/GoodsMedia.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GoodsMedia.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/GoodsMedia.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/HospitalMedia.tsx
var import_core11 = require("@mantine/core"), import_icons_react7 = require("@tabler/icons-react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function HospitalMedia() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Group, { className: "flex gap-3 items-start w-full bg-white px-3 py-4 border-x-0 border-t border-b-0 border-solid border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Flex, { justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Title, { order: 5, className: "mb-5 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_icons_react7.IconBuildingHospital, { size: 24, color: "gray", className: "mr-3" }, void 0, !1, {
          fileName: "app/components/HospitalMedia.tsx",
          lineNumber: 16,
          columnNumber: 15
        }, this),
        "\u7530\u5712\u8ABF\u5E03\u52D5\u7269\u75C5\u9662"
      ] }, void 0, !0, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.ActionIcon, { color: "#FF0000", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_icons_react7.IconHeart, { color: "#FF0000" }, void 0, !1, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HospitalMedia.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Flex, { justify: "flex-start", gap: 10, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core11.Button,
        {
          component: "a",
          href: "090-0000-0000",
          color: "primary",
          size: "xs",
          variant: "outline",
          className: "basis-1/2 grow-0 text-whte",
          fz: "sm",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_icons_react7.IconDeviceMobile, { className: "mr-1 align-middle", size: 16 }, void 0, !1, {
              fileName: "app/components/HospitalMedia.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this),
            "090-0000-0000"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HospitalMedia.tsx",
          lineNumber: 25,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core11.Button,
        {
          component: "a",
          href: "https://www.tamagawaah.com/",
          color: "primary",
          size: "xs",
          variant: "outline",
          className: "basis-1/2 grow-0 text-whte",
          fz: "sm",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_icons_react7.IconBrowser, { className: "mr-1 align-middle", size: 16 }, void 0, !1, {
              fileName: "app/components/HospitalMedia.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            "Web\u30B5\u30A4\u30C8"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/HospitalMedia.tsx",
          lineNumber: 37,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/HospitalMedia.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards._index.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return { hamsters: [
    {
      id: 1,
      name: "\u30CF\u30E0\u592A\u90CE"
    }
  ], user };
}
function ProfileDashboards8() {
  let ary = [1, 1, 1], { hamsters, user } = (0, import_react13.useLoaderData)();
  return console.log(user), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "bg-stone-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SectionHeading, { text: "\u30DA\u30C3\u30C8\u60C5\u5831", icon: "" }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(LogoutForm_default, { user }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: hamsters.map((hamster, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(HamsterMedia, { hamster }, index, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        CenterButton,
        {
          text: "\u30DA\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B",
          url: "/dashboards/add",
          variant: "filled"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboards._index.tsx",
          lineNumber: 60,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SectionHeading, { text: "\u75C5\u9662\u60C5\u5831", icon: import_icons_react8.IconStethoscope }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(HospitalMedia, {}, index, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Container, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CenterButton, { text: "\u75C5\u9662\u3092\u63A2\u3059", url: "/dashboards/hospital" }, void 0, !1, {
          fileName: "app/routes/dashboards._index.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SectionHeading, { text: "\u3088\u304F\u8CFC\u5165\u3059\u308B\u5546\u54C1", icon: import_icons_react8.IconBasketFilled }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(GoodsMedia, {}, index, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Container, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CenterButton, { text: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30B0\u30C3\u30BA\u3092\u63A2\u3059", url: "" }, void 0, !1, {
          fileName: "app/routes/dashboards._index.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards._index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards._index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.feed.jsx
var dashboards_feed_exports = {};
__export(dashboards_feed_exports, {
  default: () => ProfileDashboards9
});
var import_core13 = require("@mantine/core"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ProfileDashboards9() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "\u3048\u3055\u306E\u30DA\u30FC\u30B8" }, void 0, !1, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("form", { onSubmit: (event) => {
      event.preventDefault(), console.log("\u691C\u7D22\u5B9F\u884C:");
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core13.Flex, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core13.Input, { placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B", value: "", onChange: "" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core13.Button, { type: "submit", children: "\u691C\u7D22" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core13.Button, { type: "button", color: "white", children: "\u8A73\u7D30\u691C\u7D22" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.feed.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$provider.tsx
var auth_provider_exports = {};
__export(auth_provider_exports, {
  action: () => action2
});
async function action2({ params, request }) {
  return typeof params.provider != "string" ? new Error("Invalid Provider") : (await authenticator.authenticate(params.provider, request), {
    successRedirect: "/dashboards",
    failureRedirect: "/"
  });
}

// app/routes/dashboards.$id.jsx
var dashboards_id_exports = {};
__export(dashboards_id_exports, {
  action: () => action3,
  default: () => DashboardsId,
  loader: () => loader4
});
var import_hooks3 = require("@mantine/hooks"), import_react15 = require("@remix-run/react");
var import_core15 = require("@mantine/core"), import_recharts = require("recharts");

// app/components/pet/PetDeleteDialog.tsx
var import_core14 = require("@mantine/core"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function PetDeleteDialog({ hamster, opened, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core14.Modal, { opened, onClose, title: "\u524A\u9664\u306E\u78BA\u8A8D", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core14.Text, { size: "sm", children: "\u9078\u629E\u3057\u305F\u30CF\u30E0\u30B9\u30BF\u30FC\u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/components/pet/PetDeleteDialog.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core14.Flex, { mt: "lg", justify: "center", gap: "md", className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        import_core14.Button,
        {
          onClick: onClose,
          variant: "outline",
          color: "dark",
          className: "basis-1/2",
          children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
        },
        void 0,
        !1,
        {
          fileName: "app/components/pet/PetDeleteDialog.tsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react14.Form, { method: "DELETE", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/pet/PetDeleteDialog.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core14.Button, { color: "red", className: "basis-1/2", type: "submit", children: "\u524A\u9664" }, void 0, !1, {
          fileName: "app/components/pet/PetDeleteDialog.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/pet/PetDeleteDialog.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/pet/PetDeleteDialog.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pet/PetDeleteDialog.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.$id.jsx
var import_node4 = require("@remix-run/node"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), data2 = [
  {
    name: "Page A",
    uv: 4e3,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3e3,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2e3,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2e3
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
async function action3({ request }) {
  let id = (await request.formData()).get("id");
  return (0, import_node4.redirect)("/dashboards");
}
var loader4 = async ({ params }) => await (await fetch(`${process.env.API_HOST}api/hamsters/${params.id}`)).json();
function DashboardsId() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks3.useDisclosure)(!1), [openedDialy, { open: openDialy, close: closeDialy }] = (0, import_hooks3.useDisclosure)(!1), [
    openedDeleteDialog,
    { open: openDeleteDialog, close: closeDeleteDialog }
  ] = (0, import_hooks3.useDisclosure)(!1), hamster = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "py-8 pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mb-8 mx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core15.Paper,
      {
        radius: "md",
        className: "px-4",
        withBorder: !0,
        p: "lg",
        sx: (theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core15.Avatar,
            {
              src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg",
              size: 120,
              radius: 120,
              mx: "auto"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 136,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 3, ta: "center", fz: "lg", weight: 700, mt: "md", children: hamster.name }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { mt: "md", mb: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: [
              " ",
              constants.sex[hamster.sex]
            ] }, void 0, !0, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 147,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 148,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Button, { fullWidth: !0, size: "md", mt: "md", onClick: openDialy, children: "\u304A\u4E16\u8A71\u306E\u8A18\u9332\u3092\u3059\u308B" }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            CenterButton,
            {
              text: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6",
              url: `/dashboards/${hamster.id}/edit`,
              variant: "outline"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 153,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core15.Button,
            {
              fullWidth: !0,
              variant: "outline",
              size: "md",
              mt: "md",
              color: "red",
              onClick: openDeleteDialog,
              children: "\u30DA\u30C3\u30C8\u60C5\u5831\u3092\u524A\u9664"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 158,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 124,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Modal, { opened: openedDialy, onClose: closeDialy, size: "md", children: [
      "\u304A\u4E16\u8A71\u306E\u8A18\u9332\u3092\u3064\u3051\u308B",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core15.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 5, className: "font-bold", children: "\u65E5\u4ED8" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Input, { value: "2023/4/9" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 181,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 173,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core15.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 5, className: "font-bold", children: "\u65E5\u8A18\u306E\u7A2E\u985E" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 188,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Input, { value: "" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 191,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 183,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core15.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 5, className: "font-bold", children: "\u65E5\u8A18\u306E\u5185\u5BB9" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 198,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Textarea, { value: "" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 201,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 193,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Button, { color: "primary", children: "\u304A\u4E16\u8A71\u8A18\u9332\u3092\u6295\u7A3F\u3059\u308B" }, void 0, !1, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 204,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 203,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.$id.jsx",
      lineNumber: 171,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      PetDeleteDialog,
      {
        hamster,
        opened: openedDeleteDialog,
        onClose: closeDeleteDialog,
        size: "md"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 208,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs, { defaultValue: "daily", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs.List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs.Tab, { value: "daily", className: "w-1/2 text-base", children: "\u4E16\u8A71\u306E\u8A18\u9332" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 218,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs.Tab, { value: "weight", className: "w-1/2 text-base", children: "\u4F53\u91CD" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 221,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs.Panel, { value: "daily", pt: "xs", className: "p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Group, { className: "mb-4 border-t-0 border-x-0 border-b border-solid border-gray-300 gap-0", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_core15.Group,
          {
            className: "gap-0 relative bg-white px-3 py-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
            noWrap: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_core15.Avatar,
                {
                  size: 64,
                  className: "rounded-full border border-solid border-gray-200 mr-6",
                  src: "https://kosugelian.net/images/stamp18.png"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 236,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 4, className: "mb-2", children: "\u990C\u3084\u308A" }, void 0, !1, {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { fz: "sm", className: "mb-2", children: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30D5\u30FC\u30C9\u3001\u3082\u3084\u3057\u3001\u30A6\u30A8\u30CF\u30FC\u30B9\u3001\u304B\u307C\u3061\u3083\u3001\u3068\u3046\u3082\u308D\u3053\u3057" }, void 0, !1, {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { fz: "xs", children: "8\u670830\u65E5" }, void 0, !1, {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 248,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 241,
                columnNumber: 21
              }, this)
            ]
          },
          index,
          !0,
          {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 231,
            columnNumber: 19
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Pagination, { total: 5 }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 255,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 254,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Tabs.Panel, { value: "weight", pt: "xs", className: "p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 6, className: "mb-6", children: "2023\u5E744\u6708" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 261,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_recharts.LineChart,
          {
            data: data2,
            margin: {
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 274,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.XAxis, { dataKey: "name" }, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 275,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 276,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 277,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.Legend, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 278,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_recharts.Line,
                {
                  type: "monotone",
                  dataKey: "pv",
                  stroke: "#8884d8",
                  activeDot: { r: 8 }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 279,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_recharts.Line, { type: "monotone", dataKey: "uv", stroke: "#82ca9d" }, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 285,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 265,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 264,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Button, { onClick: open, children: "\u4F53\u91CD\u3092\u8A18\u9332\u3059\u308B" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 289,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 288,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 260,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.$id.jsx",
      lineNumber: 215,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Modal, { opened, onClose: close, title: "\u4F53\u91CD\u3092\u8A18\u9332\u3059\u308B", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core15.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 5, className: "font-bold", children: "\u65E5\u4ED8" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 300,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Input, { value: "2023/4/9" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 303,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 295,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core15.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 5, className: "font-bold", children: "\u4F53\u91CD" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 310,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Input, { value: "150g" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 313,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 305,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Button, { color: "primary", children: "\u4F53\u91CD\u3092\u5165\u529B\u3059\u308B" }, void 0, !1, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 316,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 315,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.$id.jsx",
      lineNumber: 293,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id.jsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.$id.jsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.add.jsx
var dashboards_add_exports = {};
__export(dashboards_add_exports, {
  action: () => action4,
  default: () => ProfileDashboards10
});
var import_node5 = require("@remix-run/node"), import_core16 = require("@mantine/core");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action4({ request }) {
  let formData = await request.formData(), name = formData.get("name"), sex = formData.get("sex"), type_id = formData.get("type"), user_id = formData.get("user_id"), introduce = formData.get("introduce"), birthday = formData.get("birthday");
  return (0, import_node5.redirect)("/dashboards");
}
function ProfileDashboards10() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core16.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core16.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u8FFD\u52A0" }, void 0, !1, {
      fileName: "app/routes/dashboards.add.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(HamsterEntryForm, {}, void 0, !1, {
      fileName: "app/routes/dashboards.add.jsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta
});
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader5({ request }) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboards"
  });
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "max-w-xl mx-auto border rounded-lg p-10 mt-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-4xl font-semibold text-center", children: "\u30CF\u30E0\u30E9\u30F3\u30C9\u30FB\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react16.Form, { method: "POST", action: "/auth/github", className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full flex items-center justify-center text-transform gap-2 border-0 rounded-lg bg-blue-500 px-8 py-3 text-center text-lg font-semibold text-white outline-none ring-orange-300 transition duration-100 hover:bg-orange-600 md:text-lg",
        children: "Login with github"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5
});
async function action5({ request }) {
  return await authenticator.logout(request, { redirectTo: "/" });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SKI5SKEE.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-2QB4I6JS.js", "/build/_shared/chunk-2QJY4JOV.js", "/build/_shared/chunk-LAGJPRBL.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YCQDO263.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MTYB3NPX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider": { id: "routes/auth.$provider", parentId: "root", path: "auth/:provider", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider-XLKLRWKQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider.callback": { id: "routes/auth.$provider.callback", parentId: "routes/auth.$provider", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider.callback-VMI45MSD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id": { id: "routes/dashboards.$id", parentId: "root", path: "dashboards/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id-KRY3HA6J.js", imports: ["/build/_shared/chunk-JZIMDXOZ.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary": { id: "routes/dashboards.$id.diary", parentId: "routes/dashboards.$id", path: "diary", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary-QSFV2AIS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary.$date": { id: "routes/dashboards.$id.diary.$date", parentId: "routes/dashboards.$id.diary", path: ":date", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary.$date-BMDX5M73.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id_.edit": { id: "routes/dashboards.$id_.edit", parentId: "root", path: "dashboards/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id_.edit-4ZDOEGCX.js", imports: ["/build/_shared/chunk-4V7JAJJ3.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards._index": { id: "routes/dashboards._index", parentId: "root", path: "dashboards", index: !0, caseSensitive: void 0, module: "/build/routes/dashboards._index-RMAMY3RY.js", imports: ["/build/_shared/chunk-JZIMDXOZ.js", "/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.add": { id: "routes/dashboards.add", parentId: "root", path: "dashboards/add", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.add-6OEATGLF.js", imports: ["/build/_shared/chunk-4V7JAJJ3.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.feed": { id: "routes/dashboards.feed", parentId: "root", path: "dashboards/feed", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.feed-ZSIDPKJX.js", imports: ["/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital": { id: "routes/dashboards.hospital", parentId: "root", path: "dashboards/hospital", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital-LBYLI3MO.js", imports: ["/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital_.$id": { id: "routes/dashboards.hospital_.$id", parentId: "root", path: "dashboards/hospital/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital_.$id-VJPGAUXX.js", imports: ["/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile": { id: "routes/dashboards.profile", parentId: "root", path: "dashboards/profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile-YX5IMFUJ.js", imports: ["/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile_.edit": { id: "routes/dashboards.profile_.edit", parentId: "root", path: "dashboards/profile/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile_.edit-4LWDRSOJ.js", imports: ["/build/_shared/chunk-JM7PSLBK.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-DDPDG5LD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-5GTPI7EF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "cba6f258", hmr: { runtime: "/build/_shared/chunk-LAGJPRBL.js", timestamp: 1689278082681 }, url: "/build/manifest-CBA6F258.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { port: 3001 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboards.$id.diary.$date": {
    id: "routes/dashboards.$id.diary.$date",
    parentId: "routes/dashboards.$id.diary",
    path: ":date",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_diary_date_exports
  },
  "routes/dashboards.hospital_.$id": {
    id: "routes/dashboards.hospital_.$id",
    parentId: "root",
    path: "dashboards/hospital/:id",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_hospital_id_exports
  },
  "routes/dashboards.profile_.edit": {
    id: "routes/dashboards.profile_.edit",
    parentId: "root",
    path: "dashboards/profile/edit",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_profile_edit_exports
  },
  "routes/auth.$provider.callback": {
    id: "routes/auth.$provider.callback",
    parentId: "routes/auth.$provider",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_callback_exports
  },
  "routes/dashboards.$id.diary": {
    id: "routes/dashboards.$id.diary",
    parentId: "routes/dashboards.$id",
    path: "diary",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_diary_exports
  },
  "routes/dashboards.$id_.edit": {
    id: "routes/dashboards.$id_.edit",
    parentId: "root",
    path: "dashboards/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_edit_exports
  },
  "routes/dashboards.hospital": {
    id: "routes/dashboards.hospital",
    parentId: "root",
    path: "dashboards/hospital",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_hospital_exports
  },
  "routes/dashboards.profile": {
    id: "routes/dashboards.profile",
    parentId: "root",
    path: "dashboards/profile",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_profile_exports
  },
  "routes/dashboards._index": {
    id: "routes/dashboards._index",
    parentId: "root",
    path: "dashboards",
    index: !0,
    caseSensitive: void 0,
    module: dashboards_index_exports
  },
  "routes/dashboards.feed": {
    id: "routes/dashboards.feed",
    parentId: "root",
    path: "dashboards/feed",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_feed_exports
  },
  "routes/auth.$provider": {
    id: "routes/auth.$provider",
    parentId: "root",
    path: "auth/:provider",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_exports
  },
  "routes/dashboards.$id": {
    id: "routes/dashboards.$id",
    parentId: "root",
    path: "dashboards/:id",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_exports
  },
  "routes/dashboards.add": {
    id: "routes/dashboards.add",
    parentId: "root",
    path: "dashboards/add",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_add_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
