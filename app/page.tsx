
// This is the Home page you see on browser. I am importing a Table component and TableEdit (which allow user to add user).
// This is front end part of the application
// look inside pages/api/user.ts file to see the backend part of the application where I am using Prisma ORM to connect to Postgres database and create a new user
// Look inside prisma folder to see the schema.prisma file where I am defining the database schema
// Look inside table and tableEdit component to see the front end part of the application where i am displaying the data and allowing user to add new new data
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import TableEdit from "@/components/table-edit";
import React from "react";
import { Metadata } from "next";

export default async function Home() {

	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
				Building Web and Mobile Apps
			</h1>
			{/* <Advice /> */}
			<Suspense fallback={<TablePlaceholder />}>
				<Table />
			</Suspense>

			<div className="p-2"></div>

			<TableEdit />

			<p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
				{" "}
				{"Rishabh Goswami  (1455991)"}. The Application is built using{" "}
				<Link
					href="https://vercel.com/postgres"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					{"Postgres "}
				</Link>
				<Link
					href="https://prisma.io"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					Prisma
				</Link>{" "}
				<Link
					href="https://nextjs.org/docs"
					className="font-medium underline underline-offset-4 hover:text-black transition-colors"
				>
					Next.js
				</Link>
				.
			</p>
		</main>
	);
}



export const metadata: Metadata = {
	title: 'Sample NextJS app',
	description: 'This app is a sample Next.js app, to demonstrate the main features of Next.js',
	authors: {
		name: "HS-FULDA",
		url: 'https:hs-fulda.de'
	},
	keywords: ['next.js', 'javascript', 'Fulda university', 'Computer science'],
	robots: {
		index: true,
		follow: true,
		'max-snippet': 150,
		'max-image-preview': 'large',
		noarchive: true,
		nosnippet: false,
		notranslate: true
	},
	openGraph: {
		title: 'Next.js App',
		description: 'The React Framework for the Web',
		url: 'https://nextjs.org',
		siteName: 'Next.js',
		images: [
			{
				url: 'https://nextjs.org/og.png',
				width: 800,
				height: 600,
			},
			{
				url: 'https://nextjs.org/og-alt.png',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}
