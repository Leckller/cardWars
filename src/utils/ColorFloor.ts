import { ElementsType } from "../types";

export default function ColorFloor(element: ElementsType.Elements) {
    switch (element) {
        case 'Universal':
            return 'bg-purple-500';
        case 'Fogo':
            return 'bg-red-500';
        case 'Agua':
            return 'bg-blue-500';
        case 'Ar':
            return 'bg-gray-500';
        case 'Terra':
            return 'bg-green-500';
        default:
            throw new Error(`Invalid element type: ${element}`);
    }
}