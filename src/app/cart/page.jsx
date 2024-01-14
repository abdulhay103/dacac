import EmptyCard from "@/components/cart/EmptyCard";
import { ProductCartDetails } from "@/components/cart/productCartDetails";
import {
    countCartData,
    getAllCartData,
    getSingleUser,
    getUser,
} from "@/utils/assetsData";

export default async function Cart() {
    let user = await getUser();
    let totalCartItemsPromise = countCartData(user.id);
    let cartItemsPromise = getAllCartData(user.id);
    let userDetailsPromise = getSingleUser(user.id);
    let [totalCartItems, cartItems, userDetails] = await Promise.all([
        totalCartItemsPromise,
        cartItemsPromise,
        userDetailsPromise,
    ]);
    return (
        <div className=" container py-10">
            {totalCartItems === undefined ? (
                <EmptyCard />
            ) : (
                <ProductCartDetails orderDatas={{ userDetails, cartItems }} />
            )}
        </div>
    );
}
