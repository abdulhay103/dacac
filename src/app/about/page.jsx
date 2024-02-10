import StoryAndCoreValues from "@/components/about/StoryAndCoreValues";
import TeamMembers from "@/components/about/TeamMembers";
import SectionHeader from "@/components/utils/SectionHeader";
import WhyWeBest from "@/components/about/WhyWeBest";
import MissionAndVission from "@/components/about/MissionAndVission";
import BlogList from "@/components/blogs/BlogList";
import { getAllBlogs } from "@/utils/assetsData";

export default async function About() {
    let blogs = await getAllBlogs();
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
            <WhyWeBest />
            <BlogList
                blogs={blogs}
                bgColor="bg-gradient-to-br from-orange-50 to-cyan-50"
            />
        </>
    );
}
