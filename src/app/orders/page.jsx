import UserTrackOrder from "@/components/order/user/UserTrackOrder";
import { countOrderItems, getUser } from "@/utils/assetsData";

export default async function Orders() {
    let user = await getUser();
    let id = user.id;
    let totalPendingItemsPromise = countOrderItems(id, "pending");
    let totalFevouriteItemsPromise = countOrderItems(id, "white Listed");
    let [totalPendingItems, totalFevouriteItems] = await Promise.all([
        totalPendingItemsPromise,
        totalFevouriteItemsPromise,
    ]);

    return (
        <UserTrackOrder
            ordersData={{ totalPendingItems, totalFevouriteItems }}
        />
    );
}
