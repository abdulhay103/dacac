import { getSingleProduct } from "@/utils/assetsData";

export async function generateMetadata({ params }) {
    let id = params.productId;
    let productDetails = await getSingleProduct(id);
    return {
        title: `${productDetails.title}`,
        description: `${productDetails.short_desc}`,
    };
}

export default function SingleProductLayout({ children }) {
    return <section>{children}</section>;
}
