import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const topicRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    if (!ctx.userId) throw new TRPCError({ code: "UNAUTHORIZED" });

    return ctx.prisma.topic.findMany({
      where: {
        userId: ctx.userId,
      },
    });
  }),
});
