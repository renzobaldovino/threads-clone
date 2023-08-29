import * as z from "zod";

export const threadValidation = z.object({
	accountId: z.string(),
	thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
});

export const commentValidation = z.object({
	thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
});
