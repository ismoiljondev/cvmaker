import React, { ReactNode } from "react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type customInputProps = {
	form: any;
	label: ReactNode;
	placeholder: string;
	type: string;
	style: string;
	name: string;
};

const CustomInput = ({
	form,
	label,
	placeholder,
	style,
	type,
	name,
}: customInputProps) => {
	return (
		<FormField
			name={name}
			control={form.control}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							{...field}
							type={type}
							className={style}
						/>
					</FormControl>
				</FormItem>
			)}
		/>
	);
};

export default CustomInput;
