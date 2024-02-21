/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Button from "@mui/material/Button";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import classNames from "classnames";
import moment from "moment";
import React, { useCallback, useState } from "react";
import IconByName from "../../icon/IconByName";
import { DatePickerButtonsContainer, StyledDatePicker, StyledDatePickerContainer, StyledPopover, } from "./DatePicker.styled";
export var DateRangeOption;
(function (DateRangeOption) {
    DateRangeOption[DateRangeOption["month"] = 1] = "month";
    DateRangeOption[DateRangeOption["threeMonths"] = 3] = "threeMonths";
    DateRangeOption[DateRangeOption["sixMonths"] = 6] = "sixMonths";
    DateRangeOption[DateRangeOption["year"] = 12] = "year";
    DateRangeOption["max"] = "max";
    DateRangeOption["custom"] = "custom";
})(DateRangeOption || (DateRangeOption = {}));
function DatePicker({ onChange, startDate = null, endDate = null, defaultOption = null, isMaxOption = false, }) {
    const [selectedDateRage, setSelectedDateRange] = useState({
        startDate: startDate || null,
        endDate: endDate || null,
    });
    const [selectedOption, setSelectedOption] = useState(defaultOption || (isMaxOption ? DateRangeOption.max : null));
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenDatePicker = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDatePicker = () => {
        setAnchorEl(null);
    };
    const applyDateChange = (dateRange, option) => {
        if (dateRange) {
            onChange(dateRange, option);
        }
        else {
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
        }
        else {
            setSelectedDateRange({
                ...selectedDateRage,
                [option]: null,
            });
        }
    }, [selectedDateRage]);
    const handleSelectOption = useCallback((option) => {
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
    }, [selectedOption]);
    const open = Boolean(anchorEl);
    const isDoneButtonDisabled = !(selectedDateRage.startDate && selectedDateRage.endDate);
    return (React.createElement(StyledDatePickerContainer, null,
        React.createElement(DatePickerButtonsContainer, null,
            React.createElement("div", { className: classNames("custom-date-picker", {
                    active: selectedOption === DateRangeOption.custom,
                }), onClick: handleOpenDatePicker },
                React.createElement(IconByName, { name: "shapes.calendar", sx: {
                        color: selectedOption === DateRangeOption.custom
                            ? "primary.contrastText"
                            : "primary.light",
                    } }),
                React.createElement("span", null, "Custom"),
                React.createElement(IconByName, { name: "shapes.arrow.dropdown", fontSize: "small" })),
            React.createElement("div", { className: classNames("range-1m", {
                    active: selectedOption === DateRangeOption.month,
                }), onClick: () => handleSelectOption(DateRangeOption.month) }, "1M"),
            React.createElement("div", { className: classNames("range-3m", {
                    active: selectedOption === DateRangeOption.threeMonths,
                }), onClick: () => handleSelectOption(DateRangeOption.threeMonths) }, "3M"),
            React.createElement("div", { className: classNames("range-6m", {
                    active: selectedOption === DateRangeOption.sixMonths,
                }), onClick: () => handleSelectOption(DateRangeOption.sixMonths) }, "6M"),
            React.createElement("div", { className: classNames("range-12m", {
                    active: selectedOption === DateRangeOption.year,
                }), onClick: () => handleSelectOption(DateRangeOption.year) }, "12M"),
            isMaxOption ? (React.createElement("div", { className: classNames("range-max", {
                    active: selectedOption === DateRangeOption.max,
                }), onClick: () => handleSelectOption(DateRangeOption.max) }, "Max")) : null),
        React.createElement(StyledPopover, { open: open, anchorEl: anchorEl, onClose: handleCloseDatePicker, anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
            } },
            React.createElement(LocalizationProvider, { dateAdapter: AdapterMoment },
                React.createElement(StyledDatePicker, { className: "date-from", label: "From", 
                    // @ts-ignore
                    onChange: (value, context) => handleSelectDate("startDate", value, context), value: selectedDateRage.startDate, views: ["year", "month", "day"] }),
                React.createElement(StyledDatePicker, { className: "date-to", label: "To", 
                    // @ts-ignore
                    onChange: (value, context) => handleSelectDate("endDate", value, context), value: selectedDateRage.endDate, views: ["year", "month", "day"] })),
            React.createElement("div", { className: "done-button-container" },
                React.createElement(Button, { variant: "text", onClick: handleDone, disabled: isDoneButtonDisabled }, "DONE")))));
}
export default DatePicker;
