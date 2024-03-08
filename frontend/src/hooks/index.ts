import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface BlogType {
	content: string;
	title: string;
	id: string;
	author: {
		name: string;
	};
}

export const useGetBlogs = () => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<BlogType[]>([]);

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((response) => {
				setBlogs(response.data.allBlogs);
				setLoading(false);
			});
	}, []);

	return {
		loading,
		blogs,
	};
};
