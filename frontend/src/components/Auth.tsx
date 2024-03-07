import { ChangeEvent, useState } from "react";
import { SignupInput, SigninInput } from "@kanishk198/validator-common";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
	type AuthType = typeof type
	type PostInputType = AuthType extends "signin" ? SigninInput : SignupInput

	const [postInputs, setPostInputs] = useState<PostInputType>(
		type === "signup"
			? {
					email: "",
					name: "",
					password: "",
			  }
			: {
					email: "",
					password: "",
			  }
	);

	return (
		<div className="h-screen flex justify-center flex-col">
			<div className="flex justify-center">
				<div>
					<div className="px-10 mb-5">
						<div className="text-3xl font-extrabold">
							{type === "signup" ? "Create an account" : "Signin to your account"}
						</div>

						<div className="text-slate-400">
							{type === "signup" ? "Already have an account?" : "Don't have an account?"}

							<Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
								{type === "signup" ? "Signin" : "Signup"}
							</Link>
						</div>
					</div>

					<div>
						{type === "signup" && (
							<LabelledInput
								label="Name"
								placeholder="Name"
								onChange={(e) => {
									setPostInputs((state) => ({
										...state,
										name: e.target.value,
									}));
								}}
							/>
						)}

						<LabelledInput
							label="Email"
							placeholder="Email"
							onChange={(e) => {
								setPostInputs((state) => ({
									...state,
									email: e.target.value,
								}));
							}}
						/>

						<LabelledInput
							label="Password"
							placeholder="Password"
							type="password"
							onChange={(e) => {
								setPostInputs((state) => ({
									...state,
									password: e.target.value,
								}));
							}}
						/>

						<button
							type="button"
							className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
							{type === "signup" ? "Signup" : "Signin"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

interface LabelledInputType {
	label: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

function LabelledInput({
	label,
	placeholder,
	onChange,
	type,
}: LabelledInputType) {
	return (
		<div>
			<label
				htmlFor="first_name"
				className="block mb-2 text-sm font-semibold text-black mt-2">
				{label}
			</label>

			<input
				type={type || "text"}
				id="first_name"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				required
				onChange={onChange}
			/>
		</div>
	);
}
