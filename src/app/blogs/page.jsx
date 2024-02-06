import BlogList from "@/components/blogs/BlogList";
import SectionHeader from "@/components/utils/SectionHeader";
import { getAllBlogs } from "@/utils/assetsData";

export default async function Blogs() {
    const blogs = await getAllBlogs();
    return (
        <>
            <SectionHeader pathName="blogs" title="Our Portals" />
            <BlogList blogs={blogs} />
        </>
    );
}
