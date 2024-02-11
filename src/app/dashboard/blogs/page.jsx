import BlogOverViews from "@/components/blogs/BlogOverViews";
import { getAllBlogs } from "@/utils/assetsData";
import React from "react";

export default async function Blogs_Dash() {
    let blogs = await getAllBlogs();
    return <BlogOverViews data={blogs} itemsPerPage={2} />;
}
