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
    <div>
        <Avatar name = {authorName} />

        <div>
            {authorName} . {publishedDate}
        </div>

        <div>
            {title}
        </div>

        <div>
            {content.length > 100 ? content.substring(0, 100) + "..." : content}
        </div>

        <div>
            {Math.ceil(content.length / 100)} minutes
        </div>
    </div>);
};


function Avatar({name}: {name: string}) {
    const nameList = name.split(" ")

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