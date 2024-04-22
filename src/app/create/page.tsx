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
const create = () => {
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
					
				</CardContent>
			</Card>
		</div>
	);
};

export default create;
