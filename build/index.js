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
var tailwind_default = "/build/_assets/tailwind-XSYJTJ5X.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "ja", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
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
  action: () => action,
  default: () => ProfileDashboards3
});
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_core2 = require("@mantine/core"), import_icons_react2 = require("@tabler/icons-react");

// app/db.server.ts
var import_client = require("@prisma/client"), db = new import_client.PrismaClient();
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/routes/dashboards.profile_.edit.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProfileDashboards3() {
  let { user } = (0, import_react6.useRouteLoaderData)("routes/dashboards");
  console.log(user);
  let [postcode, setPostcode] = (0, import_react5.useState)(null), [address, setAddress] = (0, import_react5.useState)(user ? user.address : ""), transformPostalCode = () => {
    let postalCode = String(postcode), postalCodeRegex = /^\d{3}-?\d{4}$/;
    if (console.log(postcode), postalCodeRegex.test(postalCode)) {
      let postalCodeWithoutHyphen = postalCode.replace("-", "");
      fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCodeWithoutHyphen}`
      ).then((res) => res.json()).then((data) => {
        console.log(data);
        let { address1, address2, address3 } = data.results[0], address4 = address1 + address2 + address3;
        setAddress(address4);
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Form, { method: "post", children: [
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
            lineNumber: 60,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_icons_react2.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.profile_.edit.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboards.profile_.edit.jsx",
        lineNumber: 58,
        columnNumber: 11
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
                lineNumber: 74,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Input, { defaultValue: user && user.name }, void 0, !1, {
                fileName: "app/routes/dashboards.profile_.edit.jsx",
                lineNumber: 77,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "py-3 border-0 border-b border-solid border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 5, className: "font-bold mb-2", children: "\u4F4F\u3093\u3067\u308B\u5730\u57DF" }, void 0, !1, {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Text, { fz: "xs", className: "mb-4", children: "\u90F5\u4FBF\u756A\u53F7\u304B\u3089\u4F4F\u6240\u306E\u4E00\u90E8\u3092\u88DC\u5B8C\u5165\u529B\u3059\u308B\u3068\u3001\u8FD1\u304F\u306E\u75C5\u9662\u3092\u63A2\u3059\u306E\u306B\u4FBF\u5229\u3067\u3059\u3002" }, void 0, !1, {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Flex, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_core2.NumberInput,
                {
                  defaultValue: postcode,
                  hideControls: !0,
                  className: "mb-2 w-20",
                  name: "postal-code",
                  id: "postal-code",
                  onChange: (e) => setPostcode(e)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboards.profile_.edit.jsx",
                  lineNumber: 88,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_core2.Button,
                {
                  variant: "outline",
                  className: "ml-2",
                  onClick: (e) => transformPostalCode(e),
                  children: "\u4F4F\u6240\u88DC\u5B8C"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboards.profile_.edit.jsx",
                  lineNumber: 96,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Input, { defaultValue: address, readOnly: !0, name: "address" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 105,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_core2.Flex,
          {
            justify: "space-between",
            direction: "column",
            className: "py-3 border-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Title, { order: 5, className: "font-bold mb-2", children: "\u81EA\u5DF1\u7D39\u4ECB" }, void 0, !1, {
                fileName: "app/routes/dashboards.profile_.edit.jsx",
                lineNumber: 113,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Textarea, { defaultValue: user && user.introduce, minRows: 10 }, void 0, !1, {
                fileName: "app/routes/dashboards.profile_.edit.jsx",
                lineNumber: 116,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 108,
            columnNumber: 13
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
              lineNumber: 119,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", value: user.id, name: "id" }, void 0, !1, {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_core2.Button, { color: "primary", type: "submit", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6" }, void 0, !1, {
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboards.profile_.edit.jsx",
          lineNumber: 118,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.profile_.edit.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.profile_.edit.jsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.profile_.edit.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
async function action({ request }) {
  let formData = await request.formData(), profileData = Object.fromEntries(formData);
  delete profileData["postal-code"], profileData.id = parseInt(profileData.id), console.log(profileData, 1);
  try {
    let userData = await db.user.update({
      where: {
        id: profileData.id
      },
      data: {
        ...profileData
      }
    });
    console.log(userData, 12);
  } catch (e) {
    console.log(e);
  }
  return (0, import_node2.redirect)("/dashboards/profile");
}

// app/routes/auth.$provider.callback.tsx
var auth_provider_callback_exports = {};
__export(auth_provider_callback_exports, {
  loader: () => loader
});

// app/services/auth.server.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_socials = require("remix-auth-socials");

// app/services/session.server.ts
var import_node3 = require("@remix-run/node"), sessionStorage = (0, import_node3.createCookieSessionStorage)({
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
}), getCallback = (provider) => `${process.env.APP_URL}/auth/${provider}/callback`;
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
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProfileDashboards4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C8\u30CF\u30E0\u30B9\u30BF\u30FC\u307E\u3055\u3053\u65E5\u8A18" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
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

// app/routes/dashboards.$id_.edit.tsx
var dashboards_id_edit_exports = {};
__export(dashboards_id_edit_exports, {
  action: () => action2,
  default: () => ProfileDashboards5,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_core4 = require("@mantine/core");

// app/components/HamsterEntryForm.tsx
var import_react8 = require("@remix-run/react"), import_core3 = require("@mantine/core"), import_icons_react3 = require("@tabler/icons-react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function HamsterEntryForm({ user, hamster }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-8", children: [
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
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
        fileName: "app/components/HamsterEntryForm.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 24,
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
              lineNumber: 40,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Input,
              {
                name: "name",
                size: "md",
                defaultValue: hamster && hamster.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 43,
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
          lineNumber: 35,
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
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Select,
              {
                name: "sexId",
                placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
                defaultValue: hamster && String(hamster.sexId),
                data: [
                  { value: "1", label: "\u30AA\u30B9" },
                  { value: "2", label: "\u30E1\u30B9" }
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 57,
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
          lineNumber: 49,
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
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Select,
              {
                name: "kindId",
                placeholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
                defaultValue: hamster && String(hamster.kindId),
                data: [
                  { value: "1", label: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" },
                  { value: "2", label: "\u30B8\u30E3\u30F3\u30AC\u30EA\u30A2\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 76,
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
          lineNumber: 67,
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
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Input,
              {
                name: "birthday",
                size: "md",
                defaultValue: hamster && hamster.birthday
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 94,
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
          lineNumber: 86,
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
              lineNumber: 105,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_core3.Textarea,
              {
                minRows: 10,
                name: "introduce",
                defaultValue: hamster && hamster.introduce
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterEntryForm.tsx",
                lineNumber: 108,
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
          lineNumber: 100,
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
            lineNumber: 115,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", value: user.id, name: "userId" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        hamster && hamster.id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core3.Button, { color: "primary", type: "submit", children: [
          "\u30DA\u30C3\u30C8\u60C5\u5831\u3092",
          hamster && hamster.id ? "\u66F4\u65B0" : "\u8FFD\u52A0"
        ] }, void 0, !0, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/HamsterEntryForm.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HamsterEntryForm.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HamsterEntryForm.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HamsterEntryForm.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.$id_.edit.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => await db.hamster.findUnique({
  where: {
    id: parseInt(params.id)
  }
});
function ProfileDashboards5() {
  let hamster = (0, import_react9.useLoaderData)(), { user } = (0, import_react9.useRouteLoaderData)("routes/dashboards");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-8 bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core4.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core4.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id_.edit.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(HamsterEntryForm, { hamster, user }, void 0, !1, {
      fileName: "app/routes/dashboards.$id_.edit.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id_.edit.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.$id_.edit.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
async function action2({ request }) {
  let formData = await request.formData(), hamsterData = Object.fromEntries(formData), birthday = new Date(hamsterData.birthday);
  hamsterData.birthday = birthday.toISOString(), hamsterData.id = parseInt(hamsterData.id), hamsterData.sexId = parseInt(hamsterData.sexId), hamsterData.kindId = parseInt(hamsterData.kindId), hamsterData.userId = parseInt(hamsterData.userId);
  try {
    let hamster = await db.hamster.update({
      where: {
        id: hamsterData.id
      },
      data: {
        ...hamsterData
      }
    });
  } catch (e) {
    console.log(e);
  }
  return (0, import_node4.redirect)(`/dashboards/${hamsterData.id}`);
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
  let { user } = (0, import_react11.useRouteLoaderData)("routes/dashboards");
  return console.log(user), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 21,
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
          lineNumber: 26,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_icons_react5.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
        fileName: "app/routes/dashboards.profile.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 24,
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
              lineNumber: 39,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: user.name }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 35,
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
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: user.address }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 51,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 44,
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
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Text, { children: user.introduce }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 61,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 53,
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
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.profile.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.profile.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards._index.tsx
var dashboards_index_exports = {};
__export(dashboards_index_exports, {
  default: () => DashboardsIndex
});
var import_react12 = require("@remix-run/react"), import_core10 = require("@mantine/core");

// app/components/HamsterMedia.tsx
var import_core7 = require("@mantine/core");

// app/utils/constant.js
var constants = {
  // The name of the app.
  sex: {
    1: "\u30AA\u30B9",
    2: "\u30E1\u30B9"
  },
  kind: {
    1: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC",
    2: "\u30B8\u30E3\u30F3\u30AC\u30EA\u30A2\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC"
  }
};

// app/components/HamsterMedia.tsx
var import_icons_react6 = require("@tabler/icons-react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function HamsterMedia({ hamster, showIntroduce = !1 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_core7.Anchor,
    {
      href: `/dashboards/${hamster.id}`,
      className: "flex w-full text-black relative bg-white p-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Group, { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Text, { size: "lg", weight: 500, children: hamster.name }, void 0, !1, {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Text, { color: "dimmed", size: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: [
              " ",
              constants.sex[hamster.sex]
            ] }, void 0, !0, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 24,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
var import_core8 = require("@mantine/core"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function CenterButton({ text, url, variant = "filled" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Flex, { className: "mt-3", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
var import_core9 = require("@mantine/core"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function SectionHeading({ text, icon: Icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Title, { order: 5, className: "text-gray-700 mb-2 px-4 flex items-center", children: [
    Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { className: "mr-3", size: 20 }, void 0, !1, {
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

// app/routes/dashboards._index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function DashboardsIndex() {
  let { hamsters } = (0, import_react12.useRouteLoaderData)("routes/dashboards");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SectionHeading, { text: "\u30DA\u30C3\u30C8\u60C5\u5831", icon: "" }, void 0, !1, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core10.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: hamsters.map((hamster, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(HamsterMedia, { hamster }, index, !1, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core10.Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
        lineNumber: 39,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards._index.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards._index.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards._index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards._index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.feed.jsx
var dashboards_feed_exports = {};
__export(dashboards_feed_exports, {
  default: () => ProfileDashboards8
});
var import_core11 = require("@mantine/core"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ProfileDashboards8() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "\u3048\u3055\u306E\u30DA\u30FC\u30B8" }, void 0, !1, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { onSubmit: (event) => {
      event.preventDefault();
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core11.Flex, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core11.Input, { placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B", value: "", onChange: "" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core11.Button, { type: "submit", children: "\u691C\u7D22" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core11.Button, { type: "button", color: "white", children: "\u8A73\u7D30\u691C\u7D22" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.feed.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$provider.tsx
var auth_provider_exports = {};
__export(auth_provider_exports, {
  action: () => action3
});
async function action3({ params, request }) {
  return typeof params.provider != "string" ? new Error("Invalid Provider") : (await authenticator.authenticate(params.provider, request), {
    successRedirect: "/dashboards",
    failureRedirect: "/"
  });
}

// app/routes/dashboards.$id.tsx
var dashboards_id_exports = {};
__export(dashboards_id_exports, {
  action: () => action4,
  default: () => DashboardsId,
  loader: () => loader3
});
var import_hooks3 = require("@mantine/hooks"), import_react14 = require("@remix-run/react");

// app/utils/plugin.js
function TranslateDateToMY(date) {
  let registeredDate = new Date(date), diff = (/* @__PURE__ */ new Date()).getTime() - registeredDate.getTime(), years = Math.floor(diff / (1e3 * 60 * 60 * 24 * 365));
  diff -= years * (1e3 * 60 * 60 * 24 * 365);
  let months = Math.floor(diff / (1e3 * 60 * 60 * 24 * 30));
  return console.log(`\u7D4C\u904E\u6642\u9593: ${years} \u5E74\u3068 ${months} \u30F6\u6708`), `${years}\u6B73${months}\u30F6\u6708`;
}

// app/routes/dashboards.$id.tsx
var import_core13 = require("@mantine/core");

// app/components/pet/PetDeleteDialog.tsx
var import_core12 = require("@mantine/core"), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function PetDeleteDialog({ hamster, opened, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Modal, { opened, onClose, title: "\u524A\u9664\u306E\u78BA\u8A8D", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Text, { size: "sm", children: "\u9078\u629E\u3057\u305F\u30CF\u30E0\u30B9\u30BF\u30FC\u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/components/pet/PetDeleteDialog.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Flex, { mt: "lg", justify: "center", gap: "md", className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core12.Button,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Form, { method: "DELETE", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/pet/PetDeleteDialog.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Button, { color: "red", className: "basis-1/2", type: "submit", children: "\u524A\u9664" }, void 0, !1, {
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

// app/routes/dashboards.$id.tsx
var import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => {
  let hamster = await db.hamster.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });
  return hamster.birthday = TranslateDateToMY(hamster.birthday), hamster;
};
function DashboardsId() {
  let [
    openedDeleteDialog,
    { open: openDeleteDialog, close: closeDeleteDialog }
  ] = (0, import_hooks3.useDisclosure)(!1), hamster = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-8 pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-8 mx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_core13.Paper,
      {
        radius: "md",
        className: "px-4",
        withBorder: !0,
        p: "lg",
        sx: (theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_core13.Avatar,
            {
              src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg",
              size: 120,
              radius: 120,
              mx: "auto"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboards.$id.tsx",
              lineNumber: 79,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Title, { order: 3, ta: "center", fz: "lg", weight: 700, mt: "md", children: hamster.name }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Text, { mt: "md", mb: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.tsx",
              lineNumber: 89,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "inline-block mr-2", children: constants.sex[hamster.sexId] }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.$id.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Button, { fullWidth: !0, size: "md", mt: "md", onClick: "", children: "\u304A\u4E16\u8A71\u306E\u8A18\u9332\u3092\u3059\u308B" }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.tsx",
            lineNumber: 95,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            CenterButton,
            {
              text: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6",
              url: `/dashboards/${hamster.id}/edit`,
              variant: "outline"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboards.$id.tsx",
              lineNumber: 98,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            import_core13.Button,
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
              fileName: "app/routes/dashboards.$id.tsx",
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
        fileName: "app/routes/dashboards.$id.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
        fileName: "app/routes/dashboards.$id.tsx",
        lineNumber: 153,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.$id.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.$id.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
async function action4({ request }) {
  let formData = await request.formData(), id = parseInt(formData.get("id")), res = await db.hamster.delete({
    where: {
      id
    }
  });
  return (0, import_node5.redirect)("/dashboards");
}

// app/routes/dashboards.add.jsx
var dashboards_add_exports = {};
__export(dashboards_add_exports, {
  action: () => action5,
  default: () => DashboardAdd
});
var import_node6 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_core14 = require("@mantine/core");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function DashboardAdd({ chlildren }) {
  let { user } = (0, import_react15.useRouteLoaderData)("routes/dashboards");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core14.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core14.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u8FFD\u52A0" }, void 0, !1, {
      fileName: "app/routes/dashboards.add.jsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(HamsterEntryForm, { user }, void 0, !1, {
      fileName: "app/routes/dashboards.add.jsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboards.add.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
async function action5({ request }) {
  let formData = await request.formData(), hamsterData = Object.fromEntries(formData), birthday = new Date(hamsterData.birthday);
  hamsterData.birthday = birthday.toISOString(), hamsterData.sexId = parseInt(hamsterData.sexId), hamsterData.kindId = parseInt(hamsterData.kindId), hamsterData.userId = parseInt(hamsterData.userId);
  try {
    let hamster = await db.hamster.create({
      data: {
        ...hamsterData
      }
    });
  } catch (e) {
    console.log(e);
  }
  return (0, import_node6.redirect)("/dashboards");
}

// app/routes/dashboards.tsx
var dashboards_exports = {};
__export(dashboards_exports, {
  default: () => Dashboards,
  loader: () => loader4
});
var import_react17 = require("@remix-run/react");

// app/routes/layout/header.tsx
var import_core15 = require("@mantine/core"), import_icons_react7 = require("@tabler/icons-react"), import_hooks4 = require("@mantine/hooks");

// app/components/common/LogoutForm.tsx
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), LogoutForm = ({ user }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: user && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Form, { method: "POST", action: "/logout", className: "flex items-center", children: [
  user.username,
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "button",
    {
      type: "submit",
      className: "w-full flex items-center justify-center gap-2 border-0 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100  md:text-base",
      children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
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
}, this) }, void 0, !1, {
  fileName: "app/components/common/LogoutForm.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), LogoutForm_default = LogoutForm;

// app/routes/layout/header.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function LayoutHeader({ user, hamsters }) {
  let [opened, { open, close }] = (0, import_hooks4.useDisclosure)(!1), [openedPet, { open: openPet, close: closePet }] = (0, import_hooks4.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Container, { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { grow: 1, align: "center", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Burger, { className: "black", size: "sm", onClick: open }, void 0, !1, {
        fileName: "app/routes/layout/header.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Title, { order: 4, children: "\u30CF\u30E0\u30E9\u30F3\u30C9" }, void 0, !1, {
        fileName: "app/routes/layout/header.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconPawFilled, { size: 24, onClick: openPet }, void 0, !1, {
        fileName: "app/routes/layout/header.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/layout/header.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/layout/header.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/layout/header.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core15.Drawer,
      {
        opened,
        onClose: close,
        size: "75%",
        overlayProps: { opacity: 0.5, blur: 4 },
        withCloseButton: !1,
        className: "p-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Navbar, { width: { sm: 300 }, className: "p-0 border-0", padding: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Navbar.Section, { className: "border-0 border-b border-gray-200 border-solid pb-2 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Flex, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              import_core15.Avatar,
              {
                size: 48,
                className: "rounded-full border border-solid border-gray-100 mr-3",
                src: "https://kosugelian.net/images/stamp18.png"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/layout/header.tsx",
                lineNumber: 56,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { fz: "md", className: "font-bold", children: user.name }, void 0, !1, {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Navbar.Section, { className: "p-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconHome2, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 73,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-3", children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9" }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 74,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.tsx",
                lineNumber: 69,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconUsers, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 80,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-3", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u60C5\u5831" }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 81,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.tsx",
                lineNumber: 76,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile/edit",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconBuildingHospital, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-3", children: "\u75C5\u9662\u691C\u7D22" }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 88,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.tsx",
                lineNumber: 83,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile/edit",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconBasketFilled, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 94,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-3", children: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30B0\u30C3\u30BA\u691C\u7D22" }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 95,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.tsx",
                lineNumber: 90,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(LogoutForm_default, { user }, void 0, !1, {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 68,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/layout/header.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/layout/header.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_core15.Drawer,
      {
        opened: openedPet,
        onClose: closePet,
        position: "right",
        withCloseButton: !1,
        size: "75%",
        overlayProps: { opacity: 0.5, blur: 4 },
        className: "p-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Drawer.Title, { className: " pb-5 font-bold flex items-center border-0 border-b border-gray-200 border-solid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_icons_react7.IconPawFilled, { size: "1.5rem", stroke: 1.5, className: "mr-3" }, void 0, !1, {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            "\u98FC\u3063\u3066\u3044\u308B\u30CF\u30E0\u30B9\u30BF\u30FC"
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 115,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Drawer.Body, { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Group, { className: "gap-0", children: hamsters.map((hamster, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            import_core15.Flex,
            {
              align: "center",
              className: "gap-0 py-3 border-0 border-b border-gray-200 border-solid",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mr-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  import_core15.Avatar,
                  {
                    size: 64,
                    className: "rounded-full border border-solid border-gray-200",
                    src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 129,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/layout/header.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { fz: "md", className: "font-bold", children: hamster.name }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 136,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core15.Text, { fz: "xs", children: constants.kind[hamster.kindId] }, void 0, !1, {
                    fileName: "app/routes/layout/header.tsx",
                    lineNumber: 139,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/layout/header.tsx",
                  lineNumber: 135,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/routes/layout/header.tsx",
              lineNumber: 123,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 121,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/layout/header.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/layout/header.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/layout/header.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/layout/footer.tsx
var import_core16 = require("@mantine/core"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function LayoutFooter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core16.Footer, { className: "bg-gray-900 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core16.Container, { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm text-white ", children: "copyrights 2023 \u30CF\u30E0\u30E9\u30F3\u30C9 All Rights Reserved." }, void 0, !1, {
    fileName: "app/routes/layout/footer.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/layout/footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/layout/footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/"
  });
  return { hamsters: await db.hamster.findMany({
    where: {
      userId: user.id
    }
  }), user };
}
function Dashboards() {
  let { user, hamsters } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LayoutHeader, { user, hamsters }, void 0, !1, {
      fileName: "app/routes/dashboards.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboards.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LayoutFooter, {}, void 0, !1, {
      fileName: "app/routes/dashboards.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards.tsx",
    lineNumber: 33,
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
var import_react18 = require("@remix-run/react");
var import_ds = require("@mantine/ds"), import_core17 = require("@mantine/core"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader5({ request }) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboards"
  });
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "max-w-xl mx-auto border rounded-lg p-10 mt-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "text-4xl font-semibold text-center", children: "Hamland" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Form, { method: "POST", action: "/auth/google", className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      import_core17.Button,
      {
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 256 262",
            width: "0.9rem",
            height: "0.9rem",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "path",
                {
                  fill: "#4285F4",
                  d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 36,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "path",
                {
                  fill: "#34A853",
                  d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "path",
                {
                  fill: "#FBBC05",
                  d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "path",
                {
                  fill: "#EB4335",
                  d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ),
        variant: "default",
        color: "gray",
        className: "w-full rounded-sm",
        children: "Login With Google"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Form, { method: "POST", action: "/auth/facebook", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      import_core17.Button,
      {
        type: "submit",
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fab",
            "data-icon": "facebook",
            class: "svg-inline--fa fa-facebook",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "0.9rem",
            height: "0.9rem",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              "path",
              {
                fill: "currentColor",
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 78,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 66,
            columnNumber: 13
          },
          this
        ),
        className: "w-full text-transform border-0 rounded-sm bg-[#4267B2] text-center text-sm text-white",
        children: "Login with Facebook"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Form, { method: "POST", action: "/auth/github", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      import_core17.Button,
      {
        type: "submit",
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_ds.GithubIcon, { size: "1rem" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this),
        className: "w-full text-transform border-0 rounded-sm bg-[#25262b] text-center text-sm text-white",
        children: "Login with GitHub"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6
});
async function action6({ request }) {
  return await authenticator.logout(request, { redirectTo: "/" });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-Z4CH2IZS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-IL37TEON.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-BHG7KMLG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L4AM42SU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZNUNVNZ4.js", imports: ["/build/_shared/chunk-6RHPGYS4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider": { id: "routes/auth.$provider", parentId: "root", path: "auth/:provider", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider-JICM3LZN.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.$provider.callback": { id: "routes/auth.$provider.callback", parentId: "routes/auth.$provider", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$provider.callback-DBRCVAXE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards": { id: "routes/dashboards", parentId: "root", path: "dashboards", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards-233IPIDH.js", imports: ["/build/_shared/chunk-KGV33VA6.js", "/build/_shared/chunk-DXZPNPAJ.js", "/build/_shared/chunk-46A2TU25.js", "/build/_shared/chunk-6RHPGYS4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id": { id: "routes/dashboards.$id", parentId: "routes/dashboards", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id-I5RRNRBG.js", imports: ["/build/_shared/chunk-TT624J5S.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary": { id: "routes/dashboards.$id.diary", parentId: "routes/dashboards.$id", path: "diary", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary-V7E3A773.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary.$date": { id: "routes/dashboards.$id.diary.$date", parentId: "routes/dashboards.$id.diary", path: ":date", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary.$date-LCA7P56A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id_.edit": { id: "routes/dashboards.$id_.edit", parentId: "routes/dashboards", path: ":id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id_.edit-OVPSGBXJ.js", imports: ["/build/_shared/chunk-K6OHXJXN.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards._index": { id: "routes/dashboards._index", parentId: "routes/dashboards", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboards._index-HZVXCW3N.js", imports: ["/build/_shared/chunk-TT624J5S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.add": { id: "routes/dashboards.add", parentId: "routes/dashboards", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.add-N4LCU4JC.js", imports: ["/build/_shared/chunk-K6OHXJXN.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.feed": { id: "routes/dashboards.feed", parentId: "routes/dashboards", path: "feed", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.feed-4PXMSTUK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital": { id: "routes/dashboards.hospital", parentId: "routes/dashboards", path: "hospital", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital-IMZP3PYS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital_.$id": { id: "routes/dashboards.hospital_.$id", parentId: "routes/dashboards", path: "hospital/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital_.$id-6CAOEFHZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile": { id: "routes/dashboards.profile", parentId: "routes/dashboards", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile-L2Q2RJWF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile_.edit": { id: "routes/dashboards.profile_.edit", parentId: "routes/dashboards", path: "profile/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile_.edit-JOFGQZ64.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a2b9364f", hmr: { runtime: "/build/_shared/chunk-BHG7KMLG.js", timestamp: 1689350212610 }, url: "/build/manifest-A2B9364F.js" };

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
    parentId: "routes/dashboards",
    path: "hospital/:id",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_hospital_id_exports
  },
  "routes/dashboards.profile_.edit": {
    id: "routes/dashboards.profile_.edit",
    parentId: "routes/dashboards",
    path: "profile/edit",
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
    parentId: "routes/dashboards",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_edit_exports
  },
  "routes/dashboards.hospital": {
    id: "routes/dashboards.hospital",
    parentId: "routes/dashboards",
    path: "hospital",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_hospital_exports
  },
  "routes/dashboards.profile": {
    id: "routes/dashboards.profile",
    parentId: "routes/dashboards",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_profile_exports
  },
  "routes/dashboards._index": {
    id: "routes/dashboards._index",
    parentId: "routes/dashboards",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboards_index_exports
  },
  "routes/dashboards.feed": {
    id: "routes/dashboards.feed",
    parentId: "routes/dashboards",
    path: "feed",
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
    parentId: "routes/dashboards",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_id_exports
  },
  "routes/dashboards.add": {
    id: "routes/dashboards.add",
    parentId: "routes/dashboards",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_add_exports
  },
  "routes/dashboards": {
    id: "routes/dashboards",
    parentId: "root",
    path: "dashboards",
    index: void 0,
    caseSensitive: void 0,
    module: dashboards_exports
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
