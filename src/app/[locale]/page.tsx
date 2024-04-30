"use client";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";
export default function Home() {
	const words = [
		{
			text: "Build",
		},
		{
			text: "awesome",
		},
		{
			text: "Resume",
		},
		{
			text: "with",
		},
		{
			text: "CVmaker",
			className: "text-blue-500 dark:text-blue-500",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center h-[40rem] ">
			<p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
				The road to freedom starts from here
			</p>
			<TypewriterEffect words={words} />
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
				<Link href={"/create"}>
					<Button className="rounded-xl bg-black border dark:border-white border-transparent text-white text-xl px-5 py-8">
						Create your Resume
					</Button>
				</Link>
			</div>
		</div>
	);
}
