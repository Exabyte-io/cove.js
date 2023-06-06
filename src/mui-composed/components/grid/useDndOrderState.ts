import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";

const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export default function useDndOrderState(
    initialOrder: string[],
): [string[], (order: DropResult) => void] {
    const [order, setState] = useState(initialOrder);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const newSortOrder = reorder(order, result.source.index, result.destination.index);

        setState(newSortOrder);
    };

    return [order, onDragEnd];
}
