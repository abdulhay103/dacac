import DirectorDetails from "@/components/directors/DirectorDetails";
import CtaSection from "@/components/utils/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";
import { getDirectorDetails, getDirectors } from "@/utils/assetsData";

export default async function DirectorDetailsPage({ params }) {
    let id = parseInt(params.directorId);
    let detailsPromise = getDirectorDetails(id);
    let directorsPromise = getDirectors();

    let [director, directors] = await Promise.all([
        detailsPromise,
        directorsPromise,
    ]);
    return (
        <>
            <SectionHeader pathName="details" title="Director" />
            <DirectorDetails directorData={{ director, directors }} />
            <CtaSection
                title={`Want to consult. with "${director.name}" ?`}
                para1="Are you thinking of consulting with our consultants? So contact us today for your feedback or suggestions without delay."
                para2="Give the serial by phone or write your opinion in detail in the message. We will contact you as soon as possible."
                ctaText="Get an Appionment"
            />
        </>
    );
}
