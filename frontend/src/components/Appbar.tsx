import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Appbar = () => {
	return (
		<div className="border-b flex justify-between px-10 py-4">
			<Link
				to={"/blogs"}
				className="flex flex-col justify-center cursor-pointer">
				<div className="flex flex-col justify-center">Medium Rare</div>
			</Link>

			<div>
				<Avatar name="Kanishk Singh" size="big" />
			</div>
		</div>
	);
};
