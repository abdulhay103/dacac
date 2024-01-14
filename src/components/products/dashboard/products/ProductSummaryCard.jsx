"use client";
import { Tooltip } from "@material-tailwind/react";
import { Eye } from "@phosphor-icons/react/dist/ssr";
import ViewCategoryWiseItems from "./ViewCategoryWiseItems";
export default function ProductSummaryCard(props) {
    let productSummary = props.productSummary;
    let categories = props.categories;
    let text = props.text;
    let products = props.products;
    const categoryIdSum =
        productSummary !== undefined &&
        productSummary.reduce((accumulator, currentValue) => {
            return accumulator + currentValue._count.categoryId;
        }, 0);
    return (
        <div className=" col-span-1 bg-gradient-to-tl from-orange-50 to-blue-50 p-6 xl:p-8 2xl:p-10 rounded-xl">
            <h4 className=" text-orange-600 text-center border-b-2 border-orange-500 pb-1">
                {text}:
                <span className=" text-3xl font-semibold pl-2">
                    {categoryIdSum}
                </span>
            </h4>
            <div className=" pt-3">
                {productSummary !== undefined &&
                    productSummary.map(({ _count, type }) => (
                        <div
                            key={type}
                            className=" flex items-center justify-between"
                        >
                            <p>
                                {type} Items:
                                <span className=" font-semibold pl-2 text-lg">
                                    {_count.type}
                                </span>
                            </p>
                            <Eye size={20} />
                        </div>
                    ))}
            </div>
            <div className=" flex justify-around pt-8">
                <ViewCategoryWiseItems
                    products={products}
                    text={text}
                    categories={categories}
                />
            </div>
        </div>
    );
}
