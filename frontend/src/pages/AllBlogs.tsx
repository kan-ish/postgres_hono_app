import { BlogCard } from "../components/BlogCard";

export default function AllBlogs() {
	return (
		<div className="flex justify-center">
			<div className="max-w-xl">
				<BlogCard
					authorName={"Kanishk Singh"}
					title={"Bending pause times to your will with Generational ZGC"}
					content={"Bending pause times to your will with Generational ZGC"}
					publishedDate={"1 minute ago"}
				/>

				<BlogCard
					authorName={"Kanishk Singh"}
					title={"Bending pause times to your will with Generational ZGC"}
					content={"Bending pause times to your will with Generational ZGC"}
					publishedDate={"1 minute ago"}
				/>
				
				<BlogCard
					authorName={"Kanishk Singh"}
					title={"Bending pause times to your will with Generational ZGC"}
					content={"Bending pause times to your will with Generational ZGC"}
					publishedDate={"1 minute ago"}
				/>
			</div>
		</div>
	);
}
