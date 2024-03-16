import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Team Member
export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let createTeamMember = await prisma.teams.create({
      data: reqBody,
    });

    return NextResponse.json({
      status: "Successfully add Team Member",
      data: createTeamMember,
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
    let updateMember = await prisma.teams.update({
      where: { id: reqBody["id"] },
      data: {
        firstName: reqBody["firstName"],
        lastName: reqBody["lastName"],
        profession: reqBody["profession"],
        bio: reqBody["bio"],
        avatar: reqBody["avatar"],
        email: reqBody["email"],
        phone: reqBody["phone"],
        qualification: reqBody["qualification"],
        designation: reqBody["designation"],
        facebook: reqBody["facebook"],
        twiter: reqBody["twiter"],
        linkedin: reqBody["linkedin"],
        instragram: reqBody["instragram"],
      },
    });

    return NextResponse.json({
      status: "Successfully Update Team Member",
      data: updateMember,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Internal Error!",
      data: e.toString(),
    });
  }
}
