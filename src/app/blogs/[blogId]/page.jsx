import BlogDetails from "@/components/blogs/BlogDetails";
import SectionHeader from "@/components/utils/SectionHeader";
import { getBlogDetails } from "@/utils/assetsData";

export default async function BlogsDetails({ params }) {
    const id = parseInt(params.blogId);
    let blogDetails = await getBlogDetails(id);
    return (
        <>
            <SectionHeader pathName="blogs" title="Blog Details" />
            <BlogDetails blogDetails={blogDetails} />
        </>
    );
}
