import React from "react";
interface Props {
    draggableId: string;
    index: number;
    children?: React.ReactNode | React.ReactNode[];
    xs?: number;
    md?: number;
    xl?: number;
}
export default function DraggableGrid({ draggableId, index, xs, md, xl, children }: Props): React.JSX.Element;
export {};
