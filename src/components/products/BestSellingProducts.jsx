import ProductCard from "./ProductCard";

export default async function BestSellingProducts({ products, user }) {
    return (
        <div>
            <div className="container">
                <div className="grid grid-flow-row grid-cols-12 items-center gap-6 lg:gap-8 xl:gap-10 py-10 lg:py-12 xl:py-16 2xl:py-20">
                    <ProductCard products={products} user={user} />
                </div>
            </div>
        </div>
    );
}
