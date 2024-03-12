export const FullBlogSkeleton = () => {
	return (
		<div role="status" className="animate-pulse">
			<div className="grid grid-cols-12 px-10 w-screen max-w-screen-xl pt-12">
				<div className="col-span-8 mr-20">
					<div className="mb-5">
						<div className="h-10 w-full mb-2.5 rounded-full bg-gray-200 "></div>
						<div className="h-10 w-full mb-2.5 rounded-full bg-gray-200 "></div>
						<div className="h-10 w-1/2 rounded-full bg-gray-200 "></div>
					</div>

					<div className="h-4 w-1/4 rounded-full bg-gray-200 pt-2 mb-10"></div>

					<div>
						<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
					</div>
				</div>

				<div className="col-span-4">
					<div className="mb-5">
						<div className="h-6 w-2/5 rounded-full bg-gray-200 "></div>
					</div>

					<div className="flex flex-col w-full">
						<div className="pr-4 flex flex-col justify-center">
                            <div className="flex items-center mb-4 w-full gap-5">
							    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                <div className="h-5 w-1/2 bg-gray-200 rounded-full"></div>
                            </div>
						</div>

						<div>
							<div className="h-4 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
							<div className="h-4 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
							<div className="h-4 w-1/2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
