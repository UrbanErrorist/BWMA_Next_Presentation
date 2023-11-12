// POST /api/user
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest
) {

    const bodyJSON = await req.json();

    const result = await prisma.users.create({
        data: {
            name: bodyJSON.name,
            mobile: bodyJSON.mobile,
            image: "https://i.pravatar.cc/300",
        },
    });
    return NextResponse.json({ result }, { status: 201 });

}

export async function GET(req: NextRequest) {
    const users: user[] = await prisma.users.findMany();
    return NextResponse.json({ data: users }, { status: 200 });
}