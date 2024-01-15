import MainHeader from "@/components/master/navigation-bar/MainHeader";

export default function AppLoading() {
    return (
        <div>
            <MainHeader />
            <div className="w-full min-h-screen bg-white inset-0  flex items-center justify-center">
                <div className="loader w-16 md:lg:w-20 md:lg:h-20 h-16 border-t-4 border-deep-orange-600 border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
