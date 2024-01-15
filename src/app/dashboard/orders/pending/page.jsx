import EmptyOrderList from "@/components/order/admin/EmptyOrderList";
import OrdersList from "@/components/order/admin/OrdersList";
import { countDashboardOrderItems, getAllOrder } from "@/utils/assetsData";
import React from "react";

export default async function PendingOrders() {
    let pendingOrdersPromise = countDashboardOrderItems("pending");
    let allPendingOrdersPromise = getAllOrder("pending");

    let [pendingOrders, allPendingOrders] = await Promise.all([
        pendingOrdersPromise,
        allPendingOrdersPromise,
    ]);
    return (
        <div>
            {pendingOrders == 0 ? (
                <EmptyOrderList />
            ) : (
                <OrdersList
                    allOrders={allPendingOrders}
                    text="pending"
                    color="deep-orange"
                />
            )}
        </div>
    );
}
