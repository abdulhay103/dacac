import FooterUi from "./FooterUi";
import { getCategories } from "@/utils/assetsData";

export default async function Footer() {
    const categories = await getCategories();
    return (
        <div className=" bg-deep-orange-400">
            <FooterUi categories={categories} />
        </div>
    );
}
