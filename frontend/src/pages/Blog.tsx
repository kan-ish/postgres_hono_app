import { useGetBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "./FullBlog";

export default function Blog() {
	const { id } = useParams();

	const { loading, blog } = useGetBlog({ id: id || "" });

	if (loading) {
		return <div>loading...</div>;
	}

	return (
		<div>
			<FullBlog blog={blog} />
		</div>
	);
}
