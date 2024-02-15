import { UpdateBlog } from "@/components/blogs/UpdateBlog";
import { getBlogDetails } from "@/utils/assetsData";
import React from "react";

export default async function BlogUpdatePage({ params }) {
    let id = parseInt(params.blogId);
    let details = await getBlogDetails(id);
    console.log(details);
    return <UpdateBlog details={details} />;
}
