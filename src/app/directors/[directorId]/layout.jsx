import { getDirectorDetails } from "@/utils/assetsData";

export async function generateMetadata({ params }) {
    let id = parseInt(params.directorId);
    let director = await getDirectorDetails(id);
    return {
        title: `${director.name} | DACAC`,
        description: `${director.details}`,
    };
}

export default function layout({ children }) {
    return <div>{children}</div>;
}
