import BlogOverViews from "@/components/blogs/BlogOverViews";
import { getAllBlogs, getCategories } from "@/utils/assetsData";
import React from "react";

export default async function Blogs_Dash() {
  let blogsPromise = getAllBlogs();
  let categoryPromise = getCategories();
  let [blogs, categories] = await Promise.all([blogsPromise, categoryPromise]);
  return (
    <BlogOverViews data={blogs} itemsPerPage={5} categories={categories} />
  );
}
