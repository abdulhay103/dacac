import { singleCategory } from "@/utils/assetsData";

export async function generateMetadata({ params }) {
    let catId = params && params.catId;
    let category = await singleCategory(parseInt(catId));
    return {
        title: `${category.name} | MEC Trade Link`,
        description: `${category.desc}`,
    };
}

export default function ProductCategoryLayout({ children }) {
    return <section>{children}</section>;
}
