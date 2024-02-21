import { useState } from "react";
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
export default function useDndOrderState(initialOrder) {
    const [order, setState] = useState(initialOrder);
    const onDragEnd = (result) => {
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
