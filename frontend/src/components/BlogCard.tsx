interface BlogCardPropsType {
	authorName: string;
	title: string;
	content: string;
	publishedDate: string;
}

export const BlogCard = ({
	authorName,
	title,
	content,
	publishedDate,
}: BlogCardPropsType) => {
	return (
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
               
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
               
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>

                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            
            <div className="text-md font-thin">
                {content.length > 100 ? content.substring(0, 100) + "..." : content}
            </div>
            
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
	);
};

function Avatar({ name }: { name: string }) {
	const nameList = name.split(" ");

	return (
		<div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-700 rounded-full">
			<span className="text-xs font-normal text-slate-300">
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
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}
