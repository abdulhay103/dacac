import DirectorsUi from "@/components/directors/DirectorsUi";
import SectionHeader from "@/components/utils/SectionHeader";

export default async function Directors() {
    return (
        <>
            <SectionHeader pathName="directors" title="Our Supervisors" />
            <DirectorsUi />
        </>
    );
}
