"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BedDoubleIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { format, isSameDay, isWithinInterval } from "date-fns";
import { Calendar } from "./ui/calendar";
export const formSchema = z.object({
  location: z.string().min(2, "Must be 2 characters or more").max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, { message: "Plese select at least one adult" })
    .max(12, {
      message: "Max 12 children Occupacy",
    }),
  rooms: z.string().min(1, {
    message: "Please select at least 1 room",
  }),
  children: z.string().min(0, {
    message: "Please select at least 1 room",
  }),
});
const SearchForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      rooms: "1",
      
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {

const checkin_monthday = values.dates.from.getDate().toString();
const checkin_month = (values.dates.from.getMonth()+1).toString();
const checkin_year= values.dates.to.getFullYear().toString();
const checkout_monthday = values.dates.to.getDate().toString();
const checkout_month = (values.dates.to.getMonth()+1).toString();
const checkout_year = values.dates.to.getFullYear().toString();

const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`
const checkout= `${checkout_year}-${checkout_month}-${checkout_monthday}`
const location = values.location;

const url = new URL('https://www.booking.com/searchresults.html');
url.searchParams.set('ss', location);
url.searchParams.set('group_adults', values.adults);
url.searchParams.set('group_children', values.children);
url.searchParams.set('no_rooms', values.rooms)
url.searchParams.set('checkin', checkin);
url.searchParams.set('checkout', checkout);

router.push(`/search?url=${url.href}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
           
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>

                <FormMessage />

                <FormControl>
                  <Input className="bg-white text-gray-500 rounded-xl" placeholder="London, UK" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* calendar */}
        <div className="grid w-full  lg:max-w-sm flex-1 items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col ">
                <FormLabel className="text-white">Dates</FormLabel>
                <FormMessage />


                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-full lg:w-[300px] justify-start text-left font-normal bg-white rounded-xl hover:bg-slate-200",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd y")} -{" "}
                              {format(field.value?.to, "LLL dd y")}
                            </>
                          ) : (
                            format(field.value?.from, "LLL dd y")
                          )
                        ) : (
                          <span>Select your date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-white "
                    align="start"
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
               
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>
      
        <div className="flex w-full items-center space-x-2">
<div className="grid items-center flex-1">
<FormField control={form.control} 
name='adults'
render={({field}) => (
    <FormItem className="flex flex-col">
        <FormLabel className="text-white">Adults</FormLabel>
        <FormMessage />
        <FormControl>
            <Input  className='bg-white rounded-xl' type="number" placeholder="Adults" {...field}/>
        </FormControl>
    </FormItem>
)}/>
</div>
   
     
<div className="grid items-center flex-1">
<FormField control={form.control} 
name='children'
render={({field}) => (
    <FormItem className="flex flex-col ">
        <FormLabel className="text-white">Children</FormLabel>
        <FormMessage />
        <FormControl>
            <Input  className='bg-white rounded-xl' type="number" placeholder="0" {...field}/>
        </FormControl>
    </FormItem>
)}/>
</div>
        
       
<div className="grid items-center flex-1">
<FormField control={form.control} 
name='rooms'
render={({field}) => (
    <FormItem className="flex flex-col ">
        <FormLabel className="text-white">Rooms</FormLabel>
        <FormMessage />
        <FormControl>
            <Input  className='bg-white rounded-xl' type="number" placeholder="Rooms" {...field}/>
        </FormControl>
    </FormItem>
)}/>
</div>
<div className="mt-auto">
  <Button type="submit" className="bg-blue-500 text-base rounded-xl text-white p-5 hover:bg-blue-700">Search</Button>
</div>
     </div>  
        
      </form>
    </Form>
  );
};

export default SearchForm;
