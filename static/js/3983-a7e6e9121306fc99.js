(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405, 5465, 4035],
    {
        48312: function (e, i, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return t(88343);
                },
            ]);
        },
        64910: function (e, i, t) {
            "use strict";
            var n = t(85893),
                a = t(87789),
                o = t(39396),
                l = t(70024),
                s = t(5152),
                r = t.n(s),
                c = t(11163),
                d = t(67294),
                u = t(44950),
                g = t(68991),
                p = t(39131);
            let h = r()(() => Promise.resolve().then(t.bind(t, 22004)), {
                loadableGenerated: { webpack: () => [22004] },
                ssr: !1,
            }),
                m = (0, a.zo)(o.xu, {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "$black",
                    "@lg": { height: "inherit" },
                    ".video-player video": {
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        opacity: 1,
                        transition: "opacity .25s cubic-bezier(.05,0,0,1)",
                        objectFit: "cover",
                        position: "absolute",
                    },
                }),
                v = (e) => {
                    let { bannerMedia: i, fallbackImage: t } = e,
                        a = (0, c.useRouter)(),
                        [o, s] = (0, d.useState)(!1),
                        r = (0, l.Dv)(u.bW),
                        v = (0, d.useRef)(null),
                        x = (0, d.useMemo)(() => {
                            var e;
                            return (
                                (null === (e = null == a ? void 0 : a.asPath.split("?")[0]) ||
                                    void 0 === e
                                    ? void 0
                                    : e.includes("packages/mothers-day-singapore")) || !1
                            );
                        }, [a]),
                        k = () => {
                            let e = document.getElementsByClassName(
                                "react-player__play-icon"
                            )[0];
                            e && (null == e || e.click());
                        };
                    function y() {
                        return window.innerWidth;
                    }
                    (0, d.useEffect)(() => {
                        k();
                    }, []);
                    let [f, b] = (0, d.useState)(y());
                    return (
                        (0, d.useEffect)(() => {
                            let e = () => {
                                b(y());
                            };
                            return (
                                window.addEventListener("resize", e),
                                () => {
                                    window.removeEventListener("resize", e);
                                }
                            );
                        }, []),
                        (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)(m, {
                                children: [
                                    (0, n.jsx)(h, {
                                        onReady: () => {
                                            s(!0);
                                        },
                                        url: x
                                            ? i
                                            : ""
                                                .concat(i, "?w=")
                                                .concat(f, "&h=")
                                                .concat(
                                                    (null == r ? void 0 : r.isMobile) ? 368 : 480
                                                ),
                                        playing: !0,
                                        loop: !0,
                                        width: "inherit",
                                        height: "inherit",
                                        className: "video-player",
                                        muted: !0,
                                        playsinline: !0,
                                    }),
                                    (0, n.jsx)(p.Z, {
                                        src: (0, g.Z)("".concat(i, "?time=1")),
                                        fallback: t.url,
                                        alt: "pyt-banner" + (null == i ? void 0 : i.slice(20)),
                                        fill: !0,
                                        style: {
                                            objectFit: "cover",
                                            opacity: o ? 0 : 1,
                                            transition: "opacity 0.5s ease-out",
                                        },
                                        wrapperRef: v,
                                    }),
                                ],
                            }),
                        })
                    );
                };
            i.Z = v;
        },
        75465: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    default: function () {
                        return p;
                    },
                });
            var n = t(85893),
                a = t(9008),
                o = t.n(a),
                l = t(11163),
                s = t(67294),
                r = t(88116);
            let c = {
                in: [
                    { name: "", lang: "en-IN" },
                    { name: "ae", lang: "en-AE" },
                    { name: "us", lang: "en-US" },
                ],
                ae: [
                    { name: "ae", lang: "en-AE" },
                    { name: "", lang: "en-IN" },
                    { name: "us", lang: "en-US" },
                ],
                us: [
                    { name: "us", lang: "en-US" },
                    { name: "", lang: "en-IN" },
                    { name: "ae", lang: "en-AE" },
                ],
            },
                d = (e) => {
                    var i;
                    let {
                        pathname: t,
                        supportedLocales: a,
                        locale: o,
                        uncostedItinerary: l,
                        canonicalURL: s,
                    } = e,
                        d = null === (i = t.split("?")) || void 0 === i ? void 0 : i[0],
                        u = r.X.domain_url.replace(/\/$/, "");
                    return l && void 0 !== s && s !== d
                        ? (0, n.jsx)("link", {
                            rel: "alternate",
                            href: "".concat(u).concat(d),
                            hrefLang: "en-IN",
                        })
                        : c[o || "in"].map((e, i) => {
                            if (
                                "" === e.name ||
                                !a ||
                                (a && a.length > 0 && a.includes(e.name))
                            ) {
                                let t = d
                                    ? 0 === e.name.length
                                        ? "/".concat(d)
                                        : "/".concat(e.name, "/").concat(d)
                                    : "";
                                return (0, n.jsx)(
                                    "link",
                                    {
                                        rel: "alternate",
                                        href: "".concat(u).concat(t),
                                        hrefLang: e.lang,
                                    },
                                    i
                                );
                            }
                        });
                };
            var u = t(27894);
            let g = (e) => {
                let {
                    title: i = "Pickyourtrail",
                    metaTitle: t,
                    description: a = "",
                    ogImage: c,
                    keywords: g,
                    canonicalURL: p,
                    crawlable: h = !0,
                    slug: m,
                    metaRobots: v,
                    locales: x,
                    addWebPageSchema: k,
                    addOrganisationSchema: y,
                    uncostedItinerary: f = !1,
                    otherWebPageSchema: b,
                } = e,
                    j = (0, l.useRouter)(),
                    w = (0, u.Z)({ router: j }),
                    $ = (0, s.useMemo)(
                        () => ({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: i,
                            description: a,
                            publisher: { "@type": "Organization", name: "Pickyourtrail" },
                            license:
                                "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US",
                        }),
                        [a, i]
                    ),
                    P = (0, s.useMemo)(() => {
                        if (null == p ? void 0 : p.startsWith("http")) return p;
                        let e = r.X.domain_url.replace(/\/$/, "");
                        return p
                            ? w
                                ? "".concat(e, "/").concat(w, "/").concat(p.replace(/^\//, ""))
                                : "".concat(e, "/").concat(p.replace(/^\//, ""))
                            : m
                                ? w
                                    ? ""
                                        .concat(e, "/")
                                        .concat(w, "/")
                                        .concat(m.replace(/^\//, "").split("?")[0])
                                    : "".concat(e, "/").concat(m.replace(/^\//, "").split("?")[0])
                                : w
                                    ? "".concat(e, "/").concat(w)
                                    : e;
                    }, [p, w, m]),
                    S = (0, s.useMemo)(() => {
                        let e = r.X.domain_url.replace(/\/$/, ""),
                            i = m.replace(/^\//, "").split("?")[0];
                        return m
                            ? w
                                ? "".concat(e, "/").concat(w, "/").concat(i)
                                : "".concat(e, "/").concat(i)
                            : w
                                ? "".concat(e, "/").concat(w)
                                : e;
                    }, [w, m]);
                return (0, n.jsxs)(o(), {
                    children: [
                        k
                            ? (0, n.jsx)("script", {
                                type: "application/ld+json",
                                dangerouslySetInnerHTML: {
                                    __html: "".concat(JSON.stringify($)),
                                },
                            })
                            : null,
                        (0, n.jsx)("link", { rel: "canonical", href: P }),
                        (0, n.jsx)("title", { children: i || t || "Pickyourtrail" }),
                        (0, n.jsx)(
                            "meta",
                            { name: "description", content: a || "Pickyourtrail" },
                            "description"
                        ),
                        g
                            ? (0, n.jsx)("meta", { name: "keywords", content: g }, "keywords")
                            : null,
                        (0, n.jsx)("meta", { property: "og:url", content: S }),
                        (0, n.jsx)(
                            "meta",
                            {
                                name: "viewport",
                                content:
                                    "width=device-width, initial-scale=1.0, maximum-scale=5.0",
                            },
                            "viewport"
                        ),
                        (0, n.jsx)("meta", {
                            property: "og:title",
                            content: t || i || "Pickyourtrail",
                        }),
                        (0, n.jsx)("meta", {
                            property: "og:description",
                            content: a || "Pickyourtrail",
                        }),
                        c
                            ? (0, n.jsx)("meta", {
                                property: "og:image",
                                content: ""
                                    .concat(
                                        null === r.X || void 0 === r.X ? void 0 : r.X.imgix_base
                                    )
                                    .concat(c, "?w=1200&h=630"),
                            })
                            : null,
                        h
                            ? d({
                                pathname: m,
                                locale: j.locale,
                                supportedLocales: x,
                                uncostedItinerary: f,
                                canonicalURL: p,
                            })
                            : null,
                        (0, n.jsx)(
                            "meta",
                            {
                                name: "robots",
                                content: h ? v || "index, follow" : "noindex, follow",
                            },
                            "robots"
                        ),
                        (0, n.jsx)("meta", { property: "og:type", content: "website" }),
                        "/" === m
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(
                                        "meta",
                                        {
                                            name: "google-site-verification",
                                            content: "AjUKOjLvjAT8Px8y5vl6m35LJjOIJZ6VaBVs2t27TJ4",
                                        },
                                        "google-site-verification"
                                    ),
                                    (0, n.jsx)(
                                        "meta",
                                        {
                                            name: "facebook-domain-verification",
                                            content: "ahiteq3281aq7fjezv8rxwzsu781y1",
                                        },
                                        "facebook-domain-verification"
                                    ),
                                ],
                            })
                            : null,
                        y
                            ? (0, n.jsx)("script", {
                                defer: !0,
                                type: "application/ld+json",
                                dangerouslySetInnerHTML: {
                                    __html:
                                        '{\n            "@context": "https://schema.org",\n            "@type": "Organization",\n            "url": "https://pickyourtrail.com/",\n            "logo": "https://images.pickyourtrail.com/images/web_app/logo/pickyourtrail-logo.svg",\n            "sameAs": [\n              "https://www.facebook.com/pg/Pickyourtrail/reviews/",\n              "https://instagram.com/pickyourtrail",\n              "https://twitter.com/@pickyourtrail",\n              "https://in.linkedin.com/company/pickyourtrail"\n              ]\n          }\n      ',
                                },
                            })
                            : null,
                        b
                            ? (0, n.jsx)("script", {
                                type: "application/ld+json",
                                dangerouslySetInnerHTML: {
                                    __html: "".concat(JSON.stringify(b)),
                                },
                            })
                            : null,
                    ],
                });
            };
            var p = g;
        },
        26202: function (e, i, t) {
            "use strict";
            var n = t(85893),
                a = t(67294),
                o = t(76801),
                l = t(22416),
                s = t(75465);
            let r = (e) => {
                let {
                    data: i,
                    preview: t,
                    slug: r,
                    collectionName: c,
                    addWebPageSchema: d,
                    addOrganisationSchema: u,
                } = e,
                    {
                        title: g,
                        description: p,
                        ogImage: h,
                        keywords: m,
                        canonicalURL: v,
                        crawlable: x = !0,
                        metaRobots: k,
                    } = (0, a.useMemo)(() => {
                        let e = (0, o.Z)((0, l.Z)(i, "metaImage", null)),
                            n = (0, l.Z)(i, "crawlable");
                        return (
                            t ? (n = !1) : !1 !== n && (n = !0),
                            {
                                title: (0, l.Z)(i, "metaTitle", null),
                                description: (0, l.Z)(i, "metaDescription", null),
                                keywords: (0, l.Z)(i, "keywords", null),
                                canonicalURL: (0, l.Z)(i, "canonicalURL", null),
                                ogImage: null == e ? void 0 : e.url,
                                crawlable: n,
                                metaRobots: (0, l.Z)(i, "metaRobots", null),
                            }
                        );
                    }, [i, t]);
                if (!i) return null;
                let y = g.includes("Pickyourtrail") ? g : g.concat(" | Pickyourtrail");
                return (0, n.jsx)(s.default, {
                    title: y,
                    metaTitle: g,
                    description: p,
                    ogImage: h,
                    keywords: m,
                    canonicalURL: v,
                    crawlable: x,
                    slug: r,
                    metaRobots: k,
                    locales:
                        "" === r
                            ? ["in", "us", "ae"]
                            : c
                                ? ["how-to-reaches", "visa-guidelines"].includes(c)
                                    ? ["in"]
                                    : ["in", "us", "ae"]
                                : ["in"],
                    addWebPageSchema: d,
                    addOrganisationSchema: u,
                });
            };
            i.Z = r;
        },
        49382: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return x;
                },
            });
            var n = t(85893),
                a = t(87789),
                o = t(4327),
                l = t(86703),
                s = t(39396),
                r = t(70024),
                c = t(25675),
                d = t.n(c),
                u = t(11163),
                g = t(67294),
                p = t(44950),
                h = t(68991);
            let m = (0, a.zo)("a", { cursor: "pointer" }),
                v = (0, a.zo)("div", {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "black",
                    opacity: 0.7,
                    zIndex: "$overlay",
                });
            function x(e) {
                let { showFotaPopup: i, setShowFotaPopup: t } = e,
                    a = (0, r.Dv)(p.bW),
                    c = (0, u.useRouter)(),
                    x = c.asPath,
                    k = (0, g.useMemo)(
                        () =>
                            "/holiday-packages" === x
                                ? "packages_page"
                                : "organic-hp_sticky ",
                        [x]
                    );
                return (0, n.jsxs)(l.Vq.fC, {
                    open: i,
                    onOpenChange: (e) => t(e),
                    children: [
                        i && (0, n.jsx)(v, {}),
                        (0, n.jsx)(l.Vq.VY, {
                            onPointerDownOutside: (e) => e.preventDefault(),
                            overlayZindex: "$max",
                            css: {
                                width: "80%",
                                flexDirection: "column",
                                borderRadius: 30,
                                zIndex: "$max",
                                padding: 0,
                                pointerEvents: "auto !important",
                                overflow: "hidden",
                                "@lg": { width: "1008px" },
                                "& > button": { display: "none" },
                                "& > svg": {
                                    all: "unset",
                                    fill: "white !important",
                                    border: "unset",
                                    outline: "none !important",
                                },
                            },
                            children: (0, n.jsxs)(s.xu, {
                                css: { position: "relative" },
                                children: [
                                    (0, n.jsx)(o.Z, {
                                        onClick: () => {
                                            t(!1);
                                        },
                                        height: 16,
                                        width: 16,
                                        css: {
                                            cursor: "pointer",
                                            border: "unset",
                                            position: "absolute",
                                            fill: "white !important",
                                            right: 15,
                                            top: 15,
                                            "&:focus": { outline: "none", border: "none" },
                                        },
                                    }),
                                    (null == a ? void 0 : a.isMobile)
                                        ? (0, n.jsx)(m, {
                                            href: "https://app.pickyourtrail.com/".concat(k),
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: (0, n.jsx)(d(), {
                                                src: (0, h.Z)(
                                                    "https://oceanjar-new.s3.ap-south-1.amazonaws.com/mobile-frame.png"
                                                ),
                                                style: { width: "100%", height: "100%" },
                                                alt: "Cloud Background",
                                                width: 1008,
                                                height: 378,
                                            }),
                                        })
                                        : (0, n.jsx)(d(), {
                                            src: (0, h.Z)(
                                                "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/web-banner.png"
                                            ),
                                            style: { width: "100%", height: "100%" },
                                            alt: "Cloud Background",
                                            width: 1008,
                                            height: 378,
                                        }),
                                ],
                            }),
                        }),
                    ],
                });
            }
        },
        84701: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return g;
                },
            });
            var n = t(85893),
                a = t(87789),
                o = t(39396),
                l = t(25675),
                s = t.n(l),
                r = t(11163),
                c = t(67294),
                d = t(84082);
            let u = (0, a.zo)("a", {
                gap: "$3i",
                borderRadius: "6px",
                padding: "$5i",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                cursor: "pointer",
                "@lg": { display: "none" },
            });
            function g() {
                let [e, i] = (0, c.useState)(20);
                (0, c.useEffect)(() => {
                    let e = () => {
                        let e = document.querySelector("#address-element");
                        if (!e) return;
                        let t = e.getBoundingClientRect(),
                            n = window.innerHeight - t.top;
                        t.top <= window.innerHeight ? i(n + 10) : i(20);
                    };
                    return (
                        window.addEventListener("scroll", e),
                        () => window.removeEventListener("scroll", e)
                    );
                }, []);
                let t = (0, r.useRouter)(),
                    a = t.asPath,
                    l = (0, c.useMemo)(
                        () =>
                            "/holiday-packages" === a
                                ? "packages_page"
                                : "organic-hp_sticky ",
                        [a]
                    );
                return (0, n.jsxs)(o.X2, {
                    css: {
                        position: "fixed",
                        padding: "$4i $10i",
                        justifyContent: "space-between",
                        bottom: "0px",
                        width: "100%",
                        left: 0,
                        backgroundColor: "$green500",
                        transition: "all 0.2s ease",
                        zIndex: 1e3,
                        right: 0,
                        "@lg": {
                            width: "249px",
                            borderRadius: "$4",
                            height: "115px",
                            alignItems: "center",
                            gap: "$5i",
                            bottom: "".concat(e, "px"),
                            left: "unset",
                            right: 30,
                        },
                    },
                    children: [
                        (0, n.jsx)(o.xu, {
                            css: {
                                width: "50px",
                                position: "absolute",
                                top: 8,
                                right: 12,
                                display: "none",
                                "@lg": { display: "block" },
                            },
                            children: (0, n.jsx)(s(), {
                                src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/flight.png",
                                alt: "Cloud Background",
                                width: 50,
                                height: 24,
                            }),
                        }),
                        (0, n.jsx)(o.xu, {
                            css: {
                                backgroundColor: "#FFFF53",
                                padding: "$2i $4i",
                                borderRadius: "5px",
                                fontFamily: "$manrope",
                                fontSize: "$7i",
                                fontWeight: "$bolder",
                                position: "absolute",
                                top: "-16px",
                                left: 0,
                                display: "none",
                                "@lg": { display: "block" },
                            },
                            children: "Exclusive to you",
                        }),
                        (0, n.jsx)(o.xu, {
                            css: { display: "none", "@lg": { display: "block" } },
                            children: (0, n.jsx)(s(), {
                                src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/mobile-qr.png",
                                alt: "QR Code",
                                width: 66,
                                height: 66,
                            }),
                        }),
                        (0, n.jsxs)(o.sg, {
                            children: [
                                (0, n.jsx)(o.xv, {
                                    css: {
                                        color: "$white",
                                        fontSize: "13px",
                                        fontWeight: "$bolder",
                                        lineHeight: "normal",
                                        fontFamily: "$manrope",
                                        width: "154px",
                                        "@lg": { fontSize: "15px", width: "140px" },
                                    },
                                    children: "Scan to book flights and",
                                }),
                                (0, n.jsx)(o.xv, {
                                    css: {
                                        color: "$bcustom69",
                                        fontSize: "15px",
                                        fontWeight: "$bolder",
                                        lineHeight: "normal",
                                        fontFamily: "$manrope",
                                        "@lg": { fontSize: "13px" },
                                    },
                                    children: "Get â‚¹1000 in coins",
                                }),
                            ],
                        }),
                        (0, n.jsxs)(u, {
                            href: "https://app.pickyourtrail.com/".concat(l),
                            rel: "noreferrer",
                            target: "_blank",
                            children: [
                                (0, n.jsx)(d.Z, { width: 14, height: 14, fill: "#038C55" }),
                                (0, n.jsx)(o.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        fontSize: "$6i",
                                        fontWeight: "$bolder",
                                        color: "#038C55",
                                    },
                                    children: "Download App",
                                }),
                            ],
                        }),
                        (0, n.jsx)(o.X2, {
                            css: {
                                justifyContent: "end",
                                width: "100%",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                display: "none",
                                "@lg": { display: "flex" },
                            },
                            children: (0, n.jsx)(s(), {
                                src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/clouud-bg.png",
                                alt: "Cloud Background",
                                width: 97,
                                height: 88,
                            }),
                        }),
                    ],
                });
            }
        },
        42435: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return z;
                },
            });
            var n = t(85893),
                a = t(87789),
                o = t(11163),
                l = t.n(o),
                s = t(67294),
                r = t(24636),
                c = t(39396),
                d = t(70024),
                u = t(41664),
                g = t.n(u),
                p = t(44950),
                h = t(50389),
                m = t(39986);
            let v = (e) => {
                let { bannerTitle: i, searchPlaceHolder: t } = e,
                    o = (0, d.Dv)(p.s1),
                    u = (0, a.zo)(g(), {}),
                    v = (0, a.zo)(c.xu, {
                        width: "100%",
                        "@lg": { width: "400px", paddingTop: "$5i" },
                        ".home-search-button": {
                            border: "3px solid transparent",
                            borderRadius: "12px",
                            position: "relative",
                            backgroundClip: "padding-box",
                            boxShadow: "0px 4px 27px rgba(26, 33, 43, 0.1)",
                            "&:before": {
                                content: "",
                                position: "absolute",
                                inset: "-4px",
                                borderRadius: "20px",
                                padding: "3px",
                                background:
                                    "linear-gradient($colors$jcustom60, $colors$jcustom61)",
                            },
                            ".search-text-input": {
                                backgroundColor: "$white",
                                flex: 1,
                                zIndex: 1,
                                width: "100%",
                                height: "100%",
                                alignItems: "center",
                                padding: "0 18px",
                                borderRadius: "16px",
                            },
                        },
                    }),
                    x = () => {
                        let e = {
                            sectionTitle: (0, m.Z)("Banner section", " ", "-").toLowerCase(),
                            slug: "/customize",
                            title: "Customize",
                            elementType: "Banner",
                            pathname: l().asPath,
                        };
                        (0, h.L9W)(h.JeL, e, o || void 0);
                    },
                    k = (e) => {
                        var i, t, a, o, l;
                        let { item: s } = e;
                        return (0, n.jsxs)(c.xu, {
                            as: "span",
                            css: {
                                fontFamily: "".concat(
                                    (null == s ? void 0 : s.fontFamily) === "Amithen"
                                        ? "$amithen"
                                        : "$manrope"
                                ),
                                fontStyle: "normal",
                                fontWeight: "".concat(
                                    null !== (i = null == s ? void 0 : s.fontWeightMobile) &&
                                        void 0 !== i
                                        ? i
                                        : 700
                                ),
                                fontSize: "".concat(
                                    null !== (t = null == s ? void 0 : s.fontSizeMobile) &&
                                        void 0 !== t
                                        ? t
                                        : "$9i"
                                ),
                                lineHeight: "$13i",
                                whiteSpace:
                                    (null == s ? void 0 : s.fontFamily) === "Amithen"
                                        ? "nowrap"
                                        : "normal",
                                color: "".concat(
                                    (null == s ? void 0 : s.fontFamily) === "Amithen"
                                        ? "$primary13"
                                        : null !== (a = null == s ? void 0 : s.fontColor) &&
                                            void 0 !== a
                                            ? a
                                            : "$white"
                                ),
                                textAlign: "center",
                                "@lg": {
                                    lineHeight: "$24i",
                                    fontWeight: "".concat(
                                        null !== (o = null == s ? void 0 : s.fontWeight) &&
                                            void 0 !== o
                                            ? o
                                            : 700
                                    ),
                                    fontSize: "".concat(
                                        null !== (l = null == s ? void 0 : s.fontSize) &&
                                            void 0 !== l
                                            ? l
                                            : "$18i"
                                    ),
                                },
                            },
                            children: [null == s ? void 0 : s.title, "\xa0"],
                        });
                    };
                return (0, n.jsxs)(c.xu, {
                    css: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        "@smMax": { padding: "0 $14i 0 $14i" },
                    },
                    children: [
                        (0, n.jsx)(c.xu, {
                            as: "h1",
                            css: {
                                textAlign: "center",
                                paddingBottom: "$12i",
                                lineHeight: 1,
                                "@lg": { paddingBottom: "0", margin: "$8i" },
                            },
                            children:
                                null == i
                                    ? void 0
                                    : i.map((e, i) =>
                                        (0, n.jsx)(
                                            s.Fragment,
                                            { children: (0, n.jsx)(k, { item: e }) },
                                            i
                                        )
                                    ),
                        }),
                        t
                            ? (0, n.jsx)(v, {
                                children: (0, n.jsx)(u, {
                                    className: "home-search",
                                    href: "/customize",
                                    onClick: x,
                                    css: { textDecoration: "none", display: "flex" },
                                    children: (0, n.jsx)(c.X2, {
                                        align: "center",
                                        justify: "center",
                                        className: "home-search-button",
                                        css: {
                                            display: "flex",
                                            background: "$white",
                                            borderRadius: "12px",
                                            color: "$black2",
                                            textDecoration: "none",
                                            flex: 1,
                                            height: "56px",
                                        },
                                        children: (0, n.jsxs)(c.X2, {
                                            className: "search-text-input",
                                            css: { gap: "$5i" },
                                            children: [
                                                (0, n.jsx)(r.Z, { fill: "$black2", fontSize: 18 }),
                                                (0, n.jsx)(c.xv, {
                                                    css: {
                                                        fontWeight: "$bolder",
                                                        fontSize: "$7i",
                                                        lineHeight: "$11i",
                                                        textDecoration: "none",
                                                        color: "$black2",
                                                        fontFamily: "$manrope",
                                                        "@lg": {
                                                            fontWeight: "$bolder",
                                                            fontSize: "$8i",
                                                            lineHeight: "$12i",
                                                        },
                                                    },
                                                    children: t,
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            })
                            : null,
                    ],
                });
            };
            var x = t(97083),
                k = t(25675),
                y = t.n(k),
                f = t(68991);
            let b = (e) => {
                let { tustedData: i } = e,
                    t = (0, d.Dv)(p.bW),
                    a = (e) => {
                        let { width: i, height: t } = e;
                        return (0, n.jsx)(c.xu, {
                            css: {
                                display: "flex",
                                alignItems: "center",
                                "& svg": { fill: "$primary05" },
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: null != i ? i : 20,
                                height: null != t ? t : 20,
                                viewBox: "0 0 24 24",
                                children: (0, n.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M16.6179 8.21372C17.0521 8.55494 17.1276 9.18359 16.7864 9.61786L11.2864 16.6179C11.1216 16.8276 10.8798 16.9628 10.6148 16.9934C10.3499 17.0241 10.0836 16.9475 9.87534 16.7809L7.37534 14.7809C6.94408 14.4359 6.87416 13.8066 7.21917 13.3753C7.56418 12.9441 8.19347 12.8742 8.62473 13.2192L10.337 14.589L15.2137 8.38222C15.5549 7.94795 16.1836 7.87251 16.6179 8.21372ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z",
                                }),
                            }),
                        });
                    };
                return (0, n.jsx)(c.xu, {
                    css: { backgroundColor: "$black" },
                    children: (0, n.jsx)(c.X2, {
                        css: {
                            paddingTop: "$7i",
                            paddingBottom: "$7i",
                            justifyContent: "center",
                            gap: "74px",
                            paddingLeft: "$8i",
                            paddingRight: "$8i",
                            "@smMax": {
                                paddingTop: "9px",
                                paddingBottom: "9px",
                                justifyContent: "space-around",
                                gap: "24px",
                            },
                        },
                        children:
                            null == i
                                ? void 0
                                : i.map((e, i) => {
                                    var o, l, r, d, u, g;
                                    return (0, n.jsx)(
                                        s.Fragment,
                                        {
                                            children: (0, n.jsxs)(
                                                c.X2,
                                                {
                                                    css: {
                                                        alignItems: "center",
                                                        gap: "4px",
                                                        "@smMax": { display: "".concat(i > 1 && "none") },
                                                    },
                                                    children: [
                                                        (0, n.jsx)(c.xu, {
                                                            children:
                                                                (null == e
                                                                    ? void 0
                                                                    : null === (o = e.image) || void 0 === o
                                                                        ? void 0
                                                                        : null === (l = o.data) || void 0 === l
                                                                            ? void 0
                                                                            : null === (r = l.attributes) ||
                                                                                void 0 === r
                                                                                ? void 0
                                                                                : r.url) &&
                                                                (0, n.jsx)(y(), {
                                                                    src: (0, f.Z)(
                                                                        (null == e
                                                                            ? void 0
                                                                            : null === (d = e.image) || void 0 === d
                                                                                ? void 0
                                                                                : null === (u = d.data) || void 0 === u
                                                                                    ? void 0
                                                                                    : null === (g = u.attributes) ||
                                                                                        void 0 === g
                                                                                        ? void 0
                                                                                        : g.url) || ""
                                                                    ),
                                                                    alt: "trust-media",
                                                                    height: (null == t ? void 0 : t.isMobile)
                                                                        ? 16
                                                                        : 24,
                                                                    width: (null == t ? void 0 : t.isMobile)
                                                                        ? 26
                                                                        : 39,
                                                                }),
                                                        }),
                                                        (0, n.jsx)(c.xv, {
                                                            css: {
                                                                color: "$white",
                                                                fontFamily: "$manrope",
                                                                fontStyle: "normal",
                                                                fontWeight: 700,
                                                                fontSize: "$7i",
                                                                lineHeight: "$9i",
                                                                "@lg": { fontSize: "$8i", lineHeight: "$9i" },
                                                            },
                                                            children: null == e ? void 0 : e.subTitle,
                                                        }),
                                                        (null == e ? void 0 : e.icon) === "Star" &&
                                                        (0, n.jsx)(x.Z, {
                                                            css: {
                                                                width: "$8i",
                                                                height: "$8i",
                                                                fill: "$primary05",
                                                                "@lg": { width: "$10i", height: "$10i" },
                                                            },
                                                        }),
                                                        (null == e ? void 0 : e.icon) === "Percentage" &&
                                                        (0, n.jsxs)(s.Fragment, {
                                                            children: [
                                                                (0, n.jsx)(c.xu, {
                                                                    css: {
                                                                        display: "flex",
                                                                        "@lg": { display: "none" },
                                                                    },
                                                                    children: (0, n.jsx)(a, {
                                                                        width: 16,
                                                                        height: 16,
                                                                    }),
                                                                }),
                                                                (0, n.jsx)(c.xu, {
                                                                    css: {
                                                                        display: "flex",
                                                                        "@smMax": { display: "none" },
                                                                    },
                                                                    children: (0, n.jsx)(a, {}),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, n.jsx)(c.xv, {
                                                            css: {
                                                                color: "$white",
                                                                fontFamily: "$manrope",
                                                                fontStyle: "normal",
                                                                fontWeight: 700,
                                                                fontSize: "$7i",
                                                                lineHeight: "$9i",
                                                                "@lg": { fontSize: "$8i", lineHeight: "$9i" },
                                                            },
                                                            children: null == e ? void 0 : e.tiltle,
                                                        }),
                                                    ],
                                                },
                                                i
                                            ),
                                        },
                                        "title-".concat(i)
                                    );
                                }),
                    }),
                });
            };
            var j = t(53041),
                w = t(76801),
                $ = t(64910),
                P = t(39131);
            let S = (e) => {
                let {
                    children: i,
                    bannerMedia: t,
                    fallbackImage: a,
                    mobBannerImage: o,
                    videoLink: l,
                    videoDesktopLink: r,
                    isVideo: u,
                } = e,
                    g = (0, d.Dv)(p.bW),
                    h = (0, s.useMemo)(() => (0, w.Z)(t), [t]),
                    m = (0, s.useMemo)(() => (0, w.Z)(o), [o]),
                    v = (0, s.useMemo)(() => (0, w.Z)(a), [a]);
                return (0, n.jsxs)(c.sg, {
                    css: {
                        position: "relative",
                        height: "368px",
                        width: "100%",
                        overflow: "hidden",
                        "@lg": { height: "480px", width: "".concat(u && "100%") },
                    },
                    children: [
                        u
                            ? (0, n.jsx)($.Z, {
                                bannerMedia:
                                    (null == g ? void 0 : g.isMobile) || !r ? l : r,
                                fallbackImage: { url: v.url, alt: v.alt },
                            })
                            : (0, n.jsx)(P.Z, {
                                src:
                                    (null == g ? void 0 : g.isMobile) &&
                                        (null == m ? void 0 : m.url.length) > 0
                                        ? m.url
                                        : h.url,
                                alt: h.alt || "banner-image-mob",
                                priority: !0,
                                fill: !0,
                                style: { objectFit: "cover" },
                            }),
                        i,
                    ],
                });
            },
                C = (e) => {
                    var i, t, l, r;
                    let { data: c } = e,
                        d = (0, o.useRouter)(),
                        u = (0, s.useMemo)(() => {
                            var e;
                            return "".concat(
                                null == d
                                    ? void 0
                                    : null === (e = d.query) || void 0 === e
                                        ? void 0
                                        : e.preview
                            );
                        }, [null == d ? void 0 : d.query]),
                        g = (0, s.useMemo)(() => {
                            var e, i, t, n;
                            return (
                                ((null ===
                                    (e =
                                        (null == c
                                            ? void 0
                                            : null === (i = c.bannerMedia) || void 0 === i
                                                ? void 0
                                                : i.videoLink) || "") || void 0 === e
                                    ? void 0
                                    : e.length) > 0 ||
                                    (null ===
                                        (t =
                                            (null == c
                                                ? void 0
                                                : null === (n = c.bannerMedia) || void 0 === n
                                                    ? void 0
                                                    : n.videoDesktopLink) || "") || void 0 === t
                                        ? void 0
                                        : t.length) > 0) &&
                                ((null == c ? void 0 : c.enableVideoBanner) || "true" === u)
                            );
                        }, [
                            null == c
                                ? void 0
                                : null === (i = c.bannerMedia) || void 0 === i
                                    ? void 0
                                    : i.videoDesktopLink,
                            null == c
                                ? void 0
                                : null === (t = c.bannerMedia) || void 0 === t
                                    ? void 0
                                    : t.videoLink,
                            null == c ? void 0 : c.enableVideoBanner,
                            u,
                        ]),
                        p = (0, a.zo)("div", {
                            height: "inherit",
                            alignItems: "center",
                            display: "flex",
                            position: "".concat(g ? "absolute" : null),
                            top: "".concat(g ? "$9i" : null),
                            width: "".concat(g ? "100%" : null),
                            zIndex: 2,
                        });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(S, {
                                fallbackImage: null == c ? void 0 : c.fallbackImage,
                                bannerMedia: null == c ? void 0 : c.bannerMedia.bannerImage,
                                mobBannerImage:
                                    null == c
                                        ? void 0
                                        : null === (l = c.bannerMedia) || void 0 === l
                                            ? void 0
                                            : l.mobBannerImage,
                                videoLink: null == c ? void 0 : c.bannerMedia.videoLink,
                                videoDesktopLink:
                                    null == c ? void 0 : c.bannerMedia.videoDesktopLink,
                                isVideo: g,
                                children: (0, n.jsx)(p, {
                                    id: "banner-content",
                                    children: (0, n.jsx)(j.Z, {
                                        children: (0, n.jsx)(v, {
                                            bannerTitle: null == c ? void 0 : c.title,
                                            searchPlaceHolder:
                                                null == c ? void 0 : c.searchBarPlaceholderText,
                                        }),
                                    }),
                                }),
                            }),
                            ((null == c
                                ? void 0
                                : null === (r = c.bannerTrustElement) || void 0 === r
                                    ? void 0
                                    : r.length) || 0) > 0
                                ? (0, n.jsx)(b, {
                                    tustedData: null == c ? void 0 : c.bannerTrustElement,
                                })
                                : null,
                        ],
                    });
                };
            var z = C;
        },
        39131: function (e, i, t) {
            "use strict";
            var n = t(85893),
                a = t(87789),
                o = t(39396),
                l = t(25675),
                s = t.n(l),
                r = t(67294),
                c = t(68991);
            let d = (e) => {
                let {
                    src: i,
                    fallback:
                    t = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: l = "",
                    width: d,
                    height: u,
                    children: g,
                    isBg: p = !1,
                    wrapperRef: h,
                    fill: m = !1,
                    ...v
                } = e,
                    [x, k] = (0, r.useState)(0),
                    [y, f] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    if (null == h ? void 0 : h.current) {
                        var e, i;
                        k(
                            null == h
                                ? void 0
                                : null === (e = h.current) || void 0 === e
                                    ? void 0
                                    : e.offsetWidth
                        ),
                            f(
                                null == h
                                    ? void 0
                                    : null === (i = h.current) || void 0 === i
                                        ? void 0
                                        : i.offsetHeight
                            );
                    }
                }, [h]);
                let b = (0, r.useMemo)(
                    () => (d ? Math.ceil(Number(d) / 3) : Math.ceil(Number(x) / 3)),
                    [d, x]
                ),
                    j = (0, r.useMemo)(
                        () => (u ? Math.ceil(Number(u) / 3) : Math.ceil(Number(y) / 3)),
                        [u, y]
                    ),
                    w = (0, r.useMemo)(() => "w=".concat(b, "&h=").concat(j), [j, b]),
                    $ = (0, r.useMemo)(() => {
                        let e = i.includes("?") ? "&" : "?";
                        return "".concat(i).concat(e).concat(w, "&blur=2");
                    }, [w, i]),
                    [P, S] = (0, r.useState)(!1),
                    [C, z] = (0, r.useState)(!1),
                    T = (0, r.useMemo)(() => {
                        let e = {};
                        return (
                            d && (e = { ...e, width: d }),
                            u && (e = { ...e, height: u }),
                            m && (e = { ...e, fill: !0 }),
                            e
                        );
                    }, [m, u, d]),
                    D = (0, r.useMemo)(
                        () => (null == i ? void 0 : i.includes("time=1")),
                        [i]
                    ),
                    M = (0, a.zo)(s(), { filter: D ? "blur(10px)" : "unset" });
                return (null == i ? void 0 : i.length) && !P
                    ? d || u || m || (x > 0 && y > 0)
                        ? C
                            ? p
                                ? (0, n.jsxs)(o.xu, {
                                    style: {
                                        position: "relative",
                                        width: null != d ? d : x,
                                        height: null != u ? u : y,
                                    },
                                    children: [
                                        (0, n.jsx)(M, {
                                            alt: l,
                                            src: (0, c.Z)(
                                                ""
                                                    .concat(i, "?w=")
                                                    .concat(null != d ? d : x, "&h=")
                                                    .concat(null != u ? u : y, "&format=auto"),
                                                ""
                                            ),
                                            onError: () => S(!0),
                                            style: {
                                                opacity: C ? 1 : 0,
                                                transition:
                                                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                                position: "relative",
                                            },
                                            ...v,
                                            placeholder: "blur",
                                            blurDataURL: (0, c.Z)($, "", 10, "1"),
                                            ...T,
                                            onLoadingComplete: () => {
                                                z(!0);
                                            },
                                        }),
                                        (0, n.jsx)(o.xu, {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 1,
                                            },
                                            children: g,
                                        }),
                                    ],
                                })
                                : (0, n.jsx)(s(), {
                                    alt: l,
                                    src: (0, c.Z)(
                                        ""
                                            .concat(i, "?w=")
                                            .concat(null != d ? d : x, "&h=")
                                            .concat(null != u ? u : y, "&format=auto"),
                                        ""
                                    ),
                                    onError: () => S(!0),
                                    style: {
                                        opacity: C ? 1 : 0,
                                        transition:
                                            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                    },
                                    placeholder: "blur",
                                    blurDataURL: (0, c.Z)($, "", 10, "1"),
                                    ...T,
                                    onLoadingComplete: () => {
                                        z(!0);
                                    },
                                    ...v,
                                })
                            : p
                                ? (0, n.jsxs)(o.xu, {
                                    style: {
                                        position: "relative",
                                        width: null != d ? d : x,
                                        height: null != u ? u : y,
                                    },
                                    children: [
                                        (0, n.jsx)(M, {
                                            alt: l,
                                            src: (0, c.Z)($, "", 10, "1"),
                                            onError: () => S(!0),
                                            style: {
                                                opacity: C ? 1 : 0,
                                                transition:
                                                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                                position: "relative",
                                            },
                                            ...v,
                                            placeholder: "blur",
                                            blurDataURL: (0, c.Z)($, "", 10, "1"),
                                            ...T,
                                            onLoadingComplete: () => {
                                                z(!0);
                                            },
                                        }),
                                        (0, n.jsx)(o.xu, {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                zIndex: 1,
                                            },
                                            children: g,
                                        }),
                                    ],
                                })
                                : (0, n.jsx)(s(), {
                                    alt: l,
                                    src: (0, c.Z)($, "", 10, "1"),
                                    onError: () => S(!0),
                                    style: {
                                        opacity: C ? 0 : 1,
                                        transition:
                                            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                                    },
                                    placeholder: "blur",
                                    blurDataURL: (0, c.Z)($, "", 10, "1"),
                                    ...T,
                                    onLoadingComplete: () => {
                                        z(!0);
                                    },
                                    ...v,
                                })
                        : null
                    : p
                        ? (0, n.jsx)(s(), {
                            alt: "",
                            src: (0, c.Z)(t, "", 10, "1"),
                            ...T,
                            ...v,
                            children: g,
                        })
                        : (0, n.jsx)(s(), {
                            alt: "",
                            src: (0, c.Z)(t, "", 10, "1"),
                            ...T,
                            ...v,
                        });
            };
            i.Z = r.memo(d);
        },
        84082: function (e, i, t) {
            "use strict";
            var n = t(85893),
                a = t(87789);
            t(67294);
            let o = (0, a.zo)(function (e) {
                return (0,
                    n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e, children: (0, n.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C12.5523 2 13 2.44772 13 3V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L11 12.5858V3C11 2.44772 11.4477 2 12 2ZM3 13.0769C3.55228 13.0769 4 13.5246 4 14.0769V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14.0769C20 13.5246 20.4477 13.0769 21 13.0769C21.5523 13.0769 22 13.5246 22 14.0769V18C22 20.2091 20.2092 22 18 22H6C3.79086 22 2 20.2091 2 18V14.0769C2 13.5246 2.44772 13.0769 3 13.0769Z", fill: e.fill || "black" }) });
            }, {});
            i.Z = o;
        },
        88343: function (e, i, t) {
            "use strict";
            t.r(i),
                t.d(i, {
                    __N_SSP: function () {
                        return I;
                    },
                    default: function () {
                        return F;
                    },
                });
            var n = t(85893),
                a = t(39396),
                o = t(70024),
                l = t(99079),
                s = t(11163),
                r = t(67294);
            let c = () => {
                let e = (0, s.useRouter)(),
                    i = e.asPath,
                    [t, o] = (0, r.useState)(!1),
                    l = () => {
                        o(!0);
                    },
                    c = (0, r.useMemo)(
                        () =>
                            "/holiday-packages" === i
                                ? "packages_page"
                                : "organic-hp_sticky ",
                        [i]
                    );
                return t
                    ? null
                    : (0, n.jsxs)(a.X2, {
                        css: {
                            height: "$32i",
                            display: "flex",
                            backgroundColor: "#6702DF",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            padding: "0 $6i",
                            position: "fixed",
                            bottom: 0,
                            "@lg": { display: "none" },
                        },
                        children: [
                            (0, n.jsx)(a.xu, {
                                css: { display: "flex", alignItems: "center" },
                                children: (0, n.jsxs)(a.xv, {
                                    as: "p",
                                    css: {
                                        fontSize: "$6i",
                                        lineHeight: "$8i",
                                        fontWeight: 600,
                                        color: "$white",
                                    },
                                    children: [
                                        "Download our app to get amazing travel deals",
                                        (0, n.jsx)(a.xv, {
                                            onClick: () => l(),
                                            as: "span",
                                            css: {
                                                color: "rgba(255, 255, 255, 0.7)",
                                                textDecoration: "underline",
                                                fontSize: "$6i",
                                                lineHeight: "$8i",
                                                fontWeight: 700,
                                            },
                                            children: "CLOSE",
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(a.xu, {
                                children: (0, n.jsx)("a", {
                                    href: "https://app.pickyourtrail.com/".concat(c),
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: (0, n.jsx)(a.zx, {
                                        primary: !0,
                                        css: {
                                            fontSize: "$6i",
                                            minWidth: "102px",
                                            minHeight: "34px",
                                        },
                                        children: "Download App",
                                    }),
                                }),
                            }),
                        ],
                    });
            };
            var d = t(64658),
                u = t(83983),
                g = t(53041),
                p = t(26202),
                h = t(87789),
                m = t(24636),
                v = t(41664),
                x = t.n(v),
                k = t(44950),
                y = t(50389);
            let f = (e) => {
                let { bannerTitle: i, searchPlaceHolder: t } = e,
                    l = (0, o.Dv)(k.s1),
                    s = (0, o.Dv)(k.Iv),
                    c = (0, h.zo)(x(), {}),
                    d = (0, h.zo)(a.xu, {
                        width: "100%",
                        maxHeight: "46px",
                        display: "flex",
                        justifyContent: "center",
                        "@lg": { width: "470px" },
                        ".home-search-button": {
                            border: "3px solid transparent",
                            borderRadius: "12px",
                            position: "relative",
                            backgroundClip: "padding-box",
                            boxShadow: "0px 4px 27px rgba(26, 33, 43, 0.1)",
                            "&:before": {
                                content: "",
                                position: "absolute",
                                inset: "-3px",
                                borderRadius: "14px",
                                padding: "3px",
                                background:
                                    "linear-gradient($colors$jcustom60, $colors$jcustom61)",
                            },
                            ".search-text-input": {
                                backgroundColor: "$white",
                                flex: 1,
                                zIndex: 1,
                                width: "100%",
                                height: "100%",
                                alignItems: "center",
                                padding: "0 18px",
                                borderRadius: "11px",
                            },
                        },
                    }),
                    u = (e) => {
                        var i, t;
                        let { item: o } = e;
                        return (0, n.jsxs)(a.xu, {
                            as: "span",
                            css: {
                                color: "".concat(
                                    (null == o ? void 0 : o.fontFamily) === "Amithen"
                                        ? "$primary13"
                                        : null !== (i = null == o ? void 0 : o.fontColor) &&
                                            void 0 !== i
                                            ? i
                                            : "$white"
                                ),
                                fontFamily: "".concat(
                                    (null == o ? void 0 : o.fontFamily) === "Amithen"
                                        ? "$amithen"
                                        : "$manrope"
                                ),
                                fontStyle: "normal",
                                fontWeight: "".concat(
                                    null !== (t = null == o ? void 0 : o.fontWeightMobile) &&
                                        void 0 !== t
                                        ? t
                                        : "$bold"
                                ),
                                fontSize: "".concat(
                                    (null == o ? void 0 : o.fontFamily) === "Amithen"
                                        ? "$14i"
                                        : "$10i"
                                ),
                            },
                            children: [null == o ? void 0 : o.title, "\xa0"],
                        });
                    },
                    g = () => {
                        (0, y.L9W)(
                            y.nVI,
                            {
                                sectionTitle: "floating-search-bar",
                                slug: "/customize",
                                elementType: "floaring-search-bar",
                                pathname: "/",
                            },
                            l || void 0
                        );
                    };
                return (0, n.jsxs)(a.X2, {
                    justify: "center",
                    css: {
                        backgroundColor: "$scustom0",
                        width: "100%",
                        position: "fixed",
                        top: 0,
                        zIndex: 0,
                        display: "".concat(s ? "flex" : "none"),
                        "@lg": {
                            backgroundColor: "none",
                            background:
                                "url('https://oceanjar-new.s3.ap-south-1.amazonaws.com/headerbg.png')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            padding: "$8i $32i $8i $32i",
                            paddingRight: "300px",
                            alignItems: "center",
                            top: 0,
                        },
                    },
                    children: [
                        (0, n.jsxs)(a.X2, {
                            css: {
                                "@smMax": { width: "100%" },
                                "@lg": { display: "flex", alignItems: "center" },
                            },
                            children: [
                                (0, n.jsx)(a.xu, {
                                    css: { "@smMax": { display: "none" } },
                                    children: (0, n.jsx)(a.xu, {
                                        as: "p",
                                        css: {
                                            textAlign: "center",
                                            paddingBottom: "$12i",
                                            lineHeight: 1,
                                            "@lg": {
                                                paddingBottom: "0",
                                                margin: "0 $8i 0 $8i",
                                                alignItems: "center",
                                                display: "flex",
                                            },
                                        },
                                        children:
                                            null == i
                                                ? void 0
                                                : i.map((e, i) =>
                                                    (0, n.jsx)(
                                                        r.Fragment,
                                                        { children: (0, n.jsx)(u, { item: e }) },
                                                        i
                                                    )
                                                ),
                                    }),
                                }),
                                (0, n.jsx)(a.xu, {
                                    css: {
                                        "@smMax": { width: "100%", padding: "$7i $11i $7i $11i" },
                                        "@lg": { padding: 0, maxHeight: "48px" },
                                    },
                                    children: (0, n.jsx)(d, {
                                        children: (0, n.jsx)(c, {
                                            href: "/customize",
                                            onClick: g,
                                            css: {
                                                textDecoration: "none",
                                                display: "flex",
                                                width: "100%",
                                                maxHeight: "46px",
                                                "@lg": {
                                                    maxHeight: "48px",
                                                    maxWidth: "470px",
                                                    width: "470px",
                                                    height: "48px",
                                                },
                                            },
                                            children: (0, n.jsx)(a.X2, {
                                                align: "center",
                                                justify: "center",
                                                className: "home-search-button",
                                                css: {
                                                    display: "flex",
                                                    background: "$white",
                                                    borderRadius: "12px",
                                                    color: "$black2",
                                                    textDecoration: "none",
                                                    flex: 1,
                                                    height: "46px",
                                                    width: "100%",
                                                    maxHeight: "46px",
                                                    "@lg": { maxHeight: "48px", maxWidth: "470px" },
                                                },
                                                children: (0, n.jsxs)(a.X2, {
                                                    className: "search-text-input",
                                                    css: { gap: "$5i" },
                                                    children: [
                                                        (0, n.jsx)(m.Z, { fill: "$black2", fontSize: 18 }),
                                                        (0, n.jsx)(a.xv, {
                                                            css: {
                                                                fontWeight: "$bolder",
                                                                fontSize: "$7i",
                                                                lineHeight: "$11i",
                                                                textDecoration: "none",
                                                                color: "$black2",
                                                                fontFamily: "$manrope",
                                                                "@lg": {
                                                                    fontWeight: "$bold",
                                                                    fontSize: "$8i",
                                                                    lineHeight: "$12i",
                                                                },
                                                            },
                                                            children: t,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(a.xu, { css: {} }),
                    ],
                });
            };
            var b = t(42435),
                j = t(49382),
                w = t(84701);
            let $ = [
                {
                    title: "Maldives Packages",
                    link: "/packages/maldives",
                    category: "Packages",
                },
                {
                    title: "Bali Packages",
                    link: "/packages/bali",
                    category: "Packages",
                },
                {
                    title: "Thailand Packages",
                    link: "/packages/thailand",
                    category: "Packages",
                },
                {
                    title: "Dubai Packages",
                    link: "/packages/dubai",
                    category: "Packages",
                },
                {
                    title: "Singapore Packages",
                    link: "/packages/singapore",
                    category: "Packages",
                },
                {
                    title: "Australia Packages",
                    link: "/packages/australia",
                    category: "Packages",
                },
                {
                    title: "Vietnam Packages",
                    link: "/packages/vietnam",
                    category: "Packages",
                },
                {
                    title: "Sri Lanka Packages",
                    link: "/packages/sri-lanka",
                    category: "Packages",
                },
                {
                    title: "Europe Packages",
                    link: "/packages/europe",
                    category: "Packages",
                },
                {
                    title: "Malaysia Packages",
                    link: "/packages/malaysia",
                    category: "Packages",
                },
                {
                    title: "Japan Packages",
                    link: "/packages/japan",
                    category: "Packages",
                },
                {
                    title: "Mauritius Packages",
                    link: "/packages/mauritius",
                    category: "Packages",
                },
                {
                    title: "Greece Packages",
                    link: "/packages/greece",
                    category: "Packages",
                },
                {
                    title: "Turkey Packages",
                    link: "/packages/turkey",
                    category: "Packages",
                },
                {
                    title: "Italy Packages",
                    link: "/packages/italy",
                    category: "Packages",
                },
                {
                    title: "France Packages",
                    link: "/packages/france",
                    category: "Packages",
                },
                {
                    title: "Switzerland Packages",
                    link: "/packages/switzerland",
                    category: "Packages",
                },
                {
                    title: "Spain Packages",
                    link: "/packages/spain",
                    category: "Packages",
                },
                {
                    title: "Portugal Packages",
                    link: "/packages/portugal",
                    category: "Packages",
                },
                {
                    title: "United Kingdom Packages",
                    link: "/packages/united-kingdom",
                    category: "Packages",
                },
                {
                    title: "Iceland Packages",
                    link: "/packages/iceland",
                    category: "Packages",
                },
                {
                    title: "Netherlands Packages",
                    link: "/packages/netherlands",
                    category: "Packages",
                },
                {
                    title: "Germany Packages",
                    link: "/packages/germany",
                    category: "Packages",
                },
                {
                    title: "Croatia Packages",
                    link: "/packages/croatia",
                    category: "Packages",
                },
                {
                    title: "Czech Republic Packages",
                    link: "/packages/czech-republic",
                    category: "Packages",
                },
                {
                    title: "Austria Packages",
                    link: "/packages/austria",
                    category: "Packages",
                },
                {
                    title: "Belgium Packages",
                    link: "/packages/belgium",
                    category: "Packages",
                },
                {
                    title: "South Africa Packages",
                    link: "/packages/south-africa",
                    category: "Packages",
                },
                {
                    title: "Australia Tourism",
                    link: "/tourism/australia",
                    category: "Destinations",
                },
                {
                    title: "Austria Tourism",
                    link: "/tourism/austria",
                    category: "Destinations",
                },
                {
                    title: "Belgium Tourism",
                    link: "tourism/belgium",
                    category: "Destinations",
                },
                {
                    title: "Cambodia Tourism",
                    link: "/tourism/cambodia",
                    category: "Destinations",
                },
                {
                    title: "Croatia Tourism",
                    link: "/tourism/croatia",
                    category: "Destinations",
                },
                {
                    title: "Vietnam Tourism",
                    link: "/tourism/vietnam",
                    category: "Destinations",
                },
                {
                    title: "Netherlands Tourism",
                    link: "/tourism/netherlands",
                    category: "Destinations",
                },
                {
                    title: "Czech Republic Tourism",
                    link: "/tourism/czech-republic",
                    category: "Destinations",
                },
                {
                    title: "France Tourism",
                    link: "/tourism/france",
                    category: "Destinations",
                },
                {
                    title: "Germany Tourism",
                    link: "/tourism/germany",
                    category: "Destinations",
                },
                {
                    title: "Greece Tourism",
                    link: "/tourism/greece",
                    category: "Destinations",
                },
                {
                    title: "Hungary Tourism",
                    link: "/tourism/hungary",
                    category: "Destinations",
                },
                {
                    title: "Iceland Tourism",
                    link: "/tourism/iceland",
                    category: "Destinations",
                },
                {
                    title: "Japan Tourism",
                    link: "/tourism/japan",
                    category: "Destinations",
                },
                {
                    title: "Philippines Tourism",
                    link: "/tourism/philippines",
                    category: "Destinations",
                },
                {
                    title: "Portugal Tourism",
                    link: "/tourism/portugal",
                    category: "Destinations",
                },
                {
                    title: "Slovenia Tourism",
                    link: "/tourism/slovenia",
                    category: "Destinations",
                },
                {
                    title: "Spain Tourism",
                    link: "/tourism/spain",
                    category: "Destinations",
                },
                {
                    title: "Sweden Tourism",
                    link: "/tourism/sweden",
                    category: "Destinations",
                },
                {
                    title: "Italy Tourism",
                    link: "/tourism/italy",
                    category: "Destinations",
                },
                {
                    title: "Seychelles Tourism",
                    link: "/tourism/seychelles",
                    category: "Destinations",
                },
                {
                    title: "Laos Tourism",
                    link: "/tourism/laos",
                    category: "Destinations",
                },
                {
                    title: "Malaysia Tourism",
                    link: "/tourism/malaysia",
                    category: "Destinations",
                },
                {
                    title: "Maldives Tourism",
                    link: "/tourism/maldives",
                    category: "Destinations",
                },
                {
                    title: "Mauritius Tourism",
                    link: "/tourism/mauritius",
                    category: "Destinations",
                },
                {
                    title: "New Zealand Tourism",
                    link: "/tourism/new-zealand",
                    category: "Destinations",
                },
                {
                    title: "Saudi Arabia Tourism",
                    link: "/tourism/saudi-arabia",
                    category: "Destinations",
                },
                {
                    title: "United Kingdom Tourism",
                    link: "/tourism/united-kingdom",
                    category: "Destinations",
                },
                {
                    title: "Singapore Tourism",
                    link: "/tourism/singapore",
                    category: "Destinations",
                },
                {
                    title: "South Africa Tourism",
                    link: "/tourism/south-africa",
                    category: "Destinations",
                },
                {
                    title: "Sri Lanka Tourism",
                    link: "/tourism/sri-lanka",
                    category: "Destinations",
                },
                {
                    title: "Switzerland Tourism",
                    link: "/tourism/switzerland",
                    category: "Destinations",
                },
                {
                    title: "Thailand Tourism",
                    link: "/tourism/thailand",
                    category: "Destinations",
                },
                {
                    title: "Turkey Tourism",
                    link: "/tourism/turkey",
                    category: "Destinations",
                },
                {
                    title: "Places to Visit in Bali",
                    link: "/tourism/bali/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Thailand",
                    link: "/tourism/thailand/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Maldives",
                    link: "/tourism/maldives/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Dubai",
                    link: "/tourism/dubai/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Singapore",
                    link: "/tourism/singapore/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Sri Lanka",
                    link: "/tourism/sri-lanka/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in South Africa",
                    link: "/tourism/south-africa/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Places to Visit in Vietnam",
                    link: "/tourism/vietnam/places-to-visit",
                    category: "Places to visit",
                },
                {
                    title: "Things to do in Bali",
                    link: "/tourism/bali/things-to-do",
                    category: "Things to do",
                },
                {
                    title: "Things to do in Thailand",
                    link: "/tourism/thailand/things-to-do",
                    category: "Things to do",
                },
                {
                    title: "Things to do in Dubai",
                    link: "/tourism/dubai/things-to-do-in-dubai",
                    category: "Things to do",
                },
                {
                    title: "Indonesia Visa",
                    link: "/visa/indonesia-visa",
                    category: "Visa",
                },
                {
                    title: "Hong Kong Visa",
                    link: "/visa/hong-kong-visa",
                    category: "Visa",
                },
                { title: "Ireland Visa", link: "/visa/ireland-visa", category: "Visa" },
                {
                    title: "Malaysia Visa",
                    link: "/visa/malaysia-visa",
                    category: "Visa",
                },
                {
                    title: "Philippines Visa",
                    link: "/visa/philippines-visa",
                    category: "Visa",
                },
                {
                    title: "Uzbekistan Visa",
                    link: "/visa/uzbekistan-visa",
                    category: "Visa",
                },
                { title: "Canada Visa", link: "/visa/canada-visa", category: "Visa" },
                {
                    title: "Saudi Arabia Visa",
                    link: "/visa/saudi-arabia-visa",
                    category: "Visa",
                },
                { title: "Russia Visa", link: "/visa/russia-visa", category: "Visa" },
                { title: "Turkey Visa", link: "/visa/turkey-visa", category: "Visa" },
                {
                    title: "Switzerland Visa",
                    link: "/visa/switzerland-visa",
                    category: "Visa",
                },
                {
                    title: "Czech Republic Visa",
                    link: "/visa/czech-republic-visa",
                    category: "Visa",
                },
                { title: "Japan Visa", link: "/visa/japan-visa", category: "Visa" },
                {
                    title: "Australia Visa",
                    link: "/visa/australia-visa",
                    category: "Visa",
                },
                { title: "Austria Visa", link: "/visa/austria-visa", category: "Visa" },
                {
                    title: "South Korea Visa",
                    link: "/visa/south-korea-visa",
                    category: "Visa",
                },
            ];
            var P = t(78449),
                S = t(6236),
                C = t(35946);
            let z = [
                "Packages",
                "Destinations",
                "Things to do",
                "Places to visit",
                "Visa",
            ],
                T = () => {
                    let [e, i] = (0, r.useState)("Packages"),
                        t = (0, r.useCallback)(
                            (e) => (0, S.u)($.filter((i) => i.category === e)),
                            []
                        ),
                        o = t(e),
                        [l, s] = (0, r.useState)(o),
                        c = (0, r.useCallback)(
                            (e) => {
                                i(e), s(t(e));
                            },
                            [t]
                        );
                    return (0, n.jsxs)(a.sg, {
                        css: { width: "100%", gap: "$12i" },
                        children: [
                            (0, n.jsx)(a.xu, {
                                css: { width: "100%", gap: "$8i" },
                                children: (0, n.jsx)(a.xv, {
                                    css: {
                                        fontFamily: "$manrope",
                                        color: "$grey900",
                                        fontSize: "$10i",
                                        fontWeight: 800,
                                        fontStyle: "normal",
                                    },
                                    children: "EXPLORE ALL PACKAGES",
                                }),
                            }),
                            (0, n.jsx)(a.X2, {
                                css: {
                                    width: "100%",
                                    gap: "$8i",
                                    overflowX: "scroll",
                                    scrollbarWidth: "none",
                                },
                                children: z.map((i, t) =>
                                    (0, n.jsx)(
                                        D,
                                        {
                                            content: i,
                                            handleActive: c,
                                            containerStyles: {
                                                backgroundColor: i === e ? "Black" : "#FDFAF6",
                                                color: i === e ? "white" : "Black",
                                            },
                                        },
                                        t
                                    )
                                ),
                            }),
                            (0, n.jsx)(a.X2, {
                                css: {
                                    width: "100%",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: "$8i",
                                    paddingTop: "$16i",
                                    paddingBottom: "$16i",
                                    overflowX: "scroll",
                                    scrollbarWidth: "none",
                                },
                                children: l.map((e, i) =>
                                    (0, n.jsx)(
                                        x(),
                                        {
                                            href: e.link,
                                            children: (0, n.jsxs)(a.sg, {
                                                align: "center",
                                                justify: "center",
                                                css: {
                                                    minWidth: "200px",
                                                    minHeight: "60px",
                                                    maxHeight: "max-content",
                                                    gap: "$4i",
                                                    border: "1px solid #E8EAF3",
                                                    borderRadius: "$4",
                                                    padding: "$2i",
                                                    backgroundColor: "#FFF",
                                                    cursor: "pointer",
                                                    "&:hover": { backgroundColor: "$grey50" },
                                                },
                                                children: [
                                                    (0, n.jsx)(a.xv, {
                                                        css: {
                                                            color: "$grey900",
                                                            fontFamily: "$manrope",
                                                            fontSize: "$7i",
                                                            fontWeight: 700,
                                                            textAlign: "center",
                                                        },
                                                        children: e.title,
                                                    }),
                                                    e.attractions &&
                                                    (0, n.jsx)(a.xv, {
                                                        css: {
                                                            color: "$grey700",
                                                            fontFamily: "$manrope",
                                                            fontSize: "$7i",
                                                            fontWeight: 500,
                                                        },
                                                        children: e.attractions,
                                                    }),
                                                ],
                                            }),
                                        },
                                        (0, C.l)("Pill", "nothing".concat(i))
                                    )
                                ),
                            }),
                        ],
                    });
                },
                D = (e) => {
                    let { content: i, containerStyles: t, handleActive: o } = e;
                    return (0, n.jsx)(a.X2, {
                        onClick: () => o(i),
                        css: {
                            cursor: "pointer",
                            minHeigh: "max-content",
                            minWidth: "max-content",
                            padding: "$4i $10i",
                            borderRadius: "$pill",
                            backgroundColor: "#FDFAF6",
                            border: "1px solid #F1DDC6",
                            boxShadow: "none",
                            fontFamily: "$manrope",
                            color: "black",
                            fontSize: "$8i",
                            fontStyle: "normal",
                            fontWeight: 600,
                            "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                                boxShadow: "none",
                            },
                            ...t,
                        },
                        children: (0, P.Z)(
                            "best_time_to_visits" === i ||
                                "things_to_dos" === i ||
                                "places_to_visits" === i
                                ? i.slice(0, -1)
                                : "how_to_reaches" === i
                                    ? i.slice(0, -2)
                                    : i,
                            "_"
                        ),
                    });
                };
            var M = t(68991),
                Z = t(2177);
            let L = (e) => {
                var i, t, h, m, v, x, y, $, P, S;
                let {
                    homeData: z,
                    footerData: D,
                    packagesItinerariesForSlugs: L,
                    packagesStoriesForSlugs: I,
                    locale: F,
                } = e,
                    R = (0, Z.Z)(),
                    V = (0, o.b9)(k.Iv),
                    _ = (0, o.Dv)(k.jQ),
                    [W, E] = (0, r.useState)(!1),
                    [B, H] = (0, o.KO)(k.T2),
                    A = (0, l.oC)(k.e5);
                (0, r.useEffect)(() => {
                    A();
                }, [A]),
                    (0, r.useEffect)(() => {
                        let e = document.querySelector(".home-search"),
                            i = () => {
                                let i = window.scrollY,
                                    t = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
                                V(i > t + 250);
                            };
                        return (
                            window.addEventListener("scroll", i, {
                                capture: !0,
                                passive: !0,
                            }),
                            () => window.removeEventListener("scroll", i, { capture: !0 })
                        );
                    }, [V]);
                let N = (0, o.Dv)(k.s1),
                    X = (0, s.useRouter)(),
                    O = (0, r.useMemo)(() => {
                        var e;
                        return null === (e = X.query) || void 0 === e ? void 0 : e.m;
                    }, [X]),
                    U = (0, r.useMemo)(
                        () => (null == N ? void 0 : N.loggedIn) && N.isFotaEnabled,
                        [
                            null == N ? void 0 : N.loggedIn,
                            null == N ? void 0 : N.isFotaEnabled,
                        ]
                    );
                (0, r.useEffect)(() => {
                    let e = sessionStorage.getItem("auto-popup-shown");
                    if (!e && !(null == N ? void 0 : N.loggedIn) && !_) {
                        let i = setTimeout(() => {
                            O || (sessionStorage.setItem("auto-popup-shown", "true"), H(!0));
                        }, 3e4);
                        return () => {
                            clearTimeout(i);
                        };
                    }
                }, [O, _, X, H, null == N ? void 0 : N.loggedIn]),
                    (0, r.useEffect)(() => {
                        let e = sessionStorage.getItem("fota-popup-shown");
                        if (U && !e) {
                            let i = setTimeout(() => {
                                E(!0), sessionStorage.setItem("fota-popup-shown", "true");
                            }, 0);
                            return () => clearTimeout(i);
                        }
                    }, [U]);
                let q = (0, r.useMemo)(() => {
                    var e, i;
                    return null == z
                        ? void 0
                        : null === (e = z.data) || void 0 === e
                            ? void 0
                            : null === (i = e.attributes) || void 0 === i
                                ? void 0
                                : i.pageContents;
                }, [
                    null == z
                        ? void 0
                        : null === (i = z.data) || void 0 === i
                            ? void 0
                            : null === (t = i.attributes) || void 0 === t
                                ? void 0
                                : t.pageContents,
                ]),
                    G = (0, r.useMemo)(() => {
                        var e, i;
                        return null == z
                            ? void 0
                            : null === (e = z.data) || void 0 === e
                                ? void 0
                                : null === (i = e.attributes) || void 0 === i
                                    ? void 0
                                    : i.bannerSection;
                    }, [
                        null == z
                            ? void 0
                            : null === (h = z.data) || void 0 === h
                                ? void 0
                                : null === (m = h.attributes) || void 0 === m
                                    ? void 0
                                    : m.bannerSection,
                    ]),
                    J = (0, r.useMemo)(() => {
                        var e, i;
                        return null == z
                            ? void 0
                            : null === (e = z.data) || void 0 === e
                                ? void 0
                                : null === (i = e.attributes) || void 0 === i
                                    ? void 0
                                    : i.seo;
                    }, [
                        null == z
                            ? void 0
                            : null === (v = z.data) || void 0 === v
                                ? void 0
                                : null === (x = v.attributes) || void 0 === x
                                    ? void 0
                                    : x.seo,
                    ]),
                    K = (0, r.useMemo)(() => {
                        let e = [];
                        if (q)
                            for (let i = 0; i < q.length; i += 1) {
                                var t, n;
                                (null == q
                                    ? void 0
                                    : null === (t = q[i]) || void 0 === t
                                        ? void 0
                                        : t.fluidLayout) === !1 &&
                                    (null == q
                                        ? void 0
                                        : null === (n = q[i + 1]) || void 0 === n
                                            ? void 0
                                            : n.fluidLayout) === !1
                                    ? (e.push([q[i], q[i + 1]]), (i += 1))
                                    : e.push([q[i]]);
                            }
                        return e;
                    }, [q]),
                    Q = (0, r.useMemo)(() => K, [K]),
                    Y = (0, r.useCallback)(() => {
                        H(!1);
                    }, [H]);
                if (!z) return null;
                let ee = (e) => {
                    let { p: i, fluidLayout: t } = e;
                    return (0, n.jsx)(r.Fragment, {
                        children:
                            null == i
                                ? void 0
                                : i.map((e, i) => {
                                    var o, l, s, r, c, d, u, p, h, m, v, x, k, y, f;
                                    return (0, n.jsx)(
                                        a.xu,
                                        {
                                            className: "desitination-components-" + i,
                                            css: {
                                                background: "url(".concat(
                                                    (0, M.Z)(
                                                        (null == e
                                                            ? void 0
                                                            : null === (o = e.backgroundImage) ||
                                                                void 0 === o
                                                                ? void 0
                                                                : null === (l = o.data) || void 0 === l
                                                                    ? void 0
                                                                    : null === (s = l[0]) || void 0 === s
                                                                        ? void 0
                                                                        : null === (r = s.attributes) || void 0 === r
                                                                            ? void 0
                                                                            : r.url) ||
                                                        (null == e
                                                            ? void 0
                                                            : null === (c = e.backgroundImage) ||
                                                                void 0 === c
                                                                ? void 0
                                                                : null === (d = c.data) || void 0 === d
                                                                    ? void 0
                                                                    : null === (u = d.attributes) || void 0 === u
                                                                        ? void 0
                                                                        : u.url) ||
                                                        ""
                                                    ),
                                                    ")"
                                                ),
                                                backgroundColor: "".concat(
                                                    null == e ? void 0 : e.backgroundColor
                                                ),
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                "@lg": {
                                                    backgroundSize: "cover",
                                                    borderRadius: "".concat(
                                                        ((null == e ? void 0 : e.backgroundColor) ||
                                                            (null == e
                                                                ? void 0
                                                                : null === (p = e.backgroundImage) ||
                                                                    void 0 === p
                                                                    ? void 0
                                                                    : null === (h = p.data) || void 0 === h
                                                                        ? void 0
                                                                        : null === (m = h[0]) || void 0 === m
                                                                            ? void 0
                                                                            : null === (v = m.attributes) || void 0 === v
                                                                                ? void 0
                                                                                : v.url) ||
                                                            (null == e
                                                                ? void 0
                                                                : null === (x = e.backgroundImage) ||
                                                                    void 0 === x
                                                                    ? void 0
                                                                    : null === (k = x.data) || void 0 === k
                                                                        ? void 0
                                                                        : null === (y = k.attributes) || void 0 === y
                                                                            ? void 0
                                                                            : y.url)) &&
                                                            (null == e ? void 0 : e.__component) !==
                                                            "widgets.story-testimonial"
                                                            ? (null == e ? void 0 : e.preCostTime)
                                                                ? "0px"
                                                                : "20px"
                                                            : "0px"
                                                    ),
                                                    border: "".concat(
                                                        (null == e ? void 0 : e.__component) !==
                                                            "widgets.story-testimonial" &&
                                                            (null == e ? void 0 : e.backgroundColor)
                                                            ? "1px solid"
                                                            : null
                                                    ),
                                                    overflow: "hidden",
                                                    borderColor: "".concat(
                                                        null !==
                                                            (f = null == e ? void 0 : e.backgroundColor) &&
                                                            void 0 !== f
                                                            ? f
                                                            : null == e
                                                                ? void 0
                                                                : e.backgroundColor
                                                    ),
                                                },
                                            },
                                            children:
                                                (t || e.fluidLayout) &&
                                                    (null == e ? void 0 : e.__component) !==
                                                    "widgets.story-testimonial"
                                                    ? (0, n.jsx)(g.Z, {
                                                        css: {
                                                            "@smMax": (
                                                                null == e ? void 0 : e.enableSlider
                                                            )
                                                                ? { paddingLeft: 0, paddingRight: 0 }
                                                                : {},
                                                        },
                                                        children: (0, n.jsx)(C.Z, {
                                                            item: e,
                                                            index: i,
                                                            pageLayoutCondition: !1,
                                                            isIxigoPartnersSite: R,
                                                            packagesItinerariesForSlugs: (
                                                                null == L ? void 0 : L.length
                                                            )
                                                                ? L
                                                                : void 0,
                                                            packagesStoriesForSlugs: (
                                                                null == I ? void 0 : I.length
                                                            )
                                                                ? I
                                                                : void 0,
                                                        }),
                                                    })
                                                    : (0, n.jsx)(C.Z, {
                                                        item: e,
                                                        index: i,
                                                        pageLayoutCondition: !1,
                                                        isIxigoPartnersSite: R,
                                                        packagesItinerariesForSlugs: (
                                                            null == L ? void 0 : L.length
                                                        )
                                                            ? L
                                                            : void 0,
                                                        packagesStoriesForSlugs: (
                                                            null == I ? void 0 : I.length
                                                        )
                                                            ? I
                                                            : void 0,
                                                    }),
                                        },
                                        "desitination-components-" + i
                                    );
                                }),
                    });
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Z, {
                            navbarProps: { isTransparent: !0 },
                            footerData: D,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsxs)(a.xu, {
                                        className: "home",
                                        css: {
                                            "@smMax": {
                                                height: "calc(100% - 54px)",
                                                overflow: "scroll",
                                            },
                                        },
                                        children: [
                                            J
                                                ? (0, n.jsx)(p.Z, {
                                                    data: J,
                                                    slug: "",
                                                    preview: !1,
                                                    addOrganisationSchema: !0,
                                                })
                                                : null,
                                            G ? (0, n.jsx)(b.Z, { data: G }) : null,
                                            (0, n.jsx)(a.xu, {
                                                css: {
                                                    gap: "24px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    marginTop: (
                                                        null == Q
                                                            ? void 0
                                                            : null === (y = Q[0]) || void 0 === y
                                                                ? void 0
                                                                : null === ($ = y[0]) || void 0 === $
                                                                    ? void 0
                                                                    : $.preCostTime
                                                    )
                                                        ? "0px"
                                                        : "$20i",
                                                    marginBottom: "$20i",
                                                    alignContent: "center",
                                                    paddingLeft: "0",
                                                    "@lg": {
                                                        gap: "40px",
                                                        marginTop: (
                                                            null == Q
                                                                ? void 0
                                                                : null === (P = Q[0]) || void 0 === P
                                                                    ? void 0
                                                                    : null === (S = P[0]) || void 0 === S
                                                                        ? void 0
                                                                        : S.preCostTime
                                                        )
                                                            ? "0px"
                                                            : "$40i",
                                                        marginBottom: "$40i",
                                                        alignContent: "center",
                                                    },
                                                },
                                                children: Q
                                                    ? Q.map((e, i) => {
                                                        var t, a;
                                                        return (
                                                            null == e
                                                                ? void 0
                                                                : null === (t = e[0]) || void 0 === t
                                                                    ? void 0
                                                                    : t.fluidWithoutBG
                                                        )
                                                            ? (0, n.jsx)(
                                                                r.Fragment,
                                                                {
                                                                    children: (0, n.jsx)(C.Z, {
                                                                        item: null == e ? void 0 : e[0],
                                                                        index: i,
                                                                        pageLayoutCondition: !1,
                                                                        isIxigoPartnersSite: R,
                                                                        packagesItinerariesForSlugs: (
                                                                            null == L ? void 0 : L.length
                                                                        )
                                                                            ? L
                                                                            : void 0,
                                                                    }),
                                                                },
                                                                "cnw_".concat(i)
                                                            )
                                                            : (0, n.jsx)(
                                                                r.Fragment,
                                                                {
                                                                    children:
                                                                        !(
                                                                            (null == e ? void 0 : e.length) > 1
                                                                        ) &&
                                                                            (null == e
                                                                                ? void 0
                                                                                : null === (a = e[0]) || void 0 === a
                                                                                    ? void 0
                                                                                    : a.fluidLayout)
                                                                            ? (0, n.jsx)(ee, {
                                                                                p: e,
                                                                                fluidLayout: !0,
                                                                            })
                                                                            : (0, n.jsx)(
                                                                                g.Z,
                                                                                {
                                                                                    css: {},
                                                                                    children: (0, n.jsx)(ee, {
                                                                                        p: e,
                                                                                        fluidLayout: !1,
                                                                                    }),
                                                                                },
                                                                                "cnw_".concat(i)
                                                                            ),
                                                                },
                                                                i
                                                            );
                                                    })
                                                    : (0, n.jsx)(n.Fragment, {}),
                                            }),
                                            "in" === F
                                                ? (0, n.jsx)(g.Z, { children: (0, n.jsx)(T, {}) })
                                                : null,
                                        ],
                                    }),
                                    (0, n.jsx)(u.default, {
                                        defaultOpen: B,
                                        onClose: Y,
                                        isGeneric: !0,
                                    }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(f, {
                            bannerTitle: null == G ? void 0 : G.title,
                            searchPlaceHolder:
                                (null == G ? void 0 : G.searchBarPlaceholderText) || "",
                        }),
                        (0, n.jsx)(j.Z, { showFotaPopup: W, setShowFotaPopup: E }),
                        (0, n.jsx)(a.xu, {
                            css: { height: "50px", "@lg": { display: "none" } },
                        }),
                        U ? (0, n.jsx)(w.Z, {}) : R ? null : (0, n.jsx)(c, {}),
                    ],
                });
            };
            var I = !0,
                F = L;
        },
        39986: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return a;
                },
            });
            var n = t(78449);
            function a() {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "_",
                    t =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : " ";
                return (0, n.Z)((e || "").toLowerCase().split(i).join(t));
            }
        },
        99055: function (e, i, t) {
            "use strict";
            var n = t(85893);
            t(67294);
            var a = t(24397),
                o = t(87789);
            let l = (0, o.zo)(a.Z),
                s = (e) => {
                    let { fill: i, ...t } = e;
                    return (0, n.jsx)(l, { css: { fill: i }, ...t });
                };
            i.Z = s;
        },
        55086: function (e, i, t) {
            "use strict";
            var n = t(85893);
            t(67294);
            var a = t(62760),
                o = t(87789);
            let l = (0, o.zo)(a.Z),
                s = (e) => {
                    let { fill: i, ...t } = e;
                    return (0, n.jsx)(l, { css: { fill: i }, ...t });
                };
            i.Z = s;
        },
        24636: function (e, i, t) {
            "use strict";
            t.d(i, {
                Z: function () {
                    return s;
                },
            });
            var n = t(85893);
            t(67294);
            var a = t(87789);
            let o = (0, a.zo)(function (e) {
                return (0,
                    n.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e, children: (0, n.jsx)("path", { fillRule: "evenodd", d: "M18 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.94 7.175a8.5 8.5 0 111.55-1.265l3.17 3.965a1 1 0 11-1.56 1.25l-3.16-3.95z", clipRule: "evenodd" }) });
            }),
                l = (e) => {
                    let { fill: i, ...t } = e;
                    return (0, n.jsx)(o, { css: { fill: i }, ...t });
                };
            var s = l;
        },
        24397: function (e, i, t) {
            "use strict";
            var n = t(85893);
            t(67294),
                (i.Z = function (e) {
                    return (0, n.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 001.414-1.414L13.414 12l6.293-6.293a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293z",
                            clipRule: "evenodd",
                        }),
                    });
                });
        },
        62760: function (e, i, t) {
            "use strict";
            var n = t(85893);
            t(67294),
                (i.Z = function (e) {
                    return (0, n.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        ...e,
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M20 12a8 8 0 10-16 0 8 8 0 0016 0zm2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-9-3a1 1 0 10-2 0 1 1 0 002 0zm-1 7a1 1 0 001-1v-3a1 1 0 10-2 0v3a1 1 0 001 1z",
                            clipRule: "evenodd",
                        }),
                    });
                });
        },
    },
    function (e) {
        e.O(
            0,
            [
                4885, 296, 5675, 1664, 102, 8284, 2004, 7536, 3760, 4361, 6515, 1458,
                5901, 9415, 5946, 3811, 5958, 3983, 9774, 2888, 179,
            ],
            function () {
                return e((e.s = 48312));
            }
        ),
            (_N_E = e.O());
    },
]);
