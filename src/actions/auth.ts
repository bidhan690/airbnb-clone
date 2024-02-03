"use server"
import prisma from "@/lib/prismaClient";
import { authSchema } from "@/lib/validations/auth";
import { Prisma } from "@prisma/client";
import { hash } from "bcryptjs";
import { z } from "zod";

export const signUp = async (input: z.infer<typeof authSchema>) => {
  const hashedPassword = await hash(input.password, 12);
  try {
    await prisma.user.create({
      data: {
        email: input.email,
        password: hashedPassword,
      },
    });
  } catch (error: Prisma.PrismaClientKnownRequestError) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error(
        "Email already exists",
      );
    }
    console.log("Error while signup creating account prisma error: " + error);
    throw new Error(
      "Error while creating account",
    );
  }
};
