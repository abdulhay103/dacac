import DirectorDetailsUi from "@/components/directors/DirectorDetailsUI";
import SectionHeader from "@/components/utils/SectionHeader";
import { getDirectorDetails } from "@/utils/assetsData";

export default async function DirectorDetails({ params }) {
    let id = parseInt(params.directorId);
    let director = await getDirectorDetails(id);

    return (
        <>
            <SectionHeader pathName="details" title="Director" />
            <DirectorDetailsUi director={director} />
        </>
    );
}
