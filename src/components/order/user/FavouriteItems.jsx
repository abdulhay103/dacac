import Link from "next/link";

export default function FavouriteItems(props) {
    let total = props.totalFavouriteBook;
    return (
        <div className=" border border-deep-orange-200 bg-gray-50 w-full rounded shadow-sm">
            <p className=" font-medium text-white rounded-t bg-deep-orange-500 text-center py-2">
                Your Favourite Items
            </p>
            <div className=" px-6 py-3">
                <p>
                    Total Favourite Items:
                    <span className="pl-2 font-medium text-deep-orange-500">
                        {total}
                    </span>
                </p>
                {!total == 0 && (
                    <Link
                        className=" hover:text-deep-orange-500 hover:font-medium transition-all animate-pulse"
                        href="/cart"
                    >
                        Check List
                    </Link>
                )}
            </div>
        </div>
    );
}
