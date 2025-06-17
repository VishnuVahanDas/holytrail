"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71],
    {
        39131: function (t, e, i) {
            var l = i(85893),
                o = i(87789),
                n = i(39396),
                s = i(25675),
                r = i.n(s),
                a = i(67294),
                d = i(68991);
            let u = (t) => {
                let {
                    src: e,
                    fallback:
                    i = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: s = "",
                    width: u,
                    height: c,
                    children: h,
                    isBg: p = !1,
                    wrapperRef: v,
                    fill: g = !1,
                    ...x
                } = t,
                    [m, f] = (0, a.useState)(0),
                    [b, y] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    if (null == v ? void 0 : v.current) {
                        var t, e;
                        f(
                            null == v
                                ? void 0
                                : null === (t = v.current) || void 0 === t
                                    ? void 0
                                    : t.offsetWidth
                        ),
                            y(
                                null == v
                                    ? void 0
                                    : null === (e = v.current) || void 0 === e
                                        ? void 0
                                        : e.offsetHeight
                            );
                    }
                }, [v]);
                let j = (0, a.useMemo)(
                    () => (u ? Math.ceil(Number(u) / 3) : Math.ceil(Number(m) / 3)),
                    [u, m]
                ),
                    $ = (0, a.useMemo)(
                        () => (c ? Math.ceil(Number(c) / 3) : Math.ceil(Number(b) / 3)),
                        [c, b]
                    ),
                    w = (0, a.useMemo)(() => "w=".concat(j, "&h=").concat($), [$, j]),
                    Z = (0, a.useMemo)(() => {
                        let t = e.includes("?") ? "&" : "?";
                        return "".concat(e).concat(t).concat(w, "&blur=2");
                    }, [w, e]),
                    [M, k] = (0, a.useState)(!1),
                    [C, S] = (0, a.useState)(!1),
                    z = (0, a.useMemo)(() => {
                        let t = {};
                        return (
                            u && (t = { ...t, width: u }),
                            c && (t = { ...t, height: c }),
                            g && (t = { ...t, fill: !0 }),
                            t
                        );
                    }, [g, c, u]),
                    L = (0, a.useMemo)(
                        () => (null == e ? void 0 : e.includes("time=1")),
                        [e]
                    ),
                    H = (0, o.zo)(r(), { filter: L ? "blur(10px)" : "unset" });
                return (null == e ? void 0 : e.length) && !M
                    ? u || c || g || (m > 0 && b > 0)
                        ? C
                            ? p
                                ? (0, l.jsxs)(n.xu, {
                                    style: {
                                        position: "relative",
                                        width: null != u ? u : m,
                                        height: null != c ? c : b,
                                    },
                                    children: [
                                        (0, l.jsx)(H, {
                                            alt: s,
                                            src: (0, d.Z)(
                                                ""
                                                    .concat(e, "?w=")
                                                    .concat(null != u ? u : m, "&h=")
                                                    .concat(null != c ? c : b, "&format=auto"),
                                                ""
                                            ),
                                            onError: () => k(!0),
                                            style: {
                                                opacity: C ? 1 : 0,
                                                transition:
                                                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                                position: "relative",
                                            },
                                            ...x,
                                            placeholder: "blur",
                                            blurDataURL: (0, d.Z)(Z, "", 10, "1"),
                                            ...z,
                                            onLoadingComplete: () => {
                                                S(!0);
                                            },
                                        }),
                                        (0, l.jsx)(n.xu, {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 1,
                                            },
                                            children: h,
                                        }),
                                    ],
                                })
                                : (0, l.jsx)(r(), {
                                    alt: s,
                                    src: (0, d.Z)(
                                        ""
                                            .concat(e, "?w=")
                                            .concat(null != u ? u : m, "&h=")
                                            .concat(null != c ? c : b, "&format=auto"),
                                        ""
                                    ),
                                    onError: () => k(!0),
                                    style: {
                                        opacity: C ? 1 : 0,
                                        transition:
                                            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                    },
                                    placeholder: "blur",
                                    blurDataURL: (0, d.Z)(Z, "", 10, "1"),
                                    ...z,
                                    onLoadingComplete: () => {
                                        S(!0);
                                    },
                                    ...x,
                                })
                            : p
                                ? (0, l.jsxs)(n.xu, {
                                    style: {
                                        position: "relative",
                                        width: null != u ? u : m,
                                        height: null != c ? c : b,
                                    },
                                    children: [
                                        (0, l.jsx)(H, {
                                            alt: s,
                                            src: (0, d.Z)(Z, "", 10, "1"),
                                            onError: () => k(!0),
                                            style: {
                                                opacity: C ? 1 : 0,
                                                transition:
                                                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                                position: "relative",
                                            },
                                            ...x,
                                            placeholder: "blur",
                                            blurDataURL: (0, d.Z)(Z, "", 10, "1"),
                                            ...z,
                                            onLoadingComplete: () => {
                                                S(!0);
                                            },
                                        }),
                                        (0, l.jsx)(n.xu, {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 1,
                                            },
                                            children: h,
                                        }),
                                    ],
                                })
                                : (0, l.jsx)(r(), {
                                    alt: s,
                                    src: (0, d.Z)(Z, "", 10, "1"),
                                    onError: () => k(!0),
                                    style: {
                                        opacity: C ? 0 : 1,
                                        transition:
                                            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                    },
                                    placeholder: "blur",
                                    blurDataURL: (0, d.Z)(Z, "", 10, "1"),
                                    ...z,
                                    onLoadingComplete: () => {
                                        S(!0);
                                    },
                                    ...x,
                                })
                        : null
                    : p
                        ? (0, l.jsx)(r(), {
                            alt: "",
                            src: (0, d.Z)(i, "", 10, "1"),
                            ...z,
                            ...x,
                            children: h,
                        })
                        : (0, l.jsx)(r(), {
                            alt: "",
                            src: (0, d.Z)(i, "", 10, "1"),
                            ...z,
                            ...x,
                        });
            };
            e.Z = a.memo(u);
        },
        90071: function (t, e, i) {
            i.r(e);
            var l = i(85893),
                o = i(39396),
                n = i(27484),
                s = i.n(n),
                r = i(70024),
                a = i(41664),
                d = i.n(a),
                u = i(11163),
                c = i.n(u),
                h = i(67294),
                p = i(44950),
                v = i(50389),
                g = i(78449),
                x = i(47624),
                m = i(39986),
                f = i(70466),
                b = i(39131);
            let y = (t) => {
                var e, i, n, a, u, y;
                let { componentData: j, sectionTitle: $ } = t,
                    [w, Z] = (0, h.useState)(1),
                    M = (0, r.Dv)(p.s1),
                    k = (t) => {
                        let e = {
                            sectionTitle: (0, m.Z)($, " ", "-").toLowerCase(),
                            slug: null == t ? void 0 : t.readMoreSlug,
                            title: null == t ? void 0 : t.pressName,
                            elementType: "tab",
                            pathname: c().asPath,
                        };
                        (0, v.L9W)(v.UzI, e, M || void 0);
                    };
                return (0, l.jsxs)(o.xu, {
                    css: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    children: [
                        (0, l.jsx)(o.xu, {
                            css: { display: "flex", alignContent: "center", gap: "$3i" },
                            children:
                                null == j
                                    ? void 0
                                    : j.map((t, e) => {
                                        var i, n, s, r, a, d, u, c, h, p;
                                        return (0, l.jsx)(
                                            o.xu,
                                            {
                                                css: {
                                                    borderBottom: "".concat(
                                                        w === e && "2px solid rgb(0, 198, 132)"
                                                    ),
                                                    paddingTop: "14px",
                                                    paddingBottom: "14px",
                                                    paddingLeft: "$6i",
                                                    paddingRight: "$6i",
                                                    "@smMax": {
                                                        paddingLeft: "$2i",
                                                        paddingRight: "$2i",
                                                        display: "".concat(e > 2 ? "none" : "flex"),
                                                    },
                                                },
                                                children: (0, l.jsx)(o.xu, {
                                                    css: {
                                                        height: "32px",
                                                        width: "90px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        "@lg": { height: "32px", width: "200px" },
                                                    },
                                                    children: (0, l.jsx)(o.xu, {
                                                        css: {
                                                            borderRadius: "12px",
                                                            height: "".concat(
                                                                null == t ? void 0 : t.mobileHeight
                                                            ),
                                                            width: "".concat(
                                                                null == t ? void 0 : t.mobileWidth
                                                            ),
                                                            position: "relative",
                                                            cursor: "pointer",
                                                            "@lg": {
                                                                height: "".concat(
                                                                    null == t ? void 0 : t.desktopHeight
                                                                ),
                                                                width: "".concat(
                                                                    null == t ? void 0 : t.desktopWidth
                                                                ),
                                                            },
                                                        },
                                                        onClick: () => Z(e),
                                                        onMouseEnter: () => {
                                                            Z(e);
                                                        },
                                                        children:
                                                            (null == t
                                                                ? void 0
                                                                : null === (i = t.image) || void 0 === i
                                                                    ? void 0
                                                                    : null === (n = i.data) || void 0 === n
                                                                        ? void 0
                                                                        : null === (s = n.attributes) || void 0 === s
                                                                            ? void 0
                                                                            : s.url) &&
                                                            (0, l.jsx)(b.Z, {
                                                                src: (0, x.Z)(
                                                                    null == t
                                                                        ? void 0
                                                                        : null === (r = t.image) || void 0 === r
                                                                            ? void 0
                                                                            : null === (a = r.data) || void 0 === a
                                                                                ? void 0
                                                                                : null === (d = a.attributes) ||
                                                                                    void 0 === d
                                                                                    ? void 0
                                                                                    : d.url
                                                                ),
                                                                alt: "alt",
                                                                style: {
                                                                    filter: "".concat(
                                                                        w === e ? "none" : "invert(0.5)"
                                                                    ),
                                                                    transition: "all 0.3s ease 0s",
                                                                },
                                                                width: (0, f.Z)()
                                                                    ? (null == t ? void 0 : t.mobileWidth)
                                                                        ? parseInt(
                                                                            null == t
                                                                                ? void 0
                                                                                : null === (u = t.mobileWidth) ||
                                                                                    void 0 === u
                                                                                    ? void 0
                                                                                    : u.replace("px", "")
                                                                        )
                                                                        : 168
                                                                    : (null == t ? void 0 : t.desktopWidth)
                                                                        ? parseInt(
                                                                            null == t
                                                                                ? void 0
                                                                                : null === (c = t.desktopWidth) ||
                                                                                    void 0 === c
                                                                                    ? void 0
                                                                                    : c.replace("px", "")
                                                                        )
                                                                        : 91,
                                                                height: (0, f.Z)()
                                                                    ? (null == t ? void 0 : t.mobileHeight)
                                                                        ? parseInt(
                                                                            null == t
                                                                                ? void 0
                                                                                : null === (h = t.mobileHeight) ||
                                                                                    void 0 === h
                                                                                    ? void 0
                                                                                    : h.replace("px", "")
                                                                        )
                                                                        : 32
                                                                    : (null == t ? void 0 : t.desktopHeight)
                                                                        ? parseInt(
                                                                            null == t
                                                                                ? void 0
                                                                                : null === (p = t.desktopHeight) ||
                                                                                    void 0 === p
                                                                                    ? void 0
                                                                                    : p.replace("px", "")
                                                                        )
                                                                        : 40,
                                                            }),
                                                    }),
                                                }),
                                            },
                                            "tabbed-content-".concat(e)
                                        );
                                    }),
                        }),
                        (0, l.jsx)(o.kC, {
                            align: "center",
                            justify: "center",
                            css: { gap: "$3i" },
                            children: (0, l.jsxs)(o.xu, {
                                css: {
                                    marginTop: "24px",
                                    minHeight: "160px",
                                    width: "320px",
                                    "@lg": {
                                        width: "78%",
                                        marginTop: "64px",
                                        minHeight: "172px",
                                    },
                                },
                                children: [
                                    (0, l.jsx)(o.xu, {
                                        children: (0, l.jsx)(o.xu, {
                                            css: {
                                                textAlign: "center",
                                                color: "$grey07",
                                                fontSize: "$10i",
                                                marginBottom: "$4i",
                                                "@lg": { fontSize: "$16i" },
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html:
                                                    null == j
                                                        ? void 0
                                                        : null === (e = j[w]) || void 0 === e
                                                            ? void 0
                                                            : e.content,
                                            },
                                        }),
                                    }),
                                    (0, l.jsxs)(o.X2, {
                                        css: { gap: "$2i" },
                                        justify: "center",
                                        align: "center",
                                        wrap: "wrap",
                                        children: [
                                            (0, l.jsx)(o.xu, {
                                                as: "p",
                                                css: {
                                                    textAlign: "center",
                                                    color: "$grey07",
                                                    fontSize: "$8i",
                                                    "@lg": { fontSize: "$10i" },
                                                },
                                                children:
                                                    null == j
                                                        ? void 0
                                                        : null === (i = j[w]) || void 0 === i
                                                            ? void 0
                                                            : i.pressName,
                                            }),
                                            (0, l.jsx)(o.iz, {
                                                css: {
                                                    height: "$4 !important",
                                                    backgroundColor: "$grey07",
                                                    width: "1px !important",
                                                },
                                            }),
                                            (0, l.jsx)(o.xu, {
                                                as: "p",
                                                css: {
                                                    textAlign: "center",
                                                    color: "$grey07",
                                                    fontSize: "$8i",
                                                    "@lg": { fontSize: "$10i" },
                                                },
                                                children: s()(
                                                    null == j
                                                        ? void 0
                                                        : null === (n = j[w]) || void 0 === n
                                                            ? void 0
                                                            : n.date
                                                ).format("MMM DD, YYYY"),
                                            }),
                                            (0, l.jsx)(o.iz, {
                                                css: {
                                                    height: "$4 !important",
                                                    backgroundColor: "$grey07",
                                                    width: "1px !important",
                                                },
                                            }),
                                            (0, l.jsx)(d(), {
                                                href: "".concat(
                                                    null == j
                                                        ? void 0
                                                        : null === (a = j[w]) || void 0 === a
                                                            ? void 0
                                                            : a.readMoreSlug
                                                ),
                                                target: "_blank",
                                                title:
                                                    (0, g.Z)(
                                                        null == j
                                                            ? void 0
                                                            : null === (u = j[w]) || void 0 === u
                                                                ? void 0
                                                                : u.anchorTitle
                                                    ) || "",
                                                onClick: () => k(null == j ? void 0 : j[w]),
                                                children: (0, l.jsxs)(o.xu, {
                                                    as: "p",
                                                    css: {
                                                        textAlign: "center",
                                                        color: "$custom14",
                                                        fontSize: "$8i",
                                                        "@lg": { fontSize: "$10i" },
                                                    },
                                                    children: [
                                                        "Read more on",
                                                        " ",
                                                        (0, g.Z)(
                                                            null == j
                                                                ? void 0
                                                                : null === (y = j[w]) || void 0 === y
                                                                    ? void 0
                                                                    : y.pressName
                                                        ),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            };
            e.default = y;
        },
        39986: function (t, e, i) {
            i.d(e, {
                Z: function () {
                    return o;
                },
            });
            var l = i(78449);
            function o() {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "_",
                    i =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : " ";
                return (0, l.Z)((t || "").toLowerCase().split(e).join(i));
            }
        },
    },
]);
