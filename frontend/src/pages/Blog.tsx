import { useGetBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "./FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export default function Blog() {
	const { id } = useParams();

	const { loading, blog } = useGetBlog({ id: id || "" });

	if (loading || !blog) {
		return (
			<div>
				<Appbar />
				
				<div className="flex justify-center">
					<FullBlogSkeleton />
				</div>
			</div>
		);
	}

	return (
		<div>
			<FullBlog blog={blog} />
		</div>
	);
}
