import OrderHistoryCard from "@/components/order/admin/OrderHistoryCard";
import ProductSummaryCard from "@/components/products/dashboard/products/ProductSummaryCard";
import {
    categoryWiseALLItems,
    categoryWiseCountItems,
    countDashboardOrderItems,
    getAllSubscribers,
    getCategories,
} from "@/utils/assetsData";

export default async function Dashboard() {
    // Order Promises
    let pendingOrdersPromise = countDashboardOrderItems("pending");
    let cancelOrderPromise = countDashboardOrderItems("Rejected");
    let aprovedOrderPromise = countDashboardOrderItems("Aproved");
    let ondelivaryOrderPromise = countDashboardOrderItems("On Delivary");

    // Products Promises
    let categories = await getCategories();
    let countMedicalItemsPromise = categoryWiseCountItems(categories[0].id);
    let countGyneeItemsPromise = categoryWiseCountItems(categories[1].id);
    let countPhysioItemsPromise = categoryWiseCountItems(categories[2].id);
    let categoryWiseMedicalItemsPromise = categoryWiseALLItems(
        categories[0].id
    );
    let categoryWiseGyneeItemsPromise = categoryWiseALLItems(categories[1].id);
    let categoryWisePhysioItemsPromise = categoryWiseALLItems(categories[2].id);

    // Get All Subscriber
    let allSubscriberPromise = getAllSubscribers();

    let [
        pendingOrders,
        cancelOrder,
        aprovedOrder,
        onDelivaryOrder,
        countMedicalItems,
        countGyneeItems,
        countPhysioItems,
        categoryWiseMedicalItems,
        categoryWiseGyneeItems,
        categoryWisePhysioItems,
        allSubscriber,
    ] = await Promise.all([
        pendingOrdersPromise,
        cancelOrderPromise,
        aprovedOrderPromise,
        ondelivaryOrderPromise,
        countMedicalItemsPromise,
        countGyneeItemsPromise,
        countPhysioItemsPromise,
        categoryWiseMedicalItemsPromise,
        categoryWiseGyneeItemsPromise,
        categoryWisePhysioItemsPromise,
        allSubscriberPromise,
    ]);

    return (
        <div className=" px-8 py-12 2xl:px-12 2xl:py-16">
            <div className="py-6">
                <h3 className=" pb-5">All Product History:</h3>
                <div className=" grid grid-cols-3 grid-flow-row gap-6 lg:gap-8 2xl:gap-14">
                    <ProductSummaryCard
                        productSummary={countMedicalItems}
                        text={categories[0].name}
                        products={categoryWiseMedicalItems}
                        categories={categories}
                    />
                    <ProductSummaryCard
                        productSummary={countGyneeItems}
                        text={categories[1].name}
                        products={categoryWiseGyneeItems}
                        categories={categories}
                    />
                    <ProductSummaryCard
                        productSummary={countPhysioItems}
                        text={categories[2].name}
                        products={categoryWisePhysioItems}
                        categories={categories}
                    />
                </div>
            </div>
            <div className="py-6">
                <h3 className=" pb-5">All Order History:</h3>
                <div className="grid grid-flow-col grid-cols-4 gap-10">
                    <OrderHistoryCard
                        color="deep-orange"
                        text="pending"
                        totalPendingOrder={pendingOrders}
                    />
                    <OrderHistoryCard
                        color="green"
                        text="approved"
                        totalPendingOrder={aprovedOrder}
                    />
                    <OrderHistoryCard
                        color="orange"
                        text="on-delivary"
                        totalPendingOrder={onDelivaryOrder}
                    />
                    <OrderHistoryCard
                        color="red"
                        text="cancel"
                        totalPendingOrder={cancelOrder}
                    />
                </div>
            </div>
            <div className=" py-6">
                <h3>
                    Total Subscriiber: <span>{allSubscriber}</span>
                </h3>
            </div>
        </div>
    );
}
