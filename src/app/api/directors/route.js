import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Director
export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();

    let createDirector = await prisma.directors.createMany({
      data: reqBody,
    });
    return NextResponse.json({
      status: "Successfully Create Directors",
      data: createDirector,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!!",
      data: e.toString(),
    });
  }
}

// Update Service
export async function PATCH(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let updateDirector = await prisma.directors.update({
      where: { id: reqBody["id"] },
      data: {
        name: reqBody["name"],
        qualification: reqBody["qualification"],
        profession: reqBody["profession"],
        designation: reqBody["designation"],
        phone: reqBody["phone"],
        email: reqBody["email"],
        details: reqBody["details"],
        img: reqBody["img"],
      },
    });

    return NextResponse.json({
      status: "Successfully Update Director",
      data: updateDirector,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!",
      data: e.toString(),
    });
  }
}
// Delete Director
export async function DELETE(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let deleteDirector = await prisma.directors.delete({
      where: { id: reqBody["id"] },
    });

    return NextResponse.json({
      status: "Successfully Delete Director",
      data: deleteDirector,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!",
      data: e.toString(),
    });
  }
}
