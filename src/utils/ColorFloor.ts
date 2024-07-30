import { ElementsType } from "../types";

export default function ColorFloor(element: ElementsType.Elements, prefix: string = "bg") {
    // Por algum motivo se concatenar a string o tailwind não reconhece, então tem q ser desse jeito feio aq 
    if (prefix === "border") {
        switch (element) {
            case 'Universal':
                return `border-purple-500`;
            case 'Fogo':
                return `border-red-500`;
            case 'Agua':
                return `border-blue-500`;
            case 'Ar':
                return `border-gray-500`;
            case 'Terra':
                return `border-green-500`;
            default:
                throw new Error(`Invalid element type: ${element}`);
        }
    }
    switch (element) {
        case 'Universal':
            return `bg-purple-500`;
        case 'Fogo':
            return `bg-red-500`;
        case 'Agua':
            return `bg-blue-500`;
        case 'Ar':
            return `bg-gray-500`;
        case 'Terra':
            return `bg-green-500`;
        default:
            throw new Error(`Invalid element type: ${element}`);
    }
}