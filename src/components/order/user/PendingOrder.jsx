export default function PendingOrder(props) {
    let total = props.pendingOrder;
    return (
        <div className=" border border-orange-200 bg-gray-50 w-full rounded shadow-sm">
            <p className=" font-medium text-white rounded-t bg-orange-500 text-center py-2">
                Your Pending Order
            </p>
            <div className=" px-6 py-3">
                <p>
                    Total Pending Order:
                    <span className="pl-2 font-medium text-orange-500">
                        {total}
                    </span>
                </p>
            </div>
        </div>
    );
}
