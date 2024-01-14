import RegistrationForm from "@/components/userutils/RegistrationForm";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Registration() {
    return (
        <main className=" flex flex-col px-6 justify-center items-center min-h-screen">
            <div className="flex flex-col w-full md:lg:xl:w-1/3 p-6 rounded border shadow-2xl">
                <div className=" flex flex-col justify-center items-center py-5">
                    <h2>Sign Up</h2>
                    <p className=" flex items-center py-1">
                        Conented with
                        <span className=" flex items-center text-blue-600 px-2">
                            <SparklesIcon className="w-5 h-5" /> MEC Trade
                        </span>
                    </p>
                </div>
                <RegistrationForm />
            </div>
        </main>
    );
}
