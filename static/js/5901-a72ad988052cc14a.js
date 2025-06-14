"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5901],
    {
        24727: function (e, t, i) {
            i.d(t, {
                A: function () {
                    return l;
                },
            });
            var n = i(51490),
                o = i(88767);
            let a = async (e, t, i) =>
                await t({
                    url: "misc/getSelectedCity",
                    method: "POST",
                    body: e,
                    signal: i,
                }),
                l = (e) => {
                    let t = (0, n.wh)(),
                        {
                            mutate: i,
                            mutateAsync: l,
                            ...r
                        } = (0, o.useMutation)((e) => a(e, t, void 0), e);
                    return { getSelectedCity: i, getSelectedCityAsync: l, ...r };
                };
        },
        65901: function (e, t, i) {
            var n = i(85893),
                o = i(87789),
                a = i(71021),
                l = i(39396),
                r = i(21349),
                s = i(70024),
                d = i(67294),
                c = i(59843),
                p = i(44950),
                u = i(50389);
            let g = (0, o.F4)({
                from: { transform: "translateX(200px)", opacity: 0 },
                to: { transform: "translateX(0)", opacity: 1 },
            }),
                h = (0, o.F4)({
                    from: { transform: "translateX(-200px)", opacity: 0 },
                    to: { transform: "translateX(0)", opacity: 1 },
                }),
                m = (0, o.F4)({
                    from: { transform: "translateX(0)", opacity: 1 },
                    to: { transform: "translateX(200px)", opacity: 0 },
                }),
                x = (0, o.F4)({
                    from: { transform: "translateX(0)", opacity: 1 },
                    to: { transform: "translateX(-200px)", opacity: 0 },
                }),
                f = (0, o.F4)({
                    from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
                    to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
                }),
                $ = (0, o.F4)({
                    from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
                    to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
                }),
                y = (0, o.F4)({ from: { opacity: 0 }, to: { opacity: 1 } }),
                v = (0, o.F4)({ from: { opacity: 1 }, to: { opacity: 0 } }),
                b = (0, o.zo)(r.fC, {
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    zIndex: 999,
                }),
                w = (0, o.zo)(r.aV, {
                    all: "unset",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "$3i",
                    gap: "$12i",
                    borderRadius: "6px",
                    listStyle: "none",
                }),
                j = (0, o.zo)(r.xz, {
                    all: "unset",
                    outline: "none",
                    userSelect: "none",
                    fontWeight: 500,
                    lineHeight: 1,
                    borderRadius: "4px",
                    fontSize: "15px",
                    color: "$black",
                    "&:focus": {
                        position: "relative",
                        boxShadow: "hsl(252, 71.0%, 83.7%)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "$3i",
                }),
                C = (0, o.zo)(a.Z, {
                    position: "relative",
                    fill: "#000",
                    top: 1,
                    "[data-state=open] &": { transform: "rotate(-180deg)" },
                    "@media (prefers-reduced-motion: no-preference)": {
                        transition: "transform 250ms ease",
                    },
                }),
                k = (0, o.zo)(r.xz, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2px",
                }),
                z = (0, o.zo)(r.rU, {
                    fontSize: "$7i",
                    fontWeight: "$normal",
                    color: "$nav-link",
                    textDecoration: "none",
                    transition: "0.2s",
                    "&:hover": { fontWeight: "$bolder", color: "$nav-link-hover" },
                    display: "flex",
                }),
                I = (0, o.zo)(r.rU, {
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "$27i",
                    textDecoration: "none",
                }),
                S = (0, o.zo)(r.VY, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    "@media only screen and (min-width: 600px)": { width: "auto" },
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "250ms",
                        animationTimingFunction: "ease",
                        '&[data-motion="from-start"]': { animationName: h },
                        '&[data-motion="from-end"]': { animationName: g },
                        '&[data-motion="to-start"]': { animationName: x },
                        '&[data-motion="to-end"]': { animationName: m },
                    },
                }),
                R = (0, o.zo)(r.z$, {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    height: 10,
                    top: "100%",
                    overflow: "hidden",
                    "@media (prefers-reduced-motion: no-preference)": {
                        transition: "width, transform 250ms ease",
                        '&[data-state="visible"]': {
                            animation: "".concat(y, " 200ms ease"),
                        },
                        '&[data-state="hidden"]': {
                            animation: "".concat(v, " 200ms ease"),
                        },
                    },
                }),
                E = (0, o.zo)("div", {
                    position: "relative",
                    top: "70%",
                    backgroundColor: "$white",
                    width: "$5i",
                    height: "$7i",
                    transform: "rotate(45deg)",
                    borderTopLeftRadius: "2px",
                }),
                F = (0, o.zo)(r.l_, {
                    position: "relative",
                    left: 0,
                    transformOrigin: "left",
                    marginTop: "$5i",
                    width: "100%",
                    backgroundColor: "$white",
                    borderRadius: "6px",
                    overflow: "auto",
                    boxShadow:
                        "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
                    height: "var(--radix-navigation-menu-viewport-height)",
                    "@media only screen and (min-width: 600px)": {
                        width: "var(--radix-navigation-menu-viewport-width)",
                    },
                    "@media (prefers-reduced-motion: no-preference)": {
                        transition: "width, height, 300ms ease",
                        '&[data-state="open"]': { animation: "".concat(f, " 200ms ease") },
                        '&[data-state="closed"]': {
                            animation: "".concat($, " 200ms ease"),
                        },
                    },
                }),
                T = (0, o.zo)(r.ck, { alignTracks: "center", cursor: "pointer" }),
                Z = (0, o.zo)("ul", {
                    display: "grid",
                    padding: "$8i $12i",
                    margin: 0,
                    listStyle: "none",
                    variants: {
                        layout: {
                            "1col": {
                                "@media only screen and (min-width: 600px)": {
                                    width: "220px",
                                    gap: "$5i",
                                    gridAutoFlow: "column",
                                    gridTemplateRows: "repeat(8, 1fr)",
                                },
                            },
                            "2col": {
                                "@media only screen and (min-width: 600px)": {
                                    width: 520,
                                    gap: "$5i",
                                    gridAutoFlow: "column",
                                    gridTemplateRows: "repeat(7, 1fr)",
                                },
                            },
                            "3col": {
                                "@media only screen and (min-width: 600px)": {
                                    width: 1e3,
                                    gap: "$5i",
                                    gridAutoFlow: "column",
                                    gridTemplateRows: "repeat(7, 1fr)",
                                },
                            },
                        },
                    },
                }),
                D = (0, o.zo)(l.kC, {
                    position: "absolute",
                    justifyContent: "center",
                    top: "100%",
                    perspective: "2000px",
                }),
                W = (e) => {
                    let {
                        menus: t,
                        menuProps: i,
                        menuLinkProps: o,
                        isPaid: a,
                        isPackagesV2: r,
                    } = e,
                        g = (0, s.Dv)(p.s1),
                        [h, m] = (0, d.useState)({ left: "auto", right: 0 }),
                        x = d.memo(
                            (0, d.forwardRef)((e, t) => {
                                let { children: o, ...a } = e;
                                return (0, n.jsxs)(j, {
                                    ...a,
                                    ref: t,
                                    css: { ...i },
                                    children: [
                                        o,
                                        (0, n.jsx)(C, { "aria-hidden": !0, css: { ...i } }),
                                    ],
                                });
                            })
                        );
                    x.displayName = "MenuTrigger";
                    let f = (0, d.forwardRef)((e, t) =>
                        (0, n.jsx)(R, { ...e, ref: t, children: (0, n.jsx)(E, {}) })
                    );
                    f.displayName = "MenuIndicator";
                    let $ = (0, d.useCallback)((e) => {
                        (0, u.L9W)(u.wH1, { Catagory: e }, g || void 0);
                    }, []),
                        y = (0, d.useCallback)((e, t) => {
                            let i = Math.floor(e.length / 2) - 1;
                            t < i
                                ? m({ left: 0, right: "auto" })
                                : t === i
                                    ? m({ left: "auto", right: "auto" })
                                    : t === i + 1
                                        ? m({ left: "auto", right: 0 })
                                        : t > i && m({ left: "auto", right: 0 });
                        }, []);
                    return (0, n.jsx)(b, {
                        children: (0, n.jsxs)(w, {
                            css: { gap: r ? "$10i" : "$12i" },
                            children: [
                                null == t
                                    ? void 0
                                    : t.map((e, t, a) => {
                                        let {
                                            type: s,
                                            menu: p,
                                            list: h,
                                            url: m,
                                            menuContentProps: x,
                                            menuFooter: f,
                                            contentListProps: v,
                                            nodeProps: b,
                                            content: w,
                                        } = e;
                                        return "string" === s
                                            ? (0, n.jsxs)(
                                                T,
                                                {
                                                    onMouseEnter: () => {
                                                        y(a, t), $(p);
                                                    },
                                                    css: {
                                                        background: r
                                                            ? "none"
                                                            : "Explore Destinations" === p
                                                                ? "linear-gradient(90deg, #46C84C 0%, #2E82F5 100%)"
                                                                : "none",
                                                        padding: r
                                                            ? "0px"
                                                            : "Explore Destinations" === p
                                                                ? "9px 13px 9px 16px"
                                                                : "0px",
                                                        borderRadius:
                                                            "Explore Destinations" === p ? "40px" : "0px",
                                                    },
                                                    children: [
                                                        (0, n.jsxs)(j, {
                                                            css: {
                                                                ...i,
                                                                color:
                                                                    "Explore Destinations" === p
                                                                        ? "$white"
                                                                        : null == i
                                                                            ? void 0
                                                                            : i.color,
                                                                gap: r ? "$i" : "auto",
                                                            },
                                                            children: [
                                                                p,
                                                                (0, n.jsx)(C, {
                                                                    "aria-hidden": !0,
                                                                    css: {
                                                                        ...i,
                                                                        fill:
                                                                            "Explore Destinations" === p
                                                                                ? "$white"
                                                                                : null == i
                                                                                    ? void 0
                                                                                    : i.color,
                                                                    },
                                                                }),
                                                            ],
                                                        }),
                                                        (0, n.jsxs)(S, {
                                                            css: {
                                                                height:
                                                                    h && h.length <= 3
                                                                        ? 140
                                                                        : h &&
                                                                            (null == h ? void 0 : h.length) == 5
                                                                            ? 280
                                                                            : 250,
                                                                ...x,
                                                            },
                                                            children: [
                                                                (0, n.jsx)(Z, {
                                                                    layout:
                                                                        h && (null == h ? void 0 : h.length) < 8
                                                                            ? "1col"
                                                                            : h &&
                                                                                (null == h ? void 0 : h.length) > 18
                                                                                ? "3col"
                                                                                : "2col",
                                                                    css: {
                                                                        ...v,
                                                                        width:
                                                                            "Honeymoon Getaways" == p ||
                                                                                "Holiday Tour Packages" == p ||
                                                                                "Exclusive Packages" == p
                                                                                ? "720px"
                                                                                : h &&
                                                                                    (null == h ? void 0 : h.length) <
                                                                                    8
                                                                                    ? 220
                                                                                    : "Exclusive Packages" == p
                                                                                        ? 1e3
                                                                                        : 520,
                                                                    },
                                                                    children:
                                                                        null == h
                                                                            ? void 0
                                                                            : h.map((e, t) => {
                                                                                let {
                                                                                    link: i,
                                                                                    text: a,
                                                                                    pillText: l,
                                                                                    pillBG: r,
                                                                                    pillColor: s,
                                                                                } = e;
                                                                                return (0, n.jsxs)(
                                                                                    z,
                                                                                    {
                                                                                        href: i,
                                                                                        css: { ...o },
                                                                                        onClick: () => {
                                                                                            (0, u.L9W)(
                                                                                                u.KTp,
                                                                                                {
                                                                                                    Catagory: p,
                                                                                                    Packages_name: a,
                                                                                                },
                                                                                                g || void 0
                                                                                            );
                                                                                        },
                                                                                        children: [
                                                                                            a,
                                                                                            l && r && s
                                                                                                ? (0, n.jsx)(
                                                                                                    c.RenderPills,
                                                                                                    {
                                                                                                        text: l,
                                                                                                        backgroundColor: r,
                                                                                                        textcolor: s,
                                                                                                    },
                                                                                                    t
                                                                                                )
                                                                                                : null,
                                                                                        ],
                                                                                    },
                                                                                    "list" + t
                                                                                );
                                                                            }),
                                                                }),
                                                                (0, d.isValidElement)(f) && f,
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                "menu" + t
                                            )
                                            : "node" === s
                                                ? (0, n.jsxs)(
                                                    T,
                                                    {
                                                        css: { alignSelf: "center" },
                                                        onMouseEnter: () => y(a, t),
                                                        children: [
                                                            (0, n.jsx)(k, {
                                                                asChild: !0,
                                                                css: { ...b, ...i },
                                                                children: p,
                                                            }),
                                                            (0, n.jsxs)(S, {
                                                                className: "llllll",
                                                                css: {
                                                                    height:
                                                                        h && h.length <= 3
                                                                            ? 140
                                                                            : h &&
                                                                                (null == h ? void 0 : h.length) <= 5
                                                                                ? 170
                                                                                : 294,
                                                                    ...x,
                                                                },
                                                                children: [
                                                                    (0, n.jsx)(Z, {
                                                                        layout:
                                                                            h && (null == h ? void 0 : h.length) < 8
                                                                                ? "1col"
                                                                                : "2col",
                                                                        css: { ...v },
                                                                        children:
                                                                            null == h
                                                                                ? void 0
                                                                                : h.map((e, t) => {
                                                                                    let {
                                                                                        link: i,
                                                                                        text: o,
                                                                                        callback: a,
                                                                                        userName: r,
                                                                                    } = e;
                                                                                    return (0, n.jsx)(
                                                                                        l.sg,
                                                                                        {
                                                                                            css: {
                                                                                                width:
                                                                                                    r && 0 === t
                                                                                                        ? "calc(100% + 24px)"
                                                                                                        : "100%",
                                                                                            },
                                                                                            children:
                                                                                                r && 0 === t
                                                                                                    ? (0, n.jsx)(l.sg, {
                                                                                                        css: {
                                                                                                            borderBottom:
                                                                                                                "1px solid $grey01",
                                                                                                            marginLeft: "-$12i",
                                                                                                        },
                                                                                                        children: (0, n.jsx)(
                                                                                                            l.xv,
                                                                                                            {
                                                                                                                css: {
                                                                                                                    fontSize: "$7i",
                                                                                                                    color:
                                                                                                                        "$nav-link",
                                                                                                                    paddingLeft:
                                                                                                                        "$12i",
                                                                                                                    paddingBottom:
                                                                                                                        "$6i",
                                                                                                                },
                                                                                                                children: o,
                                                                                                            }
                                                                                                        ),
                                                                                                    })
                                                                                                    : (0, n.jsx)(z, {
                                                                                                        href: i,
                                                                                                        onClick: (e) =>
                                                                                                            a && a(e),
                                                                                                        css: {
                                                                                                            cursor: "pointer",
                                                                                                        },
                                                                                                        children: o,
                                                                                                    }),
                                                                                        },
                                                                                        "list" + t
                                                                                    );
                                                                                }),
                                                                    }),
                                                                    (0, d.isValidElement)(f) && f,
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    "menu" + t
                                                )
                                                : "button" === s
                                                    ? (0, n.jsx)(
                                                        I,
                                                        {
                                                            href: m,
                                                            onMouseEnter: () => y(a, t),
                                                            children: p,
                                                        },
                                                        "menu" + t
                                                    )
                                                    : "drawer" === s
                                                        ? (0, n.jsx)(n.Fragment, { children: w })
                                                        : void 0;
                                    }),
                                (0, n.jsx)(f, {}),
                                (0, n.jsx)(D, { css: { ...h }, children: (0, n.jsx)(F, {}) }),
                            ],
                        }),
                    });
                };
            t.Z = W;
        },
        43e3: function (e, t, i) {
            var n = i(85893),
                o = i(5027),
                a = i(39396),
                l = i(11163);
            i(67294);
            let r = (e) => {
                var t;
                let { onClick: i, icon: r } = e,
                    s = (0, l.useRouter)(),
                    d = !(null === (t = s.query) || void 0 === t ? void 0 : t.month),
                    c = !s.query.year;
                return (0, n.jsx)(a.zx, {
                    onClick:
                        i ||
                        (() => {
                            var e;
                            (null == s
                                ? void 0
                                : null === (e = s.query) || void 0 === e
                                    ? void 0
                                    : e.regionCode) &&
                                d &&
                                c
                                ? s.push("/customize")
                                : s.back();
                        }),
                    state: "active",
                    css: {
                        width: "$14i",
                        height: "$14i",
                        borderRadius: "$round",
                        padding: 0,
                        backgroundColor: "#E4E5E7",
                        display: "inline-flex",
                        "&:hover": { border: 0, boxShadow: "none" },
                        "@lg": { display: "none" },
                    },
                    children:
                        r ||
                        (0, n.jsx)(o.Z, {
                            css: {
                                fill: "$grey10",
                                width: "$10i",
                                height: "$10i",
                                "&:hover": { fill: "$grey08" },
                            },
                        }),
                });
            };
            t.Z = r;
        },
        38328: function (e, t, i) {
            i.d(t, {
                J: function () {
                    return c;
                },
            });
            var n = i(85893),
                o = i(87789),
                a = i(4327),
                l = i(61811),
                r = i(39396);
            i(67294);
            let s = (0, o.zo)("section", {
                width: "100%",
                position: "relative",
                "@lg": {
                    position: "relative",
                    top: "initial",
                    maxWidth: "760px",
                    margin: "0 auto",
                },
            }),
                d = (0, o.zo)("div", {
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                }),
                c = (0, o.F4)({
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                }),
                p = (0, o.zo)("ul", {
                    margin: 0,
                    padding: 0,
                    marginTop: "$9i",
                    listStyle: "none",
                    animation: "".concat(c, " 0.4s ease-in 0s 1 normal"),
                }),
                u = (0, o.zo)("li", {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                }),
                g = (0, o.zo)("a", {
                    padding: "$6i $6i $6i $10i",
                    color: "$grey12",
                    fontSize: "$9i",
                    fontWeight: "$bold",
                    lineHeight: "$11i",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexGrow: 1,
                    border: "1px solid transparent",
                    borderRadius: "$4",
                    ".start-planning": { display: "none", color: "$primary06" },
                    "@lg": {
                        padding: "$7i $12i",
                        fontSize: "$11i",
                        lineHeight: "$14i",
                        "&:hover": {
                            border: "1px solid $primary06",
                            backgroundColor: "$primary00",
                            ".start-planning": { display: "flex" },
                        },
                    },
                });
            t.Z = function (e) {
                let {
                    isGcm: t = !1,
                    wrapperCSS: i,
                    formCSS: o,
                    inputWrapperCSS: c,
                    listCSS: h,
                    placeholderCss: m,
                    onClick: x,
                    onClear: f,
                    onChange: $,
                    onSelect: y,
                    placeholder: v = "Search from over 3000 cities",
                    listOptions: b = [],
                    listOptionsCss: w,
                    value: j = "",
                    emptyState: C,
                    autoFocus: k = !1,
                    renderItem: z,
                } = e;
                return (0, n.jsxs)(s, {
                    css: i,
                    children: [
                        (0, n.jsx)(r.xu, {
                            css: o,
                            children: (0, n.jsxs)(d, {
                                css: c,
                                children: [
                                    (0, n.jsx)(l.Z, {
                                        css: {
                                            fill: "$grey07",
                                            position: "absolute",
                                            width: "$10i",
                                            height: "$10i",
                                            marginLeft: "$10i",
                                            "@lg": t
                                                ? {}
                                                : { width: "$12i", height: "$12i", marginLeft: "$12i" },
                                        },
                                    }),
                                    (0, n.jsx)(r.II, {
                                        placeholder: v,
                                        value: j,
                                        onChange: $,
                                        autoFocus: k,
                                        css: {
                                            padding: j.length
                                                ? "$7i $26i $7i $26i"
                                                : "$7i $12i $7i $26i",
                                            height: "$26i",
                                            borderRadius: "$sizes$6i",
                                            backgroundColor: "$white",
                                            boxShadow: "0px 3px 16px 0px rgba(0, 0, 0, 0.04)",
                                            border: "1px solid rgba(232, 234, 243, 1)",
                                            fontSize: "$9i",
                                            lineHeight: "$11i",
                                            fontWeight: "$bolder",
                                            outline: "none",
                                            color: "$black",
                                            "&::placeholder": { color: "$grey02", ...m },
                                            "&:focus": {
                                                boxShadow: "0px 3px 16px 0px rgba(0, 0, 0, 0.08)",
                                            },
                                            "@lg": t
                                                ? {}
                                                : {
                                                    padding: "$6i $30i $6i $30i",
                                                    fontSize: "$14i",
                                                    lineHeight: "$18i",
                                                    height: "$30i",
                                                },
                                        },
                                    }),
                                    j.length
                                        ? (0, n.jsx)(a.Z, {
                                            onClick: f,
                                            css: {
                                                fill: "$grey07",
                                                position: "absolute",
                                                width: "$10i",
                                                height: "$10i",
                                                marginRight: "$10i",
                                                right: 0,
                                                cursor: "pointer",
                                                transition: "opacity .4s ease",
                                                "@lg": t
                                                    ? {}
                                                    : {
                                                        width: "$12i",
                                                        height: "$12i",
                                                        marginRight: "$12i",
                                                    },
                                            },
                                        })
                                        : null,
                                ],
                            }),
                        }),
                        (0, n.jsx)(p, {
                            css: { ...h },
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                        (0, n.jsx)(
                                            u,
                                            {
                                                children: (0, n.jsx)(g, {
                                                    role: "button",
                                                    rel: "noopener noreferrer",
                                                    onClick: y ? () => y(e) : x,
                                                    css: { ...w, justifyContent: "flex-start" },
                                                    children: z(e),
                                                }),
                                            },
                                            t
                                        )
                                    ),
                        }),
                        0 === b.length &&
                        j.length > 0 &&
                        C &&
                        (0, n.jsx)(n.Fragment, { children: C }),
                    ],
                });
            };
        },
        59843: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    RenderPills: function () {
                        return T;
                    },
                    __N_SSP: function () {
                        return S;
                    },
                    fadeIn: function () {
                        return R;
                    },
                });
            var n = i(85893),
                o = i(87789),
                a = i(4327),
                l = i(39396),
                r = i(27484),
                s = i.n(r),
                d = i(70024),
                c = i(91296),
                p = i.n(c),
                u = i(4474),
                g = i.n(u),
                h = i(9008),
                m = i.n(h),
                x = i(11163),
                f = i(67294),
                $ = i(24727),
                y = i(53041),
                v = i(43e3),
                b = i(38328),
                w = i(44950),
                j = i(50389),
                C = i(27894),
                k = i(70466),
                z = i(93290);
            let I = (0, o.zo)("div", {
                content: "",
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "#ffffffa1",
            });
            var S = !0;
            let R = (0, o.F4)({
                from: { opacity: 0, transform: "translateY(10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
            }),
                E = (e) => {
                    let { searchTerm: t } = e;
                    return (0, n.jsx)(l.sg, {
                        css: {
                            alignItems: "center",
                            margin: "$20i 0",
                            animation: "".concat(R, " 0.4s ease-in 0s 1 normal"),
                        },
                        children: (0, n.jsxs)(l.xv, {
                            css: {
                                fontSize: "",
                                marginBottom: "$4i",
                                textAlign: "center",
                                "@lg": { fontSize: "$11i", lineHeight: "$12i" },
                            },
                            children: [
                                "Oh no",
                                (0, n.jsx)(l.xu, {
                                    as: "span",
                                    css: { fontSize: "$8i", padding: "0 $2i" },
                                    children: "\uD83D\uDE15",
                                }),
                                "We haven't unwrapped this destination yet!",
                            ],
                        }),
                    });
                },
                F = (e) => {
                    let { regionsDataFromApi: t } = e,
                        i = (0, x.useRouter)(),
                        r = (0, C.Z)({ router: i }),
                        c = (0, d.b9)(w.sc),
                        u = (0, d.b9)(w.e5),
                        [h, S] = (0, f.useState)(""),
                        R = (0, d.b9)(w.OP),
                        [F, Z] = (0, f.useState)([]),
                        [D, W] = (0, f.useState)(0),
                        { getSelectedCityAsync: L } = (0, $.A)(),
                        H = (0, o.zo)("section", {
                            position: "absolute",
                            left: 0,
                            top: "56px",
                            width: "100%",
                            height: "calc(100vh - 56px)",
                            transition: "all 0.3s ease-out 0s",
                            overflow: "hidden scroll",
                            padding: "0 $8i",
                            minHeight: 400,
                            "&:before": {
                                content: "",
                                position: "fixed",
                                inset: 0,
                                backgroundPosition: "0px 30%",
                                backgroundImage:
                                    'url("https://images.pickyourtrail.com/images/web_app/pdg/map.png")',
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                transition: "all 0.3s ease 0s",
                                opacity: 0.4,
                                zIndex: 1,
                            },
                            "@lg": {
                                top: 0,
                                marginTop: "116px",
                                height: "calc(100vh - 116px)",
                            },
                        }),
                        A = (0, f.useMemo)(
                            () =>
                                ((null == t ? void 0 : t.topRegions) || [])
                                    .slice(0, 9)
                                    .map((e) => e),
                            [t]
                        ),
                        U = (0, f.useMemo)(
                            () => (null == t ? void 0 : t.allRegions) || [],
                            [t]
                        ),
                        X = async (e) => {
                            if (
                                ((0, j.L9W)(j.nt6, { Region: null == e ? void 0 : e.region }),
                                    (0, j.L9W)(j.lup, {
                                        key: h,
                                        clicked: null == e ? void 0 : e.search,
                                    }),
                                    R(null == e ? void 0 : e.unityEnabled),
                                    e.cityId)
                            ) {
                                let { data: t } = await L({ cityId: e.cityId });
                                u({
                                    selectedCityId: e.cityId,
                                    displayTextForRegion: e.search.split(",")[0],
                                    cities: [t],
                                });
                            } else
                                u({
                                    selectedCityId: void 0,
                                    displayTextForRegion: e.search.split(",")[0],
                                    cities: [],
                                });
                            if ("dxb" === e.regionCode.toLowerCase() && r)
                                (0, z.Z)("/".concat(r, "/dubai"));
                            else if ("mle" === e.regionCode.toLowerCase()) {
                                let n = s()().add(45, "day").format("YYYY-MM-DD");
                                if ("" === r) {
                                    let o = "/maldives-tour-packages/listing?arrivalAirportCode="
                                        .concat(encodeURIComponent("$$$"), "&arrivalAirportName=")
                                        .concat(encodeURIComponent("Outside+India"), "&date=")
                                        .concat(encodeURIComponent(n), "&duration=4&from=")
                                        .concat(
                                            encodeURIComponent("$$$"),
                                            "&nationality=IN&travellers=a2"
                                        );
                                    (0, z.Z)(o);
                                } else {
                                    let a = "/"
                                        .concat(
                                            r,
                                            "/maldives-tour-packages/listing?arrivalAirportCode="
                                        )
                                        .concat(encodeURIComponent("$$$"), "&arrivalAirportName=")
                                        .concat(encodeURIComponent("Outside+India"), "&date=")
                                        .concat(encodeURIComponent(n), "&duration=4&from=")
                                        .concat(encodeURIComponent("$$$"), "&nationality=")
                                        .concat(encodeURIComponent(r.toUpperCase()), "&travellers=")
                                        .concat(encodeURIComponent("a2"));
                                    (0, z.Z)(a);
                                }
                            } else
                                (null == e ? void 0 : e.search) === "Abu Dhabi" ||
                                    (null == e ? void 0 : e.search) === "Dubai"
                                    ? i.push(
                                        "/customize/"
                                            .concat(e.regionCode)
                                            .concat(
                                                "?cityRegion="
                                                    .concat(
                                                        (null == e ? void 0 : e.search) === "Abu Dhabi"
                                                            ? "adb"
                                                            : e.regionCode,
                                                        "&unityEnabled="
                                                    )
                                                    .concat((null == e ? void 0 : e.unityEnabled) || !1)
                                            )
                                    )
                                    : i.push({
                                        pathname: "/customize/".concat(e.regionCode),
                                        query: {
                                            unityEnabled:
                                                (null == e ? void 0 : e.unityEnabled) || !1,
                                        },
                                    });
                        },
                        M = (0, f.useCallback)(
                            (e) => {
                                let i = e.trim().toLowerCase(),
                                    n =
                                        (null == t ? void 0 : t.allRegions) &&
                                        t.allRegions.filter(
                                            (e) => e.active && "ind" !== e.regionCode
                                        ),
                                    o = i.split("+");
                                o = o.filter((e) => e);
                                let a = n;
                                o.map(
                                    (e) => (
                                        (a = g()(a, (t) => RegExp(e.trim(), "i").test(t.search))),
                                        !1
                                    )
                                );
                                let l = a;
                                if (null == l ? void 0 : l.length) {
                                    let r = l.sort((e, t) => e.search.length - t.search.length);
                                    Z(r);
                                } else Z([]);
                            },
                            [null == t ? void 0 : t.allRegions]
                        ),
                        N = (0, f.useCallback)(
                            p()((e) => {
                                (0, j.L9W)(j.lup, { key: e });
                            }, 400),
                            []
                        ),
                        P = (e) => {
                            let t = e.target.value;
                            S(t), N(t), M(t);
                        };
                    return (
                        (0, f.useEffect)(() => {
                            c(null), u(null);
                        }, [c, u]),
                        (0, f.useEffect)(() => {
                            let e = setInterval(() => {
                                let t = document.getElementById("award-sticky-bar");
                                t && (0, k.Z)() && (W(t.offsetHeight), clearInterval(e));
                            }, 1e3);
                            return () => clearInterval(e);
                        }, []),
                        (0, n.jsxs)(l.xu, {
                            children: [
                                (0, n.jsx)(m(), {
                                    children: (0, n.jsx)(
                                        "meta",
                                        { name: "robots", content: "noindex, nofollow" },
                                        "robots"
                                    ),
                                }),
                                (0, n.jsxs)(H, {
                                    children: [
                                        (0, n.jsx)(I, {}),
                                        (0, n.jsxs)(y.Z, {
                                            css: { "@smMax": { padding: 0 } },
                                            children: [
                                                (0, n.jsx)(l.kC, {
                                                    css: {
                                                        display: "none",
                                                        "@lg": {
                                                            display: "flex",
                                                            position: "fixed",
                                                            width: "100%",
                                                            zIndex: 9,
                                                            justifyContent: "flex-end",
                                                            top: "$28i",
                                                            padding: 0,
                                                            right: "20%",
                                                        },
                                                    },
                                                    children: (0, n.jsx)(l.hU, {
                                                        css: {
                                                            display: "none",
                                                            "@lg": {
                                                                display: "flex",
                                                                cursor: "pointer",
                                                                paddingLeft: "$2i",
                                                                paddingTop: "$4i",
                                                            },
                                                        },
                                                        onClick: () => {
                                                            i.push("/");
                                                        },
                                                        children: (0, n.jsx)(a.Z, {
                                                            css: { fill: "$grey10", width: 24, height: 24 },
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsxs)(l.kC, {
                                                    css: {
                                                        position: "fixed",
                                                        top: null != D ? D : 0,
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        padding: "$8i $10i",
                                                        width: "100%",
                                                        left: 0,
                                                        zIndex: 4,
                                                        "@lg": {
                                                            top: "$28i",
                                                            padding: 0,
                                                            justifyContent: "center",
                                                            left: "50%",
                                                            transform: "translateX(-50%)",
                                                        },
                                                    },
                                                    children: [
                                                        (0, n.jsx)(l.xu, {
                                                            css: {
                                                                width: "10%",
                                                                cursor: "pointer",
                                                                "@lg": { display: "none" },
                                                            },
                                                            children: (0, n.jsx)(v.Z, {
                                                                onClick: () => {
                                                                    i.push("/");
                                                                },
                                                            }),
                                                        }),
                                                        (0, n.jsx)(l.xu, {
                                                            css: {
                                                                width: "90%",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                            },
                                                            children: (0, n.jsxs)(l.xv, {
                                                                css: {
                                                                    fontSize: "17px",
                                                                    fontWeight: "$bold",
                                                                    lineHeight: "$12i",
                                                                    paddingBottom: 0,
                                                                    color: "$black",
                                                                    textAlign: "center",
                                                                    "@lg": {
                                                                        fontSize: "$11i",
                                                                        lineHeight: "$12i",
                                                                        paddingBottom: "$18i",
                                                                    },
                                                                },
                                                                children: [
                                                                    "Whatâ€™s",
                                                                    (0, n.jsx)(l.xv, {
                                                                        as: "span",
                                                                        css: {
                                                                            color: "#09B367",
                                                                            fontFamily: "$amithen",
                                                                            fontSize: "$12i",
                                                                            fontWeight: "$normal",
                                                                            whiteSpace: "normal",
                                                                            fontStyle: "normal",
                                                                            padding: "0 $2i",
                                                                            display: "inline",
                                                                            "@lg": { fontSize: "$17i" },
                                                                        },
                                                                        children: "your pick",
                                                                    }),
                                                                    "for your next vacation?",
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsx)(l.xu, {
                                                            css: {
                                                                width: "$14i",
                                                                opacity: 0,
                                                                "@smMax": { width: 0 },
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsx)(l.xu, {
                                                    css: {
                                                        position: "relative",
                                                        zIndex: 2,
                                                        transition: "all 0.5s ease 0s",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "flex-start",
                                                        height: "calc(100vh - 90px)",
                                                        minHeight: "400px",
                                                        margin: "0 auto",
                                                        padding: "0 0 $12i",
                                                        marginTop: "20px",
                                                        paddingTop: null != D ? D : 0,
                                                        "@lg": { paddingTop: 0 },
                                                    },
                                                    children: (0, n.jsx)(b.Z, {
                                                        onSelect: X,
                                                        autoFocus: !0,
                                                        formCSS: {
                                                            position: "sticky",
                                                            top: 0,
                                                            backgroundColor: "$white",
                                                        },
                                                        listOptions: 0 === h.length ? A : F || U,
                                                        onChange: P,
                                                        value: h,
                                                        onClear: () => S(""),
                                                        emptyState: (0, n.jsx)(E, { searchTerm: h }),
                                                        placeholder: "Pick your destination",
                                                        renderItem: (e) => {
                                                            var t, i;
                                                            return (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    e.search,
                                                                    (null == e
                                                                        ? void 0
                                                                        : null === (t = e.pills) || void 0 === t
                                                                            ? void 0
                                                                            : t.length) &&
                                                                    (null == e ? void 0 : e.pills) !== null &&
                                                                    (0, n.jsx)(n.Fragment, {
                                                                        children:
                                                                            null == e
                                                                                ? void 0
                                                                                : null === (i = e.pills) ||
                                                                                    void 0 === i
                                                                                    ? void 0
                                                                                    : i.map((e, t) =>
                                                                                        (0, n.jsx)(
                                                                                            T,
                                                                                            {
                                                                                                text:
                                                                                                    null == e ? void 0 : e.name,
                                                                                                backgroundColor:
                                                                                                    null == e
                                                                                                        ? void 0
                                                                                                        : e.backgroundColor,
                                                                                                textcolor:
                                                                                                    null == e
                                                                                                        ? void 0
                                                                                                        : e.textColor,
                                                                                            },
                                                                                            t
                                                                                        )
                                                                                    ),
                                                                    }),
                                                                ],
                                                            });
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                T = (e) => {
                    let { text: t, backgroundColor: i, textcolor: o } = e;
                    return (0, n.jsx)(l.X2, {
                        align: "center",
                        css: {
                            marginLeft: "$4i",
                            padding: "2px $4i",
                            backgroundColor: i,
                            borderRadius: "70px",
                        },
                        children: (0, n.jsx)(l.xv, {
                            css: {
                                color: o,
                                fontSize: "11px",
                                lineHeight: "$8i",
                                fontWeight: "$bolder",
                                textTransform: "uppercase",
                            },
                            children: t,
                        }),
                    });
                };
            t.default = F;
        },
        93290: function (e, t, i) {
            i.d(t, {
                Z: function () {
                    return n;
                },
            });
            function n(e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "_self";
                sessionStorage.setItem("scrollPosition", window.scrollY.toString());
                let i = sessionStorage.getItem("locale"),
                    n = null == e ? void 0 : e.slice(0, 3).replace("/", ""),
                    o = i && "in" !== i && n !== i ? "/".concat(i).concat(e) : e;
                return window.open("".concat(o), t);
            }
        },
        70466: function (e, t, i) {
            i.d(t, {
                Z: function () {
                    return o;
                },
            });
            var n = i(95457);
            function o() {
                return !(0, n.Z)() && window.innerWidth <= 576;
            }
        },
    },
]);
