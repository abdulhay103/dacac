"use client";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import NewstProduct from "./NewstProduct";
import BestSellingProducts from "./BestSellingProducts";
import TopRatedProduct from "./TopRatedProduct";
import { useState } from "react";

export function ProductsTabs({ ProductDetails, user }) {
    let { newestProducts, bestSellingProducts, topRatedProducts } =
        ProductDetails;
    const [activeTab, setActiveTab] = useState("best-selling");
    const data = [
        {
            label: "Newest",
            value: "newest",
            desc: <NewstProduct products={newestProducts} user={user} />,
        },
        {
            label: "Best Selling",
            value: "best-selling",
            desc: (
                <BestSellingProducts
                    products={bestSellingProducts}
                    user={user}
                />
            ),
        },
        {
            label: "Top Rated",
            value: "top-rated",
            desc: <TopRatedProduct products={topRatedProducts} user={user} />,
        },
    ];

    return (
        <Tabs
            value={activeTab}
            className=" container py-10 lg:py-12 xl:py-16 2xl:py-20"
        >
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-blue-600 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? " text-blue-600" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
