import React, { ReactNode } from "react";
export interface TotalWidgetProps {
    id?: string;
    sum: string;
    label: string;
    iconName: string;
    boxColor: string;
    isBorder?: boolean;
    textColor?: string;
    popoverContent?: ReactNode;
}
export default function TotalWidget({ id, sum, label, iconName, boxColor, textColor, popoverContent, isBorder, }: TotalWidgetProps): React.JSX.Element;
