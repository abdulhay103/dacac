export default function BlogDetails({ blogDetails }) {
    return (
        <div className="py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-12 gap-6 lg:gap-10 2xl:gap-12">
                    <div className="col-span-12 lg:col-span-8 border">
                        <h4>{blogDetails.title}</h4>
                    </div>
                    <div className="col-span-12 lg:col-span-4 border">
                        <h4>Our Services:</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
