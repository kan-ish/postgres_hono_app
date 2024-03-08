export const Avatar = ({
	name,
	size = "small",
}: {
	name: string;
	size?: "small" | "big";
}) => {
	const nameList = name.split(" ");

	return (
		<div
			className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
				size === "small" ? "w-6 h-6" : "w-10 h-10"
			}`}
		>
			<span
				className={`${
					size === "small" ? "text-xs" : "text-md"
				} font-extralight text-gray-600 dark:text-gray-300`}
			>
				{nameList.length > 1 ? (
					<>
						{nameList[0][0].toUpperCase()}
						{nameList[nameList.length - 1][0].toUpperCase()}
					</>
				) : (
					nameList[0][0].toUpperCase()
				)}
			</span>
		</div>
	);
};
