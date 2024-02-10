import BlogDetails from "@/components/blogs/BlogDetails";
import SectionHeader from "@/components/utils/SectionHeader";
import {
    getAllBlogs,
    getBlogDetails,
    getDirectors,
    getRelatedBlogs,
    getServices,
} from "@/utils/assetsData";

export default async function BlogsDetails({ params }) {
    const id = parseInt(params.blogId);
    let blogDetailsPromise = getBlogDetails(id);
    let latestBlogsPromose = getAllBlogs(4);
    let servicesPromise = getServices(6);
    let directorsPromise = getDirectors();

    let [blogDetails, latestBlogs, services, directors] = await Promise.all([
        blogDetailsPromise,
        latestBlogsPromose,
        servicesPromise,
        directorsPromise,
    ]);

    let relatedBlogs = await getRelatedBlogs(blogDetails.categoryId);
    return (
        <>
            <SectionHeader pathName="blogs" title="Blog Details" />
            <BlogDetails
                blogDatas={{
                    blogDetails,
                    latestBlogs,
                    services,
                    directors,
                    relatedBlogs,
                }}
            />
        </>
    );
}
