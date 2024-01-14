import SectionHeader from "../utils/SectionHeader";
import { getCategories } from "@/utils/assetsData";

export default async function ProductHeader(props) {
    let categories = await getCategories();
    let catId = props.catId;
    return (
        <div>
            {(categories[0].id === parseInt(catId) && (
                <SectionHeader
                    title={categories[0].name}
                    desc={categories[0].desc}
                />
            )) ||
                (categories[1].id === parseInt(catId) && (
                    <SectionHeader
                        title={categories[1].name}
                        desc={categories[1].desc}
                    />
                )) ||
                (categories[2].id === parseInt(catId) && (
                    <SectionHeader
                        title={categories[2].name}
                        desc={categories[2].desc}
                    />
                ))}
        </div>
    );
}
