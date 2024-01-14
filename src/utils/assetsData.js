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

//Category throw Type wise Item/Product
export async function CategoryWiseItems(id, type) {
    const prisma = new PrismaClient();
    let items = await prisma.products.findMany({
        where: { categoryId: id, type: type },
    });
    return items;
}

// catagories from database
export async function getCategories() {
    let prisma = new PrismaClient();
    return await prisma.categories.findMany();
}

// Get Single Categories
export async function singleCategory(id) {
    const prisma = new PrismaClient();
    return await prisma.categories.findUnique({ where: { id: id } });
}

// Latest 5 Products
export async function getLatest5Products() {
    const prisma = new PrismaClient();
    return await prisma.products.findMany({
        take: 5,
        include: { category: { select: { name: true } } },
    });
}

//Category wise Count Items
export async function categoryWiseCountItems(id) {
    const prisma = new PrismaClient();

    return await prisma.products.groupBy({
        where: { categoryId: id },
        by: ["type"],
        _count: {
            type: true,
            categoryId: true,
        },
    });
}

//Category wise All Items
export async function categoryWiseALLItems(id) {
    const prisma = new PrismaClient();

    return await prisma.products.findMany({
        where: { categoryId: id },
        include: { category: { select: { name: true } } },
    });
}
// Single Product
export async function getSingleProduct(id) {
    const prisma = new PrismaClient();
    return await prisma.products.findUnique({
        where: { id: id },
    });
}

// Related Products
export async function getRelatedProducts(id) {
    let prisma = new PrismaClient();
    return await prisma.products.findMany({
        where: { categoryId: id },
        take: 4,
    });
}

// Total Cart Items
export async function countCartData(id) {
    if (id === 0) {
        return null;
    } else {
        const prisma = new PrismaClient();
        let data = await prisma.orders.groupBy({
            by: ["status"],
            where: {
                userId: id,
                status: "white Listed",
            },
            _sum: {
                qtr: true,
            },
        });

        return data[0]?._sum.qtr;
    }
}

// Get All Cart Items
export async function getAllCartData(id) {
    if (id === 0) {
        return null;
    } else {
        const prisma = new PrismaClient();
        return await prisma.orders.findMany({
            where: { userId: id, status: "white Listed" },
            include: {
                product: {
                    select: {
                        title: true,
                        price: true,
                        discount: true,
                    },
                },
            },
        });
    }
}

// Count order Items
export async function countOrderItems(userId, status) {
    const prisma = new PrismaClient();
    return await prisma.orders.count({
        where: { userId: userId, status: status },
    });
}

// Count Dashboard order Items
export async function countDashboardOrderItems(status) {
    const prisma = new PrismaClient();
    return await prisma.orders.count({
        where: { status: status },
    });
}

// Get All Pending Order
export async function getAllOrder(status) {
    const prisma = new PrismaClient();
    return await prisma.orders.findMany({
        where: { status: status },
        include: {
            user: {
                select: {
                    firstName: true,
                    lastName: true,
                    address: true,
                    phone: true,
                },
            },
            product: {
                select: {
                    title: true,
                    price: true,
                    discount: true,
                },
            },
        },
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

// Subscriber Count
export async function getAllSubscribers() {
    const prisma = new PrismaClient();
    return await prisma.subscribers.count();
}
