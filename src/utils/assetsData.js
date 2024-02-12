import { cookies } from "next/headers";
import { VerifyToken } from "./jwtHelper";
import { PrismaClient } from "@prisma/client";

//user Data
export async function getUser() {
    const allCookies = cookies();
    let token = allCookies.get("token");
    try {
        if (token) {
            let userData = await VerifyToken(token["value"]);
            const prisma = new PrismaClient();
            let user = await prisma.users.findUnique({
                where: { id: userData.id },
            });
            return user;
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        return null;
    }
}
// Get Single User
export async function getSingleUser(id) {
    const prisma = new PrismaClient();
    return await prisma.users.findUnique({
        where: { id: id },
    });
}

// Count all unreaded massage
export async function countUnreadedMassages(status) {
    const prisma = new PrismaClient();
    return await prisma.massages.count({ where: { status: status } });
}

// Count all unreaded massage
export async function getAllMassage() {
    const prisma = new PrismaClient();
    return await prisma.massages.findMany({
        orderBy: {
            id: "desc",
        },
    });
}

// Get All Service Data
export async function getServices(count) {
    const prisma = new PrismaClient();
    return await prisma.services.findMany({
        take: count,
        orderBy: { id: "desc" },
    });
}

// Single Service Data
export async function getSingleService(id) {
    const prisma = new PrismaClient();
    return await prisma.services.findUnique({ where: { id: id } });
}

// Get All Directors
export async function getDirectors() {
    const prisma = new PrismaClient();
    return await prisma.directors.findMany();
}

// Get Director Details
export async function getDirectorDetails(id) {
    const prisma = new PrismaClient();
    return await prisma.directors.findUnique({ where: { id: id } });
}

// Get All Notices
export async function getNotices(skip, count) {
    const prisma = new PrismaClient();
    return await prisma.notices.findMany({
        skip: skip,
        take: count,
        orderBy: {
            id: "desc",
        },
    });
}

// Get Single Notice
export async function getNoticesDetails(id) {
    const prisma = new PrismaClient();
    return await prisma.notices.findUnique({
        where: { id: id },
    });
}

// Get All Blog
export async function getAllBlogs(count) {
    const prisma = new PrismaClient();
    return await prisma.blogs.findMany({
        take: count,
        orderBy: { id: "desc" },
        include: {
            categories: { select: { name: true } },
        },
    });
}

// Get Single Blogs
export async function getBlogDetails(id) {
    const prisma = new PrismaClient();
    return await prisma.blogs.findUnique({
        where: {
            id: id,
        },
        include: {
            users: { select: { firstName: true, lastName: true } },
            // categories: { select: { name: true } },
        },
    });
}
// Get Related Blogs
export async function getRelatedBlogs(id) {
    const prisma = new PrismaClient();
    return await prisma.blogs.findMany({
        where: {
            categoryId: id,
        },
        take: 3,
        orderBy: { id: "desc" },
    });
}
