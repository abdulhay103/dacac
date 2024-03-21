import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    let createService = await prisma.services.createMany({ data: reqBody });
    return NextResponse.json({
      status: "Successfully Create Service",
      data: createService,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!!",
      data: e.toString(),
    });
  }
}

// Update Team Member
export async function PATCH(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let updateService = await prisma.services.update({
      where: { id: reqBody["id"] },
      data: {
        title: reqBody["title"],
        subTitle: reqBody["subTitle"],
        shortDetails: reqBody["shortDetails"],
        img: reqBody["img"],
        details: reqBody["details"],
      },
    });

    return NextResponse.json({
      status: "Successfully Update Service",
      data: updateService,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!",
      data: e.toString(),
    });
  }
}
