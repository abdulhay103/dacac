import { getSingleService } from "@/utils/assetsData";

export async function generateMetadata({ params }) {
    let id = parseInt(params.serviceId);
    let service = await getSingleService(id);
    return {
        title: `${service.title} | DACAC`,
        description: `${service.details}`,
    };
}

export default function layout({ children }) {
    return <div>{children}</div>;
}
