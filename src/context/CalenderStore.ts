import { addDays } from "date-fns";
import { create } from "zustand";

interface CalenderStore {
  fromDate: Date;
  toDate: Date;
  totalDays: number;
  setFromDate: (date: Date) => void;
  setToDate: (date: Date) => void;
  setTotalDays: () => void;
  selectDays: (from?: Date, to?: Date) => void;
}

export const useCalenderStore = create<CalenderStore>((set, get) => ({
  fromDate: new Date(),
  toDate: addDays(new Date(), 3),
  totalDays: 3,
  setFromDate: (date) => set({ fromDate: date }),
  setToDate: (date) => set({ toDate: date }),
  setTotalDays: () => {
    const toDate = get().toDate;
    const fromDate = get().fromDate;

    if (toDate && fromDate) {
      const millisecondsPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
      const toDateStart = new Date(toDate);
      toDateStart.setHours(0, 0, 0, 0); // Set time to 00:00:00
      const fromDateStart = new Date(fromDate);
      fromDateStart.setHours(0, 0, 0, 0); // Set time to 00:00:00
      const totalDays = Math.floor(
        (toDateStart.getTime() - fromDateStart.getTime()) / millisecondsPerDay
      );
      set({ totalDays });
    }
  },
  selectDays: (from, to) => {

    set({ fromDate: from, toDate: to });
    get().setTotalDays();
  },
}));
