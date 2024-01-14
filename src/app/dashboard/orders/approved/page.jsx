import EmptyOrderList from "@/components/order/admin/EmptyOrderList";
import OrdersList from "@/components/order/admin/OrdersList";
import { countDashboardOrderItems, getAllOrder } from "@/utils/assetsData";
import React from "react";

export default async function ApprovedOrders() {
    let approvedOrdersPromise = countDashboardOrderItems("Aproved");
    let allApprovedOrdersPromise = getAllOrder("Aproved");

    let [approvedOrders, allApprovedOrders] = await Promise.all([
        approvedOrdersPromise,
        allApprovedOrdersPromise,
    ]);
    return (
        <div>
            {approvedOrders == 0 ? (
                <EmptyOrderList />
            ) : (
                <OrdersList
                    allOrders={allApprovedOrders}
                    text="approved"
                    color="green"
                />
            )}
        </div>
    );
}
