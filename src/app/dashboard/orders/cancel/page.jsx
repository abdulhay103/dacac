import EmptyOrderList from "@/components/order/admin/EmptyOrderList";
import OrdersList from "@/components/order/admin/OrdersList";
import { countDashboardOrderItems, getAllOrder } from "@/utils/assetsData";
import React from "react";

export default async function CancelOrders() {
    let cancelOrdersPromise = countDashboardOrderItems("Rejected");
    let allCancelOrdersPromise = getAllOrder("Rejected");

    let [cancelOrders, allCancelOrders] = await Promise.all([
        cancelOrdersPromise,
        allCancelOrdersPromise,
    ]);
    return (
        <div>
            {cancelOrders == 0 ? (
                <EmptyOrderList />
            ) : (
                <OrdersList
                    allOrders={allCancelOrders}
                    text="cencel"
                    color="red"
                />
            )}
        </div>
    );
}
