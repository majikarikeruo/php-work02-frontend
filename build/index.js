var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// <define:process.env.REMIX_DEV_HTTP_ORIGIN>
var init_define_process_env_REMIX_DEV_HTTP_ORIGIN = __esm({
  "<define:process.env.REMIX_DEV_HTTP_ORIGIN>"() {
  }
});

// app/routes/_auth.logout.jsx
var require_auth_logout = __commonJS({
  "app/routes/_auth.logout.jsx"() {
    "use strict";
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
  }
});

// app/routes/_auth.signup.jsx
var require_auth_signup = __commonJS({
  "app/routes/_auth.signup.jsx"() {
    "use strict";
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
  }
});

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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// server-entry-module:@remix-run/dev/server-build
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react3 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JTQJYMX2.css";

// app/routes/layout/header.jsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react2 = require("@remix-run/react"), import_core2 = require("@mantine/core"), import_icons_react2 = require("@tabler/icons-react"), import_hooks = require("@mantine/hooks");

// app/components/HamsterMedia.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core = require("@mantine/core");

// app/utils/constant.js
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var constants = {
  // The name of the app.
  sex: {
    1: "\u30AA\u30B9",
    2: "\u30E1\u30B9"
  }
};

// app/components/HamsterMedia.tsx
var import_icons_react = require("@tabler/icons-react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function HamsterMedia({ hamster, showIntroduce = !1 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Group, { className: " relative bg-white px-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_core.Anchor,
    {
      href: `/dashboards/${hamster.id}`,
      className: "flex w-full text-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-white drop-shadow-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Flex, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_core.Avatar,
              {
                size: 64,
                className: "rounded-full border border-solid border-gray-200",
                src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
              },
              void 0,
              !1,
              {
                fileName: "app/components/HamsterMedia.tsx",
                lineNumber: 16,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 15,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Title, { order: 4, children: hamster.name }, void 0, !1, {
                fileName: "app/components/HamsterMedia.tsx",
                lineNumber: 23,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Text, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
                  fileName: "app/components/HamsterMedia.tsx",
                  lineNumber: 25,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
                  " ",
                  constants.sex[hamster.sex]
                ] }, void 0, !0, {
                  fileName: "app/components/HamsterMedia.tsx",
                  lineNumber: 26,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
                  fileName: "app/components/HamsterMedia.tsx",
                  lineNumber: 27,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/HamsterMedia.tsx",
                lineNumber: 24,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/HamsterMedia.tsx",
              lineNumber: 22,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          showIntroduce && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Text, { className: "mb-2 mt-5", children: hamster.introduce }, void 0, !1, {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/HamsterMedia.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_icons_react.IconChevronRight,
          {
            size: "1rem",
            color: "black",
            className: "absolute right-2 top-2/4 -translate-y-2/4"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HamsterMedia.tsx",
            lineNumber: 35,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/HamsterMedia.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/HamsterMedia.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HamsterMedia.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/layout/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function LayoutHeader() {
  let [opened, { open, close }] = (0, import_hooks.useDisclosure)(!1), [openedPet, { open: openPet, close: closePet }] = (0, import_hooks.useDisclosure)(!1), hamsters = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Container, { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Flex, { grow: 1, align: "center", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Burger, { className: "black", size: "sm", onClick: open }, void 0, !1, {
        fileName: "app/routes/layout/header.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Title, { order: 4, children: "\u30CF\u30E0\u30E9\u30F3\u30C9" }, void 0, !1, {
        fileName: "app/routes/layout/header.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconPawFilled, { size: 24, onClick: openPet }, void 0, !1, {
        fileName: "app/routes/layout/header.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/layout/header.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/layout/header.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/layout/header.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_core2.Drawer,
      {
        opened,
        onClose: close,
        size: "75%",
        overlayProps: { opacity: 0.5, blur: 4 },
        withCloseButton: !1,
        className: "p-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Navbar, { width: { sm: 300 }, className: "p-0 border-0", padding: 0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Navbar.Section, { className: "border-0 border-b border-gray-200 border-solid pb-2 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Flex, { align: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_core2.Avatar,
              {
                size: 48,
                className: "rounded-full border border-solid border-gray-100 mr-3",
                src: "https://kosugelian.net/images/stamp18.png"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 62,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "md", className: "font-bold", children: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 68,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "xs", children: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 71,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/layout/header.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Navbar.Section, { className: "p-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline block text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconHome2, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 80,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-3", children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 81,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 76,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline block text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconUsers, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 87,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-3", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u60C5\u5831" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 88,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 83,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline block text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile/edit",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconBuildingHospital, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 94,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-3", children: "\u75C5\u9662\u691C\u7D22" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 95,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 90,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "a",
              {
                className: "p-3 no-underline block text-gray-800 text-sm inline-flex items-center",
                href: "/dashboards/profile/edit",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconBasketFilled, { size: "1rem", stroke: 1.5 }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 101,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ml-3", children: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30B0\u30C3\u30BA\u691C\u7D22" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 102,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/layout/header.jsx",
                lineNumber: 97,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 75,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/layout/header.jsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/layout/header.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_core2.Drawer,
      {
        opened: openedPet,
        onClose: closePet,
        position: "right",
        withCloseButton: !1,
        size: "75%",
        overlayProps: { opacity: 0.5, blur: 4 },
        className: "p-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Drawer.Title, { className: " pb-5 font-bold flex items-center border-0 border-b border-gray-200 border-solid", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons_react2.IconPawFilled, { size: "1.5rem", stroke: 1.5, className: "mr-3" }, void 0, !1, {
              fileName: "app/routes/layout/header.jsx",
              lineNumber: 118,
              columnNumber: 11
            }, this),
            "\u98FC\u3063\u3066\u3044\u308B\u30CF\u30E0\u30B9\u30BF\u30FC"
          ] }, void 0, !0, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Drawer.Body, { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Group, { className: "gap-0", children: [1, 1, 1].map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            import_core2.Flex,
            {
              align: "center",
              className: "gap-0 py-3 border-0 border-b border-gray-200 border-solid",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mr-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_core2.Avatar,
                  {
                    size: 64,
                    className: "rounded-full border border-solid border-gray-200",
                    src: "https://arrown-blog.com/wp-content/uploads/2023/04/kenzou-740x378.jpeg"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 131,
                    columnNumber: 19
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/layout/header.jsx",
                  lineNumber: 130,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "md", className: "font-bold", children: "\u3051\u3093\u305E\u3046" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 138,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core2.Text, { fz: "xs", children: "\u30ED\u30DC\u30ED\u30D5\u30B9\u30AD\u30FC\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
                    fileName: "app/routes/layout/header.jsx",
                    lineNumber: 141,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/layout/header.jsx",
                  lineNumber: 137,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/routes/layout/header.jsx",
              lineNumber: 125,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 123,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/layout/header.jsx",
            lineNumber: 122,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/layout/header.jsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/layout/header.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/layout/footer.jsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core3 = require("@mantine/core"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function LayoutFooter() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Footer, { className: "bg-gray-900 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core3.Container, { className: "py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-white ", children: "copyrights 2023 \u30CF\u30E0\u30E9\u30F3\u30C9 All Rights Reserved." }, void 0, !1, {
    fileName: "app/routes/layout/footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/layout/footer.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/layout/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "ja", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LayoutHeader, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LayoutFooter, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProfileDashboards() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C8\u30CF\u30E0\u30B9\u30BF\u30FC\u307E\u3055\u3053\u65E5\u8A18\u65E5\u4ED8\u5225" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.$date.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react5 = require("@remix-run/react"), import_hooks2 = require("@mantine/hooks"), import_core4 = require("@mantine/core"), import_icons_react3 = require("@tabler/icons-react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ProfileDashboards2() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks2.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Title, { order: 4, className: "p-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_react3.IconBuildingHospital, { size: 30, className: "mr-3" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.AspectRatio, { ratio: 16 / 9, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core4.Flex,
        {
          justify: "space-between",
          className: "py-4 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Title, { order: 5, className: "mb-2 font-bold", children: "\u55B6\u696D\u6642\u9593" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Text, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block mr-2", children: "AM 9:00-12:00" }, void 0, !1, {
                fileName: "app/routes/dashboards.hospital_.$id.jsx",
                lineNumber: 55,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "block", children: "PM 15:00-19:00" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core4.Flex,
        {
          justify: "space-between",
          className: "py-4 border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Title, { order: 5, className: "mb-2 font-bold", children: "\u4F11\u696D\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital_.$id.jsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Text, { children: "\u6728\u66DC\u65E5" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_core4.Button, { variant: "outline", color: "gray", children: "\u75C5\u9662\u691C\u7D22\u3078\u623B\u308B" }, void 0, !1, {
          fileName: "app/routes/dashboards.hospital_.$id.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_core4.Anchor,
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react6 = require("@remix-run/react"), import_core5 = require("@mantine/core"), import_icons_react4 = require("@tabler/icons-react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ProfileDashboards3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile_.edit.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_core5.Avatar,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_icons_react4.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Title, { order: 5, className: "font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Input, { value: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Title, { order: 5, className: "font-bold", children: "\u4F4F\u3093\u3067\u308B\u5730\u57DF" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Input, { value: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_core5.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "py-3 border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Title, { order: 5, className: "font-bold mb-2", children: "\u81EA\u5DF1\u7D39\u4ECB" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile_.edit.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              import_core5.Textarea,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
            fileName: "app/routes/dashboards.profile_.edit.jsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core5.Button, { color: "primary", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6" }, void 0, !1, {
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

// app/routes/dashboards.$id.diary.jsx
var dashboards_id_diary_exports = {};
__export(dashboards_id_diary_exports, {
  default: () => ProfileDashboards4
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ProfileDashboards4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C8\u30CF\u30E0\u30B9\u30BF\u30FC\u307E\u3055\u3053\u65E5\u8A18" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id.diary.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
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
  loader: () => loader
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node2 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_core7 = require("@mantine/core");

// app/components/HamsterEntryForm.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_core6 = require("@mantine/core"), import_icons_react5 = require("@tabler/icons-react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function HamsterEntryForm({ hamster }) {
  let [name, setName] = (0, import_react9.useState)(hamster ? hamster.name : ""), [typeId, setTypeId] = (0, import_react9.useState)(
    hamster ? hamster.type_id.toString() : ""
  ), [sex, setSex] = (0, import_react9.useState)(hamster ? hamster.sex.toString() : ""), [birthday, setBirthday] = (0, import_react9.useState)(hamster ? hamster.birthday : ""), [introduce, setIntroduce] = (0, import_react9.useState)(hamster ? hamster.introduce : "");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Avatar,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_icons_react5.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Container, { className: "px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core6.Input,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "font-bold", children: "\u6027\u5225" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core6.Select,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "font-bold", children: "\u7A2E\u985E" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core6.Select,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "font-bold", children: "\u751F\u307E\u308C\u305F\u65E5" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core6.Input,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_core6.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "py-3 border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Title, { order: 5, className: "mb-2 font-bold", children: "\u30DA\u30C3\u30C8\u306E\u7279\u5FB4\u30E1\u30E2" }, void 0, !1, {
              fileName: "app/components/HamsterEntryForm.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core6.Textarea,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Flex, { justify: "center", className: "mt-4", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_core6.Anchor,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", value: 1, name: "user_id" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        hamster && hamster.id && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/HamsterEntryForm.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core6.Button, { color: "primary", type: "submit", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u3092\u8FFD\u52A0" }, void 0, !1, {
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
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader = async ({ params }) => await (await fetch(`${process.env.API_HOST}api/hamsters/${params.id}`)).json();
async function action({ request }) {
  let formData = await request.formData(), name = formData.get("name"), sex = formData.get("sex"), type_id = formData.get("type"), id = formData.get("id"), user_id = formData.get("user_id"), introduce = formData.get("introduce"), birthday = formData.get("birthday"), response = await fetch(`${process.env.API_HOST}api/hamsters/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      sex,
      type_id,
      user_id,
      id,
      introduce,
      birthday
    })
  });
  return (0, import_node2.redirect)(`/dashboards/${id}`);
}
function ProfileDashboards5() {
  let hamster = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "py-8 bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core7.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.$id_.edit.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HamsterEntryForm, { hamster }, void 0, !1, {
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react11 = require("@remix-run/react"), import_hooks3 = require("@mantine/hooks"), import_core8 = require("@mantine/core"), import_icons_react6 = require("@tabler/icons-react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ProfileDashboards6() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks3.useDisclosure)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "pb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.AspectRatio, { ratio: 16 / 9, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Group, { className: "p-4 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_core8.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "w-full gap-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Title, { order: 4, className: "mb-0 px-0 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconStethoscope, { className: "mr-2" }, void 0, !1, {
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_core8.Text,
              {
                className: "flex items-center text-[14px] bg-[#339af0] p-2 py-1 rounded-md text-white",
                onClick: open,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconSearch, { className: "mr-2", size: 16 }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Text, { fz: "sm", children: "\u767B\u9332\u5730\u30FB\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02\u3067\u30CF\u30E0\u30B9\u30BF\u30FC\u306E\u8A3A\u7642\u3092\u3057\u3066 \u304F\u308C\u308B\u75C5\u9662\u4E00\u89A7\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/dashboards.hospital.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_core8.Group,
      {
        className: "flex items-center relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Title, { order: 5, className: "mb-4 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react6.IconBuildingHospital, { size: 24, className: "mr-3" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Text, { className: "flex w-full mb-1", fz: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "mr-3 inline-block w-20", children: "\u55B6\u696D\u6642\u9593" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "block mr-2", children: "AM 9:00-12:00" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "block", children: "PM 15:00-19:00" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.hospital.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Text, { className: "flex w-full", fz: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "mr-3 inline-block w-20", children: "\u4F11\u696D\u65E5" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "block", children: "\u6728\u66DC\u65E5" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Pagination, { total: 5 }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboards.hospital.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Flex, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_core8.Anchor,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Modal, { opened, onClose: close, title: "\u75C5\u9662\u691C\u7D22", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_core8.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Title, { order: 5, className: "font-bold", children: "\u5730\u540D\u30FB\u5834\u6240\u540D\u306A\u3069" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 114,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Input, { value: "2023/4/9" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_core8.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Title, { order: 5, className: "font-bold", children: "\u30AD\u30FC\u30EF\u30FC\u30C9" }, void 0, !1, {
              fileName: "app/routes/dashboards.hospital.jsx",
              lineNumber: 124,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Input, { value: "150g" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core8.Button, { color: "primary", children: "\u691C\u7D22\u3059\u308B" }, void 0, !1, {
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react12 = require("@remix-run/react"), import_core9 = require("@mantine/core"), import_icons_react7 = require("@tabler/icons-react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ProfileDashboards7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u98FC\u3044\u4E3B\u60C5\u5831\u7DE8\u96C6" }, void 0, !1, {
      fileName: "app/routes/dashboards.profile.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Flex, { justify: "center", className: "mb-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_core9.Avatar,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons_react7.IconCameraPlus, { className: "absolute bottom-0 right-0" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_core9.Flex,
        {
          justify: "space-between",
          className: "border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Title, { order: 5, className: "mb-2 font-bold", children: "\u540D\u524D" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Text, { children: "\u3053\u3059\u3052\u305F\u3064\u3084" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_core9.Flex,
        {
          justify: "space-between",
          className: "border-0 border-b border-solid border-gray-200 mb-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Title, { order: 5, className: "mb-2 font-bold", children: "\u4F4F\u3093\u3067\u308B\u5730\u57DF" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 46,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Text, { children: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_core9.Flex,
        {
          justify: "space-between",
          direction: "column",
          className: "border-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Title, { order: 5, className: "mb-2 font-bold", children: "\u81EA\u5DF1\u7D39\u4ECB" }, void 0, !1, {
              fileName: "app/routes/dashboards.profile.jsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Text, { children: "\u795E\u5948\u5DDD\u770C\u85E4\u6CA2\u5E02\u304B\u3089\u53C2\u308A\u307E\u3057\u305F\u5C0F\u83C5\u3067\u3059\u3002\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\uFF01\u597D\u304D\u306A\u30B5\u30C3\u30AB\u30FC\u30C1\u30FC\u30E0\u306F\u30B5\u30AC\u30F3\u9CE5\u6816\u3067\u3059\uFF01\u307E\u3055\u3053\u3068\u3051\u3093\u305E\u3046\u304C\u304B\u304B\u304B\u308F\u3044\u3044\u3067\u3059\uFF01\uFF01" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Flex, { justify: "center", className: "mt-8", gap: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core9.Button, { variant: "outline", color: "gray", children: "Home\u3078\u623B\u308B" }, void 0, !1, {
          fileName: "app/routes/dashboards.profile.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_core9.Anchor,
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

// app/routes/dashboards._index.jsx
var dashboards_index_exports = {};
__export(dashboards_index_exports, {
  default: () => ProfileDashboards8,
  loader: () => loader2
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react13 = require("@remix-run/react"), import_core14 = require("@mantine/core"), import_icons_react9 = require("@tabler/icons-react");

// app/components/common/CenterButton.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core10 = require("@mantine/core"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function CenterButton({ text, url, variant = "" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core10.Flex, { className: "mt-3", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_core10.Button,
    {
      component: "a",
      href: url,
      color: "primary",
      size: "md",
      variant,
      className: "p-5 py-2 rounded font-bold w-full text-center",
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core11 = require("@mantine/core"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function SectionHeading({ text, icon: Icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_core11.Title, { order: 4, className: "mb-2 px-4 flex items-center", children: [
    Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Icon, { className: "mr-3" }, void 0, !1, {
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core12 = require("@mantine/core"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function GoodsMedia({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Group, { className: "flex relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Avatar, { size: 56, className: "rounded-full", src: "hamster-car.jpg" }, void 0, !1, {
      fileName: "app/components/GoodsMedia.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Title, { order: 5, className: "mb-4", children: "GEX \u30B8\u30A7\u30C3\u30AF\u30B9\u3054\u304D\u3052\u3093\u5FEB\u9069\u30DE\u30C3\u30C8" }, void 0, !1, {
        fileName: "app/components/GoodsMedia.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core12.Button, { variant: "outline", color: "yellow", className: "mr-3 px-3", children: "Amazon\u3067\u8CFC\u5165" }, void 0, !1, {
        fileName: "app/components/GoodsMedia.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_core12.Button,
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core13 = require("@mantine/core"), import_icons_react8 = require("@tabler/icons-react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function HospitalMedia() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Group, { className: "flex items-center relative bg-white px-3 py-5 w-full border-x-0 border-t border-b-0 border-solid border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Title, { order: 5, className: "mb-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_icons_react8.IconBuildingHospital, { size: 24, className: "mr-3" }, void 0, !1, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      "\u7530\u5712\u8ABF\u5E03\u52D5\u7269\u75C5\u9662"
    ] }, void 0, !0, {
      fileName: "app/components/HospitalMedia.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core13.Text, { className: "flex w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grow  inline-flex items-center text-sm ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_icons_react8.IconDeviceMobile, { className: "mr-2" }, void 0, !1, {
          fileName: "app/components/HospitalMedia.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        "\u96FB\u8A71\u3059\u308B"
      ] }, void 0, !0, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grow inline-flex items-center text-sm ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_icons_react8.IconBrowser, { className: "mr-2" }, void 0, !1, {
          fileName: "app/components/HospitalMedia.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        "\u516C\u5F0FWeb\u30B5\u30A4\u30C8\u3078"
      ] }, void 0, !0, {
        fileName: "app/components/HospitalMedia.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/HospitalMedia.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/HospitalMedia.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards._index.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => await (await fetch(`${process.env.API_HOST}api/hamsters`)).json();
function ProfileDashboards8() {
  let ary = [1, 1, 1], hamsters = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-stone-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SectionHeading, { text: "\u30DA\u30C3\u30C8\u60C5\u5831", icon: "" }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core14.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: hamsters.map((hamster, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(HamsterMedia, { hamster }, index, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CenterButton, { text: "\u30DA\u30C3\u30C8\u3092\u8FFD\u52A0\u3059\u308B", url: "/dashboards/add" }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SectionHeading, { text: "\u75C5\u9662\u60C5\u5831", icon: import_icons_react9.IconStethoscope }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core14.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(HospitalMedia, {}, index, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CenterButton, { text: "\u75C5\u9662\u3092\u63A2\u3059", url: "/dashboards/hospital" }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SectionHeading, { text: "\u3088\u304F\u8CFC\u5165\u3059\u308B\u5546\u54C1", icon: import_icons_react9.IconBasketFilled }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_core14.Group, { className: "gap-0 border-0 border-b border-solid border-gray-300 mb-3", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(GoodsMedia, {}, index, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CenterButton, { text: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30B0\u30C3\u30BA\u3092\u63A2\u3059", url: "" }, void 0, !1, {
        fileName: "app/routes/dashboards._index.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboards._index.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboards._index.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/dashboards.feed.jsx
var dashboards_feed_exports = {};
__export(dashboards_feed_exports, {
  default: () => ProfileDashboards9
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core15 = require("@mantine/core"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ProfileDashboards9() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "\u3048\u3055\u306E\u30DA\u30FC\u30B8" }, void 0, !1, {
      fileName: "app/routes/dashboards.feed.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("form", { onSubmit: (event) => {
      event.preventDefault(), console.log("\u691C\u7D22\u5B9F\u884C:");
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core15.Flex, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core15.Input, { placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B", value: "", onChange: "" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core15.Button, { type: "submit", children: "\u691C\u7D22" }, void 0, !1, {
        fileName: "app/routes/dashboards.feed.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_core15.Button, { type: "button", color: "white", children: "\u8A73\u7D30\u691C\u7D22" }, void 0, !1, {
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

// app/routes/dashboards.$id.jsx
var dashboards_id_exports = {};
__export(dashboards_id_exports, {
  action: () => action2,
  default: () => DashboardsId,
  loader: () => loader3
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_hooks4 = require("@mantine/hooks"), import_react15 = require("@remix-run/react");
var import_core17 = require("@mantine/core"), import_recharts = require("recharts");

// app/components/pet/PetDeleteDialog.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_core16 = require("@mantine/core"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function PetDeleteDialog({ hamster, opened, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core16.Modal, { opened, onClose, title: "\u524A\u9664\u306E\u78BA\u8A8D", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core16.Text, { size: "sm", children: "\u9078\u629E\u3057\u305F\u30CF\u30E0\u30B9\u30BF\u30FC\u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/components/pet/PetDeleteDialog.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core16.Flex, { mt: "lg", justify: "center", gap: "md", className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_core16.Button,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react14.Form, { method: "DELETE", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "hidden", value: hamster.id, name: "id" }, void 0, !1, {
          fileName: "app/components/pet/PetDeleteDialog.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_core16.Button, { color: "red", className: "basis-1/2", type: "submit", children: "\u524A\u9664" }, void 0, !1, {
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
var import_node3 = require("@remix-run/node"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), data = [
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
async function action2({ request }) {
  let id = (await request.formData()).get("id"), response = await fetch(`${process.env.API_HOST}api/hamsters/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  });
  return (0, import_node3.redirect)("/dashboards");
}
var loader3 = async ({ params }) => await (await fetch(`${process.env.API_HOST}api/hamsters/${params.id}`)).json();
function DashboardsId() {
  let ary = [1, 1, 1], [opened, { open, close }] = (0, import_hooks4.useDisclosure)(!1), [openedDialy, { open: openDialy, close: closeDialy }] = (0, import_hooks4.useDisclosure)(!1), [
    openedDeleteDialog,
    { open: openDeleteDialog, close: closeDeleteDialog }
  ] = (0, import_hooks4.useDisclosure)(!1), hamster = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "py-8 pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-8 mx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      import_core17.Paper,
      {
        radius: "md",
        className: "px-4",
        withBorder: !0,
        p: "lg",
        sx: (theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core17.Avatar,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 3, ta: "center", fz: "lg", weight: 700, mt: "md", children: hamster.name }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Text, { mt: "md", mb: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "block", children: "\u30B4\u30FC\u30EB\u30C7\u30F3\u30CF\u30E0\u30B9\u30BF\u30FC" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 146,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
              " ",
              constants.sex[hamster.sex]
            ] }, void 0, !0, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 147,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: hamster.birthday }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 148,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Button, { fullWidth: !0, size: "md", mt: "md", onClick: openDialy, children: "\u304A\u4E16\u8A71\u306E\u8A18\u9332\u3092\u3059\u308B" }, void 0, !1, {
            fileName: "app/routes/dashboards.$id.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_core17.Button,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Modal, { opened: openedDialy, onClose: closeDialy, size: "md", children: [
      "\u304A\u4E16\u8A71\u306E\u8A18\u9332\u3092\u3064\u3051\u308B",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_core17.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 5, className: "font-bold", children: "\u65E5\u4ED8" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Input, { value: "2023/4/9" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_core17.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 5, className: "font-bold", children: "\u65E5\u8A18\u306E\u7A2E\u985E" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 188,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Input, { value: "" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_core17.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 5, className: "font-bold", children: "\u65E5\u8A18\u306E\u5185\u5BB9" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 198,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Textarea, { value: "" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Button, { color: "primary", children: "\u304A\u4E16\u8A71\u8A18\u9332\u3092\u6295\u7A3F\u3059\u308B" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs, { defaultValue: "daily", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs.List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs.Tab, { value: "daily", className: "w-1/2 text-base", children: "\u4E16\u8A71\u306E\u8A18\u9332" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 218,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs.Tab, { value: "weight", className: "w-1/2 text-base", children: "\u4F53\u91CD" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 221,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboards.$id.jsx",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs.Panel, { value: "daily", pt: "xs", className: "p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Group, { className: "mb-4 border-t-0 border-x-0 border-b border-solid border-gray-300 gap-0", children: ary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_core17.Group,
          {
            className: "gap-0 relative bg-white px-3 py-3 w-full border-x-0 border-t border-b-0 border-solid border-gray-300",
            noWrap: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                import_core17.Avatar,
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 4, className: "mb-2", children: "\u990C\u3084\u308A" }, void 0, !1, {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Text, { fz: "sm", className: "mb-2", children: "\u30CF\u30E0\u30B9\u30BF\u30FC\u30D5\u30FC\u30C9\u3001\u3082\u3084\u3057\u3001\u30A6\u30A8\u30CF\u30FC\u30B9\u3001\u304B\u307C\u3061\u3083\u3001\u3068\u3046\u3082\u308D\u3053\u3057" }, void 0, !1, {
                  fileName: "app/routes/dashboards.$id.jsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Text, { fz: "xs", children: "8\u670830\u65E5" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Pagination, { total: 5 }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Tabs.Panel, { value: "weight", pt: "xs", className: "p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 6, className: "mb-6", children: "2023\u5E744\u6708" }, void 0, !1, {
          fileName: "app/routes/dashboards.$id.jsx",
          lineNumber: 261,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          import_recharts.LineChart,
          {
            data,
            margin: {
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 274,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.XAxis, { dataKey: "name" }, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 275,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.YAxis, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 276,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 277,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.Legend, {}, void 0, !1, {
                fileName: "app/routes/dashboards.$id.jsx",
                lineNumber: 278,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_recharts.Line, { type: "monotone", dataKey: "uv", stroke: "#82ca9d" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Flex, { justify: "center", className: "mt-8", gap: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Button, { onClick: open, children: "\u4F53\u91CD\u3092\u8A18\u9332\u3059\u308B" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Modal, { opened, onClose: close, title: "\u4F53\u91CD\u3092\u8A18\u9332\u3059\u308B", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_core17.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 5, className: "font-bold", children: "\u65E5\u4ED8" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 300,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Input, { value: "2023/4/9" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_core17.Flex,
        {
          justify: "space-between",
          align: "center",
          className: "py-3 border-0 border-b border-solid border-gray-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Title, { order: 5, className: "font-bold", children: "\u4F53\u91CD" }, void 0, !1, {
              fileName: "app/routes/dashboards.$id.jsx",
              lineNumber: 310,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Input, { value: "150g" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Flex, { justify: "center", className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_core17.Button, { color: "primary", children: "\u4F53\u91CD\u3092\u5165\u529B\u3059\u308B" }, void 0, !1, {
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
  action: () => action3,
  default: () => ProfileDashboards10
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node4 = require("@remix-run/node"), import_core18 = require("@mantine/core");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function action3({ request }) {
  let formData = await request.formData(), name = formData.get("name"), sex = formData.get("sex"), type_id = formData.get("type"), user_id = formData.get("user_id"), introduce = formData.get("introduce"), birthday = formData.get("birthday"), response = await fetch(`${process.env.API_HOST}api/hamsters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, sex, type_id, user_id, introduce, birthday })
  });
  return (0, import_node4.redirect)("/dashboards");
}
function ProfileDashboards10() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "bg-stone-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core18.Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_core18.Title, { order: 3, className: "mb-5 px-4 text-center", children: "\u30DA\u30C3\u30C8\u60C5\u5831\u8FFD\u52A0" }, void 0, !1, {
      fileName: "app/routes/dashboards.add.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(HamsterEntryForm, {}, void 0, !1, {
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

// server-entry-module:@remix-run/dev/server-build
var route12 = __toESM(require_auth_logout()), route13 = __toESM(require_auth_signup());

// app/routes/_auth.login.jsx
var auth_login_exports = {};
__export(auth_login_exports, {
  default: () => Login
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "email", name: "email", required: !0 }, void 0, !1, {
      fileName: "app/routes/_auth.login.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "input",
      {
        type: "password",
        name: "password",
        autoComplete: "current-password",
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_auth.login.jsx",
        lineNumber: 6,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { children: "Sign In" }, void 0, !1, {
      fileName: "app/routes/_auth.login.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.login.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { target: "_blank", href: "/dashboards", rel: "noreferrer", children: "dashboard" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { href: "/dashboards/profile", rel: "noreferrer", children: "dashboard/profile" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.jsx
var auth_exports = {};
__export(auth_exports, {
  default: () => Login2
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Login2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react16.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "", className: "block", children: "Email" }, void 0, !1, {
      fileName: "app/routes/_auth.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "email", name: "email", required: !0 }, void 0, !1, {
      fileName: "app/routes/_auth.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "", className: "block", children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }, void 0, !1, {
      fileName: "app/routes/_auth.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "input",
      {
        type: "password",
        name: "password",
        autoComplete: "current-password",
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_auth.jsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { children: "\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
      fileName: "app/routes/_auth.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var assets_manifest_default = { entry: { module: "/build/entry.client-QZJRIV47.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-ZK7QOKXM.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-2QJY4JOV.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-LAGJPRBL.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G5B463OV.js", imports: ["/build/_shared/chunk-H6YOVM4W.js", "/build/_shared/chunk-RMZWS5TU.js", "/build/_shared/chunk-YTECQKG7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-FDV67HZN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-VYJM43O3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.logout": { id: "routes/_auth.logout", parentId: "routes/_auth", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.logout-ASMWGYJ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.signup": { id: "routes/_auth.signup", parentId: "routes/_auth", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.signup-7QH73OUK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ETFLGGUU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id": { id: "routes/dashboards.$id", parentId: "root", path: "dashboards/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id-52FF632P.js", imports: ["/build/_shared/chunk-IEU7J67J.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary": { id: "routes/dashboards.$id.diary", parentId: "routes/dashboards.$id", path: "diary", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary-UAUCQ7B5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id.diary.$date": { id: "routes/dashboards.$id.diary.$date", parentId: "routes/dashboards.$id.diary", path: ":date", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id.diary.$date-KL6UOB2G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.$id_.edit": { id: "routes/dashboards.$id_.edit", parentId: "root", path: "dashboards/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.$id_.edit-H3YPK2UE.js", imports: ["/build/_shared/chunk-IZEUVQKG.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards._index": { id: "routes/dashboards._index", parentId: "root", path: "dashboards", index: !0, caseSensitive: void 0, module: "/build/routes/dashboards._index-6OBWPWHL.js", imports: ["/build/_shared/chunk-IEU7J67J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.add": { id: "routes/dashboards.add", parentId: "root", path: "dashboards/add", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.add-URPNKMEG.js", imports: ["/build/_shared/chunk-IZEUVQKG.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.feed": { id: "routes/dashboards.feed", parentId: "root", path: "dashboards/feed", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.feed-TEOZTZMI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital": { id: "routes/dashboards.hospital", parentId: "root", path: "dashboards/hospital", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital-5SORUEVO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.hospital_.$id": { id: "routes/dashboards.hospital_.$id", parentId: "root", path: "dashboards/hospital/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.hospital_.$id-HRJRYZFA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile": { id: "routes/dashboards.profile", parentId: "root", path: "dashboards/profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile-QFOMJOQP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboards.profile_.edit": { id: "routes/dashboards.profile_.edit", parentId: "root", path: "dashboards/profile/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboards.profile_.edit-LRHF2BWN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1967b740", hmr: { runtime: "/build/_shared/chunk-LAGJPRBL.js", timestamp: 1688658778904 }, url: "/build/manifest-1967B740.js" };

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
  "routes/_auth.logout": {
    id: "routes/_auth.logout",
    parentId: "routes/_auth",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/_auth.signup": {
    id: "routes/_auth.signup",
    parentId: "routes/_auth",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "routes/_auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
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
