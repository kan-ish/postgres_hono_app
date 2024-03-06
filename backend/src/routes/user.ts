import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@kanishk198/validator-common";

const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();

userRouter.post("/signup", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signupInput.safeParse(body)
	if (!success) {
		c.status(411)
		return c.json({message: "Invalid inputs."})
	}

	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name: body.name,
			},
		});

		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch (err) {
		return c.status(403);
	}
});

userRouter.post("/signin", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signinInput.safeParse(body)
	console.log(success)
	if (!success) {
		c.status(411)
		return c.json({message: "Invalid inputs."})
	}

	const user = await prisma.user.findUnique({
		where: {
			email: body.email,
			password: body.password
		},
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "User not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
});

export default userRouter;
