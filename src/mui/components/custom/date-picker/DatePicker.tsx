/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import { DateValidationError } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import classNames from "classnames";
import moment, { Moment } from "moment";
import React, { SyntheticEvent, useCallback, useState } from "react";

import {
    DatePickerButtonsContainer,
    StyledCalendarTodayIcon,
    StyledDatePicker,
    StyledDatePickerContainer,
    StyledPopover,
} from "./DatePicker.styled";

export enum DateRangeOption {
    month = 1,
    threeMonths = 3,
    sixMonths = 6,
    year = 12,
    max = "max",
    custom = "custom",
}

export type DateRange = { startDate: Moment | null; endDate: Moment | null };

interface DatePickerProps {
    onChange: (
        dateRange: DateRange | Record<string, never>,
        option?: DateRangeOption | null,
    ) => void;
    startDate: Moment | null;
    endDate: Moment | null;
    defaultOption: DateRangeOption | null;
    isMaxOption: boolean;
}

function DatePicker({
    onChange,
    startDate = null,
    endDate = null,
    defaultOption = null,
    isMaxOption = false,
}: DatePickerProps) {
    const [selectedDateRage, setSelectedDateRange] = useState({
        startDate: startDate || null,
        endDate: endDate || null,
    });
    const [selectedOption, setSelectedOption] = useState(
        defaultOption || (isMaxOption ? DateRangeOption.max : null),
    );
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenDatePicker = (event: SyntheticEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDatePicker = () => {
        setAnchorEl(null);
    };

    const applyDateChange = (dateRange: DateRange | null, option?: DateRangeOption | null) => {
        if (dateRange) {
            onChange(dateRange, option);
        } else {
            onChange({}, option);
        }
    };

    const handleDone = useCallback(() => {
        if (selectedDateRage.startDate && selectedDateRage.endDate) {
            const dateRange = {
                startDate: selectedDateRage.startDate.startOf("day"),
                endDate: selectedDateRage.endDate.endOf("day"),
            };

            setSelectedOption(DateRangeOption.custom);
            applyDateChange(dateRange);
            handleCloseDatePicker();
        }
    }, [selectedDateRage]);

    const handleSelectDate = useCallback(
        // @ts-ignore
        (option, value, context) => {
            if (!context.validationError) {
                setSelectedDateRange({
                    ...selectedDateRage,
                    [option]: value,
                });
            } else {
                setSelectedDateRange({
                    ...selectedDateRage,
                    [option]: null,
                });
            }
        },
        [selectedDateRage],
    );

    const handleSelectOption = useCallback(
        (option: DateRangeOption) => {
            if (selectedOption === option) {
                setSelectedOption(isMaxOption ? DateRangeOption.max : null);
                setSelectedDateRange({ startDate: null, endDate: null });
                applyDateChange(null, isMaxOption ? DateRangeOption.max : null);

                return;
            }

            if (option === DateRangeOption.max && isMaxOption) {
                setSelectedOption(option);
                setSelectedDateRange({ startDate: null, endDate: null });
                applyDateChange(null, DateRangeOption.max);

                return;
            }

            const dateRange = {
                startDate: moment().startOf("day").subtract(option, "months"),
                endDate: moment().endOf("day"),
            };

            setSelectedOption(option);
            setSelectedDateRange(dateRange);
            applyDateChange(dateRange, option);
        },
        [selectedOption],
    );

    const open = Boolean(anchorEl);
    const isDoneButtonDisabled = !(selectedDateRage.startDate && selectedDateRage.endDate);

    return (
        <StyledDatePickerContainer>
            <DatePickerButtonsContainer>
                <div
                    className={classNames("custom-date-picker", {
                        active: selectedOption === DateRangeOption.custom,
                    })}
                    onClick={handleOpenDatePicker}
                >
                    <StyledCalendarTodayIcon active={selectedOption === DateRangeOption.custom} />
                    <span>Custom</span>
                    <ArrowDropDownIcon fontSize="large" />
                </div>
                <div
                    className={classNames("range-1m", {
                        active: selectedOption === DateRangeOption.month,
                    })}
                    onClick={() => handleSelectOption(DateRangeOption.month)}
                >
                    1M
                </div>
                <div
                    className={classNames("range-3m", {
                        active: selectedOption === DateRangeOption.threeMonths,
                    })}
                    onClick={() => handleSelectOption(DateRangeOption.threeMonths)}
                >
                    3M
                </div>
                <div
                    className={classNames("range-6m", {
                        active: selectedOption === DateRangeOption.sixMonths,
                    })}
                    onClick={() => handleSelectOption(DateRangeOption.sixMonths)}
                >
                    6M
                </div>
                <div
                    className={classNames("range-12m", {
                        active: selectedOption === DateRangeOption.year,
                    })}
                    onClick={() => handleSelectOption(DateRangeOption.year)}
                >
                    12M
                </div>
                {isMaxOption ? (
                    <div
                        className={classNames("range-max", {
                            active: selectedOption === DateRangeOption.max,
                        })}
                        onClick={() => handleSelectOption(DateRangeOption.max)}
                    >
                        Max
                    </div>
                ) : null}
            </DatePickerButtonsContainer>
            <StyledPopover
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseDatePicker}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <StyledDatePicker
                        className="date-from"
                        label="From"
                        onChange={(value, context) => handleSelectDate("startDate", value, context)}
                        value={selectedDateRage.startDate}
                        views={["year", "month", "day"]}
                    />
                    <StyledDatePicker
                        className="date-to"
                        label="To"
                        onChange={(value, context) => handleSelectDate("endDate", value, context)}
                        value={selectedDateRage.endDate}
                        views={["year", "month", "day"]}
                    />
                </LocalizationProvider>
                <div className="done-button-container">
                    <Button variant="text" onClick={handleDone} disabled={isDoneButtonDisabled}>
                        DONE
                    </Button>
                </div>
            </StyledPopover>
        </StyledDatePickerContainer>
    );
}

export default DatePicker;
