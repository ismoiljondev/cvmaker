"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
	username: z
		.string()
		.min(1, { message: "User name is empty" })
		.max(50, { message: "Username should be shorter" }),
	surename: z
		.string()
		.min(1, { message: "Surename is empty" })
		.max(50, { message: "Surename should be shorter" }),
	email: z.string().email({ message: "This is not a valid email." }),
});

const Create = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			surename: "",
			email: "",
		},
		mode: "onChange",
	});
	const onSumbit: SubmitHandler<z.infer<typeof formSchema>> = (
		values: z.infer<typeof formSchema>
	) => {
		console.log(values);
	};
	return (
		<div className="max-w-[1440px] w-4/5 m-auto mt-32">
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle className="font-thin">CV</CardTitle>
						<Select>
							<SelectTrigger className="w-fit">
								<SelectValue placeholder="Select a language" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Languages</SelectLabel>
									<SelectItem value="Uz">Uz</SelectItem>
									<SelectItem value="Ru">Ru</SelectItem>
									<SelectItem value="Eng">Eng</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form>
							<FormField
								name="username"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fisrt Name*</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								name="surename"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name*</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<Button>Submit</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Create;
