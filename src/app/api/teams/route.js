import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

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
