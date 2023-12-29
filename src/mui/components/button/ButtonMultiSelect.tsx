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
 * Optionally, you can also specify the size of the buttons (see https://mui.com/material-ui/react-button/#sizes).
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

export type ButtonConfig = {
    id: string;
    iconName: string;
    label: string;
    onClick: () => void;
};

type ButtonMultiSelectProps = {
    id?: string;
    buttonConfigs: ButtonConfig[];
    size?: "small" | "medium" | "large";
    localStorageKey: string;
    isLoading?: boolean;
    isCompact?: boolean;
};

function ButtonMultiSelect({
    id,
    buttonConfigs,
    size = "small",
    localStorageKey,
    isLoading = false,
    isCompact = false,
}: ButtonMultiSelectProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [selectedOption, setSelectedOption] = useState<ButtonConfig>(buttonConfigs[0]);
    const mainButtonRef = React.useRef<HTMLButtonElement>(null);
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

    const handleMenuClick = useCallback((config: ButtonConfig) => {
        localStorage.setItem("selectedSaveOption", config.id);
        setSelectedOption(config);
        handleClose();
    }, []);

    return (
        <>
            <ButtonGroup variant="contained" size={size} sx={{ height: "fit-content" }}>
                <LoadingButton
                    id={id}
                    ref={mainButtonRef}
                    size={size}
                    onClick={selectedOption.onClick}
                    variant="contained"
                    loading={isLoading}
                    startIcon={
                        !isCompact && <IconByName name={selectedOption.iconName} fontSize={size} />
                    }>
                    {isCompact ? (
                        <IconByName name={selectedOption.iconName} fontSize={size} />
                    ) : (
                        selectedOption.label
                    )}
                </LoadingButton>
                <Button onClick={handleExpandClick} size={size}>
                    <IconByName name="shapes.arrow.dropdown" fontSize={size} />
                </Button>
            </ButtonGroup>
            <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                {buttonConfigs.map((config) => (
                    <MenuItem key={config.id} onClick={() => handleMenuClick(config)}>
                        {config.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default ButtonMultiSelect;
