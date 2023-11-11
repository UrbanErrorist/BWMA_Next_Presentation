// Rishabh Goswami
// matriculation number: 1455991
//28 October 2023

// POST /api/user
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const result = await prisma.users.create({
			data: {
				name: req.body.name,
				mobile: req.body.mobile,
				image: "https://i.pravatar.cc/300",
			},
		});
		return res.status(201).json({ result });
	}

	if (req.method === "GET") {
		const users: user[] = await prisma.users.findMany();
		return res
			.status(200)
			.json({ data: users, message: "GET request not allowed" });
	}
}
