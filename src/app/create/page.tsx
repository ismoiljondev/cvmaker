"use client";
import React, { useState } from "react";
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
import { date, z } from "zod";
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
	file: z.any(),
	phone: z.number(),
	address: z.string(),
	zip: z.number().max(10),
	date: z.any(),
	birthplace: z.string(),
	drlistense: z.string(),
	nationality: z.string(),
	linkedin: z.string(),
	gender: z.string(),
});

const Create = () => {
	const [add, setAdd] = useState(false);
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
	console.log(add);

	return (
		<div className="max-w-[1440px] w-3/5 m-auto mt-32">
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
							<div className="flex justify-between gap-6">
								<FormField
									name="file"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												<div className="aspect-square border-dotted border-2 border-gray-400 rounded-md w-40 flex flex-col items-center hover:border-black justify-center cursor-pointer">
													<div>
														<svg
															stroke="currentColor"
															fill="currentColor"
															stroke-width="0"
															viewBox="0 0 24 24"
															height="3em"
															width="3em"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																cx="12"
																cy="12"
																r="3.2"
															></circle>
															<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
														</svg>
													</div>
													<h2>
														Add photo (optional)
													</h2>
												</div>
											</FormLabel>
											<FormControl>
												<Input
													placeholder="mlmn"
													{...field}
													type="file"
													className="hidden"
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<div className="flex flex-col w-full">
									<FormField
										name="username"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Fisrt Name*
												</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="surename"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Last Name*
												</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className="grid gap-4 grid-cols-2">
								<FormField
									name="email"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Email address*
											</FormLabel>
											<FormControl>
												<Input
													placeholder=""
													{...field}
													type="email"
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									name="phone"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone number</FormLabel>
											<FormControl>
												<Input
													placeholder=""
													{...field}
													type="tel"
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<div className="flex flex-col">
								<FormField
									name="address"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input
													placeholder=""
													{...field}
													type="text"
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<div className="grid grid-cols-2 gap-4">
									<FormField
										name="zip"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Zip code</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
														type="email"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="address"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>City/Town</FormLabel>
												<FormControl>
													<Input
														placeholder="e.g Tashkent"
														{...field}
														type="text"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div
								className={`h-0 overflow-hidden duration-1000 ${
									add ? "h-64" : ""
								}`}
							>
								<div className="grid grid-cols-2 gap-4">
									<FormField
										name="date"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Date of birth
												</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
														type="date"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="birthplace"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Place of birth
												</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
														type="date"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="drlistense"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Driving license
												</FormLabel>
												<FormControl>
													<Input
														placeholder="A,B"
														{...field}
														type="text"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="nationality"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Nationality
												</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
														type="text"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="linkedin"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Linkedln</FormLabel>
												<FormControl>
													<Input
														placeholder=""
														{...field}
														type="text"
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="gender"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Gender</FormLabel>
												<FormControl>
													<Select {...field}>
														<SelectTrigger>
															<SelectValue placeholder="Select" />
														</SelectTrigger>
														<SelectContent>
															<SelectGroup>
																<SelectItem value="Uz">
																	Men
																</SelectItem>
																<SelectItem value="Ru">
																	Women
																</SelectItem>
																<SelectItem value="Eng">
																	Other
																</SelectItem>
															</SelectGroup>
														</SelectContent>
													</Select>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<Button
								type="button"
								className="w-full mt-4 flex items-center gap-2"
								onClick={() => setAdd((prev) => !prev)}
							>
								<span className="text-2xl">
									{add ? "-" : "+"}
								</span>
								{"  "}
								<span className="hover:border-b-2 hover:border-white border-b-2 border-transparent">
									Additional information
								</span>
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Create;
