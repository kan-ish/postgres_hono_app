import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		"userId": string
	}
}>();

// Auth middleware
blogRouter.use("/*", async (c, next) => {
	try {
		const jwt = c.req.header("Authorization");
		if (!jwt) {
			c.status(401);
			return c.json({ error: "unauthorized" });
		}
		const token = jwt.split(" ")[1];
		const payload = await verify(token, c.env.JWT_SECRET);
		if (!payload) {
			c.status(401);
			return c.json({ error: "unauthorized" });
		}
		c.set("userId", payload.id);
		await next();
	} catch (err) {
		c.status(403);
		return c.json({ message: "You are not logged in." });
	}
});

blogRouter.post("/", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const userId = c.get("userId")
	const body = await c.req.json()

	const blog = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId,
		},
	});

	return c.json({ id: blog.id });
});

blogRouter.put("/", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const userId = c.get("userId");

	const blog = await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});

	return c.json({ message: `Updated blog ${blog.id}` });
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL
	}).$extends(withAccelerate())

	const allBlogs = await prisma.post.findMany({
		select: {
			content: true,
			title: true,
			id: true,
			author: {
				select: {
					name: true
				}
			}
		}
	})

	return c.json({ allBlogs })
});

blogRouter.get("/:id", async (c) => {
	const id = c.req.param("id");
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const blog = await prisma.post.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			title: true,
			content: true,
			author: {
				select: {
					name: true
				}
			}
		}
	});

	return c.json({ blog })
});

export default blogRouter;
