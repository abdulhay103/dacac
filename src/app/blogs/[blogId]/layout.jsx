import { getBlogDetails } from "@/utils/assetsData";

export async function generateMetadata({ params }) {
    let id = parseInt(params.blogId);
    let post = await getBlogDetails(id);
    return {
        title: `${post.title} | DACAC`,
        description: `${post.details}`,
    };
}

export default function BlogDetailsLayout({ children }) {
    return <>{children}</>;
}
