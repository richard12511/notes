import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    if (!ctx.userId) throw new TRPCError({ code: "UNAUTHORIZED" });

    return ctx.prisma.topic.findMany({
      where: {
        userId: ctx.userId,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.topic.create({
        data: {
          userId: ctx.userId,
          title: input.title,
        },
      });
    }),
});
