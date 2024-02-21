/**
 * ButtonMultiSelect Component
 *
 * Overview:
 * The ButtonMultiSelect component is a reusable, configurable button group component.
 * It allows the creation of a configurable buttons which allows for selecting from multiple possible actions.
 * The state of the selected button is saved in localStorage.
 *
 * Usage:
 * To use this component, define an array of ButtonConfig objects, each representing a button's configuration.
 * Pass this array along with a localStorage key (for saving the selected button's state) to the component.
 *
 * Example:
 * ```
 * <ButtonMultiSelect
 *    buttonConfigs={[
 *        { id: 'save', iconName: 'save_icon', label: 'Save', onClick: handleSave },
 *        { id: 'cancel', iconName: 'cancel_icon', label: 'Cancel', onClick: handleCancel }
 *    ]}
 *    localStorageKey="myButtonSelectKey"
 *    size="medium"
 *    isLoading={false}
 *    isCompact={true}
 * />
 * ```
 */
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useCallback, useEffect, useState } from "react";
import IconByName from "../icon/IconByName";
function ButtonMultiSelect({ id, buttonConfigs, size = "small", localStorageKey, isLoading = false, isCompact = false, }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(buttonConfigs[0]);
    const mainButtonRef = React.useRef(null);
    const open = Boolean(anchorEl);
    // load saved option from local storage
    useEffect(() => {
        const savedOptionKey = localStorage.getItem(localStorageKey);
        const savedOption = buttonConfigs.find((config) => config.id === savedOptionKey);
        // check if value matches one of the button configs
        if (savedOption) {
            setSelectedOption(savedOption);
        }
    }, []);
    const handleExpandClick = useCallback(() => {
        setAnchorEl(mainButtonRef.current);
    }, []);
    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);
    const handleMenuClick = useCallback((config) => {
        localStorage.setItem("selectedSaveOption", config.id);
        setSelectedOption(config);
        handleClose();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(ButtonGroup, { variant: "contained", size: size, sx: { height: "fit-content" } },
            React.createElement(LoadingButton, { id: id, ref: mainButtonRef, size: size, onClick: selectedOption.onClick, variant: "contained", loading: isLoading, startIcon: !isCompact && React.createElement(IconByName, { name: selectedOption.iconName, fontSize: size }) }, isCompact ? (React.createElement(IconByName, { name: selectedOption.iconName, fontSize: size })) : (selectedOption.label)),
            React.createElement(Button, { onClick: handleExpandClick, size: size },
                React.createElement(IconByName, { name: "shapes.arrow.dropdown", fontSize: size }))),
        React.createElement(Menu, { anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose }, buttonConfigs.map((config) => (React.createElement(MenuItem, { key: config.id, onClick: () => handleMenuClick(config) }, config.label))))));
}
export default ButtonMultiSelect;
