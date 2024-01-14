import { countCartData, getCategories, getUser } from "@/utils/assetsData";
import NavbarUi from "./NavbarUi";

export default async function MainHeader() {
    let user = await getUser();
    let categories = await getCategories();
    let id = user === null ? 0 : user.id;
    let totalCartOrders = await countCartData(id);

    return (
        <NavbarUi
            user={user}
            categories={categories}
            totalCartOrders={totalCartOrders}
        />
    );
}
