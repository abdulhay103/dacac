import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

//Create New Product
export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  let allHeader = headers();
  let userId = parseInt(allHeader.get("id"));
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let data = {
      title: reqBody["title"],
      short_desc: reqBody["short_desc"],
      image: reqBody["image"],
      details: reqBody["details"],
      usersId: userId,
      categoryId: reqBody["categoryId"],
    };
    let createBlog = await prisma.blogs.create({
      data: data,
    });
    return NextResponse.json({
      status: "Successfully Create Blogs.",
      data: createBlog,
    });
  } catch (e) {
    return NextResponse.json({
      starus: "Internal Error!",
      data: e.toString(),
    });
  }
}

// Update Blog Details
export async function PATCH(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const updateBlog = await prisma.blogs.update({
      where: { id: reqBody["postId"] },
      data: {
        title: reqBody["title"],
        short_desc: reqBody["short_desc"],
        image: reqBody["image"],
        details: reqBody["details"],
        categoryId: reqBody["categoryId"],
      },
    });
    return NextResponse.json({
      status: "Successfully Update Blog.",
      data: updateBlog,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Fail! Internal Error.",
      data: error.toString(),
    });
  }
}
