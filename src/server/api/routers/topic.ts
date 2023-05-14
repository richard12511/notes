import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const topicRouter = createTRPCRouter({
  getAllForUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      // if (!user) throw new TRPCError({ code: "NOT_FOUND" });
      // console.log(`in query, userId is:${user.id}`);
      // return ctx.prisma.topic.findMany({
      //   where: {
      //     userId: input.userId,
      //   },
      // });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return { greeting: `Hello ${ctx.userId}` };
    // const { user } = useUser();
    // if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    // console.log(`in query, userId is:${user.id}`);
    // return ctx.prisma.topic.findMany({
    //   where: {
    //     userId: user.id,
    //   },
    // });
  }),
});
