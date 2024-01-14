import ProductHeader from "@/components/products/ProductHeader";
import { ProductsTabs } from "@/components/products/ProductsTabs";
import { CategoryWiseItems, getUser } from "@/utils/assetsData";

export default async function ProductCategory({ params }) {
    let catId = parseInt(params.catId);
    let user = await getUser();
    let newestProductsPromise = CategoryWiseItems(catId, "Newest");
    let bestSellingProductsPromise = CategoryWiseItems(catId, "Best Selling");
    let topRatedProductsPromise = CategoryWiseItems(catId, "Top Rated");

    let [newestProducts, bestSellingProducts, topRatedProducts] =
        await Promise.all([
            newestProductsPromise,
            bestSellingProductsPromise,
            topRatedProductsPromise,
        ]);

    return (
        <>
            <ProductHeader catId={catId} />
            <ProductsTabs
                user={user}
                ProductDetails={{
                    newestProducts,
                    bestSellingProducts,
                    topRatedProducts,
                }}
            />
        </>
    );
}
