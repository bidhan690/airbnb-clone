import Categories from "@/components/categories/Categories";
import CategorieSkeleton from "@/components/skeleton/CategorieSkeleton";
import ListingSkeleton from "@/components/skeleton/ListingSkeleton";
import dynamic from "next/dynamic";
//import ListingLayout from "@/components/listings/ListingLayout";
const ListingLayout = dynamic(
  () => import("@/components/listings/ListingLayout"),
  {
    loading: () => <ListingSkeleton />,
  },
);

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="px-2 md:px-7 lg:px-10">
      <Categories />
      <ListingLayout params={searchParams} />
    </div>
  );
}
