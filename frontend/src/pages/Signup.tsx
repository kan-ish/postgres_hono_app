import { Quote } from "../components/Quote";

export default function Signup() {
	return (
		<div>
			<div className="grid grid-cols-2">
                <div>
				    Hello from Signup

                </div>

                <div className="invisible lg:visible">
                    <Quote />
                </div>
			</div>
		</div>
	);
}
