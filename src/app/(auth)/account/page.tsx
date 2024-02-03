import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const user = await getServerSession(authOptions);
  return <div>{JSON.stringify(user)}</div>;
};
export default page;
