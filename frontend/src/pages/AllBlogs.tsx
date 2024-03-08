import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useGetBlogs } from "../hooks";

export default function AllBlogs() {
	const { loading, blogs } = useGetBlogs()
	
	if (loading) {
		return (
			<div>
				loading...
			</div>
		)
	}

	return (
		<div>
			<Appbar />

			<div className="flex justify-center">
				<div className="max-w-xl">
					{blogs.map(blog => (
						<BlogCard
							key={blog.id}
							id={blog.id}
							authorName={blog.author.name || "Anonymous"}
							title={blog.title}
							content={blog.content}
							publishedDate={"1 minute ago"}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
