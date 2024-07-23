import { FloorType } from "../../types";
import Card from "../../types/Card";
import { Elements } from "../../types/Elements";

export default class Agua implements FloorType.default {
    card: Card | undefined;
    element: Elements = 'Agua';
}