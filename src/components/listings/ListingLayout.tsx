
import { FC } from "react";
import ListingSkeleton from "../skeleton/ListingSkeleton";
// import ListingItem from "./ListingItem";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { getHomeListing } from "@/actions/getListing";
const ListingItem = dynamic(() => import("./ListingItem"), {
  loading: () => <ListingSkeleton />,
});
interface ListingLayout {
  params: { [key: string]: string | string[] | undefined };
}

const ListingLayout: FC<ListingLayout> = async ({ }) => {
  // const { data, isLoading } = trpc.getHomeListing.useQuery();
  const data = await getHomeListing();
  // const query = useSearchParams().get("category")
  // console.log(query)
  return (
    <div className="mt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-3 md:gap-4 lg:gap-7">
      {data?.map((item:any) => (
        <ListingItem key={item.title} data={item} />
      ))}
    </div>
  );
};

export default ListingLayout;
