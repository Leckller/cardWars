import { ProfileType } from ".";

export default interface battle {
    play(attackProfile: ProfileType.default, defendProfile: ProfileType.default, floorIndex: number): boolean
}