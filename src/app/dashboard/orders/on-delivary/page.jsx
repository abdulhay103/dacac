import EmptyOrderList from "@/components/order/admin/EmptyOrderList";
import OrdersList from "@/components/order/admin/OrdersList";
import { countDashboardOrderItems, getAllOrder } from "@/utils/assetsData";
import React from "react";

export default async function Delivary() {
    let onDelivaryOrdersPromise = countDashboardOrderItems("On Delivary");
    let allonDelivaryOrdersPromise = getAllOrder("On Delivary");

    let [onDelivaryOrders, allonDelivaryOrders] = await Promise.all([
        onDelivaryOrdersPromise,
        allonDelivaryOrdersPromise,
    ]);
    return (
        <div>
            {onDelivaryOrders == 0 ? (
                <EmptyOrderList />
            ) : (
                <OrdersList
                    allOrders={allonDelivaryOrders}
                    text="On Delivary"
                    color="orange"
                />
            )}
        </div>
    );
}
