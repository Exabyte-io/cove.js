import { DropResult } from "react-beautiful-dnd";
export default function useDndOrderState(initialOrder: string[]): [string[], (order: DropResult) => void];
