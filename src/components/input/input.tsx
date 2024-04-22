import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type InputWithLabelProps = {
	labelText: string;
	inputPlaseholder: string;
	inputType: string;
};

const InputWithLabel = ({
	labelText,
	inputPlaseholder,
	inputType,
}: InputWithLabelProps) => {
	return (
		<div>
			<Label>{labelText}</Label>
			<Input type={inputType} placeholder={inputPlaseholder} />
		</div>
	);
};

export default InputWithLabel;
