import UpdateProduct from "@/components/products/dashboard/products/UpdateProduct";
import { getCategories, getSingleProduct } from "@/utils/assetsData";

export default async function page({ params }) {
    let productId = parseInt(params.productId);
    let categories = await getCategories();
    let productDetails = await getSingleProduct(productId);
    return (
        <div>
            <UpdateProduct
                categories={categories}
                productDetails={productDetails}
            />
        </div>
    );
}
