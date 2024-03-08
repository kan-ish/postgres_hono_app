import { BlogCard } from "../components/BlogCard";

export default function AllBlogs() {
	return (
		<div>
			<BlogCard
				authorName={"Kanishk Singh"}
				title={"Bending pause times to your will with Generational ZGC"}
				content={"Bending pause times to your will with Generational ZGC"}
				publishedDate={"1 minute ago"}
			/>
		</div>
	);
}
