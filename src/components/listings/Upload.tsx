import { FC } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface UploadProps {}

const items = [
  { name: "title", label: "Title", type: "text" },
  { name: "description", label: "Description", type: "text" },
  { name: "host", label: "Hosted by", type: "text" },
  { name: "price", label: "Price", type: "number" },
  { name: "imageSrc", label: "Image", type: "text" },
  { name: "locationValue", label: "Location", type: "text" },
  { name: "amenities", label: "Amenities", type: "text" },
  { name: "category", label: "Category", type: "text" },
  { name: "roomCount", label: "Room Count", type: "number" },
  { name: "bathroomCount", label: "Bathroom Count", type: "number" },
  { name: "guestCount", label: "Guest Count", type: "number" },
];

const Upload: FC<UploadProps> = ({}) => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      host: "",
      imageSrc: "",
      locationValue: "",
      amenities: "",
      category: "",
      roomCount: "",
      bathroomCount: "",
      guestCount: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      toast.success("Listing created successfully");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
        >
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center"> Upload Listing</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-80">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
              {items.map((item: any) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input {...field} type={item.type} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-3 animate-spin w-4 h-4" /> Submitting{" "}
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Upload;
