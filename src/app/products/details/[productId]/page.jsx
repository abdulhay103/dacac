import SingleProduct from "@/components/products/SingleProduct";
import {
    getRelatedProducts,
    getSingleProduct,
    getUser,
} from "@/utils/assetsData";

export default async function ProductDetails({ params }) {
    let productId = parseInt(params.productId);
    let productDetailsPromise = getSingleProduct(productId);
    let userPromise = getUser();
    let [productDetails, user] = await Promise.all([
        productDetailsPromise,
        userPromise,
    ]);
    let relatedProducts = await getRelatedProducts(productDetails.categoryId);
    return <SingleProduct data={{ productDetails, relatedProducts, user }} />;
}
