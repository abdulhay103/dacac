import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  let headerList = headers();
  let id = parseInt(headerList.get("id"));

  try {
    let prisma = new PrismaClient();
    let reqBody = await req.json();

    let createCategory = await prisma.categories.create({
      data: { ...reqBody, users: { connect: { id: id } } },
    });
    return NextResponse.json({
      status: "Successfully Create Category",
      data: createCategory,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Fail! Internal Error.",
      data: e.toString(),
    });
  }
}

// Get All Categories
export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const categories = await prisma.categories.findMany();
    return NextResponse.json({
      status: "Successfully Fetch Data.",
      data: categories,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Fail! Internal Error.",
      data: e.toString(),
    });
  }
}
