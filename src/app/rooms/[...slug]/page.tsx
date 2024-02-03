import { getRoomListing } from "@/actions/getListing";
import RoomLayout from "@/components/rooms/RoomLayout";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    slug: string[];
  };
  searchParams: { [key: string]: string };
}

export const generateMetadata = async ({ searchParams }: pageProps) => {
  const { id } = searchParams;
  if (!id || id.length !== 24) {
    return {
      title: "Not Found",
    };
  }
  const data = await getRoomListing(id);
  if (!data) {
    return {
      title: "Not Found",
    };
  }
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [data.imageSrc],
    },
  };
};

const page: FC<pageProps> = async ({ searchParams }) => {
  const { id } = searchParams;
  if (!id || id.length !== 24) return notFound();

  const data = await getRoomListing(id);

  if (!data) return notFound();
  return (
    <div>
      <RoomLayout data={data} />
    </div>
  );
};

export default page;
