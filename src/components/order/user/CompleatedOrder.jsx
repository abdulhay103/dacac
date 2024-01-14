export default function CompleatedOrder() {
    return (
        <div className=" border border-green-200 bg-gray-50 w-full rounded shadow-sm">
            <p className=" font-medium text-white rounded-t bg-green-500 text-center py-2">
                Your Compleate Order
            </p>
            <div className=" px-6 py-3">
                <p>
                    Total Items:
                    <span className="pl-2 font-medium text-green-500">{0}</span>
                </p>
            </div>
        </div>
    );
}
