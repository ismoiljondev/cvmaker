import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
	return (
		<>
			<Label htmlFor="email">Email</Label>
			<Input id="email" type="email" placeholder="Email"/>
			<Button variant={"ghost"}>Submit</Button>
		</>
	);
}
