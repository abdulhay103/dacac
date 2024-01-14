import AddProduct from "@/components/products/dashboard/products/AddProduct";
import ProductSummaryCard from "@/components/products/dashboard/products/ProductSummaryCard";
import { ProductTable } from "@/components/products/dashboard/products/ProductTable";
import {
    categoryWiseALLItems,
    categoryWiseCountItems,
    getCategories,
    getLatest5Products,
} from "@/utils/assetsData";

export default async function Product() {
    // Products Promises
    let categories = await getCategories();
    let latestproductPromise = getLatest5Products();
    let countMedicalItemsPromise = categoryWiseCountItems(categories[0].id);
    let countGyneeItemsPromise = categoryWiseCountItems(categories[1].id);
    let countPhysioItemsPromise = categoryWiseCountItems(categories[2].id);
    let categoryWiseMedicalItemsPromise = categoryWiseALLItems(
        categories[0].id
    );
    let categoryWiseGyneeItemsPromise = categoryWiseALLItems(categories[1].id);
    let categoryWisePhysioItemsPromise = categoryWiseALLItems(categories[2].id);

    let [
        latestproduct,
        countMedicalItems,
        countGyneeItems,
        countPhysioItems,
        categoryWiseMedicalItems,
        categoryWiseGyneeItems,
        categoryWisePhysioItems,
    ] = await Promise.all([
        latestproductPromise,
        countMedicalItemsPromise,
        countGyneeItemsPromise,
        countPhysioItemsPromise,
        categoryWiseMedicalItemsPromise,
        categoryWiseGyneeItemsPromise,
        categoryWisePhysioItemsPromise,
    ]);
    return (
        <div className=" p-6 2xl:p-14">
            <div className=" grid justify-end p-6">
                <AddProduct categories={categories} />
            </div>
            <div className=" grid grid-cols-3 grid-flow-row gap-6 lg:gap-8 2xl:gap-14">
                <ProductSummaryCard
                    productSummary={countMedicalItems}
                    text={categories[0].name}
                    products={categoryWiseMedicalItems}
                    categories={categories}
                />
                <ProductSummaryCard
                    productSummary={countGyneeItems}
                    text={categories[1].name}
                    products={categoryWiseGyneeItems}
                    categories={categories}
                />
                <ProductSummaryCard
                    productSummary={countPhysioItems}
                    text={categories[2].name}
                    products={categoryWisePhysioItems}
                    categories={categories}
                />
            </div>
            <div className=" py-6 xl:py-10 2xl:py-16">
                <h3 className=" pb-5">Lastest 5 Items:</h3>
                <ProductTable productsData={{ latestproduct, categories }} />
            </div>
        </div>
    );
}
