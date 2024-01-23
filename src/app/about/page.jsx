import MissionAndVission from "../../components/about/MissionAndVission";
import StoryAndCoreValues from "@/components/about/StoryAndCoreValues";
import TeamMembers from "@/components/about/TeamMembers";
import WhyChoseUs from "../../components/about/WhyChoseUs";
import SectionHeader from "@/components/utils/SectionHeader";

export default function About() {
    return (
        <>
            <SectionHeader
                pathName="about"
                title="Who We Are?"
                desc="Welcome to MEC Trade-Link, where technical matters relating to planning, preparation of technical specifications, installation, and management of after-sales services for medical equipment. Our journey began 2013 with a vision to Looking for very far development in the health sector of our country."
            />
            <MissionAndVission />
            <StoryAndCoreValues />
            <TeamMembers />
            <WhyChoseUs />
        </>
    );
}
