"use client";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
	jobtitle: z
		.string()
		.min(1, { message: "User name is empty" })
		.max(50, { message: "Username should be shorter" }),
	employer: z
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
	city: z.string(),
});
const Experience = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			jobtitle: "",
			address: "",
			email: "",
		},
		mode: "onChange",
	});
	const onSumbit: SubmitHandler<z.infer<typeof formSchema>> = (
		values: z.infer<typeof formSchema>
	) => {
		console.log(values);
	};
	const month = [
		"Month",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	function getYear(x: number) {
		let num = [];
		for (let i = 1945; i <= x; i++) {
			num.push(i);
		}
		return num;
	}
	let year = getYear(2012);
	return (
		<div className="max-w-[1440px] w-3/5 m-auto mt-32">
			<Form {...form}>
				<form>
					<Accordion type="multiple">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col gap-4">
									<hr />
									<div className="grid grid-cols-2 gap-4">
										<FormField
											name="jobtitle"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Job Title
													</FormLabel>
													<FormControl>
														<Input
															placeholder="e.g Sales Manager"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											name="city"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Job Title
													</FormLabel>
													<FormControl>
														<Input
															placeholder="e.g Tashkent"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									<FormField
										name="employer"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Employer</FormLabel>
												<FormControl>
													<Input
														placeholder="e.g PwC"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<div className="grid grid-cols-4 gap-4">
										<FormField
											name="date"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Start month
													</FormLabel>
													<FormControl>
														<Select {...field}>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Select a month" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Month
																	</SelectLabel>
																	{month.map(
																		(e) => (
																			<SelectItem
																				value={
																					e
																				}
																			>
																				{
																					e
																				}
																			</SelectItem>
																		)
																	)}
																</SelectGroup>
															</SelectContent>
														</Select>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											name="date"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Start year
													</FormLabel>
													<FormControl>
														<Select {...field}>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Select a year" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		year
																	</SelectLabel>
																	{year.map(
																		(e) => (
																			<SelectItem
																				value={`
																					${e}
																				`}
																			>
																				{
																					e
																				}
																			</SelectItem>
																		)
																	)}
																</SelectGroup>
															</SelectContent>
														</Select>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											name="date"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														End month
													</FormLabel>
													<FormControl>
														<Select {...field}>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Select a month" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		Month
																	</SelectLabel>
																	{month.map(
																		(e) => (
																			<SelectItem
																				value={
																					e
																				}
																			>
																				{
																					e
																				}
																			</SelectItem>
																		)
																	)}
																</SelectGroup>
															</SelectContent>
														</Select>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											name="date"
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														End year
													</FormLabel>
													<FormControl>
														<Select {...field}>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Select a year" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>
																		year
																	</SelectLabel>
																	{year.map(
																		(e) => (
																			<SelectItem
																				value={`${e}`}
																			>
																				{
																					e
																				}
																			</SelectItem>
																		)
																	)}
																</SelectGroup>
															</SelectContent>
														</Select>
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</form>
			</Form>
		</div>
	);
};

export default Experience;
