"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9415],
    {
        32483: function (a, e, n) {
            n.d(e, {
                K: function () {
                    return t;
                },
            });
            var o = n(51490),
                r = n(88767);
            let i = async (a, e, n) =>
                await e({
                    url: "packages/campaigns/search?searchString=".concat(
                        null == a ? void 0 : a.searchString
                    ),
                    method: "GET",
                    signal: n,
                }),
                t = (a) => {
                    let e = (0, o.wh)(),
                        {
                            mutate: n,
                            mutateAsync: t,
                            ...s
                        } = (0, r.useMutation)((a) => i(a, e, void 0), a);
                    return { UseGetPackageRegion: n, UseGetPackageRegionAsync: t, ...s };
                };
        },
        64658: function (a, e, n) {
            n.d(e, {
                Z: function () {
                    return aW;
                },
            });
            var o = n(85893),
                r = n(39396),
                i = n(67294),
                t = n(87789),
                s = n(86703),
                l = n(25675),
                c = n.n(l),
                u = n(11163),
                g = n(53041),
                m = n(24802),
                p = n(38134),
                d = n(68991),
                k = n(48980),
                h = n(15088),
                f = n(48951),
                y = n(67125),
                x = n(73338),
                v = n(36848),
                P = n(32672),
                b = n(26256),
                j = n(27484),
                $ = n.n(j),
                w = n(2177);
            let C = [
                "Pickyourtrail is India's leading online travel company that delivers tailor-made international holidays. Pickyourtrail aims to change the customer experience so they can explore destinations at their own pace with completely customized tour packages. Our unique matching algorithm and price comparison engine ensures that travellers build their itinerary completely suited to their tastes and at the best online prices. Pickyourtrail's intelligent platform helps save time and effort, without having to wait for a travel agent's quote, yet letting you have the fun of planning your own trip!",
                "Over the years, we have helped more than 10000+ travellers from across 14 countries explore their dream international holiday destinations. Pickyourtrail has the highest Five-star rating on Facebook by travellers, making us a top rated trip planner in India. We are an Amadeus Next incubated start-up and one of the top 6 finalists of the prestigious APAC Travel Innovation Summit award.",
            ],
                A = new Date(),
                S = A.getTime(),
                U = $()(S).add(45, "day").format("YYYY-MM-DD"),
                z = {
                    in: [
                        {
                            key: "1",
                            category: "Explore Destinations",
                            contents: [
                                {
                                    name: "Maldives",
                                    url: "/maldives-tour-packages/listing?arrivalAirportCode=$$$&arrivalAirportName=Outside%20India&date=".concat(
                                        U,
                                        "&duration=4&from=BLR&nationality=IN&travellers=a2&rcName=maldives"
                                    ),
                                    pillText: "HONEYMOON",
                                    pillColor: "#6A1B40",
                                    pillBG: "#FECDDB",
                                },
                                {
                                    name: "Bali",
                                    url: "/customize/idn",
                                    pillText: "TRENDING",
                                    pillColor: "#68251D",
                                    pillBG: "#F9BBB5",
                                },
                                {
                                    name: "Thailand",
                                    url: "/customize/tha",
                                    pillText: "BUDGET",
                                    pillColor: "#382400",
                                    pillBG: "#F9E9DF",
                                },
                                {
                                    name: "Abu Dhabi",
                                    url: "/customize/dxb?cityRegion=adb",
                                    pillText: "POPULAR",
                                    pillColor: "#1A2152",
                                    pillBG: "#CDD1EF",
                                },
                                {
                                    name: "Europe",
                                    url: "/customize/eur",
                                    pillText: "IN SEASON",
                                    pillColor: "#054D3A",
                                    pillBG: "#C7EFD0",
                                },
                                { name: "Dubai", url: "/customize/dxb" },
                                { name: "Vietnam", url: "/customize/vnm" },
                                { name: "Singapore", url: "/customize/sin" },
                                { name: "Turkey", url: "/customize/tur" },
                                { name: "Greece", url: "/customize/grc" },
                                { name: "Switzerland", url: "/customize/che" },
                                { name: "Sri-lanka", url: "/customize/lka" },
                                { name: "Mauritius", url: "/customize/mus" },
                                { name: "Azerbaijan", url: "/customize/aze" },
                                { name: "Italy", url: "/customize/ity" },
                                { name: "New Zealand", url: "/customize/nz" },
                                { name: "Australia", url: "/customize/aus" },
                                { name: "Spain", url: "/customize/esp" },
                            ],
                        },
                        {
                            key: "2",
                            category: "Holiday Tour Packages",
                            contents: [
                                { name: "International Tour Packages", url: "/packages" },
                                { name: "Thailand Packages", url: "/packages/thailand" },
                                { name: "Europe Packages", url: "/packages/europe" },
                                { name: "Maldives Packages", url: "/packages/maldives" },
                                { name: "Bali Packages", url: "/packages/bali" },
                                { name: "Dubai Packages", url: "/packages/dubai" },
                                { name: "Vietnam Packages", url: "/packages/vietnam" },
                                { name: "Singapore Packages", url: "/packages/singapore" },
                                { name: "Sri Lanka Packages", url: "/packages/sri-lanka" },
                                { name: "Turkey Packages", url: "/packages/turkey" },
                                { name: "Japan Packages", url: "/packages/japan" },
                                { name: "Greece Packages", url: "/packages/greece" },
                                { name: "Mauritius Packages", url: "/packages/mauritius" },
                                { name: "UK Packages", url: "/packages/united-kingdom" },
                                { name: "Australia Packages", url: "/packages/australia" },
                                { name: "Azerbaijan Packages", url: "/packages/azerbaijan" },
                                { name: "Malaysia Packages", url: "/packages/malaysia" },
                                { name: "Philippines Packages", url: "/packages/philippines" },
                                { name: "Seychelles Packages", url: "/packages/seychelles" },
                                { name: "New Zealand Packages", url: "/packages/new-zealand" },
                                {
                                    name: "South Africa Packages",
                                    url: "/packages/south-africa",
                                },
                                { name: "Bhutan Packages", url: "/packages/bhutan" },
                                { name: "Kazakhstan Packages", url: "/packages/kazakhstan" },
                            ],
                        },
                        {
                            key: "3",
                            category: "Family Theme Packages",
                            contents: [
                                {
                                    name: "International Family Packages",
                                    url: "/packages/family-tour-packages",
                                },
                                {
                                    name: "Thailand Family Packages",
                                    url: "/packages/thailand/family-tour-packages",
                                },
                                {
                                    name: "Europe Family Packages",
                                    url: "/packages/europe/family-tour-packages",
                                },
                                {
                                    name: "Maldives Family Packages",
                                    url: "/packages/maldives/family-tour-packages",
                                },
                                {
                                    name: "Bali Family Packages",
                                    url: "/packages/bali/family-tour-packages",
                                },
                                {
                                    name: "Dubai Family Packages",
                                    url: "/packages/dubai/family-tour-packages",
                                },
                                {
                                    name: "Vietnam Family Packages",
                                    url: "/packages/vietnam/family-tour-packages",
                                },
                                {
                                    name: "Singapore Family Packages",
                                    url: "/packages/singapore/family-tour-packages",
                                },
                                {
                                    name: "Sri Lanka Family Packages",
                                    url: "/packages/sri-lanka/family-tour-packages",
                                },
                                {
                                    name: "Turkey Family Packages",
                                    url: "/packages/turkey/family-tour-packages",
                                },
                                {
                                    name: "Japan Family Packages",
                                    url: "/packages/japan/family-tour-packages",
                                },
                                {
                                    name: "Greece Family Packages",
                                    url: "/packages/greece/family-tour-packages",
                                },
                                {
                                    name: "Mauritius Family Packages",
                                    url: "/packages/mauritius/family-tour-packages",
                                },
                                {
                                    name: "UK Family Packages",
                                    url: "/packages/united-kingdom/family-tour-packages",
                                },
                                {
                                    name: "Australia Family Packages",
                                    url: "/packages/australia/family-tour-packages",
                                },
                                {
                                    name: "Malaysia Family Packages",
                                    url: "/packages/malaysia/family-tour-packages",
                                },
                                {
                                    name: "Philippines Family Packages",
                                    url: "/packages/philippines/family-tour-packages",
                                },
                                {
                                    name: "Seychelles Family Packages",
                                    url: "/packages/seychelles/family-tour-packages",
                                },
                                {
                                    name: "New Zealand Family Packages",
                                    url: "/packages/new-zealand/family-tour-packages",
                                },
                                {
                                    name: "South Africa Family Packages",
                                    url: "/packages/south-africa/family-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "4",
                            category: "Honeymoon Theme Packages",
                            contents: [
                                {
                                    name: "International Honeymoon Packages",
                                    url: "/packages/honeymoon-tour-packages",
                                },
                                {
                                    name: "Thailand Honeymoon Packages",
                                    url: "/packages/thailand/honeymoon-tour-packages",
                                },
                                {
                                    name: "Europe Honeymoon Packages",
                                    url: "/packages/europe/honeymoon-tour-packages",
                                },
                                {
                                    name: "Maldives Honeymoon Packages",
                                    url: "/packages/maldives/honeymoon-tour-packages",
                                },
                                {
                                    name: "Bali Honeymoon Packages",
                                    url: "/packages/bali/honeymoon-tour-packages",
                                },
                                {
                                    name: "Dubai Honeymoon Packages",
                                    url: "/packages/dubai/honeymoon-tour-packages",
                                },
                                {
                                    name: "Vietnam Honeymoon Packages",
                                    url: "/packages/vietnam/honeymoon-tour-packages",
                                },
                                {
                                    name: "Singapore Honeymoon Packages",
                                    url: "/packages/singapore/honeymoon-tour-packages",
                                },
                                {
                                    name: "Sri Lanka Honeymoon Packages",
                                    url: "/packages/sri-lanka/honeymoon-tour-packages",
                                },
                                {
                                    name: "Turkey Honeymoon Packages",
                                    url: "/packages/turkey/honeymoon-tour-packages",
                                },
                                {
                                    name: "Japan Honeymoon Packages",
                                    url: "/packages/japan/honeymoon-tour-packages",
                                },
                                {
                                    name: "Greece Honeymoon Packages",
                                    url: "/packages/greece/honeymoon-tour-packages",
                                },
                                {
                                    name: "Mauritius Honeymoon Packages",
                                    url: "/packages/mauritius/honeymoon-tour-packages",
                                },
                                {
                                    name: "UK Honeymoon Packages",
                                    url: "/packages/united-kingdom/honeymoon-tour-packages",
                                },
                                {
                                    name: "Australia Honeymoon Packages",
                                    url: "/packages/australia/honeymoon-tour-packages",
                                },
                                {
                                    name: "Azerbaijan Honeymoon Packages",
                                    url: "/packages/australia/honeymoon-tour-packages",
                                },
                                {
                                    name: "Malaysia Honeymoon Packages",
                                    url: "/packages/malaysia/honeymoon-tour-packages",
                                },
                                {
                                    name: "Philippines Honeymoon Packages",
                                    url: "/packages/philippines/honeymoon-tour-packages",
                                },
                                {
                                    name: "Seychelles Honeymoon Packages",
                                    url: "/packages/seychelles/honeymoon-tour-packages",
                                },
                                {
                                    name: "New Zealand Honeymoon Packages",
                                    url: "/packages/new-zealand/honeymoon-tour-packages",
                                },
                                {
                                    name: "South Africa Honeymoon Packages",
                                    url: "/packages/south-africa/honeymoon-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "5",
                            category: "Adventure Theme Packages",
                            contents: [
                                {
                                    name: "International Adventure Packages",
                                    url: "/packages/adventure-tour-packages",
                                },
                                {
                                    name: "Thailand Adventure Packages",
                                    url: "/packages/thailand/adventure-tour-packages",
                                },
                                {
                                    name: "Europe Adventure Packages",
                                    url: "/packages/europe/adventure-tour-packages",
                                },
                                {
                                    name: "Maldives Adventure Packages",
                                    url: "/packages/maldives/adventure-tour-packages",
                                },
                                {
                                    name: "Bali Adventure Packages",
                                    url: "/packages/bali/adventure-tour-packages",
                                },
                                {
                                    name: "Dubai Adventure Packages",
                                    url: "/packages/dubai/adventure-tour-packages",
                                },
                                {
                                    name: "Vietnam Adventure Packages",
                                    url: "/packages/vietnam/adventure-tour-packages",
                                },
                                {
                                    name: "Singapore Adventure Packages",
                                    url: "/packages/singapore/adventure-tour-packages",
                                },
                                {
                                    name: "Turkey Adventure Packages",
                                    url: "/packages/turkey/adventure-tour-packages",
                                },
                                {
                                    name: "Japan Adventure Packages",
                                    url: "/packages/japan/adventure-tour-packages",
                                },
                                {
                                    name: "Greece Adventure Packages",
                                    url: "/packages/greece/adventure-tour-packages",
                                },
                                {
                                    name: "Mauritius Adventure Packages",
                                    url: "/packages/mauritius/adventure-tour-packages",
                                },
                                {
                                    name: "UK Adventure Packages",
                                    url: "/packages/united-kingdom/adventure-tour-packages",
                                },
                                {
                                    name: "Australia Adventure Packages",
                                    url: "/packages/australia/adventure-tour-packages",
                                },
                                {
                                    name: "Azerbaijan Adventure Packages",
                                    url: "/packages/australia/adventure-tour-packages",
                                },
                                {
                                    name: "Malaysia Adventure Packages",
                                    url: "/packages/malaysia/adventure-tour-packages",
                                },
                                {
                                    name: "Philippines Adventure Packages",
                                    url: "/packages/philippines/adventure-tour-packages",
                                },
                                {
                                    name: "Seychelles Adventure Packages",
                                    url: "/packages/seychelles/adventure-tour-packages",
                                },
                                {
                                    name: "New Zealand Adventure Packages",
                                    url: "/packages/new-zealand/adventure-tour-packages",
                                },
                                {
                                    name: "South Africa Honeymoon Packages",
                                    url: "/packages/south-africa/adventure-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "6",
                            category: "Exclusive Packages",
                            contents: [
                                {
                                    name: "Tour Packages from Chennai",
                                    url: "/packages/tour-packages-from-chennai",
                                },
                                {
                                    name: "Tour Packages from Mumbai",
                                    url: "/packages/tour-packages-from-mumbai",
                                },
                                {
                                    name: "Tour Packages from Delhi",
                                    url: "/packages/tour-packages-from-delhi",
                                },
                                {
                                    name: "Tour Packages from Bangalore",
                                    url: "/packages/tour-packages-from-bengaluru",
                                },
                                {
                                    name: "Tour Packages from Pune",
                                    url: "/packages/tour-packages-from-pune",
                                },
                                {
                                    name: "Tour Packages from Ahmedabad",
                                    url: "/packages/tour-packages-from-ahmedabad",
                                },
                                {
                                    name: "Tour Packages from Kolkata",
                                    url: "/packages/tour-packages-from-kolkata",
                                },
                                {
                                    name: "Tour Packages from Kochi",
                                    url: "/packages/tour-packages-from-kochi",
                                },
                                {
                                    name: "Tour Packages from Hyderabad",
                                    url: "/packages/tour-packages-from-hyderabad",
                                },
                                {
                                    name: "International Packages under 30K",
                                    url: "/packages/international-tour-packages-under-30000",
                                },
                                {
                                    name: "International Packages under 40K",
                                    url: "/packages/international-tour-packages-under-40000",
                                },
                                {
                                    name: "International Packages under 50K",
                                    url: "/packages/international-tour-packages-under-50000",
                                },
                                {
                                    name: "International Packages under 75K",
                                    url: "/packages/international-tour-packages-under-75000",
                                },
                                {
                                    name: "International Packages under 3lakhs",
                                    url: "/packages/international-tour-packages-under-3lakhs",
                                },
                                {
                                    name: "International Honeymoon under 50K",
                                    url: "/packages/international-honeymoon-packages-under-50000",
                                },
                                {
                                    name: "International Honeymoon under 1lakh",
                                    url: "/packages/international-honeymoon-packages-under-1lakh/honeymoon-tour-packages",
                                },
                                {
                                    name: "International Honeymoon under 2lakhs",
                                    url: "/packages/international-honeymoon-packages-under-2lakhs/honeymoon-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "7",
                            category: "International Tourism",
                            contents: [
                                { name: "Maldives Tourism", url: "/tourism/maldives" },
                                { name: "Thailand Tourism", url: "/tourism/thailand" },
                                { name: "Vietnam Tourism", url: "/tourism/vietnam" },
                                { name: "Bhutan Tourism", url: "/tourism/bhutan" },
                                { name: "Azerbaijan Tourism", url: "/tourism/azerbaijan" },
                                { name: "Sri Lanka Tourism", url: "/tourism/sri-lanka" },
                                { name: "Singapore Tourism", url: "/tourism/singapore" },
                                { name: "Japan Tourism", url: "/tourism/japan" },
                                { name: "Malaysia Tourism", url: "/tourism/malaysia" },
                                { name: "Switzerland Tourism", url: "/tourism/switzerland" },
                                { name: "Turkey Tourism", url: "/tourism/turkey" },
                            ],
                        },
                        {
                            key: "8",
                            category: "Indian Tourism",
                            contents: [
                                {
                                    name: "Andaman & Nicobar Tourism",
                                    url: "/indian-tourism/andaman-nicobar",
                                },
                                {
                                    name: "Uttarakhand Tourism",
                                    url: "/indian-tourism/uttarakhand",
                                },
                                { name: "Kashmir Tourism", url: "/indian-tourism/kashmir" },
                                { name: "Sikkim Tourism", url: "/indian-tourism/sikkim" },
                                { name: "Rajasthan Tourism", url: "/indian-tourism/rajasthan" },
                                { name: "Goa Tourism", url: "/indian-tourism/goa" },
                                {
                                    name: "Lakshadweep Tourism",
                                    url: "/indian-tourism/lakshadweep",
                                },
                                { name: "Meghalaya Tourism", url: "/indian-tourism/meghalaya" },
                                { name: "Kerala Tourism", url: "/indian-tourism/kerala" },
                            ],
                        },
                        {
                            key: "9",
                            category: "Visa",
                            contents: [
                                {
                                    name: "United Arab Emirates(Dubai) Visa",
                                    url: "/visa/dubai-visa",
                                },
                                { name: "Thailand Visa", url: "/visa/thailand-visa" },
                                { name: "United States Visa", url: "/visa/usa-visa" },
                                { name: "Singapore Visa", url: "/visa/singapore-visa" },
                                { name: "Vietnam Visa", url: "/visa/vietnam-visa" },
                                { name: "United Kingdom Visa", url: "/visa/uk-visa" },
                                { name: "Indonesia Visa", url: "/visa/indonesia-visa" },
                                { name: "Malaysia Visa", url: "/visa/malaysia-visa" },
                                { name: "Canada Visa", url: "/visa/canada-visa" },
                                { name: "Turkey Visa", url: "/visa/turkey-visa" },
                                { name: "Japan Visa", url: "/visa/japan-visa" },
                                { name: "Hong Kong Visa", url: "/visa/hong-kong-visa" },
                                { name: "Philippines Visa", url: "/visa/philippines-visa" },
                                { name: "Saudi Arabia Visa", url: "/visa/saudi-arabia-visa" },
                                { name: "Switzerland Visa", url: "/visa/switzerland-visa" },
                            ],
                        },
                    ],
                    ae: [
                        {
                            key: "1",
                            category: "Explore Destinations",
                            contents: [
                                { name: "Georgia Packages from UAE", url: "/packages/georgia" },
                                {
                                    name: "Maldives Packages from UAE",
                                    url: "/packages/maldives",
                                },
                                { name: "Armenia Packages from UAE", url: "/packages/armenia" },
                                {
                                    name: "Azerbaijan Packages from UAE",
                                    url: "/packages/azerbaijan",
                                },
                                {
                                    name: "Switzerland Packages from UAE",
                                    url: "/packages/switzerland",
                                },
                                {
                                    name: "Thailand Packages from UAE",
                                    url: "/packages/thailand",
                                },
                                {
                                    name: "Indonesia Packages from UAE",
                                    url: "/packages/indonesia",
                                },
                                {
                                    name: "Philippines Packages from UAE",
                                    url: "/packages/philippines",
                                },
                                { name: "Turkey Packages from UAE", url: "/packages/turkey" },
                                {
                                    name: "Kazakhstan Packages from UAE",
                                    url: "/packages/kazakhstan",
                                },
                                {
                                    name: "Singapore Packages from UAE",
                                    url: "/packages/singapore",
                                },
                                { name: "Egypt Packages from UAE", url: "/packages/egypt" },
                                { name: "Japan Packages from UAE", url: "/packages/sri-lanka" },
                                {
                                    name: "Sri Lanka Packages from UAE",
                                    url: "/packages/sri-lanka",
                                },
                                {
                                    name: "United Kingdom Packages from UAE",
                                    url: "/packages/united-kingdom",
                                },
                                { name: "Italy Packages from UAE", url: "/packages/italy" },
                            ],
                        },
                        {
                            key: "2",
                            category: "Family Theme Packages",
                            contents: [
                                {
                                    name: "International Family Packages from UAE",
                                    url: "/ae/packages/family-tour-packages",
                                },
                                {
                                    name: "Maldives Family Packages from UAE",
                                    url: "/ae/packages/maldives/family-tour-packages",
                                },
                                {
                                    name: "Switzerland Family Packages from UAE",
                                    url: "/ae/packages/switzerland/family-tour-packages",
                                },
                                {
                                    name: "Thailand Family Packages from UAE",
                                    url: "/ae/packages/thailand/family-tour-packages",
                                },
                                {
                                    name: "Philippines Family Packages from UAE",
                                    url: "/ae/packages/philippines/family-tour-packages",
                                },
                                {
                                    name: "Turkey Family Packages from UAE",
                                    url: "/ae/packages/turkey/family-tour-packages",
                                },
                                {
                                    name: "Singapore Family Packages from UAE",
                                    url: "/ae/packages/singapore/family-tour-packages",
                                },
                                {
                                    name: "Japan Family Packages from UAE",
                                    url: "/ae/packages/japan/family-tour-packages",
                                },
                                {
                                    name: "Sri Lanka Family Packages from UAE",
                                    url: "/ae/packages/sri-lanka/family-tour-packages",
                                },
                                {
                                    name: "United Kingdom Family Packages from UAE",
                                    url: "/ae/packages/united-kingdom/family-tour-packages",
                                },
                                {
                                    name: "Italy Family Packages from UAE",
                                    url: "/ae/packages/italy/family-tour-packages",
                                },
                                {
                                    name: "Vietnam Family Packages from UAE",
                                    url: "/ae/packages/vietnam/family-tour-packages",
                                },
                                {
                                    name: "United States Family Packages from UAE",
                                    url: "/ae/packages/usa/family-tour-packages",
                                },
                                {
                                    name: "Greece Family Packages from UAE",
                                    url: "/ae/packages/greece/family-tour-packages",
                                },
                                {
                                    name: "France Family Packages from UAE",
                                    url: "/ae/packages/france/family-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "3",
                            category: "Honeymoon Theme Packages",
                            contents: [
                                {
                                    name: "International Honeymoon Packages from UAE",
                                    url: "/ae/packages/honeymoon-tour-packages",
                                },
                                {
                                    name: "Maldives Honeymoon Packages from UAE",
                                    url: "/ae/packages/maldives/honeymoon-tour-packages",
                                },
                                {
                                    name: "Switzerland Honeymoon Packages from UAE",
                                    url: "/ae/packages/switzerland/honeymoon-tour-packages",
                                },
                                {
                                    name: "Thailand Honeymoon Packages from UAE",
                                    url: "/ae/packages/thailand/honeymoon-tour-packages",
                                },
                                {
                                    name: "Philippines Honeymoon Packages from UAE",
                                    url: "/ae/packages/philippines/honeymoon-tour-packages",
                                },
                                {
                                    name: "Turkey Honeymoon Packages from UAE",
                                    url: "/ae/packages/turkey/honeymoon-tour-packages",
                                },
                                {
                                    name: "Singapore Honeymoon Packages from UAE",
                                    url: "/ae/packages/singapore/honeymoon-tour-packages",
                                },
                                {
                                    name: "Japan Honeymoon Packages from UAE",
                                    url: "/ae/packages/japan/honeymoon-tour-packages",
                                },
                                {
                                    name: "Sri Lanka Honeymoon Packages from UAE",
                                    url: "/ae/packages/sri-lanka/honeymoon-tour-packages",
                                },
                                {
                                    name: "United Kingdom Honeymoon Packages from UAE",
                                    url: "/ae/packages/united-kingdom/honeymoon-tour-packages",
                                },
                                {
                                    name: "Italy Honeymoon Packages from UAE",
                                    url: "/ae/packages/italy/honeymoon-tour-packages",
                                },
                                {
                                    name: "Vietnam Honeymoon Packages from UAE",
                                    url: "/ae/packages/vietnam/honeymoon-tour-packages",
                                },
                                {
                                    name: "Greece Honeymoon Packages from UAE",
                                    url: "/ae/packages/greece/honeymoon-tour-packages",
                                },
                                {
                                    name: "France Honeymoon Packages from UAE",
                                    url: "/ae/packages/france/honeymoon-tour-packages",
                                },
                                {
                                    name: "South Africa Honeymoon Packages from UAE",
                                    url: "/ae/packages/south-africa/honeymoon-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "4",
                            category: "Adventure Theme Packages",
                            contents: [
                                {
                                    name: "International Adventure Packages from UAE",
                                    url: "/ae/packages/adventure-tour-packages",
                                },
                                {
                                    name: "Maldives Adeventure Packages from UAE",
                                    url: "/ae/packages/maldives/adventure-tour-packages",
                                },
                                {
                                    name: "Switzerland Adeventure Packages from UAE",
                                    url: "/ae/packages/switzerland/adventure-tour-packages",
                                },
                                {
                                    name: "Thailand Adeventure Packages from UAE",
                                    url: "/ae/packages/thailand/adventure-tour-packages",
                                },
                                {
                                    name: "Philippines Adeventure Packages from UAE",
                                    url: "/ae/packages/philippines/adventure-tour-packages",
                                },
                                {
                                    name: "Turkey Adeventure Packages from UAE",
                                    url: "/ae/packages/turkey/adventure-tour-packages",
                                },
                                {
                                    name: "Singapore Adeventure Packages from UAE",
                                    url: "/ae/packages/singapore/adventure-tour-packages",
                                },
                                {
                                    name: "United Kingdom Adeventure Packages from UAE",
                                    url: "/ae/packages/united-kingdom/adventure-tour-packages",
                                },
                                {
                                    name: "Italy Adeventure Packages from UAE",
                                    url: "/ae/packages/italy/adventure-tour-packages",
                                },
                                {
                                    name: "Vietnam Adeventure Packages from UAE",
                                    url: "/ae/packages/vietnam/adventure-tour-packages",
                                },
                                {
                                    name: "Greece Adeventure Packages from UAE",
                                    url: "/ae/packages/greece/adventure-tour-packages",
                                },
                                {
                                    name: "France Adeventure Packages from UAE",
                                    url: "/ae/packages/france/adventure-tour-packages",
                                },
                                {
                                    name: "South Africa Adeventure Packages from UAE",
                                    url: "/ae/packages/south-africa/adventure-tour-packages",
                                },
                                {
                                    name: "Mauritius Adeventure Packages from UAE",
                                    url: "/ae/packages/south-africa/adventure-tour-packages",
                                },
                                {
                                    name: "Germany Adeventure Packages from UAE",
                                    url: "/ae/packages/germany/adventure-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "5",
                            category: "Exclusive Packages",
                            contents: [
                                {
                                    name: "International Tour Packages from UAE",
                                    url: "/ae/packages",
                                },
                                {
                                    name: "International Group Packages from UAE",
                                    url: "/ae/packages/group-tour-packages",
                                },
                                {
                                    name: "International Honeymoon Packages from UAE",
                                    url: "/ae/packages/honeymoon-tour-packages",
                                },
                                {
                                    name: "International Beach Packages from UAE",
                                    url: "/ae/packages/beach-tour-packages",
                                },
                                {
                                    name: "International Luxury Packages from UAE",
                                    url: "/ae/packages/luxury-tour-packages",
                                },
                            ],
                        },
                    ],
                    us: [
                        {
                            key: "1",
                            category: "Explore Destinations",
                            contents: [
                                { name: "Iceland Packages from US", url: "/packages/iceland" },
                                { name: "Japan Packages from US", url: "/packages/japan" },
                                { name: "France Packages from US", url: "/packages/france" },
                                { name: "Greece Packages from US", url: "/packages/greece" },
                                {
                                    name: "Thailand Packages from US",
                                    url: "/packages/thailand",
                                },
                                {
                                    name: "Switzerland Packages from US",
                                    url: "/packages/switzerland",
                                },
                                { name: "Fiji Packages from US", url: "/packages/fiji" },
                                {
                                    name: "Maldives Packages from US",
                                    url: "/packages/maldives",
                                },
                                { name: "Egypt Packages from US", url: "/packages/egypt" },
                                {
                                    name: "Australia Packages from US",
                                    url: "/packages/australia",
                                },
                                { name: "Hungary Packages from US", url: "/packages/hungary" },
                                { name: "Vietnam Packages from US", url: "/packages/vietnam" },
                                { name: "Germany Packages from US", url: "/packages/germany" },
                                { name: "Turkey Packages from US", url: "/packages/turkey" },
                                { name: "Croatia Packages from US", url: "/packages/croatia" },
                            ],
                        },
                        {
                            key: "2",
                            category: "Family Theme Packages",
                            contents: [
                                {
                                    name: "International Family Packages from US",
                                    url: "/us/packages/family-tour-packages",
                                },
                                {
                                    name: "Andaman Family Packages from US",
                                    url: "/us/packages/andaman/family-tour-packages",
                                },
                                {
                                    name: "Australia Family Packages from US",
                                    url: "/us/packages/australia/family-tour-packages",
                                },
                                {
                                    name: "Austria Family Packages from US",
                                    url: "/us/packages/austria/family-tour-packages",
                                },
                                {
                                    name: "Bali Family Packages from US",
                                    url: "/us/packages/bali/family-tour-packages",
                                },
                                {
                                    name: "Bangkok Family Packages from US",
                                    url: "/us/packages/bangkok/family-tour-packages",
                                },
                                {
                                    name: "California Family Packages from US",
                                    url: "/us/packages/california/family-tour-packages",
                                },
                                {
                                    name: "Cambodia Family Packages from US",
                                    url: "/us/packages/cambodia/family-tour-packages",
                                },
                                {
                                    name: "Croatia Family Packages from US",
                                    url: "/us/packages/croatia/family-tour-packages",
                                },
                                {
                                    name: "Czech Republic Family Packages from US",
                                    url: "/us/packages/czech-republic/family-tour-packages",
                                },
                                {
                                    name: "Dubai Family Packages from US",
                                    url: "/us/packages/dubai/family-tour-packages",
                                },
                                {
                                    name: "Europe Family Packages from US",
                                    url: "/us/packages/europe/family-tour-packages",
                                },
                                {
                                    name: "France Family Packages from US",
                                    url: "/us/packages/france/family-tour-packages",
                                },
                                {
                                    name: "Germany Family Packages from US",
                                    url: "/us/packages/germany/family-tour-packages",
                                },
                                {
                                    name: "Greece Family Packages from US",
                                    url: "/us/packages/greece/family-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "3",
                            category: "Honeymoon Packages",
                            contents: [
                                {
                                    name: "International Honeymoon Packages from US",
                                    url: "/us/packages/honeymoon-tour-packages",
                                },
                                {
                                    name: "Austria Honeymoon Packages from US",
                                    url: "/us/packages/austria/honeymoon-tour-packages",
                                },
                                {
                                    name: "Bali Honeymoon Packages from US",
                                    url: "/us/packages/bali/honeymoon-tour-packages",
                                },
                                {
                                    name: "Bangkok Honeymoon Packages from US",
                                    url: "/us/packages/bangkok/honeymoon-tour-packages",
                                },
                                {
                                    name: "Belgium Honeymoon Packages from US",
                                    url: "/us/packages/belgium/honeymoon-tour-packages",
                                },
                                {
                                    name: "Cambodia Honeymoon Packages from US",
                                    url: "/us/packages/cambodia/honeymoon-tour-packages",
                                },
                                {
                                    name: "Croatia Honeymoon Packages from US",
                                    url: "/us/packages/croatia/honeymoon-tour-packages",
                                },
                                {
                                    name: "Czech Republic Honeymoon Packages from US",
                                    url: "/us/packages/czech-republic/honeymoon-tour-packages",
                                },
                                {
                                    name: "Denmark Honeymoon Packages from US",
                                    url: "/us/packages/denmark/honeymoon-tour-packages",
                                },
                                {
                                    name: "Dubai Honeymoon Packages from US",
                                    url: "/us/packages/dubai/honeymoon-tour-packages",
                                },
                                {
                                    name: "Europe Honeymoon Packages from US",
                                    url: "/us/packages/europe/honeymoon-tour-packages",
                                },
                                {
                                    name: "Finland Honeymoon Packages from US",
                                    url: "/us/packages/finland/honeymoon-tour-packages",
                                },
                                {
                                    name: "France Family Packages from US",
                                    url: "/us/packages/france/honeymoon-tour-packages",
                                },
                                {
                                    name: "Germany Honeymoon Packages from US",
                                    url: "/us/packages/germany/honeymoon-tour-packages",
                                },
                                {
                                    name: "Hungary Honeymoon Packages from US",
                                    url: "/us/packages/hungary/honeymoon-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "4",
                            category: "Adventure Packages",
                            contents: [
                                {
                                    name: "International Adventure Packages from US",
                                    url: "/us/packages/adventure-tour-packages",
                                },
                                {
                                    name: "Australia Adventure Packages from US",
                                    url: "/us/packages/australia/adventure-tour-packages",
                                },
                                {
                                    name: "Austria Adventure Packages from US",
                                    url: "/us/packages/austria/adventure-tour-packages",
                                },
                                {
                                    name: "Bali Adventure Packages from US",
                                    url: "/us/packages/bali/adventure-tour-packages",
                                },
                                {
                                    name: "California Adventure Packages from US",
                                    url: "/us/packages/california/adventure-tour-packages",
                                },
                                {
                                    name: "Cambodia Adventure Packages from US",
                                    url: "/us/packages/cambodia/adventure-tour-packages",
                                },
                                {
                                    name: "Croatia Adventure Packages from US",
                                    url: "/us/packages/croatia/adventure-tour-packages",
                                },
                                {
                                    name: "Czech Republic Adventure Packages from US",
                                    url: "/us/packages/czech-republic/adventure-tour-packages",
                                },
                                {
                                    name: "Dubai Adventure Packages from US",
                                    url: "/us/packages/dubai/adventure-tour-packages",
                                },
                                {
                                    name: "Europe Adventure Packages from US",
                                    url: "/us/packages/europe/adventure-tour-packages",
                                },
                                {
                                    name: "France Adventure Packages from US",
                                    url: "/us/packages/france/adventure-tour-packages",
                                },
                                {
                                    name: "Germany Adventure Packages from US",
                                    url: "/us/packages/germany/adventure-tour-packages",
                                },
                                {
                                    name: "Greece Adventure Packages from US",
                                    url: "/us/packages/greece/adventure-tour-packages",
                                },
                                {
                                    name: "Hungary Adventure Packages from US",
                                    url: "/us/packages/hungary/adventure-tour-packages",
                                },
                                {
                                    name: "Iceland Adventure Packages from US",
                                    url: "/us/packages/iceland/adventure-tour-packages",
                                },
                            ],
                        },
                        {
                            key: "5",
                            category: "Exclusive Packages",
                            contents: [
                                {
                                    name: "International Tour Packages from US",
                                    url: "/us/packages",
                                },
                                {
                                    name: "International Group Packages from US",
                                    url: "/us/packages/group-tour-packages",
                                },
                                {
                                    name: "International Honeymoon Packages from US",
                                    url: "/us/packages/honeymoon-tour-packages",
                                },
                                {
                                    name: "International Luxury Packages from US",
                                    url: "/us/packages/luxury-tour-packages",
                                },
                            ],
                        },
                    ],
                },
                T = [
                    {
                        key: "5",
                        category: "Pickyourtrail",
                        contents: [
                            { name: "About Us", url: "/about-us" },
                            { name: "Careers", url: "/careers" },
                            { name: "Blog", url: "/blog" },
                            { name: "Testimonials", url: "/testimonials" },
                            { name: "Press", url: "/press" },
                        ],
                    },
                    {
                        key: "6",
                        category: "Policy",
                        contents: [
                            { name: "Frequently asked questions", url: "/faq" },
                            { name: "Terms & Conditions", url: "/terms-and-conditions" },
                            { name: "Privacy", url: "/privacy-policy" },
                            { name: "Cancellations", url: "/cancellation-policy" },
                            { name: "Sitemap", url: "/all" },
                            { name: "Contact Us", url: "/contact-us" },
                        ],
                    },
                ],
                F = [
                    {
                        name: "Facebook",
                        url: "https://www.facebook.com/Pickyourtrail/reviews",
                        icon: (0, o.jsx)(v.Z, { fill: "#fff" }),
                    },
                    {
                        name: "Twitter",
                        url: "https://x.com/pickyourtrail",
                        icon: (0, o.jsx)(b.Z, { fill: "#fff" }),
                    },
                    {
                        name: "Instagram",
                        url: "https://www.instagram.com/pickyourtrail/",
                        icon: (0, o.jsx)(P.Z, { fill: "#fff" }),
                    },
                    {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/company/pickyourtrail/?originalSubdomain=in",
                        icon: (0, o.jsx)(y.Z, { fill: "#fff" }),
                    },
                    {
                        name: "Youtube",
                        url: "https://www.youtube.com/Pickyourtrail",
                        icon: (0, o.jsx)(f.Z, { fill: "#fff" }),
                    },
                ],
                E = [
                    ...T,
                    {
                        key: "7",
                        category: "Talk to us",
                        contents: [
                            {
                                name: "planners@pickyourtrail.com",
                                url: "mailto:planners@pickyourtrail.com",
                                icon: (0, o.jsx)(h.Z, { fill: "#fff" }),
                            },
                            {
                                name: "+919360991166",
                                url: "tel: +919360991166",
                                icon: (0, o.jsx)(k.Z, { fill: "#fff" }),
                            },
                            {
                                name: "+916383822508",
                                url: "https://wa.me/+916383822508",
                                icon: (0, o.jsx)(x.Z, { fill: "#fff" }),
                            },
                            {
                                name: "careers@pickyourtrail.com",
                                url: "mailto:careers@pickyourtrail.com",
                                icon: (0, o.jsx)(h.Z, { fill: "#fff" }),
                            },
                        ],
                    },
                    {
                        key: "8",
                        category: "Social",
                        contents: F,
                        extras: (0, o.jsxs)(r.sg, {
                            css: { gap: "4px" },
                            children: [
                                (0, o.jsxs)(r.xv, {
                                    size: "3",
                                    css: { lineHeight: "$4" },
                                    children: [
                                        "Travel Troops Global Private Ltd. \xa9 ",
                                        new Date().getUTCFullYear(),
                                        " all rights reserved.",
                                    ],
                                }),
                                (0, o.jsx)(r.xv, {
                                    size: "3",
                                    css: { lineHeight: "$4" },
                                    children: "Triptool Global Private Limited",
                                }),
                            ],
                        }),
                    },
                ];
            [...z.in, ...T];
            let H = [];
            (0, w.Z)()
                ? H.push(
                    { text: "FAQ", link: "/faq" },
                    { text: "Contact Us", link: "/contact-us" },
                    { text: "Blog", link: "/blog" },
                    { text: "About Us", link: "/about-us" }
                )
                : H.push(
                    { text: "Testimonial", link: "/testimonials" },
                    { text: "FAQ", link: "/faq" },
                    { text: "Contact Us", link: "/contact-us" },
                    { text: "Blog", link: "/blog" },
                    { text: "About Us", link: "/about-us" },
                    { text: "Careers", link: "/careers" }
                );
            let I = [
                { text: "Your vacations", link: "/your-vacations" },
                { text: "Your account", link: "/account" },
                { text: "Your activities", link: "/activity/booked-activity" },
            ],
                L = (0, t.zo)(r.Kq, {
                    paddingBottom: 12,
                    "@lg": { flexDirection: "column" },
                }),
                B = (0, t.zo)(r.sg, {
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 40,
                    "@xl": { width: 992 },
                    "@xxl": { width: "100%" },
                }),
                Z = (0, t.zo)(r.xv, {
                    display: "flex",
                    justifyContent: "center",
                    margin: 0,
                    marginBottom: "$24i",
                    "@lg": { marginBottom: "40px" },
                    "@smMax": { textAlign: "center" },
                }),
                D = (0, t.zo)(r.xu, {
                    display: "none",
                    "@lg": {
                        width: "100%",
                        height: "245px",
                        marginBottom: "40px",
                        position: "relative",
                        display: "unset",
                    },
                }),
                M = (0, t.zo)(r.xu, {
                    width: "95%",
                    paddingBottom: "40px",
                    height: "183px",
                    position: "relative",
                    "@lg": { display: "none" },
                }),
                R = (0, t.zo)(r.xu, {
                    width: "80%",
                    height: "260px",
                    display: "none",
                    position: "relative",
                    "@lg": { width: "381px", height: "260px", display: "unset" },
                }),
                G = (0, t.zo)(r.sg, {
                    width: "100%",
                    gap: "$3i",
                    padding: "$3i",
                    "@lg": { width: "60%", paddingLeft: "$3i", paddingRight: "$3i" },
                }),
                W = (0, t.zo)(r.xv, { margin: 0, fontSize: 13, lineHeight: "$12i" }),
                V = (0, t.zo)(r.Kq, {
                    "@lg": {
                        flexDirection: "column",
                        padding: "unset",
                        justifyContent: "flex-start",
                    },
                }),
                _ = (0, t.zo)(r.xv, {
                    marginTop: "$12i",
                    marginBottom: "$5i",
                    fontSize: "$12i",
                    fontWeight: "$bold",
                    lineHeight: "$12i",
                    color: "$grey07",
                }),
                K = (0, t.zo)("a", {
                    display: "flex",
                    gap: "$5i",
                    fontSize: "$7i",
                    alignItems: "center",
                    textDecoration: "none",
                    outline: "0 none",
                    color: "$white",
                    fill: "$white",
                    marginRight: "$5i",
                    lineHeight: "$12i",
                    "&:hover": { color: "$custom03", fill: "$custom03" },
                    "@lg": { fontSize: "$8i" },
                }),
                Y = (0, t.zo)("a", { textDecoration: "none", marginRight: "$i" }),
                N = (a) => {
                    var e;
                    let { footerData: n, css: t, hideBrandSection: l = !1 } = a,
                        k = (0, u.useRouter)(),
                        h = (0, i.useMemo)(
                            () =>
                                n
                                    ? n
                                        .map((a) => {
                                            let { category: e, destinations: n } = a;
                                            return n
                                                ? {
                                                    category: e,
                                                    destinations: n.map((a) => {
                                                        let { name: e, url: n } = a;
                                                        return { displayText: (0, p.B)(e), slug: n };
                                                    }),
                                                }
                                                : null;
                                        })
                                        .filter(Boolean)
                                    : [],
                            [n]
                        );
                    return (0, o.jsx)(r.kC, {
                        id: "footer-wrapper",
                        css: { width: "100%", background: "black", color: "$white", ...t },
                        children: (0, o.jsx)(g.Z, {
                            children: (0, o.jsxs)(L, {
                                children: [
                                    (0, o.jsxs)(B, {
                                        children: [
                                            (0, o.jsx)(Z, {
                                                size: "5",
                                                children: "Partnered with the best in the industry",
                                            }),
                                            (0, o.jsx)(D, {
                                                children: (0, o.jsx)(c(), {
                                                    fill: !0,
                                                    src: (0, d.Z)(
                                                        "https://images.pickyourtrail.com/images/web_app/homepage/web-min.png",
                                                        "auto=format,compress,enhance&q=20"
                                                    ),
                                                    alt: "partners-image",
                                                }),
                                            }),
                                            (0, o.jsx)(M, {
                                                children: (0, o.jsx)(c(), {
                                                    fill: !0,
                                                    src: (0, d.Z)(
                                                        "https://images.pickyourtrail.com/images/web_app/homepage/mobile-min.png",
                                                        "auto=format,compress,enhance&q=20"
                                                    ),
                                                    alt: "partners-image",
                                                }),
                                            }),
                                            (0, o.jsx)(r.iz, {
                                                decorative: !0,
                                                css: { backgroundColor: "$custom02" },
                                            }),
                                        ],
                                    }),
                                    !l &&
                                    (0, o.jsxs)(B, {
                                        children: [
                                            (0, o.jsxs)(r.X2, {
                                                css: {
                                                    justifyContent: "space-between",
                                                    marginBottom: "$24i",
                                                },
                                                children: [
                                                    (0, o.jsx)(G, {
                                                        children:
                                                            null == C
                                                                ? void 0
                                                                : C.map((a, e) =>
                                                                    (0, o.jsx)(
                                                                        W,
                                                                        { children: a },
                                                                        "brand-text" + e
                                                                    )
                                                                ),
                                                    }),
                                                    (0, o.jsx)(R, {
                                                        children: (0, o.jsx)(c(), {
                                                            fill: !0,
                                                            src: "https://images.pickyourtrail.com/images/web_app/homepage/footer_logo.gif",
                                                            alt: "PickYourTrail.com - Build, Customize and Book personalized vacations!",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsx)(r.iz, {
                                                decorative: !0,
                                                css: { backgroundColor: "$custom02" },
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)(V, {
                                        children: [
                                            (0, o.jsxs)(r.Kq, {
                                                css: {
                                                    display: "none",
                                                    "@xl": { display: "unset", flexDirection: "column" },
                                                },
                                                children: [
                                                    h.length > 0
                                                        ? (0, o.jsx)(m.Z, {
                                                            destinationPills: h,
                                                            numOfColumn: 4,
                                                            darkTheme: !0,
                                                        })
                                                        : null,
                                                    (0, o.jsx)(B, {
                                                        css: {
                                                            paddingTop: "$24i",
                                                            alignItems: "flex-start",
                                                        },
                                                        children: (0, o.jsx)(r.X2, {
                                                            css: { marginBottom: "$24i", width: "100%" },
                                                            children: E.map((a, e) => {
                                                                let { category: n, contents: i, extras: t } = a;
                                                                return (0, o.jsxs)(
                                                                    r.sg,
                                                                    {
                                                                        css: {
                                                                            width: "25%",
                                                                            rowGap: 6,
                                                                            paddingLeft: "$3i",
                                                                            paddingRight: "$3i",
                                                                        },
                                                                        children: [
                                                                            (0, o.jsx)(_, {
                                                                                size: 3,
                                                                                css: { margin: 0 },
                                                                                children: n,
                                                                            }),
                                                                            i
                                                                                .filter((a) => {
                                                                                    let { name: e } = a;
                                                                                    return (
                                                                                        ("ae" !== k.locale &&
                                                                                            "us" !== k.locale) ||
                                                                                        ("Blog" !== e &&
                                                                                            "Press" !== e &&
                                                                                            "Sitemap" !== e)
                                                                                    );
                                                                                })
                                                                                .map((a) => {
                                                                                    let { name: i, url: t, icon: s } = a;
                                                                                    return (0, o.jsx)(
                                                                                        r.sg,
                                                                                        {
                                                                                            css: { gap: "$3i" },
                                                                                            children: (0, o.jsxs)(K, {
                                                                                                href:
                                                                                                    "in" === k.locale ||
                                                                                                        "Talk to us" === n ||
                                                                                                        "Social" === n
                                                                                                        ? t
                                                                                                        : t.startsWith(
                                                                                                            "/".concat(k.locale)
                                                                                                        )
                                                                                                            ? t
                                                                                                            : "/"
                                                                                                                .concat(k.locale)
                                                                                                                .concat(t),
                                                                                                target: "_blank",
                                                                                                title: i,
                                                                                                children: [s, i],
                                                                                            }),
                                                                                        },
                                                                                        "desktop" + (i || (s && s)) + e
                                                                                    );
                                                                                }),
                                                                            (0, o.jsx)(r.X2, {
                                                                                id: "address-element",
                                                                                css: { marginTop: "$6i" },
                                                                                children: t && t,
                                                                            }),
                                                                        ],
                                                                    },
                                                                    "item" + e
                                                                );
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, o.jsxs)(r.Kq, {
                                                css: {
                                                    marginTop: l ? 0 : "-$4i",
                                                    paddingTop: l ? "$24i" : 0,
                                                    display: "unset",
                                                    "@xl": { display: "none" },
                                                },
                                                children: [
                                                    (0, o.jsx)(s.UQ.fC, {
                                                        type: "single",
                                                        children:
                                                            n &&
                                                            (null == n ? void 0 : n.length) > 0 &&
                                                            (null === (e = n || []) || void 0 === e
                                                                ? void 0
                                                                : e.map((a, e) => {
                                                                    let { category: n, destinations: i } = a;
                                                                    return (0, o.jsxs)(
                                                                        s.UQ.ck,
                                                                        {
                                                                            value: "accordion" + e,
                                                                            children: [
                                                                                (0, o.jsx)(s.UQ.xz, {
                                                                                    children: (0, o.jsx)(r.xv, {
                                                                                        size: "3",
                                                                                        css: {
                                                                                            fontWeight: 500,
                                                                                            color: "$white",
                                                                                        },
                                                                                        children: n,
                                                                                    }),
                                                                                }),
                                                                                (0, o.jsx)(s.UQ.VY, {
                                                                                    children: (0, o.jsx)(r.Kq, {
                                                                                        css: {
                                                                                            flexDirection: "row",
                                                                                            flexWrap: "wrap",
                                                                                            gap: 0,
                                                                                        },
                                                                                        seperator: (0, o.jsx)(r.xv, {
                                                                                            css: {
                                                                                                transform: "translateY(-10%)",
                                                                                                marginRight: "$2i",
                                                                                            },
                                                                                            children: ".",
                                                                                        }),
                                                                                        children: (i || []).map(
                                                                                            (a, e) => {
                                                                                                let { name: n, url: r } = a;
                                                                                                return (0, o.jsx)(
                                                                                                    K,
                                                                                                    {
                                                                                                        href: r,
                                                                                                        title: n,
                                                                                                        children: n,
                                                                                                    },
                                                                                                    "mobile" + n + e
                                                                                                );
                                                                                            }
                                                                                        ),
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        },
                                                                        "accordion" + e
                                                                    );
                                                                })),
                                                    }),
                                                    (0, o.jsxs)(r.Kq, {
                                                        css: {
                                                            marginTop: "$6i",
                                                            marginBottom: "$4i",
                                                            flexDirection: "row",
                                                            width: "100%",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            display: "flex",
                                                            gap: "$i",
                                                        },
                                                        seperator: (0, o.jsx)(r.xv, {
                                                            css: {
                                                                transform: "translateY(-10%)",
                                                                marginRight: "$2i",
                                                                marginBottom: "$4i",
                                                            },
                                                            children: ".",
                                                        }),
                                                        children: [
                                                            F.map((a, e) => {
                                                                let { icon: n, url: r } = a;
                                                                return (0, o.jsx)(
                                                                    Y,
                                                                    {
                                                                        href: r,
                                                                        target: "_blank",
                                                                        title: r,
                                                                        children: n,
                                                                    },
                                                                    "social-link" + e
                                                                );
                                                            }),
                                                            (0, o.jsxs)(r.xv, {
                                                                size: "3",
                                                                css: {
                                                                    lineHeight: "$12i",
                                                                    marginTop: "$3i",
                                                                    textAlign: "center",
                                                                },
                                                                children: [
                                                                    "Travel Troops Global Private Ltd. \xa9",
                                                                    " ",
                                                                    new Date().getUTCFullYear(),
                                                                    " all rights reserved.",
                                                                ],
                                                            }),
                                                            (0, o.jsx)(r.xv, {
                                                                size: "3",
                                                                css: {
                                                                    lineHeight: "$12i",
                                                                    marginTop: "$3i",
                                                                    textAlign: "center",
                                                                },
                                                                children: "Triptool Global Private Limited",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var q = n(39864),
                O = n(61811),
                X = n(97976),
                J = n(65749),
                Q = n(2636),
                aa = n(22742),
                ae = n(2385),
                an = n(70024),
                ao = n(91296),
                ar = n.n(ao),
                ai = n(51490),
                at = n(88767);
            let as = async (a, e) =>
                await a({ url: "user/logout", method: "GET", signal: e }),
                al = (a) => {
                    let e = (0, ai.wh)(),
                        {
                            mutate: n,
                            mutateAsync: o,
                            ...r
                        } = (0, at.useMutation)(() => as(e, void 0), a);
                    return { UseGetLogout: n, UseGetLogoutAsync: o, ...r };
                };
            var ac = n(24727),
                au = n(32483),
                ag = n(25171),
                am = n(44950),
                ap = n(50389),
                ad = n(78449),
                ak = n(30976),
                ah = n(6236),
                af = n(27894),
                ay = n(93290),
                ax = n(28760),
                av = n(99383),
                aP = n(6487),
                ab = n(71021),
                aj = n(31250),
                a$ = n(59843);
            let aw = (0, t.zo)(r.xv, {
                fontSize: 14,
                lineHeight: "25px",
                cursor: "default",
                userSelect: "none",
            }),
                aC = (0, t.zo)("button", {
                    all: "unset",
                    fontFamily: "inherit",
                    height: 24,
                    width: 24,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "$collapsible-icon-button",
                }),
                aA = (0, t.zo)("a", {
                    fontSize: 14,
                    fontWeight: 400,
                    color: "$collapsible-link",
                    paddingBottom: 12,
                    textDecoration: "none",
                    "@lg": {
                        "&:hover": { fontWeight: 700, color: "$collapsible-link-hover" },
                    },
                }),
                aS = (0, t.zo)(s.zF.fC, { width: "100%" }),
                aU = (0, t.F4)({
                    from: { height: 0 },
                    to: { height: "var(--radix-collapsible-content-height)" },
                }),
                az = (0, t.F4)({
                    from: { height: "var(--radix-collapsible-content-height)" },
                    to: { height: 0 },
                }),
                aT = (0, t.zo)(s.zF.VY, {
                    overflow: "hidden",
                    '&[data-state="open"]': {
                        animation: "".concat(aU, " 300ms ease-out"),
                        height: "var(--radix-collapsible-content-height)",
                    },
                    '&[data-state="closed"]': {
                        animation: "".concat(az, " 300ms ease-out"),
                        height: 0,
                    },
                }),
                aF = (a) => {
                    let {
                        title: e,
                        titleProps: n,
                        contents: t,
                        contentWrapperProps: l,
                        collapsibleContentProps: c,
                        textProps: u,
                        enableShadow: g = !1,
                        highlight: m = {
                            enable: !1,
                            backgroundColor: "",
                            foregroundColor: "",
                        },
                    } = a,
                        p = (0, an.Dv)(am.s1),
                        d = s.zF.xz,
                        [k, h] = (0, i.useState)(!1);
                    return (0, o.jsx)(aS, {
                        open: k,
                        onOpenChange: h,
                        children: (0, o.jsxs)(r.sg, {
                            css: {
                                backgroundColor: "white",
                                $$shadowColor: "$colors$collapsible-shadow",
                                boxShadow: g ? "0 2px 10px $$shadowColor" : "unset",
                                ...l,
                            },
                            children: [
                                (0, o.jsx)(d, {
                                    asChild: !0,
                                    children: (0, o.jsxs)(r.kC, {
                                        css: {
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            backgroundColor:
                                                (null == m ? void 0 : m.enable) && k
                                                    ? m.backgroundColor
                                                    : "transparent",
                                            background:
                                                "Explore Destinations" === e
                                                    ? "linear-gradient(90deg, #46C84C 0%, #2E82F5 100%)"
                                                    : "none",
                                        },
                                        onClick: () => {
                                            (0, ap.L9W)(ap.wH1, { Catagory: e }, p || void 0);
                                        },
                                        children: [
                                            (0, o.jsx)(aw, {
                                                css: {
                                                    margin: 0,
                                                    paddingLeft: 12,
                                                    color:
                                                        "Explore Destinations" === e
                                                            ? "$white"
                                                            : (null == m ? void 0 : m.enable) && k
                                                                ? m.foregroundColor
                                                                : "inherit",
                                                    fontWeight:
                                                        (null == m ? void 0 : m.enable) && k
                                                            ? 600
                                                            : "inherit",
                                                    ...n,
                                                    padding:
                                                        "Explore Destinations" === e
                                                            ? "9px 0px 9px 12px"
                                                            : "0px 0px 0px 12px",
                                                },
                                                children: e,
                                            }),
                                            (0, o.jsx)(aC, {
                                                css: { paddingRight: 12 },
                                                children: k
                                                    ? (0, o.jsx)(aj.Z, {
                                                        fill: "".concat(
                                                            "Explore Destinations" === e && "white"
                                                        ),
                                                    })
                                                    : (0, o.jsx)(ab.Z, {
                                                        fill: "".concat(
                                                            "Explore Destinations" === e && "white"
                                                        ),
                                                    }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, o.jsx)(aT, {
                                    forceMount: !0,
                                    children: (0, o.jsx)(r.sg, {
                                        css: {
                                            backgroundColor:
                                                (null == m ? void 0 : m.enable) && k
                                                    ? m.backgroundColor
                                                    : "transparent",
                                            ...c,
                                        },
                                        children:
                                            null == t
                                                ? void 0
                                                : t.map((a, n) => {
                                                    let {
                                                        type: t,
                                                        value: s,
                                                        link: l = "/",
                                                        onClick: c,
                                                        pillText: g,
                                                        pillBG: d,
                                                        pillColor: h,
                                                    } = a;
                                                    return "string" === t
                                                        ? (0, o.jsx)(
                                                            aw,
                                                            {
                                                                css: {
                                                                    paddingTop: 0 === n ? 12 : 4,
                                                                    paddingLeft: 12,
                                                                    paddingRight: 12,
                                                                    paddingBottom: 12,
                                                                    color:
                                                                        (null == m ? void 0 : m.enable) && k
                                                                            ? m.foregroundColor
                                                                            : "inherit",
                                                                    ...u,
                                                                },
                                                                onClick: () => c && c(),
                                                                children: s,
                                                            },
                                                            "content" + n
                                                        )
                                                        : "node" === t && (0, i.isValidElement)(s)
                                                            ? (0, o.jsx)(
                                                                i.Fragment,
                                                                { children: s },
                                                                "content" + n
                                                            )
                                                            : "link" === t
                                                                ? (0, o.jsx)(
                                                                    r.kC,
                                                                    {
                                                                        children: (0, o.jsxs)(aA, {
                                                                            href: l,
                                                                            css: {
                                                                                display: "flex",
                                                                                paddingTop: 0 === n ? 12 : "unset",
                                                                                paddingLeft: 12,
                                                                                paddingRight: 12,
                                                                                paddingBottom: 12,
                                                                                color:
                                                                                    (null == m ? void 0 : m.enable) && k
                                                                                        ? m.foregroundColor
                                                                                        : "inherit",
                                                                                ...u,
                                                                            },
                                                                            onClick: () => {
                                                                                (0, ap.L9W)(
                                                                                    ap.KTp,
                                                                                    { Catagory: e, Packages_name: s },
                                                                                    p || void 0
                                                                                );
                                                                            },
                                                                            children: [
                                                                                s,
                                                                                g && d && h
                                                                                    ? (0, o.jsx)(
                                                                                        a$.RenderPills,
                                                                                        {
                                                                                            text: g,
                                                                                            backgroundColor: d,
                                                                                            textcolor: h,
                                                                                        },
                                                                                        n
                                                                                    )
                                                                                    : null,
                                                                            ],
                                                                        }),
                                                                    },
                                                                    "content" + n
                                                                )
                                                                : void 0;
                                                }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                aE = (a) => {
                    let {
                        trigger: e,
                        content: n,
                        header: i,
                        forceMount: t = !1,
                        ...l
                    } = a;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsxs)(s.dy.fC, {
                                ...l,
                                children: [
                                    (0, o.jsx)(s.dy.xz, { asChild: !0, children: e }),
                                    (0, o.jsxs)(s.dy.VY, {
                                        css: {
                                            backgroundColor: "#fff",
                                            width: 300,
                                            zIndex: "$max",
                                            "@lg": { width: 325 },
                                        },
                                        children: [
                                            (0, o.jsx)(r.kC, {
                                                css: {
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    paddingLeft: 12,
                                                },
                                                children: i,
                                            }),
                                            n,
                                        ],
                                    }),
                                ],
                            }),
                            t
                                ? (0, o.jsx)(r.xu, { css: { display: "none" }, children: n })
                                : null,
                        ],
                    });
                };
            var aH = n(65901);
            let aI = (0, t.zo)("span", {}),
                aL = (0, t.zo)("img", {
                    width: "auto",
                    height: "24px",
                    "@lg": { width: "122px", height: "28px" },
                }),
                aB = (0, t.zo)("a", {
                    fontSize: "$8i",
                    fontWeight: "$normal",
                    color: "$grey12",
                    textDecoration: "none",
                    paddingLeft: "$8i",
                    lineHeight: "24px",
                    display: "flex",
                }),
                aZ = (0, t.zo)("a", { textDecoration: "none", transition: "0.2s" }),
                aD = (0, t.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    gap: "$8i",
                    marginTop: "$18i",
                    maxHeight: "100%",
                    overflow: "auto",
                    paddingBottom: "72px",
                }),
                aM = (0, t.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "$18i",
                    width: "$18i",
                    backgroundColor: "transparent",
                    border: "1px solid",
                    cursor: "pointer",
                    borderRadius: "100%",
                    fontSize: "$7i",
                    fontWeight: "$bold",
                }),
                aR = () =>
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(aZ, {
                                href: "/request-whatsapp-chat",
                                target: "_blank",
                                children: (0, o.jsx)(ae.Z, {
                                    fill: "rgba(44,47,66,.6)",
                                    onClick: () => {
                                        (0, ap.L9W)(ap.X_k);
                                    },
                                }),
                            }),
                            (0, o.jsx)(aZ, {
                                href: "https://www.facebook.com/Pickyourtrail/",
                                target: "_blank",
                                children: (0, o.jsx)(X.Z, { fill: "rgba(44,47,66,.6)" }),
                            }),
                            (0, o.jsx)(aZ, {
                                href: "https://x.com/pickyourtrail",
                                target: "_blank",
                                children: (0, o.jsx)(aa.Z, { fill: "rgba(44,47,66,.6)" }),
                            }),
                            (0, o.jsx)(aZ, {
                                href: "https://www.instagram.com/pickyourtrail",
                                target: "_blank",
                                children: (0, o.jsx)(Q.Z, { fill: "rgba(44,47,66,.6)" }),
                            }),
                        ],
                    }),
                aG = (a) => {
                    let {
                        isPaid: e = !1,
                        isPackagesV2: n = !1,
                        isTransparent: t,
                        isTransparentOnlyInMobile: l,
                        isFixedNavbar: m,
                        isCBRbutton: p,
                        themeData: k,
                        regionName: h,
                        regionCode: f,
                        supportedLocales: y,
                        ...x
                    } = a,
                        v = (0, u.useRouter)(),
                        { pathname: P } = v,
                        [b, j] = (0, an.KO)(am.s1),
                        $ = (0, af.Z)({ router: v }),
                        C = "" === $ ? "in" : $,
                        [A, S] = (0, an.KO)(am.hz),
                        U = (0, an.b9)(am.fy),
                        [T, F] = (0, i.useState)(!1),
                        E = (0, i.useRef)(null),
                        L = (0, an.Dv)(am.bW),
                        [B, Z] = (0, an.KO)(am.k$),
                        [D, M] = (0, i.useState)(!1),
                        { UseGetLogoutAsync: R } = al(),
                        { getSelectedCityAsync: G } = (0, ac.A)(),
                        W = (0, an.b9)(am.e5),
                        { UseGetPackageRegionAsync: V, isLoading: _ } = (0, au.K)();
                    (0, i.useEffect)(() => {
                        T &&
                            setTimeout(() => {
                                var a;
                                null === (a = E.current) || void 0 === a || a.focus();
                            }, 100);
                    }, [T]);
                    let K = (0, i.useMemo)(
                        () =>
                            k
                                ? null == k
                                    ? void 0
                                    : k.map((a) => ({
                                        text: a.name || (null == a ? void 0 : a.themeName),
                                        link: a.key,
                                    }))
                                : [],
                        [k]
                    ),
                        Y = (0, i.useMemo)(
                            () => v.pathname.includes("group-planning"),
                            [v.pathname]
                        ),
                        N = (0, i.useMemo)(() => {
                            var a, e;
                            return (
                                (null ===
                                    (a =
                                        null === (e = z[C]) || void 0 === e
                                            ? void 0
                                            : e.slice(0, "" === $ ? 2 : 1)) || void 0 === a
                                    ? void 0
                                    : a.map((a) => ({
                                        type: "string",
                                        menu: a.category,
                                        list: (0, ah.u)(a.contents).map((a) => ({
                                            type: "link",
                                            text: a.name,
                                            link: ""
                                                .concat("" === $ ? "" : "/".concat($))
                                                .concat(a.url),
                                            pillText: a.pillText,
                                            pillColor: a.pillColor,
                                            pillBG: a.pillBG,
                                        })),
                                    }))) || []
                            );
                        }, [C, $]),
                        X = null == b ? void 0 : b.loggedIn,
                        Q = (0, i.useCallback)(async () => {
                            let a = await R();
                            (null == a ? void 0 : a.status) === "SUCCESS" && j(null);
                        }, [R, j]),
                        aa = (0, i.useCallback)(
                            (a) => {
                                let e = a || "";
                                if ("" === e || (y || []).includes(e)) {
                                    let n = (0, ak.Z)(v.asPath);
                                    location.href = ""
                                        .concat(e.length > 0 ? "/".concat(e) : "", "/")
                                        .concat(n);
                                } else location.href = "/".concat(e);
                            },
                            [v.asPath, y]
                        ),
                        ae = (0, i.useMemo)(() => {
                            var a, n;
                            let i = [];
                            return (
                                (i = [...(e ? [] : N)]),
                                p &&
                                i.push({
                                    type: "button",
                                    menu: (0, o.jsxs)(r.xu, {
                                        onClick: () => {
                                            var a;
                                            v.push(
                                                {
                                                    pathname:
                                                        null === (a = v.asPath) || void 0 === a
                                                            ? void 0
                                                            : a.split("?")[0],
                                                    query: {
                                                        ...(null == v ? void 0 : v.query),
                                                        m: "cbr",
                                                    },
                                                },
                                                void 0,
                                                { shallow: !0 }
                                            );
                                        },
                                        css: {
                                            display: "flex",
                                            padding: "8px 12px",
                                            backgroundColor: "$green500",
                                            background: "$green500",
                                            minWidth: "147px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 8,
                                            cursor: "pointer",
                                            gap: "$3i",
                                        },
                                        children: [
                                            (0, o.jsx)(ax.Z, { fill: "#fff" }),
                                            (0, o.jsx)(r.xv, {
                                                css: {
                                                    color: "$white",
                                                    fontFeatureSettings: "liga off",
                                                    fontFamily: "$sans",
                                                    fontSize: "$8i",
                                                    fontStyle: "normal",
                                                    fontWeight: "$bold",
                                                    lineHeight: "$10i",
                                                },
                                                children: "Request Call Back",
                                            }),
                                        ],
                                    }),
                                }),
                                X
                                    ? i.push({
                                        type: "node",
                                        menu: (0, o.jsx)(aM, {
                                            css: {
                                                display: "flex",
                                                borderColor: t && !Y ? "$white" : "$black",
                                                color: t && !Y ? "$white" : "$black",
                                            },
                                            children: ((null == b ? void 0 : b.name) || "")
                                                .split(" ")
                                                .slice(0, 2)
                                                .map((a) => a[0])
                                                .join(""),
                                        }),
                                        list: [
                                            {
                                                text: (null == b ? void 0 : b.name) || "",
                                                userName: !0,
                                            },
                                            ...I,
                                            {
                                                text: "Logout",
                                                callback: (a) => {
                                                    a.preventDefault(), Q();
                                                },
                                            },
                                        ],
                                        nodeProps: { justifyContent: "center" },
                                    })
                                    : i.push({
                                        type: "button",
                                        menu: (0, o.jsx)(r.xu, {
                                            css: {
                                                minWidth: 80,
                                                height: 36,
                                                fontWeight: 600,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: 8,
                                                cursor: "pointer",
                                                color: t && !Y ? "$white" : "$black",
                                                boxShadow: "inset 0 0 0 1px ".concat(
                                                    t && !Y ? "$colors$white" : "$colors$primary07"
                                                ),
                                                display: "flex",
                                            },
                                            children: "Login",
                                        }),
                                        url:
                                            "" === $
                                                ? "/login?redirectTo=".concat(v.asPath)
                                                : "/".concat($, "/signin"),
                                    }),
                                i.push({
                                    type: "drawer",
                                    content: (0, o.jsxs)(s.dy.fC, {
                                        ...x,
                                        children: [
                                            (0, o.jsx)(s.dy.xz, {
                                                asChild: !0,
                                                children: (0, o.jsx)(J.Z, {
                                                    height: 18,
                                                    width: 18,
                                                    css: {
                                                        fill: t && !Y ? "#fff" : "#000",
                                                        cursor: "pointer",
                                                        "@smMax": {
                                                            fill: l || (t && !Y && !l) ? "#fff" : "#000",
                                                        },
                                                    },
                                                }),
                                            }),
                                            (0, o.jsxs)(s.dy.VY, {
                                                css: {
                                                    backgroundColor: "#fff",
                                                    width: 300,
                                                    zIndex: "$max",
                                                    "@lg": { width: 325 },
                                                },
                                                children: [
                                                    (0, o.jsx)(r.kC, {
                                                        css: {
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            paddingLeft: 12,
                                                        },
                                                        children: (0, o.jsxs)(r.xv, {
                                                            css: {
                                                                fontSize: "$8i",
                                                                fontWeight: "$bolder",
                                                                color: "$grey08",
                                                                marginTop: "$7i",
                                                            },
                                                            children: [
                                                                "Hello,",
                                                                X ? (null == b ? void 0 : b.name) : "Guest",
                                                            ],
                                                        }),
                                                    }),
                                                    (0, o.jsxs)(aD, {
                                                        children: [
                                                            X &&
                                                            (0, o.jsx)(aB, {
                                                                onClick: (a) => {
                                                                    a.preventDefault(), Q();
                                                                },
                                                                children: "Logout",
                                                            }),
                                                            X &&
                                                            (0, o.jsxs)(o.Fragment, {
                                                                children: [
                                                                    (0, o.jsx)(aB, {
                                                                        onClick: () => {
                                                                            (0, ay.Z)("/your-vacations");
                                                                        },
                                                                        children: "Your Vacation",
                                                                    }),
                                                                    (0, o.jsx)(aB, {
                                                                        onClick: () => {
                                                                            (0, ay.Z)("/account");
                                                                        },
                                                                        children: "Your Account",
                                                                    }),
                                                                    (0, o.jsx)(aB, {
                                                                        onClick: () => {
                                                                            (0, ay.Z)("/activity/booked-activity");
                                                                        },
                                                                        children: "Your Activity",
                                                                    }),
                                                                ],
                                                            }),
                                                            null === (a = z[C]) || void 0 === a
                                                                ? void 0
                                                                : a
                                                                    .slice(
                                                                        "" === $ ? 2 : 1,
                                                                        null === (n = z[C]) || void 0 === n
                                                                            ? void 0
                                                                            : n.length
                                                                    )
                                                                    .map((a, e) =>
                                                                        (0, o.jsx)(
                                                                            aF,
                                                                            {
                                                                                title: a.category,
                                                                                titleProps: {
                                                                                    paddingLeft: "$8i",
                                                                                    cursor: "pointer",
                                                                                },
                                                                                textProps: { paddingLeft: "$10i" },
                                                                                contents: (0, ah.u)(a.contents).map(
                                                                                    (a) => ({
                                                                                        type: "link",
                                                                                        value: a.name,
                                                                                        link: a.url,
                                                                                        pillText: a.pillText,
                                                                                        pillColor: a.pillColor,
                                                                                        pillBG: a.pillBG,
                                                                                    })
                                                                                ),
                                                                                highlight: {
                                                                                    enable: !0,
                                                                                    backgroundColor: "$pyellow100",
                                                                                    foregroundColor: "$grey900",
                                                                                },
                                                                                enableShadow: !1,
                                                                                contentWrapperProps: {
                                                                                    cursor: "pointer",
                                                                                },
                                                                            },
                                                                            "collapsible-item" + e
                                                                        )
                                                                    ),
                                                            H.filter(
                                                                (a) => "" === $ || "Blog" !== a.text
                                                            ).map((a, e) =>
                                                                (0, o.jsx)(
                                                                    r.Kq,
                                                                    {
                                                                        css: { gap: "$3i" },
                                                                        children: (0, o.jsx)(aB, {
                                                                            href:
                                                                                "" === $
                                                                                    ? a.link
                                                                                    : "/".concat($).concat(a.link),
                                                                            children: a.text,
                                                                        }),
                                                                    },
                                                                    "menu-link" + e
                                                                )
                                                            ),
                                                            (0, o.jsx)(o.Fragment, {
                                                                children: [
                                                                    {
                                                                        key: "5",
                                                                        category: "Choose country",
                                                                        contents: [
                                                                            { name: "PYT - India", url: "" },
                                                                            {
                                                                                name: "PYT - United States",
                                                                                url: "us",
                                                                            },
                                                                            {
                                                                                name: "PYT - United Arab Emirates",
                                                                                url: "ae",
                                                                            },
                                                                        ],
                                                                    },
                                                                ].map((a, e) =>
                                                                    (0, o.jsx)(
                                                                        aF,
                                                                        {
                                                                            title: a.category,
                                                                            titleProps: { paddingLeft: "$8i" },
                                                                            textProps: {
                                                                                paddingLeft: "$10i",
                                                                                fontSize: "$7i",
                                                                                cursor: "pointer",
                                                                                "&:hover": {
                                                                                    fontWeight: 700,
                                                                                    color: "$collapsible-link-hover",
                                                                                },
                                                                            },
                                                                            contents: a.contents.map((a) => ({
                                                                                type: "string",
                                                                                value: a.name,
                                                                                link: a.url,
                                                                                onClick: () => aa(a.url),
                                                                            })),
                                                                            highlight: {
                                                                                enable: !0,
                                                                                backgroundColor: "$pyellow100",
                                                                                foregroundColor: "$grey900",
                                                                            },
                                                                            enableShadow: !1,
                                                                        },
                                                                        "collapsible-item-" + e
                                                                    )
                                                                ),
                                                            }),
                                                            (0, o.jsx)(r.sg, {
                                                                css: { gap: "$5i", marginTop: "$6i" },
                                                                children: (0, o.jsxs)(r.X2, {
                                                                    css: {
                                                                        gap: "$5i",
                                                                        alignItems: "center",
                                                                        justifyContent: "space-between",
                                                                    },
                                                                    children: [
                                                                        (0, o.jsx)(aB, {
                                                                            href: "tel: +919360991166",
                                                                            children: "+919360991166",
                                                                        }),
                                                                        (0, o.jsx)(r.X2, {
                                                                            css: { gap: "$4i", paddingRight: "$8i" },
                                                                            children: (0, o.jsx)(aR, {}),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                i
                            );
                        }, [
                            e,
                            N,
                            p,
                            X,
                            v,
                            x,
                            t,
                            l,
                            null == b ? void 0 : b.name,
                            C,
                            Q,
                            $,
                            aa,
                        ]),
                        ao = (0, i.useMemo)(
                            () =>
                                X &&
                                    (null == b ? void 0 : b.partner) === "CLUB_MAHINDRA" &&
                                    "true" === localStorage.getItem("show_combined_logo")
                                    ? "CLUB_MAHINDRA"
                                    : "",
                            [X, null == b ? void 0 : b.partner]
                        ),
                        ai = (0, i.useMemo)(() => (0, aP.zn)({ type: ao }), [ao]),
                        at = (0, i.useMemo)(
                            () => ({
                                ...("xmas-logo" === ai
                                    ? {
                                        width: "auto",
                                        height: "34px",
                                        "@lg": { width: "auto", height: "54px" },
                                    }
                                    : "valentine-logo" === ai
                                        ? {
                                            width: "auto",
                                            height: "54px",
                                            marginLeft: "-8px",
                                            "@lg": {
                                                width: "280px",
                                                height: "62px",
                                                marginLeft: "-48px",
                                            },
                                        }
                                        : "ixigo-logo" === ai
                                            ? {
                                                width: "180px",
                                                height: "40px",
                                                "@lg": { width: "200px", height: "52px" },
                                            }
                                            : {
                                                width: "auto",
                                                height: "24px",
                                                "@lg": { width: "160px", height: "28px" },
                                            }),
                            }),
                            [ai]
                        ),
                        as = (0, i.useCallback)(
                            ar()(async (a) => {
                                try {
                                    if (null == a ? void 0 : a.length) {
                                        let e = await V({ searchString: a });
                                        if (
                                            (console.log({ response: e }),
                                                (null == e ? void 0 : e.message) == "Success" &&
                                                (null == e ? void 0 : e.data))
                                        ) {
                                            let n = Object.keys(null == e ? void 0 : e.data),
                                                o =
                                                    null == n
                                                        ? void 0
                                                        : n.map((a) => {
                                                            var n, o, r;
                                                            return {
                                                                region: a,
                                                                regionData:
                                                                    null ===
                                                                        (n = null == e ? void 0 : e.data[a]) ||
                                                                        void 0 === n
                                                                        ? void 0
                                                                        : n.packages,
                                                                cityId:
                                                                    null ===
                                                                        (o = null == e ? void 0 : e.data[a]) ||
                                                                        void 0 === o
                                                                        ? void 0
                                                                        : o.cityId,
                                                                regionCode:
                                                                    null ===
                                                                        (r = null == e ? void 0 : e.data[a]) ||
                                                                        void 0 === r
                                                                        ? void 0
                                                                        : r.regionCode,
                                                            };
                                                        });
                                            Z(o);
                                        } else M(!0);
                                    } else M(!1), Z([]);
                                } catch (r) {
                                    M(!0), Z([]);
                                }
                            }, 1e3),
                            []
                        ),
                        ab = (a) => {
                            S(a.target.value), as(a.target.value);
                        },
                        aj = async (a) => {
                            let { cityId: e, regionNmae: n, regionCode: o } = a;
                            if (e) {
                                let { data: r } = await G({ cityId: e });
                                W({ selectedCityId: e, displayTextForRegion: n, cities: [r] });
                            }
                            v.push("/customize/".concat(o));
                        };
                    return (0, o.jsx)(r.kC, {
                        css: {
                            width: "100%",
                            position: t ? "absolute" : m ? "fixed" : "relative",
                            top: 0,
                            background:
                                t && !Y
                                    ? "linear-gradient(0deg, rgba(0, 0, 0, 0) -0.16%, rgba(0, 0, 0, 0.5) 100%)"
                                    : "transparent",
                            zIndex: "$5",
                            ...x,
                            "@lg": { top: 0 },
                            "@smMax": {
                                position: l || (t && !Y && !l) ? "absolute" : "relative",
                                background:
                                    l || (t && !l)
                                        ? "linear-gradient(0deg, rgba(0, 0, 0, 0) -0.16%, rgba(0, 0, 0, 0.5) 100%)"
                                        : "transparent",
                            },
                        },
                        children: (0, o.jsx)(g.Z, {
                            children: (0, o.jsxs)(r.kC, {
                                css: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    position: "relative",
                                    minHeight: 47,
                                    "@lg": { flexDirection: "row", minHeight: 72 },
                                },
                                children: [
                                    (0, o.jsxs)(r.X2, {
                                        align: "center",
                                        css: {},
                                        children: [
                                            (0, o.jsx)(aZ, {
                                                as: e ? "span" : "a",
                                                ...(e ? {} : { href: "" === $ ? "/" : "/".concat($) }),
                                                onClick: () => {
                                                    (0, ap.L9W)(ap.U9I);
                                                },
                                                children:
                                                    l && !t
                                                        ? (0, o.jsxs)(o.Fragment, {
                                                            children: [
                                                                (0, o.jsx)(r.xu, {
                                                                    css: {
                                                                        display: "inline-flex",
                                                                        "@sm": { display: "none" },
                                                                    },
                                                                    children: (
                                                                        null == P
                                                                            ? void 0
                                                                            : P.startsWith("/flights")
                                                                    )
                                                                        ? (0, o.jsx)(c(), {
                                                                            src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/triptool.png",
                                                                            alt: "Trip tool",
                                                                            width: 86,
                                                                            height: 22,
                                                                        })
                                                                        : (0, o.jsx)(aL, {
                                                                            src: (0, aP.jx)({
                                                                                isTransparent: l,
                                                                                type: ao,
                                                                            }),
                                                                            alt: "pickyourtrail_logo",
                                                                            width: "252px",
                                                                            height: "54px",
                                                                            css: at,
                                                                        }),
                                                                }),
                                                                (0, o.jsx)(r.xu, {
                                                                    css: {
                                                                        display: "none",
                                                                        "@sm": { display: "inline-flex" },
                                                                    },
                                                                    children: (
                                                                        null == P
                                                                            ? void 0
                                                                            : P.startsWith("/flights")
                                                                    )
                                                                        ? (0, o.jsx)(c(), {
                                                                            src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/triptool.png",
                                                                            alt: "Trip tool",
                                                                            width: 86,
                                                                            height: 22,
                                                                        })
                                                                        : (0, o.jsx)(aL, {
                                                                            src: (0, aP.jx)({
                                                                                isTransparent: t && !Y,
                                                                                type: ao,
                                                                            }),
                                                                            alt: "pickyourtrail_logo",
                                                                            width: "252px",
                                                                            height: "54px",
                                                                            css: at,
                                                                        }),
                                                                }),
                                                            ],
                                                        })
                                                        : (0, o.jsx)(o.Fragment, {
                                                            children: P.startsWith("/flights")
                                                                ? (0, o.jsx)(c(), {
                                                                    src: "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/triptool.png",
                                                                    alt: "Trip tool",
                                                                    width: 86,
                                                                    height: 22,
                                                                })
                                                                : (0, o.jsx)(aL, {
                                                                    src: (0, aP.jx)({
                                                                        isTransparent: t && !Y,
                                                                        type: ao,
                                                                    }),
                                                                    alt: "pickyourtrail_logo",
                                                                    width: "252px",
                                                                    height: "54px",
                                                                    css: at,
                                                                }),
                                                        }),
                                            }),
                                            n
                                                ? (0, o.jsx)(r.kC, {
                                                    css: {
                                                        "@smMax": { display: "none" },
                                                        paddingLeft: "$15i",
                                                    },
                                                    children: (0, o.jsxs)(s.J2.fC, {
                                                        open: T,
                                                        modal: !1,
                                                        onOpenChange: F,
                                                        children: [
                                                            (0, o.jsx)(s.J2.xz, {
                                                                asChild: !0,
                                                                onClick: (a) => {
                                                                    a.preventDefault(), F(!0);
                                                                },
                                                                children: (0, o.jsxs)(r.X2, {
                                                                    css: {},
                                                                    children: [
                                                                        (0, o.jsx)(r.xu, {
                                                                            css: {
                                                                                width: "272px",
                                                                                borderTop: "1px solid $grey300",
                                                                                borderBottom: "1px solid $grey300",
                                                                                borderLeft: "1px solid $grey300",
                                                                                borderTopLeftRadius: "10px",
                                                                                borderBottomLeftRadius: "10px",
                                                                                overflow: "hidden",
                                                                                backgroundColor: "$white",
                                                                            },
                                                                            children: (0, o.jsx)(r.II, {
                                                                                ref: E,
                                                                                placeholder:
                                                                                    "Search countries, cities..",
                                                                                css: {
                                                                                    padding: "$7i 0 $7i $7i",
                                                                                    height: "auto",
                                                                                    boxShadow: "none",
                                                                                    border: "none",
                                                                                    color: "$grey700",
                                                                                    fontFamily: "$manrope",
                                                                                    fontSize: "$7i",
                                                                                    lineHeight: "$10i",
                                                                                    fontWeight: "$bolder",
                                                                                    "&::placeholder": {
                                                                                        color: "$grey700",
                                                                                        fontFamily: "$manrope",
                                                                                        fontSize: "$7i",
                                                                                        lineHeight: "$10i",
                                                                                        fontWeight: "$bolder",
                                                                                    },
                                                                                    "&:hover": {
                                                                                        border: "none",
                                                                                        boxShadow: "none",
                                                                                    },
                                                                                    "&:focus": {
                                                                                        border: "none",
                                                                                        boxShadow: "none",
                                                                                    },
                                                                                },
                                                                                onBlur: (a) => {
                                                                                    if (T) {
                                                                                        var e;
                                                                                        a.preventDefault(),
                                                                                            null === (e = E.current) ||
                                                                                            void 0 === e ||
                                                                                            e.focus();
                                                                                    }
                                                                                },
                                                                                onChange: ab,
                                                                                value: A,
                                                                            }),
                                                                        }),
                                                                        (0, o.jsx)(r.xu, {
                                                                            onClick: () => {
                                                                                U(!0);
                                                                            },
                                                                            css: {
                                                                                padding: "0 $8i",
                                                                                backgroundColor: "$accent400",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                borderTopRightRadius: "10px",
                                                                                borderBottomRightRadius: "10px",
                                                                            },
                                                                            children: (0, o.jsx)(O.Z, {
                                                                                fill: "$white",
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            (0, o.jsx)(s.J2.VY, {
                                                                css: {
                                                                    height: (null == A ? void 0 : A.length)
                                                                        ? "392px"
                                                                        : "fit-content",
                                                                    width: "264px",
                                                                    backgroundColor: "$white",
                                                                    overflow: "scroll",
                                                                    marginTop: "10px",
                                                                    border: "1px solid $grey100",
                                                                    boxShadow: "none",
                                                                    padding: 0,
                                                                },
                                                                children:
                                                                    (null == A ? void 0 : A.length) || "" != A
                                                                        ? _
                                                                            ? (0, o.jsx)(r.sg, {
                                                                                justify: "center",
                                                                                css: {
                                                                                    gap: "$14i",
                                                                                    height: "100%",
                                                                                    padding: "0 $6i",
                                                                                },
                                                                                children: [
                                                                                    1, 2, 3, 4, 5, 6, 7, 8,
                                                                                ].map((a, e) =>
                                                                                    (0, o.jsx)(
                                                                                        r.xu,
                                                                                        {
                                                                                            children: (0, o.jsx)(r.Od, {
                                                                                                variant: "text",
                                                                                                css: {
                                                                                                    width: "100%",
                                                                                                    height: "12px",
                                                                                                    background:
                                                                                                        "linear-gradient(90deg, #F7F8FB 24.09%, rgba(248, 249, 252, 0.00) 115.76%)",
                                                                                                },
                                                                                            }),
                                                                                        },
                                                                                        e
                                                                                    )
                                                                                ),
                                                                            })
                                                                            : (0, o.jsx)(o.Fragment, {
                                                                                children: (
                                                                                    null == B ? void 0 : B.length
                                                                                )
                                                                                    ? (0, o.jsx)(o.Fragment, {
                                                                                        children:
                                                                                            null == B
                                                                                                ? void 0
                                                                                                : B.map((a, e) => {
                                                                                                    var n;
                                                                                                    return (0, o.jsxs)(
                                                                                                        r.sg,
                                                                                                        {
                                                                                                            css: {
                                                                                                                borderBottom:
                                                                                                                    (null == B
                                                                                                                        ? void 0
                                                                                                                        : B.length) -
                                                                                                                        1 ==
                                                                                                                        e
                                                                                                                        ? "none"
                                                                                                                        : "1px solid $grey100",
                                                                                                                padding:
                                                                                                                    "$8i 0 0 $8i",
                                                                                                                ".packagesType":
                                                                                                                {
                                                                                                                    "&:hover": {
                                                                                                                        backgroundColor:
                                                                                                                            "$yellow50",
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                            children: [
                                                                                                                (0, o.jsx)(
                                                                                                                    r.xv,
                                                                                                                    {
                                                                                                                        css: {
                                                                                                                            fontSize:
                                                                                                                                "$7i",
                                                                                                                            lineHeight:
                                                                                                                                "$10i",
                                                                                                                            fontWeight:
                                                                                                                                "$bolder",
                                                                                                                            color:
                                                                                                                                "$grey800",
                                                                                                                            fontFamily:
                                                                                                                                "$manrope",
                                                                                                                        },
                                                                                                                        children:
                                                                                                                            (0, ad.Z)(
                                                                                                                                a.region
                                                                                                                            ),
                                                                                                                    }
                                                                                                                ),
                                                                                                                (0, o.jsxs)(
                                                                                                                    aB,
                                                                                                                    {
                                                                                                                        onClick: (
                                                                                                                            e
                                                                                                                        ) => {
                                                                                                                            null ==
                                                                                                                                e ||
                                                                                                                                e.preventDefault(),
                                                                                                                                aj({
                                                                                                                                    cityId:
                                                                                                                                        null ==
                                                                                                                                            a
                                                                                                                                            ? void 0
                                                                                                                                            : a.cityId,
                                                                                                                                    regionNmae:
                                                                                                                                        a.region,
                                                                                                                                    regionCode:
                                                                                                                                        null ==
                                                                                                                                            a
                                                                                                                                            ? void 0
                                                                                                                                            : a.regionCode,
                                                                                                                                });
                                                                                                                        },
                                                                                                                        href: "/customize/".concat(
                                                                                                                            null == a
                                                                                                                                ? void 0
                                                                                                                                : a.regionCode
                                                                                                                        ),
                                                                                                                        className:
                                                                                                                            "packagesType",
                                                                                                                        css: {
                                                                                                                            padding:
                                                                                                                                "$8i",
                                                                                                                            gap: "$2i",
                                                                                                                            cursor:
                                                                                                                                "pointer",
                                                                                                                            alignItems:
                                                                                                                                "center",
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                            (0,
                                                                                                                                o.jsx)(
                                                                                                                                    r.xv,
                                                                                                                                    {
                                                                                                                                        css: {
                                                                                                                                            fontSize:
                                                                                                                                                "$7i",
                                                                                                                                            lineHeight:
                                                                                                                                                "$10i",
                                                                                                                                            fontWeight:
                                                                                                                                                "$bolder",
                                                                                                                                            color:
                                                                                                                                                "$grey800",
                                                                                                                                            fontFamily:
                                                                                                                                                "$manrope",
                                                                                                                                        },
                                                                                                                                        children:
                                                                                                                                            "Build your own Itinerary",
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                            (0,
                                                                                                                                o.jsx)(
                                                                                                                                    av.Z,
                                                                                                                                    {
                                                                                                                                        fill: "#09B367",
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        ],
                                                                                                                    }
                                                                                                                ),
                                                                                                                null ===
                                                                                                                    (n =
                                                                                                                        a.regionData) ||
                                                                                                                    void 0 === n
                                                                                                                    ? void 0
                                                                                                                    : n.map(
                                                                                                                        (a, e) =>
                                                                                                                            (0,
                                                                                                                                o.jsx)(
                                                                                                                                    aB,
                                                                                                                                    {
                                                                                                                                        href: "/".concat(
                                                                                                                                            null ==
                                                                                                                                                a
                                                                                                                                                ? void 0
                                                                                                                                                : a.key
                                                                                                                                        ),
                                                                                                                                        className:
                                                                                                                                            "packagesType",
                                                                                                                                        css: {
                                                                                                                                            padding:
                                                                                                                                                "$8i",
                                                                                                                                            gap: "$2i",
                                                                                                                                            cursor:
                                                                                                                                                "pointer",
                                                                                                                                            alignItems:
                                                                                                                                                "center",
                                                                                                                                        },
                                                                                                                                        children:
                                                                                                                                            (0,
                                                                                                                                                o.jsxs)(
                                                                                                                                                    r.xv,
                                                                                                                                                    {
                                                                                                                                                        css: {
                                                                                                                                                            fontSize:
                                                                                                                                                                "$7i",
                                                                                                                                                            lineHeight:
                                                                                                                                                                "$10i",
                                                                                                                                                            fontWeight:
                                                                                                                                                                "$bolder",
                                                                                                                                                            color:
                                                                                                                                                                "$grey800",
                                                                                                                                                            fontFamily:
                                                                                                                                                                "$manrope",
                                                                                                                                                        },
                                                                                                                                                        children:
                                                                                                                                                            [
                                                                                                                                                                null ==
                                                                                                                                                                    a
                                                                                                                                                                    ? void 0
                                                                                                                                                                    : a.name,
                                                                                                                                                                " ",
                                                                                                                                                                (0,
                                                                                                                                                                    o.jsx)(
                                                                                                                                                                        aI,
                                                                                                                                                                        {
                                                                                                                                                                            css: {
                                                                                                                                                                                fontSize:
                                                                                                                                                                                    "$7i",
                                                                                                                                                                                lineHeight:
                                                                                                                                                                                    "$10i",
                                                                                                                                                                                fontWeight:
                                                                                                                                                                                    "$bold",
                                                                                                                                                                                color:
                                                                                                                                                                                    "$grey800",
                                                                                                                                                                                fontFamily:
                                                                                                                                                                                    "$manrope",
                                                                                                                                                                            },
                                                                                                                                                                            children:
                                                                                                                                                                                "packages",
                                                                                                                                                                        }
                                                                                                                                                                    ),
                                                                                                                                                            ],
                                                                                                                                                    }
                                                                                                                                                ),
                                                                                                                                    },
                                                                                                                                    e
                                                                                                                                )
                                                                                                                    ),
                                                                                                            ],
                                                                                                        },
                                                                                                        e
                                                                                                    );
                                                                                                }),
                                                                                    })
                                                                                    : D
                                                                                        ? (0, o.jsx)(r.sg, {
                                                                                            justify: "center",
                                                                                            align: "center",
                                                                                            css: {
                                                                                                gap: "$14i",
                                                                                                height: "100%",
                                                                                                padding: "0 $6i",
                                                                                            },
                                                                                            children: (0, o.jsx)(r.xv, {
                                                                                                css: {
                                                                                                    fontSize: "$7i",
                                                                                                    lineHeight: "$10i",
                                                                                                    fontWeight: "$bolder",
                                                                                                    color: "$grey800",
                                                                                                    fontFamily: "$manrope",
                                                                                                },
                                                                                                children:
                                                                                                    "No result found!",
                                                                                            }),
                                                                                        })
                                                                                        : null,
                                                                            })
                                                                        : (0, o.jsxs)(r.sg, {
                                                                            children: [
                                                                                (0, o.jsxs)(aB, {
                                                                                    href: f
                                                                                        ? "/customize/".concat(f)
                                                                                        : "/customize",
                                                                                    css: {
                                                                                        padding: "$7i",
                                                                                        gap: "$2i",
                                                                                        backgroundColor: "$blue50",
                                                                                        cursor: "pointer",
                                                                                        alignItems: "center",
                                                                                    },
                                                                                    children: [
                                                                                        (0, o.jsx)(av.Z, {
                                                                                            fill: "#09B367",
                                                                                        }),
                                                                                        (0, o.jsxs)(r.xv, {
                                                                                            css: {
                                                                                                fontSize: "$7i",
                                                                                                lineHeight: "$10i",
                                                                                                fontWeight: "$bold",
                                                                                                color: "$grey800",
                                                                                                fontFamily: "$manrope",
                                                                                            },
                                                                                            children: [
                                                                                                "Build your own ",
                                                                                                (0, ad.Z)(h),
                                                                                                " ",
                                                                                                "itinerary",
                                                                                            ],
                                                                                        }),
                                                                                        (0, o.jsx)(q.Z, {
                                                                                            fill: "$grey500",
                                                                                            css: { marginTop: "$2i" },
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                null == K
                                                                                    ? void 0
                                                                                    : K.map((a, e) =>
                                                                                        (0, o.jsx)(
                                                                                            aB,
                                                                                            {
                                                                                                href: "/".concat(
                                                                                                    null == a
                                                                                                        ? void 0
                                                                                                        : a.link
                                                                                                ),
                                                                                                css: {
                                                                                                    padding: "$8i",
                                                                                                    gap: "$2i",
                                                                                                    borderBottom:
                                                                                                        (null == K
                                                                                                            ? void 0
                                                                                                            : K.length) -
                                                                                                            1 ==
                                                                                                            e
                                                                                                            ? "none"
                                                                                                            : "1px solid $grey100",
                                                                                                    cursor: "pointer",
                                                                                                    alignItems: "center",
                                                                                                },
                                                                                                children: (0, o.jsx)(
                                                                                                    r.xv,
                                                                                                    {
                                                                                                        css: {
                                                                                                            fontSize: "$7i",
                                                                                                            lineHeight: "$10i",
                                                                                                            fontWeight:
                                                                                                                "$bolder",
                                                                                                            color: "$grey800",
                                                                                                            fontFamily:
                                                                                                                "$manrope",
                                                                                                        },
                                                                                                        children: (0, ad.Z)(
                                                                                                            null == a
                                                                                                                ? void 0
                                                                                                                : a.text
                                                                                                        ),
                                                                                                    }
                                                                                                ),
                                                                                            },
                                                                                            e
                                                                                        )
                                                                                    ),
                                                                            ],
                                                                        }),
                                                            }),
                                                        ],
                                                    }),
                                                })
                                                : null,
                                        ],
                                    }),
                                    (0, o.jsxs)(r.kC, {
                                        css: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: 12,
                                            position: "relative",
                                            paddingRight: 64,
                                            "@lg": { display: "none" },
                                        },
                                        children: [
                                            n
                                                ? (0, o.jsx)(r.xu, {
                                                    onClick: () => {
                                                        var a;
                                                        U(!0),
                                                            v.push(
                                                                {
                                                                    pathname: "".concat(
                                                                        null === (a = v.asPath) || void 0 === a
                                                                            ? void 0
                                                                            : a.split("?")[0]
                                                                    ),
                                                                    query: { modalName: "searchFilter" },
                                                                },
                                                                void 0,
                                                                { shallow: !0 }
                                                            );
                                                    },
                                                    css: {
                                                        display: "flex",
                                                        height: "$20i",
                                                        width: "$20i",
                                                        borderRadius: "$round",
                                                        backgroundColor: "$accent400",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        cursor: "pointer",
                                                        "@lg": { display: "none" },
                                                    },
                                                    children: (0, o.jsx)(O.Z, { fill: "$white" }),
                                                })
                                                : null,
                                            !(null == L ? void 0 : L.isMobile) &&
                                            (X
                                                ? (0, o.jsx)(aZ, {
                                                    href: "/your-vacations",
                                                    children: (0, o.jsx)(aM, {
                                                        css: {
                                                            display: "flex",
                                                            borderColor: t && !Y ? "$white" : "$black",
                                                            color: t && !Y ? "$white" : "$black",
                                                            "@smMax": {
                                                                borderColor:
                                                                    l || (t && !Y && !l)
                                                                        ? "$white"
                                                                        : "$black",
                                                                color:
                                                                    l || (t && !Y && !l)
                                                                        ? "$white"
                                                                        : "$black",
                                                            },
                                                        },
                                                        children: ((null == b ? void 0 : b.name) || "")
                                                            .split(" ")
                                                            .slice(0, 2)
                                                            .map((a) => a[0])
                                                            .join(""),
                                                    }),
                                                })
                                                : (0, o.jsx)(o.Fragment, {
                                                    children:
                                                        !(0, w.Z)() &&
                                                        !(null == L ? void 0 : L.isMobile) &&
                                                        (0, o.jsx)(aZ, {
                                                            href:
                                                                "" === $
                                                                    ? "/login?redirectTo=".concat(v.asPath)
                                                                    : "/".concat($, "/signin"),
                                                            children: (0, o.jsx)(r.zx, {
                                                                onClick: () => {
                                                                    "" === $
                                                                        ? v.push(
                                                                            "/login?redirectTo=".concat(
                                                                                v.asPath
                                                                            )
                                                                        )
                                                                        : (0, ay.Z)("/".concat($, "/signin"));
                                                                },
                                                                outlined: !0,
                                                                css: {
                                                                    minWidth: 80,
                                                                    height: 36,
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    borderRadius: 8,
                                                                    cursor: "pointer",
                                                                    borderColor: "$black",
                                                                    color: t && !Y ? "$wite" : "$black",
                                                                    boxShadow: "inset 0 0 0 1px ".concat(
                                                                        t && !Y
                                                                            ? "$colors$white"
                                                                            : "$colors$primary07"
                                                                    ),
                                                                    "@smMax": {
                                                                        color:
                                                                            l || (t && !Y && !l)
                                                                                ? "$white"
                                                                                : "$black",
                                                                        boxShadow: "inset 0 0 0 1px ".concat(
                                                                            l || (t && !Y && !l)
                                                                                ? "$colors$white"
                                                                                : "$colors$primary07"
                                                                        ),
                                                                        display: "none",
                                                                    },
                                                                },
                                                                children: "Login",
                                                            }),
                                                        }),
                                                })),
                                            (0, o.jsx)(aE, {
                                                forceMount: !0,
                                                trigger: (0, o.jsx)(r.hU, {
                                                    children: (0, o.jsx)(J.Z, {
                                                        height: 18,
                                                        width: 18,
                                                        css: {
                                                            fill: t && !Y ? "#fff" : "#000",
                                                            cursor: "pointer",
                                                            "@smMax": {
                                                                fill: l || (t && !Y && !l) ? "#fff" : "#000",
                                                            },
                                                        },
                                                    }),
                                                }),
                                                content: (0, o.jsxs)(aD, {
                                                    children: [
                                                        X
                                                            ? (0, o.jsx)(aB, {
                                                                onClick: (a) => {
                                                                    a.preventDefault(), Q();
                                                                },
                                                                children: "Logout",
                                                            })
                                                            : (0, o.jsx)(aB, {
                                                                onClick: (a) => {
                                                                    var e;
                                                                    a.preventDefault(),
                                                                        v.push(
                                                                            "/login?redirectTo=".concat(
                                                                                null == v
                                                                                    ? void 0
                                                                                    : null === (e = v.asPath) ||
                                                                                        void 0 === e
                                                                                        ? void 0
                                                                                        : e.split("?")[0]
                                                                            )
                                                                        );
                                                                },
                                                                children: "Login",
                                                            }),
                                                        X &&
                                                        (0, o.jsxs)(o.Fragment, {
                                                            children: [
                                                                (0, o.jsx)(aB, {
                                                                    onClick: () => {
                                                                        (0, ay.Z)("/your-vacations");
                                                                    },
                                                                    children: "Your Vacation",
                                                                }),
                                                                (0, o.jsx)(aB, {
                                                                    onClick: () => {
                                                                        (0, ay.Z)("/account");
                                                                    },
                                                                    children: "Your Account",
                                                                }),
                                                                (0, o.jsx)(aB, {
                                                                    onClick: () => {
                                                                        (0, ay.Z)("/activity/booked-activity");
                                                                    },
                                                                    children: "Your Activity",
                                                                }),
                                                            ],
                                                        }),
                                                        z[C].map((a, e) =>
                                                            (0, o.jsx)(
                                                                aF,
                                                                {
                                                                    title: a.category,
                                                                    titleProps: {
                                                                        paddingLeft: "$8i",
                                                                        cursor: "pointer",
                                                                    },
                                                                    textProps: { paddingLeft: "$10i" },
                                                                    contents: (0, ah.u)(a.contents).map((a) => ({
                                                                        type: "link",
                                                                        value: a.name,
                                                                        link: a.url,
                                                                        pillText: a.pillText,
                                                                        pillColor: a.pillColor,
                                                                        pillBG: a.pillBG,
                                                                    })),
                                                                    highlight: {
                                                                        enable: !0,
                                                                        backgroundColor: "$pyellow100",
                                                                        foregroundColor: "$grey900",
                                                                    },
                                                                    enableShadow: !1,
                                                                    contentWrapperProps: { cursor: "pointer" },
                                                                },
                                                                "collapsible-item" + e
                                                            )
                                                        ),
                                                        H.map((a, e) =>
                                                            (0, o.jsx)(
                                                                r.Kq,
                                                                {
                                                                    css: { gap: "$3i" },
                                                                    children: (0, o.jsx)(aB, {
                                                                        href: a.link,
                                                                        children: a.text,
                                                                    }),
                                                                },
                                                                "menu-link" + e
                                                            )
                                                        ),
                                                        (0, o.jsx)(o.Fragment, {
                                                            children: [
                                                                {
                                                                    key: "5",
                                                                    category: "Choose country",
                                                                    contents: [
                                                                        { name: "PYT - India", url: "" },
                                                                        { name: "PYT - United States", url: "us" },
                                                                        {
                                                                            name: "PYT - United Arab Emirates",
                                                                            url: "ae",
                                                                        },
                                                                    ],
                                                                },
                                                            ].map((a, e) =>
                                                                (0, o.jsx)(
                                                                    aF,
                                                                    {
                                                                        title: a.category,
                                                                        titleProps: { paddingLeft: "$8i" },
                                                                        textProps: {
                                                                            paddingLeft: "$10i",
                                                                            fontSize: "$7i",
                                                                            cursor: "pointer",
                                                                            "&:hover": {
                                                                                fontWeight: 700,
                                                                                color: "$collapsible-link-hover",
                                                                            },
                                                                        },
                                                                        contents: a.contents.map((a) => ({
                                                                            type: "string",
                                                                            value: a.name,
                                                                            link: a.url,
                                                                            onClick: () => aa(a.url),
                                                                        })),
                                                                        highlight: {
                                                                            enable: !0,
                                                                            backgroundColor: "$pyellow100",
                                                                            foregroundColor: "$grey900",
                                                                        },
                                                                        enableShadow: !1,
                                                                    },
                                                                    "collapsible-item-" + e
                                                                )
                                                            ),
                                                        }),
                                                        (0, o.jsx)(r.sg, {
                                                            css: { gap: "$5i", marginTop: "$6i" },
                                                            children: (0, o.jsxs)(r.X2, {
                                                                css: {
                                                                    gap: "$5i",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                },
                                                                children: [
                                                                    (0, o.jsx)(aB, {
                                                                        href: "tel: +919360991166",
                                                                        children: "+919360991166",
                                                                    }),
                                                                    (0, o.jsx)(r.X2, {
                                                                        css: { gap: "$4i", paddingRight: "$8i" },
                                                                        children: (0, o.jsx)(aR, {}),
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                header: (0, o.jsxs)(r.xv, {
                                                    css: {
                                                        fontSize: "$8i",
                                                        fontWeight: "$bolder",
                                                        color: "$grey08",
                                                        marginTop: "$7i",
                                                    },
                                                    children: [
                                                        "Hello,",
                                                        X ? (null == b ? void 0 : b.name) : "Guest",
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, o.jsx)(r.X2, {
                                        css: {
                                            justifyContent: "flex-end",
                                            display: "none",
                                            "@lg": {
                                                display: "flex",
                                                alignItems: "center",
                                                paddingRight: 112,
                                            },
                                        },
                                        children: (0, o.jsx)(aH.Z, {
                                            isPaid: e,
                                            menus: ae,
                                            menuProps: {
                                                gap: "$i",
                                                fontWeight: 600,
                                                color: t && !Y ? "$white" : "$black",
                                                fill: t && !Y ? "$white" : "$black",
                                                "@smMax": {
                                                    color: l || (t && !Y && !l) ? "$white" : "$black",
                                                    fill: l || (t && !Y && !l) ? "$white" : "$black",
                                                },
                                            },
                                            isPackagesV2: n,
                                        }),
                                    }),
                                    (0, o.jsxs)(r.kC, {
                                        align: "center",
                                        css: {
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            flexDirection: "column",
                                        },
                                        children: [
                                            (0, o.jsx)(r.xu, {
                                                css: {
                                                    height: "$3i",
                                                    backgroundColor: "$black",
                                                    width: "83px",
                                                    position: "relative",
                                                    "@smMax": { width: "52px" },
                                                },
                                            }),
                                            (0, o.jsx)(r.xu, {
                                                css: {
                                                    height: "75px",
                                                    width: "47px",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    "@lg": { height: "122px", width: "76px" },
                                                },
                                                children: (0, o.jsx)(ag.Z, {
                                                    src: (0, d.Z)(
                                                        "https://oceanjar-new.s3.ap-south-1.amazonaws.com/images/brandAward.png",
                                                        "h="
                                                            .concat(
                                                                (null == L ? void 0 : L.isMobile)
                                                                    ? "72"
                                                                    : "122",
                                                                "&w="
                                                            )
                                                            .concat(
                                                                (null == L ? void 0 : L.isMobile) ? "47" : "76",
                                                                "&fit=crop"
                                                            )
                                                    ),
                                                    fill: !0,
                                                    alt: "award-image",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var aW = function (a) {
                let {
                    footerData: e,
                    hideNavbar: n = !1,
                    hideFooter: i = !1,
                    footerProps: t,
                    navbarProps: s,
                    isPaid: l = !1,
                    isPackagesV2: c = !1,
                    children: u,
                    className: g,
                } = a;
                return (0, o.jsxs)(r.xu, {
                    css: { zIndex: 0, position: "relative" },
                    className: g,
                    children: [
                        n ? null : (0, o.jsx)(aG, { isPaid: l, isPackagesV2: c, ...s }),
                        u,
                        i ? null : (0, o.jsx)(N, { footerData: e, ...t }),
                    ],
                });
            };
        },
        25171: function (a, e, n) {
            var o = n(85893),
                r = n(25675),
                i = n.n(r),
                t = n(67294),
                s = n(68991);
            let l = (a) => {
                let {
                    src: e,
                    fallback:
                    n = "https://images.pickyourtrail.com/image_placeholder_2eca9cbf61.png",
                    alt: r = "",
                    ...l
                } = a,
                    [c, u] = (0, t.useState)(!1);
                return (null == e ? void 0 : e.length) && !c
                    ? (0, o.jsx)(i(), {
                        alt: r,
                        src: (0, s.Z)(e),
                        onError: () => u(!0),
                        style: { objectFit: "cover", objectPosition: "top" },
                        ...l,
                    })
                    : (0, o.jsx)(i(), { alt: "", src: (0, s.Z)(n), ...l });
            };
            e.Z = l;
        },
        24802: function (a, e, n) {
            var o = n(85893),
                r = n(87789),
                i = n(39396),
                t = n(41664),
                s = n.n(t),
                l = n(67294),
                c = n(78449);
            let u = (0, r.zo)(s(), {}),
                g = (a) => {
                    let { destinationPills: e, numOfColumn: n, darkTheme: r } = a;
                    return (0, o.jsx)(i.sg, {
                        css: { gap: r ? "0px" : "$10i", paddingBottom: r ? "0px" : "$12i" },
                        children: e.map((a, e) =>
                            (0, o.jsxs)(
                                i.sg,
                                {
                                    css: { paddingTop: r ? "16px" : "0px" },
                                    children: [
                                        (0, o.jsx)(i.xv, {
                                            css: {
                                                color: r ? "$grey07" : "$custom63",
                                                fontFeatureSettings: "liga off",
                                                fontFamily: "$manrope",
                                                fontSize: "$8i",
                                                fontStyle: "normal",
                                                fontWeight: "$bolder",
                                                lineHeight: "$12i",
                                                paddingBottom: "$8i",
                                                "@lg": {
                                                    fontSize: r ? "$8i" : "$9i",
                                                    lineHeight: "$13i",
                                                    paddingBottom: "$6i",
                                                },
                                            },
                                            children: (0, c.Z)(a.category),
                                        }),
                                        (0, o.jsx)(i.xu, {
                                            css: {
                                                gap: "$6i $12i",
                                                display: "grid",
                                                gridTemplateColumns: "repeat(1, 1fr)",
                                                "@lg": {
                                                    gridTemplateColumns: "repeat(".concat(
                                                        n || 3,
                                                        ", 1fr)"
                                                    ),
                                                },
                                            },
                                            children: a.destinations.map((a, e) => {
                                                var n;
                                                return (0, o.jsx)(
                                                    l.Fragment,
                                                    {
                                                        children: (0, o.jsx)(u, {
                                                            href: "/".concat(
                                                                null == a
                                                                    ? void 0
                                                                    : null === (n = a.slug) || void 0 === n
                                                                        ? void 0
                                                                        : n.replace(/^\/+/, "")
                                                            ),
                                                            css: {
                                                                width: "fit-content",
                                                                color: r ? "white" : "$primary07",
                                                                fontFamily: "$manrope",
                                                                fontSize: "$7i",
                                                                fontStyle: "normal",
                                                                fontWeight: "$bold",
                                                                lineHeight: "$12i",
                                                                "&:hover": {
                                                                    color: r ? "white" : "$primary05",
                                                                    textDecoration: "underline",
                                                                },
                                                            },
                                                            children: a.displayText,
                                                        }),
                                                    },
                                                    "destination" + e
                                                );
                                            }),
                                        }),
                                        r
                                            ? (0, o.jsx)(i.iz, {
                                                decorative: !0,
                                                css: {
                                                    marginTop: "$10i",
                                                    backgroundColor: "$custom02",
                                                },
                                            })
                                            : null,
                                    ],
                                },
                                "interlinking" + e
                            )
                        ),
                    });
                };
            e.Z = g;
        },
        28760: function (a, e, n) {
            var o = n(85893),
                r = n(87789);
            n(67294);
            let i = (a) => {
                var e;
                return (0, o.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...a,
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.87794 1.66493C3.49847 1.0444 4.51683 1.08676 5.08368 1.75667L6.66028 3.61993C7.08155 4.11779 7.13285 4.8308 6.7872 5.38384L6.22848 6.27781C6.13191 6.4323 6.13864 6.59902 6.21525 6.71546C6.73199 7.50088 7.92432 9.03832 9.73616 9.85344C9.8513 9.90525 10.005 9.89575 10.1436 9.80335L10.6679 9.45377C11.1718 9.11787 11.8282 9.11787 12.332 9.45377L14.1522 10.6672C14.7191 11.0452 14.9159 11.7862 14.6112 12.3956C13.8324 13.9533 12.0512 14.8965 10.3238 14.279C6.19257 12.8022 3.24323 9.97787 1.60711 6.41249C0.896583 4.86412 1.41795 3.12492 2.5586 1.98427L2.87794 1.66493ZM4.3203 2.40262C4.13135 2.17931 3.79189 2.16519 3.58505 2.37204L3.26571 2.69138C2.35419 3.6029 2.01609 4.90605 2.51599 5.99541C4.03969 9.31583 6.78261 11.9512 10.6604 13.3374C11.8265 13.7542 13.1214 13.1392 13.7167 11.9484C13.7959 11.79 13.7448 11.5975 13.5975 11.4992L11.7773 10.2858C11.6094 10.1739 11.3906 10.1739 11.2226 10.2858L10.6983 10.6354C10.3076 10.8959 9.79088 10.9746 9.32588 10.7654C7.25765 9.83493 5.93593 8.11032 5.37984 7.26509C5.06539 6.78715 5.09995 6.19666 5.38048 5.74781L5.9392 4.85384C6.05442 4.6695 6.03732 4.43183 5.8969 4.26587L4.3203 2.40262Z",
                        fill:
                            null !== (e = null == a ? void 0 : a.fill) && void 0 !== e
                                ? e
                                : "#98FF53",
                    }),
                });
            },
                t = (0, r.zo)(i, {});
            e.Z = t;
        },
        99383: function (a, e, n) {
            var o = n(85893);
            n(67294);
            let r = (a) =>
                (0, o.jsxs)("svg", {
                    height: "21",
                    width: "21",
                    fill: "none",
                    viewBox: "0 0 21 21",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...a,
                    children: [
                        (0, o.jsx)("path", {
                            d: "M4.83628 3.40587L3 18.7419H6.2022L6.62916 13.8296C6.96129 12.4717 7.70092 12.0324 8.73883 11.4333L16.2533 8.23831C16.793 8.03862 17.1667 7.55937 17.1667 7.00024C17.1667 6.44112 16.793 5.96187 16.2533 5.76218L6.99514 2.20774C5.6541 1.88885 5.1502 2.09223 4.83628 3.40587Z",
                            fill: a.fill,
                        }),
                        (0, o.jsx)("path", {
                            d: "M4.83628 3.40587L3 18.7419H6.2022L6.62916 13.8296C6.96129 12.4717 7.70092 12.0324 8.73883 11.4333L16.2533 8.23831C16.793 8.03862 17.1667 7.55937 17.1667 7.00024C17.1667 6.44112 16.793 5.96187 16.2533 5.76218L6.99514 2.20774C5.6541 1.88885 5.1502 2.09223 4.83628 3.40587Z",
                            fill: a.fill,
                        }),
                        (0, o.jsx)("defs", {
                            children: (0, o.jsxs)("linearGradient", {
                                id: "paint0_linear_2045_5513",
                                gradientUnits: "userSpaceOnUse",
                                x1: "3.54487",
                                x2: "17.4181",
                                y1: "5.7789",
                                y2: "8.80813",
                                children: [
                                    (0, o.jsx)("stop", { stopColor: a.fill }),
                                    (0, o.jsx)("stop", { offset: "1", stopColor: a.fill }),
                                ],
                            }),
                        }),
                    ],
                });
            e.Z = r;
        },
        78449: function (a, e, n) {
            n.d(e, {
                Z: function () {
                    return o;
                },
            });
            function o() {
                let a =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : " ";
                return (a || "")
                    .toLowerCase()
                    .split(e)
                    .map((a) =>
                        "".concat((a.charAt(0) || "").toUpperCase()).concat(a.slice(1))
                    )
                    .join(" ");
            }
        },
        47624: function (a, e, n) {
            n.d(e, {
                Z: function () {
                    return o;
                },
            });
            function o() {
                let a =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (a) {
                    let n = a.replace(/^(https?:|)\/\//, ""),
                        o = n.split("/")[0];
                    switch (o) {
                        case "images.pickyourtrail.com":
                            n = n.replace("".concat(o), e);
                            break;
                        case "d3lf10b5gahyby.cloudfront.net":
                            n = n.replace(o, e + "/images");
                            break;
                        case "s3.ap-south-1.amazonaws.com":
                        case "oceanjar-new.s3.ap-south-1.amazonaws.com":
                            (n = n.replace(o, e)).includes("/oceanjar-new/images") &&
                                (n = n.replace("/oceanjar-new/images", ""));
                            break;
                        case "media-cdn.tripadvisor.com":
                            n = a;
                        default:
                            n = "".concat(e).concat(a);
                    }
                    return n;
                }
                return a;
            }
        },
        6236: function (a, e, n) {
            n.d(e, {
                u: function () {
                    return o;
                },
            });
            let o = (a) =>
                a.filter(
                    (a) =>
                        !["Turkey", "Azerbaijan"].some((e) =>
                            (a.title || a.name || "").includes(e)
                        )
                );
        },
        38134: function (a, e, n) {
            n.d(e, {
                B: function () {
                    return o;
                },
            });
            let o = (a) => {
                let e = ["uae", "us"],
                    n = [
                        "a",
                        "an",
                        "the",
                        "and",
                        "for",
                        "on",
                        "at",
                        "to",
                        "from",
                        "in",
                        "of",
                    ];
                if (!a) return "";
                let o = a.toLowerCase().split(" ");
                return o
                    .map((a) =>
                        e.includes(a.toLowerCase())
                            ? a.toUpperCase()
                            : n.includes(a.toLowerCase())
                                ? a.toLowerCase()
                                : a.charAt(0).toUpperCase() + a.slice(1)
                    )
                    .join(" ");
            };
        },
        68991: function (a, e, n) {
            n.d(e, {
                Z: function () {
                    return u;
                },
            });
            var o = n(88116),
                r = n(95457);
            let i = o.X.gumlet_base,
                t = o.X.imgIX_testimonial_base,
                s = o.X.blogs_base,
                l = o.X.pyt_blog_upload,
                c = o.X.images_wpcontent_base_url;
            function u(a, e) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
                    o = arguments.length > 3 ? arguments[3] : void 0;
                if (
                    (arguments.length > 4 && void 0 !== arguments[4] && arguments[4], !a)
                )
                    return "";
                let u = a.replace(/^(https?:|)\/\//, ""),
                    g = u.split("/")[0];
                a.startsWith(c) && (g = "pickyourtrail.com/blog/wp-content");
                let m = {
                    "pyt-blogs.imgix.net": { from: g, to: s },
                    "pyt-blogs.gumlet.io": { from: g, to: s },
                    "pickyourtrail.com/blog/wp-content": { from: g, to: l },
                    "pyt-testimonialimages.s3.ap-south-1.amazonaws.com": {
                        from: g,
                        to: t,
                    },
                    "d3lf10b5gahyby.cloudfront.net": {
                        from: g,
                        to: "".concat(i, "/images"),
                    },
                    "s3.ap-south-1.amazonaws.com": { from: g, to: i, cleanupPath: !0 },
                    "oceanjar-new.s3.ap-south-1.amazonaws.com": {
                        from: g,
                        to: i,
                        cleanupPath: !0,
                    },
                },
                    p = m[g];
                if (p)
                    (u = u.replace(p.from, p.to)),
                        "cleanupPath" in p &&
                        p.cleanupPath &&
                        u.includes("/oceanjar-new") &&
                        (u = u.replace("/oceanjar-new", ""));
                else {
                    if (a.includes("http")) return a;
                    u = a;
                }
                let d = o
                    ? parseInt(o, 10)
                    : (function () {
                        let a = 1;
                        if (!(0, r.Z)()) {
                            let e = window.devicePixelRatio;
                            void 0 !== e && e > 1 && (a = 2);
                        }
                        return a;
                    })();
                if (
                    ((n = 20 !== n ? n : 1 === d ? 40 : 20),
                        [i, s, l].some((a) => (null == u ? void 0 : u.startsWith(a))) ||
                        (u = "".concat(i).concat(a)),
                        [i, t].some((a) => (null == u ? void 0 : u.indexOf(a)) !== -1) ||
                        [s, l].some((a) => (null == u ? void 0 : u.indexOf(a)) === 0))
                ) {
                    let [k, h] = u.split("?"),
                        f = new URLSearchParams(h || "");
                    if (e) {
                        let y = new URLSearchParams(e);
                        y.forEach((a, e) => {
                            f.set(e, a);
                        });
                    }
                    return (
                        f.delete("auto"),
                        f.delete("ixlib"),
                        f.has("dpr") || f.set("dpr", d.toString()),
                        f.has("q") || f.set("q", n.toString()),
                        "".concat(k || null, "?").concat(f.toString())
                    );
                }
                return "".concat(u);
            }
        },
        8447: function (a, e, n) {
            n.r(e);
            var o = n(47624);
            let r = (a) => {
                let { src: e, width: n, quality: r = 75 } = a;
                if (e.includes("https://pyt-images.imgix.net")) {
                    let i = new URL(e);
                    return (
                        (i.hostname = "images.pickyourtrail.com"),
                        i.searchParams.set("w", n),
                        i.searchParams.set("q", r || 80),
                        i.toString()
                    );
                }
                {
                    if (e.includes("http")) return e;
                    let t = (0, o.Z)(e),
                        s = new URL("https://images.pickyourtrail.com".concat(t)),
                        l = s.searchParams;
                    return (
                        l.set("auto", l.getAll("auto").join(",") || "format"),
                        l.set("fit", l.get("fit") || "crop"),
                        l.set("w", l.get("w") || n.toString()),
                        l.set("q", r.toString() || "50"),
                        s.href
                    );
                }
            };
            e.default = r;
        },
    },
]);
