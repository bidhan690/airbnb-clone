"use client";
import { FC, useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { useCalenderStore } from "@/context/CalenderStore";

interface CalenderProps { location: string }

const CalenderLayout: FC<CalenderProps> = ({ location }) => {
  const calenderStore = useCalenderStore();
  const [numberOfMonths, setNumberOfMonths] = useState(2); // Default value is 2
  const isValidDate = calenderStore.fromDate && calenderStore.toDate;

  useEffect(() => {
    const handleWindowSizeChange = () => {
      // Check the window size and update the numberOfMonths accordingly
      if (window.matchMedia("(max-width: 768px)").matches) {
        setNumberOfMonths(1);
      } else {
        setNumberOfMonths(2);
      }
    };

    // Call the function once to set the initial value based on the device size
    handleWindowSizeChange();

    // Add a listener to track window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <div className="w-full space-y-3">
      <div>
        <h2 className="text-lg md:text-xl font-semibold">{isValidDate ? `${calenderStore.totalDays} nights in ${location.split(',')[0].trim()}` : "Select dates"}</h2>
        <p className="text-gray-700">{isValidDate ? `${format(calenderStore.fromDate, "PP")} - ${format(calenderStore.toDate, "PP")} ` : "Minimum stay 3 days"}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <Calendar
          mode="range"
          numberOfMonths={numberOfMonths}

          min={3}
          selected={{ to: calenderStore.toDate, from: calenderStore.fromDate }}
          onSelect={(date) => calenderStore.selectDays(date?.from, date?.to)}
          disabled={{ before: new Date() }}
          className="rounded-md w-full flex md:block justify-center"
        />
      </div>
    </div>
  );
};
export default CalenderLayout;
