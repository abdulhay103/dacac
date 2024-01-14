import CompleatedOrder from "./CompleatedOrder";
import FavouriteItems from "./FavouriteItems";
import PendingOrder from "./PendingOrder";

export default async function UserTrackOrder({ ordersData }) {
    let totalPendingItems = ordersData.totalPendingItems;
    let totalFevouriteItems = ordersData.totalFevouriteItems;
    return (
        <div className="container flex flex-col justify-center items-center min-h-screen">
            <div className=" w-full px-6 grid grid-flow-row md:lg:xl:grid-flow-col gap-6">
                <FavouriteItems totalFavouriteBook={totalFevouriteItems} />
                <PendingOrder pendingOrder={totalPendingItems} />
                <CompleatedOrder />
            </div>
        </div>
    );
}
