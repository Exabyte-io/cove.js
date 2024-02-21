import { Moment } from "moment";
import React from "react";
export declare enum DateRangeOption {
    month = 1,
    threeMonths = 3,
    sixMonths = 6,
    year = 12,
    max = "max",
    custom = "custom"
}
export type DateRange = {
    startDate: Moment | null;
    endDate: Moment | null;
};
interface DatePickerProps {
    onChange: (dateRange: DateRange | Record<string, never>, option?: DateRangeOption | null) => void;
    startDate: Moment | null;
    endDate: Moment | null;
    defaultOption: DateRangeOption | null;
    isMaxOption: boolean;
}
declare function DatePicker({ onChange, startDate, endDate, defaultOption, isMaxOption, }: DatePickerProps): React.JSX.Element;
export default DatePicker;
