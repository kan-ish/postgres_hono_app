import { BlogCard } from "../components/BlogCard";

export default function AllBlogs() {
	return (
		<div>
			<BlogCard
				authorName={"Kanishk Singh"}
				title={"Some Title"}
				content={"Lorem ipsum dolor sit amet"}
				publishedDate={"1 minute ago"}
			/>
		</div>
	);
}
