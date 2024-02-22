import { UpdateBlog } from "@/components/blogs/UpdateBlog";
import { getBlogDetails, getCategories } from "@/utils/assetsData";
import React from "react";

export default async function BlogUpdatePage({ params }) {
  let id = parseInt(params.blogId);
  let detailsPromise = getBlogDetails(id);
  let categoriesPromise = getCategories();
  let [details, categories] = await Promise.all([
    detailsPromise,
    categoriesPromise,
  ]);
  // console.log(categories);
  console.log(details);
  return <UpdateBlog details={details} categories={categories} />;
}
