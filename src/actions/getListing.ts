"use server";
import prisma from "@/lib/prismaClient";

export const getHomeListing = async () => {
  return await prisma.listing.findMany()
};

export const getRoomListing = async (id: string) => {
  return await prisma.listing.findUnique({
    where: {
      id,
    },
  });
};
