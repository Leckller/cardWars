import { ElementsType } from "../types";

export default function ColorFloor(element: ElementsType.Elements, prefix: string = "bg") {
    switch (element) {
        case 'Universal':
            return prefix + '-purple-500';
        case 'Fogo':
            return prefix + '-red-500';
        case 'Agua':
            return prefix + '-blue-500';
        case 'Ar':
            return prefix + '-gray-500';
        case 'Terra':
            return prefix + '-green-500';
        default:
            throw new Error(`Invalid element type: ${element}`);
    }
}